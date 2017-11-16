define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HueApiAction;
    (function (HueApiAction) {
        HueApiAction["AUTH"] = "api";
        HueApiAction["LIGHTS"] = "lights";
    })(HueApiAction = exports.HueApiAction || (exports.HueApiAction = {}));
    function getApiUrl(bridgeIp, action) {
        return `http://${bridgeIp}/${action}`;
    }
    exports.getApiUrl = getApiUrl;
});
//# sourceMappingURL=huehelpers.js.map