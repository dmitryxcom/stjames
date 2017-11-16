define(["require", "exports", "../util/fetch"], function (require, exports, fetch_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const DEFAULT_TRANSITION_TIME = 0;
    class HueApi {
        constructor(bridgeIp, username, config) {
            this.bridgeIp = bridgeIp;
            this.username = username;
            this.config = config;
            this.lights = {};
        }
        setLights(lightsConfig) {
            this.lights = {};
            const url = this.getUrl(HueApiAction.LIGHTS);
            return fetch_1.fetchJson(url).then((response) => {
                if (this.config.enableDebug) {
                    console.debug('Hue lights resource:', response);
                }
                for (let lightIndex of Object.keys(lightsConfig)) {
                    const lightAlias = lightsConfig[lightIndex];
                    const hueLight = response[lightIndex];
                    if (!hueLight) {
                        throw new Error(`Light with index ${lightIndex} is not found.`);
                    }
                    if (!hueLight.state.reachable) {
                        throw new Error(`Light with index ${lightIndex} is unreachable.`);
                    }
                    const hueState = hueLight.state;
                    const lightState = {
                        on: hueState.on,
                        bri: hueState.bri,
                        x: hueState.xy[0],
                        y: hueState.xy[1],
                    };
                    this.lights[lightAlias] = {
                        index: lightIndex,
                        alias: lightAlias,
                        state: lightState,
                    };
                }
                if (this.config.enableDebug) {
                    console.debug('Lights are set.', this.lights);
                }
            });
        }
        changeLights(changeSet) {
            // TODO: add one global promise to queue changesets.
            for (const changeRequest of changeSet) {
                const change = this.diffChange(changeRequest);
                if (!change)
                    continue;
                const lightIndex = this.lights[changeRequest.id].index;
                const url = this.getSetLightStateUrl(lightIndex);
                const bodyJson = JSON.stringify(change);
                const options = {
                    method: 'PUT',
                    body: bodyJson,
                };
                console.log('about to reqeuest', url);
                fetch_1.fetchJson(url, options).then((responseJson) => {
                    this.onStateChangeResponse(responseJson, changeRequest.id);
                    if (this.config.enableDebug) {
                        console.debug(`Light ${changeRequest.id} updated`, changeRequest, this.lights[changeRequest.id].state);
                    }
                });
            }
        }
        diffChange(change) {
            const light = this.lights[change.id];
            if (!light) {
                throw new Error(`Requested change on an unregistered light: ${change.id}`);
            }
            const state = light.state;
            const diffBri = (change.bri != undefined && state.bri != change.bri) ? change.bri : null;
            const diffXy = (change.xy && (state.x != change.xy[0] || state.y != change.xy[1])) ? change.xy : null;
            if (change.on != undefined || !state.on) {
                // New state is not specified or the light is off.
                if (change.on == undefined || (change.on && !state.on)) {
                    // Light is off, turning it on, must force brightness.
                    const bri = diffBri != null ? diffBri : state.bri;
                    const result = HueApi.createChangeRequest(bri, diffXy, change.t);
                    result.on = true;
                    return result;
                }
                if (!change.on && !state.on) {
                    // Light is off, no further changes.
                    console.error(`Requesting to turn off the light that is already off: ${light.alias}`);
                    return null;
                }
                if (!change.on && state.on) {
                    // Requesting to turn off.
                    const t = change.t != undefined ? change.t : DEFAULT_TRANSITION_TIME;
                    return { on: false, transitiontime: t };
                }
            }
            // Light is on, only change state, if different.
            return HueApi.createChangeRequest(diffBri, diffXy, change.t);
        }
        onStateChangeResponse(responseJson, alias) {
            Array.from(responseJson).forEach((item) => {
                if (!item.success) {
                    const reason = item.error ? item.error.description : 'unknown reason';
                    console.error(`Error changing the light state: ${reason}`);
                }
                const resource = Object.keys(item.success)[0];
                const rawValue = item.success[resource];
                const state = this.lights[alias].state;
                if (resource.endsWith(('on'))) {
                    state.on = rawValue;
                }
                else if (resource.endsWith('bri')) {
                    state.bri = rawValue;
                }
                else if (resource.endsWith('xy')) {
                    state.x = rawValue[0];
                    state.y = rawValue[1];
                }
            });
        }
        getUrl(action) {
            return `http://${this.bridgeIp}/api/${this.username}/${action}`;
        }
        getSetLightStateUrl(index) {
            let url = this.getUrl(HueApiAction.LIGHTS);
            return `${url}/${index}/state`;
        }
        static createChangeRequest(diffBri, diffXy, t) {
            if (diffBri == null && diffXy == null) {
                return null;
            }
            const result = {};
            if (diffBri != null) {
                result.bri = diffBri;
            }
            if (diffXy) {
                result.xy = diffXy;
            }
            result.transitiontime = t != undefined ? t : DEFAULT_TRANSITION_TIME;
            return result;
        }
    }
    exports.HueApi = HueApi;
    var HueApiAction;
    (function (HueApiAction) {
        HueApiAction["LIGHTS"] = "lights";
    })(HueApiAction || (HueApiAction = {}));
});
//# sourceMappingURL=hueapi.js.map