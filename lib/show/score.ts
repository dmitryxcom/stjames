// define score type here

import {LightChangeSet} from '../hue/hueapi';
import {PitchCode} from '../midi/types';

export type Score = ScoreNote[];

export type ScoreNote = {
  note: PitchCode;
  on?: LightChangeSet;
  off?: LightChangeSet;
}