import {Score} from './show/score';
import {L} from './show/lightsconfig';

const m1: Score = [
  {
    note: '4Eb',
    on: [
      {id: L.BOOK, xy: [0.1541, 0.0808], bri: 38},
    ],
  },
  {
    note: '4G',
    on: [
      {id: L.UP, xy: [0.3019, 0.3067], bri: 165},
      {id: L.DOWN, xy: [0.1824, 0.447], bri: 254},
    ],
  },
  {
    note: '4Eb',
    on: [
      {id: L.BOOK, on: false},
      {id: L.UP, on: false, t: 5},
      {id: L.DOWN, on: false, t: 5},
    ],
    off: [
      {id: L.BOOK, on: true},
      {id: L.UP, on: true, t: 5},
      {id: L.DOWN, on: true, t: 5},
    ],
  }
];

const m2: Score = [
  {
    note: '4D',
    on: [
      {id: L.BOOK, xy: [0.1, 0.3], bri: 254},
    ],
  },
];

export const score: Score = [...m1, ...m2];