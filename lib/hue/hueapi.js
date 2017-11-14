/** Hue API class. Provides functionality to run an light change. */
import { fetchJson } from '../fetch.js';
export class HueApi {
    constructor(bridgeIp, username, config) {
        this.bridgeIp = bridgeIp;
        this.username = username;
        this.config = config;
        this.lights = {};
    }
    setLights(lightsConfig) {
        this.lights = {};
        const url = this.getUrl(HueApiAction.LIGHTS);
        return fetchJson(url).then((response) => {
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
                const light = {
                    index: lightIndex,
                    alias: lightAlias,
                    state: { on: hueLight.state.on },
                };
                this.lights[lightAlias] = light;
            }
            if (this.config.enableDebug) {
                console.debug('Lights are set.', this.lights);
            }
        });
    }
    getUrl(action) {
        return `http://${this.bridgeIp}/api/${this.username}/${action}`;
    }
}
var HueApiAction;
(function (HueApiAction) {
    HueApiAction["LIGHTS"] = "lights";
})(HueApiAction || (HueApiAction = {}));
//# sourceMappingURL=hueapi.js.map