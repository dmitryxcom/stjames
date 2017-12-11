import {initMidi} from './midi/midi';
import {initHue} from './hue/hue';
import {ShowDirector} from './show/showdirector';
import {score} from './score/score';
import {getRequiedElement} from './util/dom';


getRequiedElement('initHueBtn').addEventListener('click', () => {initHue()});


const midiPromise = initMidi();
const huePormise = initHue();

Promise.all([midiPromise, huePormise]).then(([midiApi, hueApi]) => {
  const director = new ShowDirector(midiApi, hueApi, score);
  director.start();
  getRequiedElement('resetShowBtn').addEventListener('click', () => {
    director.reset()
  });
});