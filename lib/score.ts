import {Score} from './show/score';
import {L} from './show/lightsconfig';

const m1: Score = [
  {
    note: '4Eb',
    on: [
      {id: L.BOOK, on: true, xy: [0.3136, 0.33], bri: 254},
      {id: L.BDR, on: true, xy: [0.3136, 0.33], bri: 254},
    ],
  },
  {
    note: '4G',
    on: [
      {id: L.TVT, on: true, xy: [0.6866, 0.3059], bri: 254, t: 600},
      {id: L.TVS, on: true, xy: [0.2352, 0.2545], bri: 254, t: 600},
    ],
  },
  {
    note: '4Eb',
    on: [
      {id: L.PL3, on: true, xy: [0.6323, 0.321], bri: 63},
      {id: L.PR3, on: true, xy: [0.6323, 0.321], bri: 63},
    ],
  }
];


const m2: Score = [
  {
    note: '4D',
    on: [
      {id: L.PL3, on: false},
      {id: L.PR3, on: false},
      {id: L.PR2, on: true, xy: [0.3137, 0.3289], bri: 165},
      {id: L.PL2, on: true, xy: [0.3137, 0.3289], bri: 165},
    ],
  },
  {
    note: '4G',
    on: [
      {id: L.PL3, on: true},
      {id: L.PR3, on: true},
      {id: L.PR1, on: true, xy: [0.5936, 0.3818], bri: 178},
      {id: L.PL1, on: true, xy: [0.5936, 0.3818], bri: 178},
      {id: L.PR2, on: true, xy: [0.6679, 0.2968], bri: 127},
      {id: L.PL2, on: true, xy: [0.6679, 0.2968], bri: 127},
    ],
  },
  {
    note: '4D',
    on: [
      {id: L.SFL, on: true, xy: [0.15, 0.0843], bri: 254, t: 3},
    ],
  },
];

const m3: Score = [
  {
    note: '4C',
    on: [
      {id: L.SFR, on: true, xy: [0.15, 0.0843], bri: 254, t: 3},
    ],
  },
  {
    note: '4Eb',
    on: [
      {id: L.SFA, on: true, xy: [0.6775, 0.2891], bri: 254, t: 3},
    ],
  },
  {
    note: '4F',
    on: [
      {id: L.SFA, on: false, t: 5},
      {id: L.SFR, on: false, t: 5},
      {id: L.SFL, on: false, t: 5},
    ],
  },
];

const m4: Score = [
  {
    note: '4G',
    on: [
      {id: L.PL1, on: false, t: 10},
      {id: L.PR1, on: false, t: 10},
      {id: L.PL2, on: false, t: 10},
      {id: L.PR2, on: false, t: 10},
      {id: L.PL3, on: false, t: 10},
      {id: L.PR3, on: false, t: 10},
    ],
  },
  {
    note: '4C',
    on: [
      {id: L.PR2, on: true, xy: [0.154, 0.0806], bri: 254},
      {id: L.PL2, on: true, xy: [0.154, 0.0806], bri: 254},
    ],
  },
  {
    note: '4Eb',
    on: [
      {id: L.DOWN, on: true, xy: [0.2758, 0.1328], bri: 191},
    ],
  },
];

const m5: Score = [
  {
    note: '4C',
    on: [
       {id: L.UP, on: true, xy: [0.4118, 0.185], bri: 254, t: 5},
    ],
  },
  {
    note: '4G',
    on: [
      {id: L.PR3, on: true, xy: [0.6565, 0.3316], bri: 254},
      {id: L.PL3, on: true, xy: [0.6565, 0.3316], bri: 254},
    ],
  },
  {
    note: '3B',
    on: [
      {id: L.PR1, on: true, xy: [0.2535, 0.1246], bri: 254},
      {id: L.PL1, on: true, xy: [0.2535, 0.1246], bri: 254},
    ],
  },
  {
    note: '4G',
    on: [
      {id: L.SFA, on: true, xy: [0.6864, 0.2958], bri: 254},
    ],
  },
];

const m6: Score = [
  {
    note: '4Eb',
    on: [
      {id: L.SFL, on: true, xy: [0.1393, 0.0813], bri: 254},
    ],
  },
  {
    note: '4C',
    on: [
      {id: L.SFR, on: true, xy: [0.1393, 0.0813], bri: 254},
    ],
  },
  {
    note: '3D',
    on: [
      {id: L.BDR, xy: [0.139, 0.081], bri: 254, t: 3},
    ],
  },
  {
    note: '3Eb',
    on: [
      {id: L.BOOK, xy: [0.6638, 0.2824], bri: 254, t: 5},
    ],
  },
  {
    note: '4C',
    on: [
      //{id: L.PR2, on: true, xy: [0.154, 0.0806], bri: 254},
    ],
  },
  {
    note: '4Eb',
    on: [
      //{id: L.DOWN, on: true, xy: [0.2758, 0.1328], bri: 191},
    ],
  },
];

export const score: Score = [...m1, ...m2,  ...m3, ...m4, ...m5, ...m6];