/** @fileoverview Hue bridge API. see https://developers.meethue.com/documentation/getting-started */
define(["require", "exports", "../util/fetch", "../config", "./hueapi"], function (require, exports, fetch_1, config_1, hueapi_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function initHue() {
        return getBridgeIp()
            .then((bridgeIp) => {
            if (config_1.HUE_ENABLE_DEBUG) {
                console.debug(`Hue bridge IP resolved to ${bridgeIp}`);
            }
            return bridgeIp;
        })
            .then((bridgeIp) => {
            return Promise.all([Promise.resolve(bridgeIp), getHueUsername(bridgeIp)]);
        })
            .then(([brdigeIp, username]) => {
            console.log(`Hue is ready: ${username}@${brdigeIp}`);
            return new hueapi_1.HueApi(brdigeIp, username, { enableDebug: config_1.HUE_ENABLE_DEBUG });
        });
    }
    exports.initHue = initHue;
    function getBridgeIp() {
        if (config_1.HUE_BRIDGE_IP) {
            return Promise.resolve(config_1.HUE_BRIDGE_IP);
        }
        return fetch_1.fetchJson(config_1.HUE_UPNP_DISCOVERY_SERVER)
            .then((responseJson) => {
            if (config_1.HUE_ENABLE_DEBUG) {
                console.debug('HUE N-UPnP response', responseJson);
            }
            return responseJson[0].internalipaddress;
        });
    }
    function getHueUsername(bridgeIp) {
        const localStorageKey = `${config_1.HUE_LOCAL_STORAGE_PREFIX}-${bridgeIp}-username`;
        const username = window.localStorage.getItem(localStorageKey);
        if (username) {
            if (config_1.HUE_ENABLE_DEBUG) {
                console.debug(`Cached hue username available: ${username}`);
            }
            return Promise.resolve(username);
        }
        return authenticateUser(bridgeIp).then((username) => {
            window.localStorage.setItem(localStorageKey, username);
            return username;
        });
    }
    function authenticateUser(bridgeIp) {
        const authUrl = `http://${bridgeIp}/auth`;
        const body = { devicetype: config_1.HUE_APP_DEVICE_TYPE };
        const bodyJson = JSON.stringify(body);
        const options = {
            method: 'POST',
            body: bodyJson,
        };
        return fetch_1.fetchJson(authUrl, options)
            .then((responseJson) => {
            if (config_1.HUE_ENABLE_DEBUG) {
                console.debug('Hue brdige auth response', responseJson);
            }
            const response = responseJson[0];
            if (response.error) {
                throw new Error(`Hue bridge auth failed: ${response.error.description}.`);
            }
            if (!response.success) {
                throw new Error(`Hue brdige auth failed for unknown reason.`);
            }
            return responseJson[0].success.username;
        });
    }
});
//# sourceMappingURL=hue.js.map