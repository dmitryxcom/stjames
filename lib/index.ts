// .js is because TSC is fucking stupid.
import {initMidi} from './midi/midi';
import {initHue} from './hue/hue';
import {ShowDirector} from './show/showdirector';

// DEBUG INFO:
// http://192.168.1.39/debug/clip.html
// usermame: QTXCq7yfWFx36XUo78R5VVD0Cv4wZV3Mliyfnx1L


document.getElementById('initHueBtn').addEventListener('click', () => {initHue()});

const midiPromise = initMidi();
const huePormise = initHue();

Promise.all([midiPromise, huePormise]).then(([midiApi, hueApi]) => {
  const director = new ShowDirector(midiApi, hueApi);
  director.start();
});