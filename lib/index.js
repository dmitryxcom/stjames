// .js is because TSC is fucking stupid.
import { initMidi } from './midi/midi.js';
import { initHue } from './hue/hue.js';
// DEBUG INFO:
// http://192.168.1.39/debug/clip.html
// usermame: QTXCq7yfWFx36XUo78R5VVD0Cv4wZV3Mliyfnx1L
document.getElementById('initHueBtn').addEventListener('click', () => { initHue(); });
const midiPromise = initMidi();
const huePormise = initHue();
Promise.all([midiPromise, huePormise]).then(([midiApi, hueApi]) => {
    console.log('lets party', midiApi, hueApi);
});
//# sourceMappingURL=index.js.map