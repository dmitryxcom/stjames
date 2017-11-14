/** @fileoverview Hue bridge API. see https://developers.meethue.com/documentation/getting-started */
import { fetchJson } from '../fetch.js';
import { HUE_BRIDGE_IP, HUE_UPNP_DISCOVERY_SERVER, HUE_APP_DEVICE_TYPE as APP_DEVICE_TYPE, HUE_LOCAL_STORAGE_PREFIX as LOCAL_STORAGE_PREFIX, HUE_ENABLE_DEBUG as ENABLE_DEBUG } from '../config.js';
import { HueApi } from './hueapi.js';
export function initHue() {
    return getBridgeIp()
        .then((bridgeIp) => {
        if (ENABLE_DEBUG) {
            console.debug(`Hue bridge IP resolved to ${bridgeIp}`);
        }
        return bridgeIp;
    })
        .then((bridgeIp) => {
        return Promise.all([Promise.resolve(bridgeIp), getHueUsername(bridgeIp)]);
    })
        .then(([brdigeIp, username]) => {
        console.log(`Hue is ready: ${username}@${brdigeIp}`);
        return new HueApi(brdigeIp, username, { enableDebug: ENABLE_DEBUG });
    });
}
function getBridgeIp() {
    if (HUE_BRIDGE_IP) {
        return Promise.resolve(HUE_BRIDGE_IP);
    }
    return fetchJson(HUE_UPNP_DISCOVERY_SERVER)
        .then((responseJson) => {
        if (ENABLE_DEBUG) {
            console.debug('HUE N-UPnP response', responseJson);
        }
        return responseJson[0].internalipaddress;
    });
}
function getHueUsername(bridgeIp) {
    const localStorageKey = `${LOCAL_STORAGE_PREFIX}-${bridgeIp}-username`;
    const username = window.localStorage.getItem(localStorageKey);
    if (username) {
        if (ENABLE_DEBUG) {
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
    const body = { devicetype: APP_DEVICE_TYPE };
    const bodyJson = JSON.stringify(body);
    const options = {
        method: 'POST',
        body: bodyJson,
    };
    return fetchJson(authUrl, options)
        .then((responseJson) => {
        if (ENABLE_DEBUG) {
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
//# sourceMappingURL=hue.js.map