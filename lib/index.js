// .js is because TSC is fucking stupid.
import { initMidi } from './midi/midi.js';
import { initHue } from './hue/hue.js';
// DEBUG INFO:
// http://192.168.1.39/debug/clip.html
// usermame: QTXCq7yfWFx36XUo78R5VVD0Cv4wZV3Mliyfnx1L
document.getElementById('initHueBtn').addEventListener('click', () => { initHue(); });
const midiPromise = initMidi();
const huePormise = initHue();
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
//# sourceMappingURL=index.js.map