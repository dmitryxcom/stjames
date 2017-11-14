export interface HueResponseUpnp {
  [0]: {id: string, internalipaddress: string};
}


export interface HueResponseAuth {
  [0]: {
    success?: {username: string},
    error?: {
      type: number,
      address: string,
      description: string,
    },
  };
}


export interface HueResponseLights {}


export interface HueRequestAuthAction {
  devicetype: string;
}