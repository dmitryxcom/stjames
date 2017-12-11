// MIDI config
export const MIDI_INPUT_PORT_ID = '';
export const MIDI_RANGE = [0x15, 0x6c];
export const DEBUG_MIDI_DATA = false;

// Hue config.
export const HUE_BRIDGE_IP = ''; // If empty, N-UPnP discovery will be used, if UPnP fails, provide local IP.
export const HUE_UPNP_DISCOVERY_SERVER = 'https://www.meethue.com/api/nupnp';
export const HUE_APP_DEVICE_TYPE = 'stjames#web';
export const HUE_LOCAL_STORAGE_PREFIX = 'stJames-hue';
export const HUE_ENABLE_DEBUG = false;

// Show config.
export const SHOW_ENABLE_DEBUG = false;
export const SHOW_RESET_ON_PITCH = 21; //sour 0A