define(["require", "exports", "../midi/midiapi", "./config"], function (require, exports, midiapi_1, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ShowDirector {
        constructor(midi, hue) {
            this.midi = midi;
            this.hue = hue;
            this.changeGen = changesGenerator();
        }
        start() {
            this.hue.setLights(config_1.lightsConfig)
                .then(() => {
                this.initiliazeMidiListener();
            });
        }
        initiliazeMidiListener() {
            this.midi.addListener((note) => { this.onMidiNote(note); });
        }
        onMidiNote(note) {
            if (note.state == midiapi_1.NoteState.ON) {
                const change = this.changeGen.next().value;
                this.hue.changeLights(change);
            }
        }
    }
    exports.ShowDirector = ShowDirector;
    const score = [
        [
            { id: config_1.L.BOOK, on: true, xy: [0.1541, 0.0808], bri: 38, t: 0 },
        ],
        [
            { id: config_1.L.UP, on: true, xy: [0.3019, 0.3067], bri: 165, t: 0 },
            { id: config_1.L.DOWN, on: true, xy: [0.1824, 0.447], bri: 254, t: 0 },
        ],
        [
            { id: config_1.L.BOOK, on: false },
            { id: config_1.L.UP, on: false, t: 5 },
            { id: config_1.L.DOWN, on: false, t: 5 },
        ],
    ];
    function* changesGenerator() {
        let i = 0;
        while (true) {
            const change = score[i];
            if (++i == score.length) {
                i = 0;
            }
            yield change;
        }
    }
});
//# sourceMappingURL=showdirector.js.map