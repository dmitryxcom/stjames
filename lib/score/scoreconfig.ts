import {Color, LightState, Time,} from './scorehelper';
import {Light} from '../show/lightsconfig';

export const Colors = {
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
  GREEN_LIGHT: {xy: [0.1977, 0.5716], bri: 254} as Color,
  GREEN_MID: {xy: [0.2115, 0.6067], bri: 165} as Color,
};


export const Times = {
  T1: {t: 1} as Time,
  T2: {t: 2} as Time,
  T3: {t: 3} as Time,
  T5: {t: 5} as Time,
  T10: {t: 10} as Time,
  T20: {t: 20} as Time,
  T30: {t: 30} as Time,
  T50: {t: 50} as Time,
};


export const Lights = {
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