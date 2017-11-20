import {Score} from './show/score';
import {L as Light} from './show/lightsconfig';


interface Color {
  xy: [number, number],
  bri: number,
}

interface LightState {
  id: Light,
  on?: boolean,
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
  BLUE: {xy: [0.15, 0.0843], bri: 254} as Color,
};

const T = {
  T1: {t: 1},
  T2: {t: 2},
  T3: {t: 3},
  T5: {t: 5},
  T50: {t: 50},
};

const L = {
  BOOK: {id: Light.BOOK, on: true} as LightState,
  BDR: {id: Light.BDR, on: true} as LightState,
  UP: {id: Light.UP, on: true} as LightState,
  DOWN: {id: Light.DOWN, on: true} as LightState,
  SFA: {id: Light.SFA, on: true} as LightState,
  SFL: {id: Light.SFL, on: true} as LightState,
  SFR: {id: Light.SFR, on: true} as LightState,
  PL1: {id: Light.PL1, on: true} as LightState,
  PL2: {id: Light.PL2, on: true} as LightState,
  PL3: {id: Light.PL3, on: true} as LightState,
  PR1: {id: Light.PR1, on: true} as LightState,
  PR2: {id: Light.PR2, on: true} as LightState,
  PR3: {id: Light.PR3, on: true} as LightState,
  TVT: {id: Light.TVT, on: true} as LightState,
  TVS: {id: Light.TVS, on: true} as LightState,
  TBL: {id: Light.TBL, on: true} as LightState,
  BOOK_OFF: {id: Light.BOOK, on: false} as LightState,
  BDR_OFF: {id: Light.BDR, on: false} as LightState,
  UP_OFF: {id: Light.UP, on: false} as LightState,
  DOWN_OFF: {id: Light.DOWN, on: false} as LightState,
  SFA_OFF: {id: Light.SFA, on: false} as LightState,
  SFL_OFF: {id: Light.SFL, on: false} as LightState,
  SFR_OFF: {id: Light.SFR, on: false} as LightState,
  PL1_OFF: {id: Light.PL1, on: false} as LightState,
  PL2_OFF: {id: Light.PL2, on: false} as LightState,
  PL3_OFF: {id: Light.PL3, on: false} as LightState,
  PR1_OFF: {id: Light.PR1, on: false} as LightState,
  PR2_OFF: {id: Light.PR2, on: false} as LightState,
  PR3_OFF: {id: Light.PR3, on: false} as LightState,
  TVT_OFF: {id: Light.TVT, on: false} as LightState,
  TVS_OFF: {id: Light.TVS, on: false} as LightState,
  TBL_OFF: {id: Light.TBL, on: false} as LightState,
};



const m1: Score = [
  {
    note: '4Eb',
    on: [
      {...L.BOOK, ...C.WHITE, ...T.T5},
      {...L.BDR, ...C.WHITE, ...T.T5},
    ],
  },
  {
    note: '4G',
    on: [
      {...L.TVT, ...C.RED, ...T.T50},
      {...L.TVS, ...C.WHITE, ...T.T50},
    ],
  },
  {
    note: '4Eb',
    on: [
      {...L.PL3, ...C.RED_DIM, ...T.T1},
      {...L.PR3, ...C.RED_DIM, ...T.T1},
    ],
  }
];

const m1n  = [
  {
    note: '4Eb',
    on: [
      [L.BOOK, C.WHITE, T.T5],
      [L.BDR, C.WHITE, T.T5],
    ],
  },
  {
    note: '4G',
    on: [
      [L.TVT,  C.RED, T.T50],
      [L.TVS, C.WHITE, T.T50],
    ],
  },
  {
    note: '4Eb',
    on: [
      [L.PL3, C.RED_DIM, T.T1],
      [L.PR3, C.RED_DIM, T.T1],
    ],
  }
];


const m2: Score = [
  {
    note: '4D',
    on: [
      {...L.PL3_OFF},
      {...L.PR3_OFF},
      {...L.PR2, ...C.WHITE_MID, ...T.T1},
      {...L.PL2, ...C.WHITE_MID, ...T.T1},
    ],
  },
  {
    note: '4G',
    on: [
      {...L.PL3, ...T.T3},
      {...L.PR3, ...T.T3},
      {...L.PR1, ...C.YELLOW_DEEP, ...T.T3},
      {...L.PL1, ...C.YELLOW_DEEP, ...T.T3},
      {...L.PR2, ...C.RED_MID, ...T.T3},
      {...L.PL2, ...C.RED_MID, ...T.T3},
    ],
  },
  {
    note: '4D',
    on: [
      {...L.SFL, ...C.BLUE, ...T.T2},
    ],
  },
];

