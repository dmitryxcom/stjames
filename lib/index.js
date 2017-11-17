define(["require", "exports", "./midi/midi", "./hue/hue", "./show/showdirector"], function (require, exports, midi_1, hue_1, showdirector_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // DEBUG INFO:
    // http://192.168.1.39/debug/clip.html
    // usermame: QTXCq7yfWFx36XUo78R5VVD0Cv4wZV3Mliyfnx1L
    document.getElementById('initHueBtn').addEventListener('click', () => { hue_1.initHue(); });
    const midiPromise = midi_1.initMidi();
    const huePormise = hue_1.initHue();
    Promise.all([midiPromise, huePormise]).then(([midiApi, hueApi]) => {
        const director = new showdirector_1.ShowDirector(midiApi, hueApi);
        director.start();
    });
});
//# sourceMappingURL=index.js.map