/**
 * @fileoverview Fetch wrapper that checks for okayness and rejects if not okay. If the check passes,
 * converts the result to JSON and that would be the resolve value.
 */
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function fetchJson(input, init) {
        return fetch(input, init)
            .then((response) => {
            if (response.ok)
                return response.json();
            throw new Error(`Error while fetching: ${response.status}`);
        });
    }
    exports.fetchJson = fetchJson;
});
//# sourceMappingURL=fetch.js.map