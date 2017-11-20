import {Score} from './show/score';
import {L} from './show/lightsconfig';


interface Color {
  xy: [number, number],
  bri: number,
}


const C = {
  WHITE: {xy: [0.3136, 0.33], bri: 254} as Color,
  WHITE_MID: {xy: [0.3137, 0.3289], bri: 165} as Color,
  RED: {xy: [0.6866, 0.3059], bri: 254} as Color,
  RED_MID: {xy: [0.6866, 0.3059], bri: 127} as Color,
  RED_DIM: {xy: [0.6866, 0.3059], bri: 63} as Color,
  PINK: {xy: [0.4118, 0.185], bri: 254} as Color,
  YELLOW_DEEP: {xy: [0.5936, 0.3818], bri: 178} as Color,
  PURPLE: {xy: [0.2535, 0.1246], bri: 254} as Color,
  PURPLE_UP: {xy: [0.2535, 0.1246], bri: 191} as Color,
  //PURPLE_UP: {xy: [0.2758, 0.139328], bri: 191} as Color,
  BLUE: {xy: [0.15, 0.0843], bri: 254} as Color,
};

const T = {
  T1: {t: 1},
  T2: {t: 2},
  T3: {t: 3},
  T5: {t: 5},
  T300: {t: 300},
};


const m1: Score = [
  {
    note: '4Eb',
    on: [
      {id: L.BOOK, on: true, ...C.WHITE, ...T.T5},
      {id: L.BDR, on: true, ...C.WHITE, ...T.T5},
    ],
  },
  {
    note: '4G',
    on: [
      {id: L.TVT, on: true, ...C.RED, ...T.T300},
      {id: L.TVS, on: true, ...C.WHITE, ...T.T300},
    ],
  },
  {
    note: '4Eb',
    on: [
      {id : L.PL3, on: true, ...C.RED_DIM, ...T.T1},
      {id: L.PR3, on: true, ...C.RED_DIM, ...T.T1},
    ],
  }
];


const m2: Score = [
  {
    note: '4D',
    on: [
      {id: L.PL3, on: false},
      {id: L.PR3, on: false},
      {id: L.PR2, on: true, ...C.WHITE_MID, ...T.T1},
      {id: L.PL2, on: true, ...C.WHITE_MID, ...T.T1},
    ],
  },
  {
    note: '4G',
    on: [
      {id: L.PL3, on: true, ...T.T3},
      {id: L.PR3, on: true, ...T.T3},
      {id: L.PR1, on: true, ...C.YELLOW_DEEP, ...T.T3},
      {id: L.PL1, on: true, ...C.YELLOW_DEEP, ...T.T3},
      {id: L.PR2, ...C.RED_MID, ...T.T3},
      {id: L.PL2, ...C.RED_MID, ...T.T3},
    ],
  },
  {
    note: '4D',
    on: [
      {id: L.SFL, on: true, ...C.BLUE, ...T.T3},
    ],
  },
];

const m3: Score = [
  {
    note: '4C',
    on: [
      {id: L.SFR, on: true, ...C.BLUE, ...T.T3},
    ],
  },
  {
    note: '4Eb',
    on: [
      {id: L.SFA, on: true, ...C.RED, ...T.T3},
    ],
  },
  {
    note: '4F',
    on: [
      {id: L.SFA, on: false, ...T.T5},
      {id: L.SFR, on: false, ...T.T5},
      {id: L.SFL, on: false, ...T.T5},
    ],
  },
];

const m4: Score = [
  {
    note: '4G',
    on: [
      {id: L.PL1, on: false, ...T.T5},
      {id: L.PR1, on: false, ...T.T5},
      {id: L.PL2, on: false, ...T.T1},
      {id: L.PR2, on: false, ...T.T1},
      {id: L.PL3, on: false, ...T.T5},
      {id: L.PR3, on: false, ...T.T5},
    ],
  },
  {
    note: '4C',
    on: [
      {id: L.PR2, on: true, ...C.BLUE, ...T.T3},
      {id: L.PL2, on: true, ...C.BLUE, ...T.T3},
    ],
  },
  {
    note: '4Eb',
    on: [
      {id: L.DOWN, on: true, ...C.PURPLE_UP, ...T.T3},
    ],
  },
];

const m5: Score = [
  {
    note: '4C',
    on: [
       {id: L.UP, on: true, ...C.PINK, ...T.T5},
    ],
  },
  {
    note: '4G',
    on: [
      {id: L.PR3, on: true, ...C.RED, ...T.T3},
      {id: L.PL3, on: true, ...C.RED, ...T.T3},
    ],
  },
  {
    note: '3B',
    on: [
      {id: L.PR1, on: true, ...C.PURPLE, ...T.T3},
      {id: L.PL1, on: true, ...C.PURPLE, ...T.T3},
    ],
  },
  {
    note: '4G',
    on: [
      {id: L.SFA, on: true, ...C.RED},
    ],
  },
];

const m6: Score = [
  {
    note: '4Eb',
    on: [
      {id: L.SFL, on: true, ...C.BLUE},
    ],
  },
  {
    note: '4C',
    on: [
      {id: L.SFR, on: true, ...C.BLUE},
    ],
  },
  {
    note: '3D',
    on: [
      {id: L.BDR, ...C.BLUE, ...T.T3},
    ],
  },
  {
    note: '3Eb',
    on: [
      {id: L.BOOK, ...C.RED, ...T.T3},
    ],
  },
  {
    note: '4C',
    on: [
      {id: L.PR1, ...C.RED, ...T.T3},
      {id: L.PL1, ...C.RED, ...T.T3},
    ],
  },
  {
    note: '4Eb',
    on: [
      {id: L.PR2, ...C.RED, ...T.T3},
      {id: L.PL2, ...C.RED, ...T.T3},
    ],
  },
];

export const score: Score = [...m1, ...m2,  ...m3, ...m4, ...m5, ...m6];