const m3: Score = [
  {
    note: '4C',
    on: [
      {...L.SFR, ...C.BLUE, ...T.T2},
    ],
  },
  {
    note: '4Eb',
    on: [
      {...L.SFA, ...C.RED, ...T.T1},
    ],
  },
  {
    note: '4F',
    on: [
      {...L.SFA_OFF, ...T.T5},
      {...L.SFR_OFF, ...T.T5},
      {...L.SFL_OFF, ...T.T5},
    ],
  },
];

const m4: Score = [
  {
    note: '4G',
    on: [
      {...L.PL1_OFF, ...T.T3},
      {...L.PR1_OFF, ...T.T3},
      {...L.PL2_OFF, ...T.T3},
      {...L.PR2_OFF, ...T.T3},
      {...L.PL3_OFF, ...T.T3},
      {...L.PR3_OFF, ...T.T3},
    ],
  },
  {
    note: '4C',
    on: [
      {...L.PR2, ...C.BLUE, ...T.T3},
      {...L.PL2, ...C.BLUE, ...T.T3},
    ],
  },
  {
    note: '4Eb',
    on: [
      {...L.DOWN, ...C.PURPLE_UP, ...T.T3},
    ],
  },
];

const m5: Score = [
  {
    note: '4G',
    on: [
       {...L.UP, ...C.PINK, ...T.T5},
    ]
  },
  {
    note: '4G',
    on: [
      {...L.PR3, ...C.RED, ...T.T3},
      {...L.PL3, ...C.RED, ...T.T3},
    ]
  },
  {
    note: '3B',
    on: [
      {...L.SFA, ...C.PURPLE},
      {...L.PR1, ...C.PURPLE, ...T.T3},
      {...L.PL1, ...C.PURPLE, ...T.T3},
    ],
  },
  {
    note: '4G',
    on: [
      {...L.TVS, ...C.PURPLE},
      {...L.PR3, ...C.PURPLE, ...T.T3},
      {...L.PL3, ...C.PURPLE, ...T.T3},
    ],
  },
];

const m6: Score = [
  {
    note: '4Eb',
    on: [
      {...L.SFL, ...C.BLUE},
    ],
  },
  {
    note: '4C',
    on: [
      {...L.SFR, ...C.BLUE},
    ],
  },
  {
    note: '3D',
    on: [
      {...L.BDR, ...C.BLUE, ...T.T3},
    ],
  },
  {
    note: '3Eb',
    on: [
      {...L.BOOK, ...C.RED, ...T.T3},
    ],
  },
  {
    note: '4C',
    on: [
      {...L.PR1, ...C.RED, ...T.T3},
      {...L.PL1, ...C.RED, ...T.T3},
    ],
  },
  {
    note: '4Eb',
    on: [
      {...L.DOWN, ...C.BLUE, ...T.T3},
      {...L.TVS, ...C.RED, ...T.T3},
    ],
  },
];

const m7: Score = [
  {
    note: '4G',
    on: [
      {...L.UP, ...C.RED, ...T.T3},
      {...L.PR3, ...C.RED, ...T.T1},
      {...L.PL3, ...C.RED, ...T.T1},
    ],
  },
  {
    note: '4G',
    on: [
      {...L.TVT, ...C.BLUE, ...T.T3},
    ],
  },
  {
    note: '5C',
    on: [
      {...L.SFA, ...C.RED, ...T.T3},
      {...L.PR2, ...C.RED, ...T.T3},
      {...L.PL2, ...C.RED, ...T.T3},
    ],
  },
  {
    note: '3Ab',
    on: [
      {...L.PR1_OFF, ...T.T3},
      {...L.PL1_OFF, ...T.T3},
    ],
  },
];

const m8: Score = [
  {
    note: '3G',
    on: [
      {...L.TVS_OFF, ...T.T3},
      {...L.SFA_OFF, ...T.T3},
    ],
  },
  {
    note: '3F',
    on: [
      {...L.UP_OFF},
      {...L.SFL_OFF},
    ],
  },
  {
    note: '3C#',
    on: [
      {...L.DOWN_OFF},
      {...L.SFR_OFF},
    ],
  },
  {
    note: '3D',
    on: [
      {...L.TVT_OFF, ...T.T5},
      {...L.PR3_OFF, ...T.T3},
      {...L.PL3_OFF, ...T.T3},
      {...L.PR2_OFF, ...T.T3},
      {...L.PL2_OFF, ...T.T3},
    ],
  },
];

export const score: Score = [...m1, ...m2,  ...m3, ...m4, ...m5, ...m6, ...m7, ...m8];