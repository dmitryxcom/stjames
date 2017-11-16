/** Hue API class. Provides functionality to run an light change. */
import {fetchJson} from '../util/fetch';
import {HueResponseLights} from './typings';

export interface LightsConfig {
  // Map hue indices to aliases;
  [index: string]: string;
}


export interface HueApiConfig {
  enableDebug?: boolean;
}

export class HueApi {
  private lights: HueApiLights = {};

  constructor(private bridgeIp: string, private username: string, private config?: HueApiConfig) {}

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
        const light: HueApiLight = {
          index: lightIndex,
          alias: lightAlias,
          state: {on: hueLight.state.on},
        };
        this.lights[lightAlias] = light;
      }
      if (this.config.enableDebug) {
        console.debug('Lights are set.', this.lights)
      }
    });
  }

  private getUrl(action: HueApiAction) {
    return `http://${this.bridgeIp}/api/${this.username}/${action}`;
  }
}

interface HueApiLights {
  [alias: string]: HueApiLight;
}

interface HueApiLight {
  index: string;
  alias: string;
  state: HueApiLightState;
}

interface HueApiLightState {
  on: boolean;
}

enum HueApiAction {
  LIGHTS = 'lights',
}