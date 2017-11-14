export enum HueApiAction {
  AUTH = 'api',
  LIGHTS = 'lights',
}

export function getApiUrl(bridgeIp: string, action: HueApiAction) {
  return `http://${bridgeIp}/${action}`;
}