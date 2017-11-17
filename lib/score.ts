import {Score} from './show/score';
import {L} from './show/lightsconfig';

const m1: Score = [
  {
    note: '4Eb',
    on: [
      {id: L.BOOK, on: true, bri: 254},
    ],
  },
  {
    note: '4G',
    on: [
      {id: L.UP, on: true, bri: 254},
    ],
  },
  {
    note: '4Eb',
    on: [
      {id: L.DOWN, on: true, bri: 254},
    ],
  }
];


const m2: Score = [
  {
    note: '4D',
    on: [
      {id: L.PL1, on: true, bri: 254},
    ],
  },
  {
    note: '4G',
    on: [
      {id: L.PL2, on: true, bri: 254},
    ],
  },
  {
    note: '4D',
    on: [
      {id: L.PL3, on: true, bri: 254},
    ],
  },
];

const m3: Score = [
  {
    note: '4C',
    on: [
      {id: L.PR1, on: true, bri: 254},
    ],
  },
  {
    note: '4Eb',
    on: [
      {id: L.PR2, on: true, bri: 254},
    ],
  },
  {
    note: '4F',
    on: [
      {id: L.PR3, on: true, bri: 254},
    ],
  },
];

const m4: Score = [
  {
    note: '4G',
    on: [
      {id: L.SFA, on: true, bri: 254},
      {id: L.BOOK, on: false},
    ],
  },
  {
    note: '4C',
    on: [
      {id: L.SFL, on: true, bri: 254},
      {id: L.UP, on: false},
    ],
  },
  {
    note: '4Eb',
    on: [
      {id: L.SFR, on: true, bri: 254},
      {id: L.DOWN, on: false},
    ],
  },
];

export const score: Score = [...m1, ...m2,  ...m3, ...m4];