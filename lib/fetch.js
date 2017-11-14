/**
 * @fileoverview Fetch wrapper that checks for okayness and rejects if not okay. If the check passes,
 * converts the result to JSON and that would be the resolve value.
 */
export function fetchJson(input, init) {
    return fetch(input, init)
        .then((response) => {
        if (response.ok)
            return response.json();
        throw new Error(`Error while fetching: ${response.status}`);
    });
}
//# sourceMappingURL=fetch.js.map