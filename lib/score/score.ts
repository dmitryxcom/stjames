import {Score} from '../show/score';
import {buildScoreFromSchortScoreMeasures, ShortScore} from './scorehelper';
import {Colors as C, Lights as L, Times as T} from './scoreconfig';


const m1: ShortScore = [
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
      [L.TVT, C.RED, T.T50],
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


const m2: ShortScore = [
  {
    note: '4D',
    on: [
      [L.PL3_OFF],
      [L.PR3_OFF],
      [L.PR2, C.WHITE_MID, T.T1],
      [L.PL2, C.WHITE_MID, T.T1],
    ],
  },
  {
    note: '4G',
    on: [
      [L.PL3, T.T3],
      [L.PR3, T.T3],
      [L.PR1, C.YELLOW_DEEP, T.T3],
      [L.PL1, C.YELLOW_DEEP, T.T3],
      [L.PR2, C.RED_MID, T.T3],
      [L.PL2, C.RED_MID, T.T3],
    ],
  },
  {
    note: '4D',
    on: [
      [L.SFL, C.BLUE, T.T2],
    ],
  },
];


const m3: ShortScore = [
  {
    note: '4C',
    on: [
      [L.SFR, C.BLUE, T.T2],
    ],
  },
  {
    note: '4Eb',
    on: [
      [L.SFA, C.RED, T.T1],
    ],
  },
  {
    note: '4F',
    on: [
      [L.SFA_OFF, T.T5],
      [L.SFR_OFF, T.T5],
      [L.SFL_OFF, T.T5],
    ],
  },
];


const m4: ShortScore = [
  {
    note: '4G',
    on: [
      [L.PL1_OFF, T.T3],
      [L.PR1_OFF, T.T3],
      [L.PL2_OFF, T.T3],
      [L.PR2_OFF, T.T3],
      [L.PL3_OFF, T.T3],
      [L.PR3_OFF, T.T3],
    ],
  },
  {
    note: '4C',
    on: [
      [L.PR2, C.BLUE, T.T3],
      [L.PL2, C.BLUE, T.T3],
    ],
  },
  {
    note: '4Eb',
    on: [
      [L.DOWN, C.PURPLE_UP, T.T3],
    ],
  },
];


const m5: ShortScore = [
  {
    note: '4G',
    on: [
       [L.UP, C.PINK, T.T5],
    ]
  },
  {
    note: '4G',
    on: [
      [L.PR3, C.RED, T.T3],
      [L.PL3, C.RED, T.T3],
    ]
  },
  {
    note: '3B',
    on: [
      [L.SFA, C.PURPLE],
      [L.PR1, C.PURPLE, T.T3],
      [L.PL1, C.PURPLE, T.T3],
    ],
  },
  {
    note: '4G',
    on: [
      [L.TVS, C.PURPLE],
      [L.PR3, C.PURPLE, T.T3],
      [L.PL3, C.PURPLE, T.T3],
    ],
  },
];


const m6: ShortScore = [
  {
    note: '4Eb',
    on: [
      [L.SFL, C.BLUE],
    ],
  },
  {
    note: '4C',
    on: [
      [L.SFR, C.BLUE],
    ],
  },
  {
    note: '3D',
    on: [
      [L.BDR, C.BLUE, T.T3],
    ],
  },
  {
    note: '3Eb',
    on: [
      [L.BOOK, C.RED, T.T3],
    ],
  },
  {
    note: '4C',
    on: [
      [L.PR1, C.RED, T.T3],
      [L.PL1, C.RED, T.T3],
    ],
  },
  {
    note: '4Eb',
    on: [
      [L.DOWN, C.BLUE, T.T3],
      [L.TVS, C.RED, T.T3],
    ],
  },
];


const m7: ShortScore = [
  {
    note: '4G',
    on: [
      [L.UP, C.RED, T.T3],
      [L.PR3, C.RED, T.T1],
      [L.PL3, C.RED, T.T1],
    ],
  },
  {
    note: '4G',
    on: [
      [L.TVT, C.BLUE, T.T3],
    ],
  },
  {
    note: '5C',
    on: [
      [L.SFA, C.RED, T.T3],
      [L.PR2, C.RED, T.T3],
      [L.PL2, C.RED, T.T3],
    ],
  },
  {
    note: '3Ab',
    on: [
      [L.PR1_OFF, T.T3],
      [L.PL1_OFF, T.T3],
    ],
  },
];


const m8: ShortScore = [
  {
    note: '3G',
    on: [
      [L.TVS_OFF, T.T3],
      [L.SFA_OFF, T.T3],
    ],
  },
  {
    note: '3F',
    on: [
      [L.UP_OFF],
      [L.SFL_OFF],
    ],
  },
  {
    note: '3C#',
    on: [
      [L.DOWN_OFF],
      [L.SFR_OFF],
    ],
  },
  {
    note: '3D',
    on: [
      [L.TVT_OFF, T.T5],
      [L.PR3_OFF, T.T3],
      [L.PL3_OFF, T.T3],
      [L.PR2_OFF, T.T3],
      [L.PL2_OFF, T.T3],
    ],
  },
  {
    note: '4F#',
    on: [
      [L.PR3, C.RED, T.T1],
      [L.PL3, C.BLUE, T.T1],
      [L.PR1, C.BLUE, T.T1],
      [L.PL1, C.RED, T.T1],
    ],
  },
];

const m9: ShortScore = [
  {
    note: '4G',
    on: [
      [L.PR2, C.GREEN_LIGHT, T.T1],
      [L.PL2, C.GREEN_LIGHT, T.T1],
    ],
  },
  {
    note: '4G',
    on: [
      [L.PR3, C.BLUE, T.T1],
      [L.PR1, C.RED, T.T1],
    ],
  },
  {
    note: '4G',
    on: [
      [L.PL3, C.RED, T.T1],
      [L.PL1, C.BLUE, T.T1],
    ],
  },
  {
    note: '4F',
    on: [
      [L.BOOK, C.GREEN_LIGHT, T.T1],
      [L.BDR, C.GREEN_LIGHT, T.T1],
    ],
  },
];


const m10: ShortScore = [
  {
    note: '4Eb',
    on: [
      [L.PR3, C.GREEN_LIGHT],
      [L.PR2, C.RED],
      [L.PR1_OFF],
      [L.PL3, C.GREEN_LIGHT],
      [L.PL2, C.BLUE],
      [L.PL1_OFF],
    ],
  },
  {
    note: '4C',
    on: [
      [L.PR3, C.RED],
      [L.PR2_OFF],
      [L.PL3, C.BLUE],
      [L.PL2_OFF],
    ],
  },
  {
    note: '2Bb',
    on: [
      [L.PR2, C.BLUE, T.T3],
      [L.PL2, C.RED, T.T3],
    ],
  },
  {
    note: '2A',
    on: [
      [L.PR1, C.GREEN_LIGHT, T.T3],
      [L.PL1, C.GREEN_LIGHT, T.T3],
    ],
  },
  {
    note: '4C',
    on: [
      [L.TVT, C.GREEN_MID, T.T1],
    ],
  },
  {
    note: '4D',
    on: [
      [L.DOWN, C.BLUE, T.T1],
    ],
  },
];


const m11: ShortScore = [
  {
    note: '4Eb',
    on: [
      [L.UP, C.RED, T.T3],
      [L.BOOK, C.RED, T.T3],
      [L.BDR, C.RED, T.T3],
    ],
  },
  {
    note: '4Eb',
    on: [
      [L.PL3, C.RED, T.T3],
      [L.PR2, C.RED, T.T3],
    ],
  },
  {
    note: '4Eb',
    on: [
      [L.SFA, C.RED, T.T3],
      [L.TVS, C.RED, T.T3],
    ],
  },
  {
    note: '4D',
    on: [
      [L.TVT, C.RED, T.T3],
    ],
  },
];


const m12: ShortScore = [
  {
    note: '4C',
    on: [
      [L.DOWN, C.RED],
      [L.PL1, C.RED],
      [L.PR1, C.RED],
    ],
  },
  {
    note: '3F#',
    on: [
      [L.UP_OFF, T.T3],
      [L.DOWN_OFF, T.T3],
      [L.SFA_OFF, T.T3],
      [L.TVT_OFF, T.T3],
      [L.TVS_OFF, T.T3],
    ],
  },
  {
    note: '3G',
    on: [
      [L.PR3_OFF, T.T1],
      [L.PL3_OFF, T.T1],
      [L.PR2_OFF, T.T1],
      [L.PL2_OFF, T.T1],
      [L.PR1_OFF, T.T1],
      [L.PL1_OFF, T.T1],
    ],
  },
  {
    note: '4F',
    on: [
      [L.PR1, C.BLUE, T.T1],
      [L.PL1, C.BLUE, T.T1],
    ],
  },
  {
    note: '4F#',
    on: [
      [L.PR2, C.BLUE, T.T1],
      [L.PL2, C.BLUE, T.T1],
      [L.PR1, C.GREEN_LIGHT, T.T1],
      [L.PL1, C.GREEN_LIGHT, T.T1],
    ],
  },
];


const m13: ShortScore = [
  {
    note: '4G',
    on: [
      [L.PR3, C.BLUE, T.T1],
      [L.PL3, C.BLUE, T.T1],
      [L.PR2, C.GREEN_LIGHT, T.T1],
      [L.PL2, C.GREEN_LIGHT, T.T1],
      [L.PR1, C.BLUE, T.T1],
      [L.PL1, C.BLUE, T.T1],
    ],
  },
  {
    note: '4G',
    on: [
      [L.DOWN, C.BLUE, T.T1],
      [L.PR3, C.GREEN_LIGHT, T.T1],
      [L.PL3, C.GREEN_LIGHT, T.T1],
      [L.PR2, C.BLUE, T.T1],
      [L.PL2, C.BLUE, T.T1],
      [L.PR1, C.GREEN_LIGHT, T.T1],
      [L.PL1, C.GREEN_LIGHT, T.T1],
    ],
  },
  {
    note: '4G',
    on: [
      [L.UP, C.BLUE, T.T1],
      [L.DOWN, C.GREEN_LIGHT, T.T1],
      [L.PR3, C.BLUE, T.T1],
      [L.PL3, C.BLUE, T.T1],
      [L.PR2, C.GREEN_LIGHT, T.T1],
      [L.PL2, C.GREEN_LIGHT, T.T1],
      [L.PR1, C.BLUE, T.T1],
      [L.PL1, C.BLUE, T.T1],
    ],
  },
  {
    note: '4F',
    on: [
      [L.UP, C.GREEN_LIGHT, T.T1],
      [L.DOWN, C.BLUE, T.T1],
      [L.PR3, C.GREEN_LIGHT, T.T1],
      [L.PL3, C.GREEN_LIGHT, T.T1],
      [L.PR2, C.BLUE, T.T1],
      [L.PL2, C.BLUE, T.T1],
      [L.PR1, C.GREEN_LIGHT, T.T1],
      [L.PL1, C.GREEN_LIGHT, T.T1],
    ],
  },
];


const m14: ShortScore = [
  {
    note: '4G',
    on: [
      [L.TVT, C.BLUE, T.T5],
      [L.SFA, C.GREEN_LIGHT, T.T5],
    ],
  },
  {
    note: '4B',
    on: [
      [L.SFR, C.BLUE, T.T1],
      [L.SFL, C.BLUE, T.T1],
    ],
  },
  {
    note: '4G',
    on: [
      [L.BDR, C.BLUE, T.T1],
      [L.BOOK, C.GREEN_LIGHT, T.T1],
      [L.TVS, C.GREEN_LIGHT, T.T3],
    ],
  },
  {
    note: '4F',
    on: [
      [L.PR3, C.YELLOW_DEEP, T.T3],
      [L.PL3, C.YELLOW_DEEP, T.T3],
      [L.PR1, C.YELLOW_DEEP, T.T3],
      [L.PL1, C.YELLOW_DEEP, T.T3],
    ],
  },
  {
    note: '4F#',
    on: [
      [L.BOOK, C.YELLOW_DEEP, T.T1],
      [L.UP, C.YELLOW_DEEP, T.T1],
      [L.SFA, C.YELLOW_DEEP, T.T1],
      [L.TVS, C.YELLOW_DEEP, T.T1],
    ],
  },
];


const m15: ShortScore  = [
  {
    note: '4G',
    on: [
      [L.BDR, C.RED, T.T1],
      [L.PR2, C.RED, T.T1],
      [L.PL2, C.RED, T.T1],
      [L.SFR, C.RED, T.T1],
      [L.SFL, C.RED, T.T1],
    ],
  },
  {
    note: '4G',
    on: [
      [L.DOWN, C.RED, T.T1],
      [L.TVT, C.RED, T.T1],
    ],
  },
  {
    note: '5D',
    on: [
      [L.TVT_OFF, T.T10],
      [L.TVS_OFF, T.T10],
    ],
  },
  {
    note: '5C',
    on: [
      [L.SFA_OFF, T.T10],
      [L.SFR_OFF, T.T10],
      [L.SFL_OFF, T.T10],
    ],
  },
  {
    note: '4Ab',
    on: [
      [L.UP_OFF, T.T10],
      [L.DOWN_OFF, T.T10],
    ],
  },
  {
    note: '4F',
    on: [
      [L.BDR_OFF, T.T10],
      [L.BOOK_OFF, T.T10],
    ],
  },
];

const m16: ShortScore = [
  {
    note: '3G',
    on: [
      [L.PR3_OFF, T.T1],
      [L.PL3_OFF, T.T1],
      [L.PR2_OFF, T.T1],
      [L.PL2_OFF, T.T1],
    ],
  },
  {
    note: '3F#',
    on: [
      [L.PR2, C.RED, T.T1],
      [L.PL2, C.RED, T.T1],
    ],
  },
  {
    note: '3G',
    on: [
      [L.PR2_OFF, T.T3],
      [L.PL2_OFF, T.T3],
    ],
  },
  {
    note: '2G',
    on: [
      [L.PR1_OFF, T.T3],
      [L.PL1_OFF, T.T3],
    ],
  },
  {
    note: '4F',
    on: [
      [L.PR2, C.RED_MID],
      [L.PR2_OFF, T.T1],
      [L.PL2, C.RED_MID],
      [L.PL2_OFF, T.T1],
    ],
  },
  {
    note: '4F#',
    on: [
      [L.PR1, C.RED_MID],
      [L.PR1_OFF, T.T1],
      [L.PL1, C.RED_MID],
      [L.PL1_OFF, T.T1],
    ],
  },
];

const m17: ShortScore = [
  {
    note: '4G',
    on: [
      [L.PR3, C.RED_MID],
      [L.PR3_OFF, T.T1],
      [L.PL3, C.RED_MID],
      [L.PL3_OFF, T.T1],
    ],
  },
  {
    note: '4G',
    on: [
      [L.PR1, C.PINK, T.T1],
      [L.PL1, C.PINK, T.T1],
      [L.DOWN, C.PINK, T.T1],
      [L.SFR, C.PINK, T.T1],
      [L.SFL, C.PINK, T.T1],
    ],
  },
  {
    note: '4G',
    on: [
      [L.PR2, C.BLUE, T.T1],
      [L.PL2, C.BLUE, T.T1],
      [L.SFA, C.BLUE, T.T1],
      [L.TVT, C.BLUE, T.T1],
    ],
  },
  {
    note: '4F',
    on: [
      [L.PR3, C.GREEN_LIGHT, T.T1],
      [L.PL3, C.GREEN_LIGHT, T.T1],
      [L.UP, C.GREEN_LIGHT, T.T1],
      [L.TVS, C.GREEN_LIGHT, T.T1],
    ],
  },
];


const m18: ShortScore = [
  {
    note: '5C',
    on: [
      [L.BDR, C.PINK, T.T1],
      [L.BOOK, C.PINK, T.T1],
      [L.PR1_OFF, T.T1],
      [L.PL1_OFF, T.T1],
      [L.DOWN_OFF, T.T1],
      [L.SFR_OFF, T.T1],
      [L.SFL_OFF, T.T1],
    ],
  },
  {
    note: '4Bb',
    on: [
      [L.BDR, C.GREEN_LIGHT, T.T1],
      [L.BOOK, C.GREEN_LIGHT, T.T1],
      [L.UP_OFF, T.T1],
      [L.TVS_OFF, T.T1],
    ],
  },
  {
    note: '4G',
    on: [
      [L.PR3_OFF, T.T1],
      [L.PL3_OFF, T.T1],
    ],
  },
  {
    note: '4F',
    on: [
      [L.BDR, C.BLUE, T.T1],
      [L.BOOK, C.BLUE, T.T1],
      [L.SFA_OFF, T.T1],
      [L.TVT_OFF, T.T1],
    ],
  },
  {
    note: '4Eb',
    on: [
      [L.PR2_OFF, T.T1],
      [L.PL2_OFF, T.T1],
    ],
  },
  {
    note: '4C',
    on: [
      [L.DOWN, C.PINK, T.T1],
      [L.BDR, C.PINK, T.T1],
      [L.BOOK, C.PINK, T.T1],
    ],
  },
  {
    note: '4C',
    on: [
      [L.UP, C.GREEN_MID, T.T1],
      [L.BDR, C.GREEN_MID, T.T1],
      [L.BOOK, C.GREEN_MID, T.T1],
    ],
  },
];


const m19: ShortScore = [
  {
    note: '4Gb',
    on: [
      [L.PR1, C.PINK],
      [L.PL1, C.PINK],
      [L.PR1_OFF, T.T1],
      [L.PL1_OFF, T.T1],
    ],
  },
  {
    note: '4F',
    on: [
      [L.PR2, C.BLUE],
      [L.PL2, C.BLUE],
      [L.PR2_OFF, T.T1],
      [L.PL2_OFF, T.T1],
    ],
  },
  {
    note: '4Eb',
    on: [
      [L.PR3, C.GREEN_MID],
      [L.PL3, C.GREEN_MID],
      [L.PR3_OFF, T.T1],
      [L.PL3_OFF, T.T1],
    ],
  },
  {
    note: '4Gb',
    on: [
      [L.PR1, C.PINK],
      [L.PL1, C.PINK],
      [L.PR1_OFF, T.T1],
      [L.PL1_OFF, T.T1],
    ],
  },
  {
    note: '4F',
    on: [
      [L.PR2, C.BLUE],
      [L.PL2, C.BLUE],
      [L.PR2_OFF, T.T1],
      [L.PL2_OFF, T.T1],
    ],
  },
  {
    note: '4Eb',
    on: [
      [L.PR3, C.GREEN_MID],
      [L.PL3, C.GREEN_MID],
      [L.PR3_OFF, T.T1],
      [L.PL3_OFF, T.T1],
    ],
  },
  {
    note: '4Gb',
    on: [
      [L.PR1, C.PINK, T.T1],
      [L.PL1, C.PINK, T.T1],
    ],
  },
  {
    note: '4F',
    on: [
      [L.PR2, C.BLUE, T.T1],
      [L.PL2, C.BLUE, T.T1 ],
    ],
  },
  {
    note: '4Eb',
    on: [
      [L.PR3, C.GREEN_MID, T.T1],
      [L.PL3, C.GREEN_MID, T.T1],
    ],
  },
];


const m20: ShortScore = [
  {
    note: '4C',
    on: [
      [L.TVT, C.BLUE, T.T3],
      [L.SFA, C.BLUE, T.T3],
      [L.TVS, C.GREEN_MID, T.T3],
      [L.SFR, C.PINK, T.T3],
      [L.SFL, C.PINK, T.T3],
    ],
  },
  {
    note: '3F#',
    on: [
      [L.PR3_OFF, T.T1],
      [L.PL3_OFF, T.T1],
      [L.PR1_OFF, T.T1],
      [L.PL1_OFF, T.T1],
      [L.PR2_OFF, T.T1],
      [L.PL2_OFF, T.T1],
      [L.BOOK_OFF, T.T1],
      [L.BDR_OFF, T.T1],
    ],
  },
  {
    note: '3G',
    on: [
      [L.UP_OFF, T.T1],
      [L.DOWN_OFF, T.T1],
      [L.TVT_OFF, T.T1],
      [L.SFA_OFF, T.T1],
      [L.TVS_OFF, T.T1],
      [L.SFR_OFF, T.T1],
      [L.SFL_OFF, T.T1],
    ],
  },
  {
    note: '5C',
    on: [
      [L.BDR, C.WHITE_MID],
      [L.BOOK, C.WHITE_MID],
      [L.BOOK_OFF, T.T1],
      [L.BDR_OFF, T.T1],
    ],
  },
  {
    note: '5C',
    on: [
      [L.BDR, C.WHITE_MID],
      [L.BOOK, C.WHITE_MID],
      [L.BOOK_OFF, T.T1],
      [L.BDR_OFF, T.T1],
    ],
  },
];


const m21: ShortScore = [
  {
    note: '5Gb',
    on: [
      [L.PR1, C.PINK],
      [L.PL1, C.PINK],
      [L.PR1_OFF, T.T1],
      [L.PL1_OFF, T.T1],
    ],
  },
  {
    note: '5F',
    on: [
      [L.PR2, C.PINK],
      [L.PL2, C.PINK],
      [L.PR2_OFF, T.T1],
      [L.PL2_OFF, T.T1],
    ],
  },
  {
    note: '5Eb',
    on: [
      [L.PR3, C.PINK],
      [L.PL3, C.PINK],
      [L.PR3_OFF, T.T1],
      [L.PL3_OFF, T.T1],
    ],
  },
  {
    note: '5Gb',
    on: [
      [L.PR1, C.PINK],
      [L.PL1, C.PINK],
      [L.PR1_OFF, T.T1],
      [L.PL1_OFF, T.T1],
    ],
  },
  {
    note: '5F',
    on: [
      [L.PR2, C.PINK],
      [L.PL2, C.PINK],
      [L.PR2_OFF, T.T1],
      [L.PL2_OFF, T.T1],
    ],
  },
  {
    note: '5Eb',
    on: [
      [L.PR3, C.PINK],
      [L.PL3, C.PINK],
      [L.PR3_OFF, T.T1],
      [L.PL3_OFF, T.T1],
    ],
  },
  {
    note: '5Gb',
    on: [
      [L.BDR, C.BLUE],
      [L.BOOK, C.BLUE],
    ],
  },
  {
    note: '5F',
    on: [
      [L.BDR_OFF, T.T1],
      [L.BOOK_OFF, T.T1],
    ],
  },
];


const m22: ShortScore = [
  {
    note: '6Gb',
    on: [
      [L.PR1, C.BLUE],
      [L.PL1, C.BLUE],
      [L.PR1_OFF, T.T1],
      [L.PL1_OFF, T.T1],
    ],
  },
  {
    note: '6F',
    on: [
      [L.PR2, C.BLUE],
      [L.PL2, C.BLUE],
      [L.PR2_OFF, T.T1],
      [L.PL2_OFF, T.T1],
    ],
  },
  {
    note: '6Eb',
    on: [
      [L.PR3, C.BLUE],
      [L.PL3, C.BLUE],
      [L.PR3_OFF, T.T1],
      [L.PL3_OFF, T.T1],
    ],
  },
  {
    note: '6Gb',
    on: [
      [L.PR1, C.BLUE],
      [L.PL1, C.BLUE],
      [L.PR1_OFF, T.T1],
      [L.PL1_OFF, T.T1],
    ],
  },
  {
    note: '6F',
    on: [
      [L.PR2, C.BLUE],
      [L.PL2, C.BLUE],
      [L.PR2_OFF, T.T1],
      [L.PL2_OFF, T.T1],
    ],
  },
  {
    note: '6Eb',
    on: [
      [L.PR3, C.BLUE],
      [L.PL3, C.BLUE],
      [L.PR3_OFF, T.T1],
      [L.PL3_OFF, T.T1],
    ],
  },
  {
    note: '6Gb',
    on: [
      [L.BDR, C.GREEN_MID],
      [L.BOOK, C.GREEN_MID],
    ],
  },
  {
    note: '6F',
    on: [
      [L.BDR_OFF, T.T1],
      [L.BOOK_OFF, T.T1],
    ],
  },
];

const m23: ShortScore = [
  {
    note: '7Gb',
    on: [
      [L.PR1, C.GREEN_MID],
      [L.PL1, C.GREEN_MID],
      [L.PR1_OFF, T.T1],
      [L.PL1_OFF, T.T1],
    ],
  },
  {
    note: '7F',
    on: [
      [L.PR2, C.GREEN_MID],
      [L.PL2, C.GREEN_MID],
      [L.PR2_OFF, T.T1],
      [L.PL2_OFF, T.T1],
    ],
  },
  {
    note: '7Eb',
    on: [
      [L.PR3, C.GREEN_MID],
      [L.PL3, C.GREEN_MID],
      [L.PR3_OFF, T.T1],
      [L.PL3_OFF, T.T1],
    ],
  },
  {
    note: '7Gb',
    on: [
      [L.PR1, C.GREEN_MID],
      [L.PL1, C.GREEN_MID],
      [L.PR1_OFF, T.T1],
      [L.PL1_OFF, T.T1],
    ],
  },
  {
    note: '7F',
    on: [
      [L.PR2, C.GREEN_MID],
      [L.PL2, C.GREEN_MID],
      [L.PR2_OFF, T.T1],
      [L.PL2_OFF, T.T1],
    ],
  },
  {
    note: '7Eb',
    on: [
      [L.PR3, C.GREEN_MID],
      [L.PL3, C.GREEN_MID],
      [L.PR3_OFF, T.T1],
      [L.PL3_OFF, T.T1],
    ],
  },
  {
    note: '7Gb',
    on: [
      [L.BDR, C.BLUE, T.T1],
      [L.BOOK, C.BLUE, T.T1],
    ],
  },
  {
    note: '7F',
    on: [
      [L.UP, C.GREEN_MID, T.T3],
      [L.DOWN, C.PINK, T.T3],
    ],
  },
  {
    note: '7Eb',
    on: [
      [L.TVT, C.BLUE, T.T1],
      [L.SFA, C.BLUE, T.T1],
      [L.TVS, C.GREEN_MID, T.T1],
      [L.SFR, C.PINK, T.T1],
      [L.SFL, C.PINK, T.T1],
    ],
  },
];


const m24: ShortScore = [
  {
    note: '7C',
    on: [
      [L.PR3, C.GREEN_MID, T.T1],
      [L.PL3, C.GREEN_MID, T.T1],
      [L.PR2, C.BLUE, T.T1],
      [L.PL2, C.BLUE, T.T1],
      [L.PR1, C.PINK, T.T1],
      [L.PL1, C.PINK, T.T1],
    ],
  },
  {
    note: '2C',
    on: [
      [L.PR3, C.RED_MID, T.T1],
      [L.PL3, C.RED_MID, T.T1],
      [L.PR2, C.RED_MID, T.T1],
      [L.PL2, C.RED_MID, T.T1],
      [L.PR1, C.RED_MID, T.T1],
      [L.PL1, C.RED_MID, T.T1],
      [L.UP, C.RED_MID, T.T1],
      [L.DOWN, C.RED_MID, T.T1],
      [L.TVT, C.RED_MID, T.T1],
      [L.SFA_OFF, T.T1],
      [L.TVS_OFF, T.T1],
      [L.BDR_OFF, T.T1],
      [L.BOOK_OFF, T.T1],
      [L.SFL_OFF, T.T1],
      [L.SFR_OFF, T.T1],
    ],
    off: [
      [L.PR3_OFF, T.T30],
      [L.PL3_OFF, T.T30],
      [L.PR2_OFF, T.T30],
      [L.PL2_OFF, T.T30],
      [L.PR1_OFF, T.T30],
      [L.PL1_OFF, T.T30],
      [L.UP_OFF, T.T10],
      [L.DOWN_OFF, T.T10],
      [L.TVT_OFF, T.T10],
    ],
  },
];

export const score: Score = buildScoreFromSchortScoreMeasures(
  m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21, m22, m23, m24);