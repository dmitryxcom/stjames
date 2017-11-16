define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // MIDI config
    exports.MIDI_INPUT_PORT_ID = '';
    exports.MIDI_RANGE = [0x15, 0x6c];
    exports.DEBUG_MIDI_DATA = false;
    // Config.
    exports.HUE_BRIDGE_IP = ''; // If empty, N-UPnP discovery will be used.
    exports.HUE_UPNP_DISCOVERY_SERVER = 'https://www.meethue.com/api/nupnp';
    exports.HUE_APP_DEVICE_TYPE = 'stjames#web';
    exports.HUE_LOCAL_STORAGE_PREFIX = 'stJames-hue';
    exports.HUE_ENABLE_DEBUG = true;
});
//# sourceMappingURL=config.js.map