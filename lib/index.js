define(["require", "exports", "./midi/midi", "./hue/hue"], function (require, exports, midi_1, hue_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // DEBUG INFO:
    // http://192.168.1.39/debug/clip.html
    // usermame: QTXCq7yfWFx36XUo78R5VVD0Cv4wZV3Mliyfnx1L
    document.getElementById('initHueBtn').addEventListener('click', () => { hue_1.initHue(); });
    const midiPromise = midi_1.initMidi();
    const huePormise = hue_1.initHue();
    const lightsConfig = {
        '5': 'living far strip',
        '6': 'books',
        '8': 'living far under strip',
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
    Promise.all([midiPromise, huePormise]).then(([midiApi, hueApi]) => {
        midiApi.addListener((n) => {
            console.log(n.codes[0]);
        });
        hueApi.setLights(lightsConfig).then(party);
    });
    function party() {
        console.log('okay, now let\'s party');
    }
});
//# sourceMappingURL=index.js.map