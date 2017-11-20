import {Light} from '../show/lightsconfig';
import {PitchCode} from '../midi/types';
import {LightChange} from '../hue/hueapi';
import {Score, ScoreNote} from '../show/score';


export interface Color {
  xy: [number, number],
  bri: number,
}


export interface LightState {
  id: Light,
  on?: boolean,
}


export interface Time {
  t: number;
}


export interface ShortScoreNote {
  note: PitchCode,
  on?: ShortLightChange[],
  off?: ShortLightChange[],
}


export type ShortLightChange = [LightState] | [LightState, Time] | [LightState, Color] | [LightState, Color, Time];


export type ShortScore = ShortScoreNote[];


export function buildScoreFromSchortScoreMeasures(...measures: ShortScore[]): Score {
  return [].concat(...measures.map((measure) => measure.map((note) => shortScoreNoteTocoreNote(note))));
}


function shortScoreNoteTocoreNote(shortNote: ShortScoreNote): ScoreNote {
  const result: ScoreNote = {note: shortNote.note};
  if (shortNote.on) {
    result.on = shortNote.on.map(shortLightChangeToLightChange);
  }
  if (shortNote.off) {
    result.off = shortNote.on.map(shortLightChangeToLightChange);
  }
  return result;
}

function shortLightChangeToLightChange(shortChange: ShortLightChange): LightChange {
  return {
    ...shortChange[0],
    ...(shortChange.length > 1 ? shortChange[1] : null),
    ...(shortChange.length > 2 ? shortChange[2] : null)
  };
}