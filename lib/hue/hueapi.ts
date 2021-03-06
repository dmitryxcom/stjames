/** Hue API class. Provides functionality to run an light change. */
import {fetchJson} from '../util/fetch';
import {HueRequestLightState, HueResponseLights, HueResponseLightStateChange} from './typings';


export type LightsConfig  = {
  // Map hue indices to aliases;
  [index: string]: string;
}


export interface HueApiConfig {
  enableDebug?: boolean;
}


export type LightChangeSet = LightChange[];


export interface LightChange {
  id: string,
  on?: boolean;
  bri?: number;
  xy?: [number, number];
  t?: number;
}

const DEFAULT_TRANSITION_TIME = 0;


export class HueApi {
  private lights: HueApiLights = {};

  constructor(private bridgeIp: string, private username: string, private config: HueApiConfig) {}

  setLights(lightsConfig: LightsConfig): Promise<void> {
    this.lights = {};
    const url = this.getUrl(HueApiAction.LIGHTS);
    return fetchJson<HueResponseLights>(url).then((response) => {
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
        const lightState: HueApiLightState = {
          on: hueState.on,
          bri: hueState.bri,
          x: hueState.xy[0],
          y: hueState.xy[1],
        };
        this.lights[lightAlias] = {
          index: lightIndex,
          alias: lightAlias,
          state: lightState,
          changePromise: Promise.resolve(),
        };
      }
      if (this.config.enableDebug) {
        console.debug('Lights are set.', this.lights);
      }
    });
  }

  changeLights(changeSet: LightChangeSet) {
    for (const changeRequest of changeSet) {
      const light = this.lights[changeRequest.id];
      light.changePromise = light.changePromise.then(() => this.changeLight(changeRequest));
    }
  }

  allOff() {
    const changeSet: LightChangeSet = [];
    for (const alias of Object.keys(this.lights)) {
      if (!this.lights[alias].state.on) {
        continue;
      }
      const change: LightChange = {id: alias, on: false};
      changeSet.push(change);
    }
    this.changeLights(changeSet);
  }

  private diffChange(change: LightChange): HueRequestLightState|null {
    const light = this.lights[change.id];
    if (!light) {
      throw new Error(`Requested change on an unregistered light: ${change.id}`);
    }
    const state = light.state;
    const diffBri = (change.bri != undefined && state.bri != change.bri) ?  change.bri : null;
    const diffXy = (change.xy && (state.x != change.xy[0] || state.y != change.xy[1])) ? change.xy: null;
    if (change.on != undefined || !state.on) {
      // New state is not specified or the light is off.
      if (change.on == undefined || (change.on && !state.on)) {
        // Light is off, turning it on, must force brightness.
        const bri = diffBri != null ? diffBri : state.bri;
        const result = HueApi.createChangeRequest(bri, diffXy, change.t);
        result!.on = true;
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
        return {on: false, transitiontime: t};
      }
    }
    // Light is on, only change state, if different.
    return HueApi.createChangeRequest(diffBri, diffXy, change.t);
  }

  private changeLight(changeRequest: LightChange): Promise<void> {
    const change = this.diffChange(changeRequest);
    if (!change) {
      return Promise.resolve();
    }
    const lightIndex = this.lights[changeRequest.id].index;
    const url = this.getSetLightStateUrl(lightIndex);
    const bodyJson = JSON.stringify(change);
    const options: RequestInit = {
      method: 'PUT',
      body: bodyJson,
    };
    return fetchJson<HueResponseLightStateChange>(url, options).then((responseJson) => {
      this.onStateChangeResponse(responseJson, changeRequest.id);
      if (this.config.enableDebug) {
        console.debug(`Light ${changeRequest.id} updated`, changeRequest, this.lights[changeRequest.id].state);
      }
    });
  }

  private onStateChangeResponse(responseJson: HueResponseLightStateChange, alias: string) {
    Array.from(responseJson).forEach((item) => {
      if (!item.success) {
        const reason = item.error ? item.error.description : 'unknown reason';
        console.error(`Error changing the light state: ${reason}`);
        return;
      }
      const resource = Object.keys(item.success)[0];
      const rawValue = item.success[resource];
      const state = this.lights[alias].state;
      if (resource.endsWith(('on'))) {
        state.on = (rawValue as boolean);
      } else if (resource.endsWith('bri')) {
        state.bri = (rawValue as number);
      } else if (resource.endsWith('xy')) {
        state.x = (rawValue as [number, number])[0];
        state.y = (rawValue as [number, number])[1];
      }
    });
  }

  private getUrl(action: HueApiAction) {
    return `http://${this.bridgeIp}/api/${this.username}/${action}`;
  }

  private getSetLightStateUrl(index: string) {
    let url = this.getUrl(HueApiAction.LIGHTS);
    return `${url}/${index}/state`;
  }

  private static createChangeRequest(
      diffBri: number|null, diffXy: [number, number]|null, t?: number): HueRequestLightState|null {
    if (diffBri == null && diffXy == null) {
      return null;
    }
    const result: HueRequestLightState = {};
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

interface HueApiLights {
  [alias: string]: HueApiLight;
}

interface HueApiLight {
  index: string;
  alias: string;
  state: HueApiLightState;
  changePromise: Promise<void>;
}

interface HueApiLightState {
  on: boolean;
  bri: number;
  x: number;
  y: number;
}

enum HueApiAction {
  LIGHTS = 'lights',
}