define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var L;
    (function (L) {
        L["BOOK"] = "book";
        L["UP"] = "ltop";
        L["DOWN"] = "lbot";
        L["SFA"] = "sofa";
        L["SFL"] = "sofal";
        L["SFR"] = "sofar";
        L["PL1"] = "pl1";
        L["PL2"] = "pl2";
        L["PL3"] = "pl3";
        L["PR1"] = "pr1";
        L["PR2"] = "pr2";
        L["PR3"] = "pr3";
    })(L = exports.L || (exports.L = {}));
    exports.lightsConfig = {
        '6': L.BOOK,
        '5': L.UP,
        '8': L.DOWN,
        '9': L.SFA,
        '19': L.SFL,
        '20': L.SFR,
        '17': L.PL1,
        '15': L.PL2,
        '18': L.PL3,
        '13': L.PR1,
        '16': L.PR2,
        '14': L.PR3,
    };
});
//# sourceMappingURL=config.js.map