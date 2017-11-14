/** @fileoverview Hue bridge API. see https://developers.meethue.com/documentation/getting-started */

import {fetchJson} from '../fetch.js';
import {HueRequestAuthAction, HueResponseAuth, HueResponseUpnp} from './typings';
import {getApiUrl, HueApiAction} from './huehelpers.js';
import {HUE_BRIDGE_IP, HUE_UPNP_DISCOVERY_SERVER, HUE_APP_DEVICE_TYPE as APP_DEVICE_TYPE, HUE_LOCAL_STORAGE_PREFIX as LOCAL_STORAGE_PREFIX, HUE_ENABLE_DEBUG as ENABLE_DEBUG} from '../config.js'
import {HueApi} from './hueapi.js';




export function initHue(): Promise<HueApi> {
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
      return new HueApi(brdigeIp, username);
    })
}


function getBridgeIp(): Promise<string> {
  if (HUE_BRIDGE_IP) {
    return Promise.resolve(HUE_BRIDGE_IP);
  }
  return fetchJson<HueResponseUpnp>(HUE_UPNP_DISCOVERY_SERVER)
    .then((responseJson) => {
      if (ENABLE_DEBUG) {
        console.debug('HUE N-UPnP response', responseJson);
      }
      return responseJson[0].internalipaddress;
    });
}

function getHueUsername(bridgeIp: string): Promise<string> {
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


function authenticateUser(bridgeIp: string): Promise<string> {
  const authUrl = getApiUrl(bridgeIp, HueApiAction.AUTH);
  const body: HueRequestAuthAction = {devicetype: APP_DEVICE_TYPE};
  const bodyJson = JSON.stringify(body);
  const options: RequestInit = {
    method: 'POST',
    body: bodyJson,
  };
  return fetchJson<HueResponseAuth>(authUrl, options)
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