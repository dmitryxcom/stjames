define(["require", "exports", "./midi/midi", "./hue/hue", "./midi/midiapi"], function (require, exports, midi_1, hue_1, midiapi_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // DEBUG INFO:
    // http://192.168.1.39/debug/clip.html
    // usermame: QTXCq7yfWFx36XUo78R5VVD0Cv4wZV3Mliyfnx1L
    document.getElementById('initHueBtn').addEventListener('click', () => { hue_1.initHue(); });
    const midiPromise = midi_1.initMidi();
    const huePormise = hue_1.initHue();
    var L;
    (function (L) {
        L["BOOK"] = "book";
        L["UP"] = "ltop";
        L["DOWN"] = "lbot";
    })(L || (L = {}));
    const lightsConfig = {
        '6': L.BOOK,
        '5': L.UP,
        '8': L.DOWN,
        '9': 'sofa strip',
        '13': 'piano r1',
        '14': 'piano r3',
        '15': 'piano l2',
        '16': 'piano r2',
        '17': 'piano l1',
        '18': 'piano l3',
        '19': 'sofa bl',
        '20': 'sofa br',
    };
    const lightChanges = [
        [
            { id: L.BOOK, on: true, xy: [0.1541, 0.0808], bri: 38, t: 0 },
        ],
        [
            { id: L.UP, on: true, xy: [0.3019, 0.3067], bri: 165, t: 10 },
            { id: L.DOWN, on: true, xy: [0.1824, 0.447], bri: 254, t: 5 },
        ],
        [
            { id: L.BOOK, on: false },
            { id: L.UP, on: false, t: 5 },
            { id: L.DOWN, on: false, t: 5 },
        ],
    ];
    function* changesGenerator() {
        let i = 0;
        while (true) {
            const change = lightChanges[i];
            if (++i == lightChanges.length) {
                i = 0;
            }
            yield change;
        }
    }
    Promise.all([midiPromise, huePormise]).then(([midiApi, hueApi]) => {
        const changeGen = changesGenerator();
        hueApi.setLights(lightsConfig).then(() => {
            midiApi.addListener((n) => {
                if (n.state == midiapi_1.NoteState.ON) {
                    const change = changeGen.next().value;
                    console.log('next change', change.length);
                    hueApi.changeLights(change);
                }
            });
        });
    });
});
//# sourceMappingURL=index.js.map