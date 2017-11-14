export var HueApiAction;
(function (HueApiAction) {
    HueApiAction["AUTH"] = "api";
    HueApiAction["LIGHTS"] = "lights";
})(HueApiAction || (HueApiAction = {}));
export function getApiUrl(bridgeIp, action) {
    return `http://${bridgeIp}/${action}`;
}
//# sourceMappingURL=huehelpers.js.map