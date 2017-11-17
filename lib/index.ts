// .js is because TSC is fucking stupid.
import {initMidi} from './midi/midi';
import {initHue} from './hue/hue';
import {LightChangeSet} from './hue/hueapi';
import {NoteState} from './midi/midiapi';

// DEBUG INFO:
// http://192.168.1.39/debug/clip.html
// usermame: QTXCq7yfWFx36XUo78R5VVD0Cv4wZV3Mliyfnx1L


document.getElementById('initHueBtn').addEventListener('click', () => {initHue()});

const midiPromise = initMidi();
const huePormise = initHue();

enum L  {
  BOOK = 'book',
  UP = 'ltop',
  DOWN = 'lbot',
  SFA = 'sofa',
  SFL = 'sofal',
  SFR = 'sofar',
  PL1 = 'pl1',
  PL2 = 'pl2',
  PL3 = 'pl3',
  PR1 = 'pr1',
  PR2 = 'pr2',
  PR3 = 'pr3',
}

const lightsConfig = {
  '6': L.BOOK,
  '5': L.UP,
  '8': L.DOWN,
  '9': L.SFA,
  '19': L.SFL,
  '20': L.SFR,
  '17': L.PL1,
  '15': L.PL2,
  '18': L.PL3,
  '13': L.PR1,
  '16': L.PR2,
  '14': L.PR3,
};

const lightChanges: Array<LightChangeSet> = [
  [
    {id: L.BOOK, on: true, xy: [0.1541, 0.0808], bri: 38, t: 0},
  ],
  [
    {id: L.UP, on: true, xy: [0.3019, 0.3067], bri: 165, t: 0},
    {id: L.DOWN, on: true, xy: [0.1824, 0.447], bri: 254, t: 0},
  ],
  [
    {id: L.BOOK, on: false},
    {id: L.UP, on: false, t: 5},
    {id: L.DOWN, on: false, t: 5},
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
      if (n.state == NoteState.ON) {
        const change = changeGen.next().value;
        hueApi.changeLights(change);
      }
    });
  });
});