export interface HueResponseUpnp {
  [0]: {id: string, internalipaddress: string};
}


export interface HueResponseAuth {
  [0]: {
    success?: {username: string};
    error?: {
      type: number;
      address: string;
      description: string;
    };
  };
}


export interface HueResponseLights {
  [index: string]: HueResponseLight;
}

export interface HueResponseLight {
  name: string;
  uniqueid: string;
  state: HueResponseLightsState;
}


export interface HueResponseLightsState {
  on: boolean;
  bri: number; // 0 - 254
  hue: number; // 0 (red) - 25500 (green) - 46920 (blue) - 65535 (red)
  sat: number; // 0 - 254
  xy: [number, number]; // CIE color space x, y.
  ct: number; // The Mired Color temperature.
  alert: 'none' | 'select' | 'lsecect';
  effect: 'none' | 'colorloop';
  colormode: 'hs' | 'xy' | 'ct';
  reachable: boolean;
}

export type HueResponseLightStateChange = Array<HueResponseLightStateChangeItem>;

export interface HueResponseLightStateChangeItem {
  success?: {
    [index: string]: any;
  };
  error?: {
    type: number;
    address: string;
    description: string;
  };
}


export interface HueRequestAuthAction {
  devicetype: string;
}

export interface HueRequestLightState {
  on?: boolean;
  bri?: number; // 0 - 254
  hue?: number; // 0 (red) - 25500 (green) - 46920 (blue) - 65535 (red)
  sat?: number; // 0 - 254
  xy?: [number, number]; // CIE color space x, y.
  ct?: number; // The Mired Color temperature.
  alert?: 'none' | 'select' | 'lsecect';
  effect?: 'none' | 'colorloop';
  transitiontime?: number;
}