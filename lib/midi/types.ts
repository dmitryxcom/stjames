/** @fileoverview MIDI API bits. */

export interface MidiApiConfig {
  midiRangeStart: number;
  midiRangeEnd: number;
  portId?: string;
  enableDebug?: boolean;
}

export enum NoteState {
  ON = 'on',
  OFF = 'off'
}

export interface Note {
  state: NoteState;
  pitch: number;
  velo: number;
  codes: PitchCode[];
}

export interface NoteCallback {
  (note: Note): void;
}

export type PitchCode =
  '0C' |  '0C#' | '0Db' | '0D' | '0D#' | '0Eb' | '0E' | '0E#' | '0Fb' | '0F' | '0F#' | '0Gb' | '0G' | '0G#' | '0Ab' | '0A' | '0A#' | '0Bb' | '0B' | '0B#' | '0Cb' |
  '1C' | '1C#' | '1Db' | '1D' | '1D#' | '1Eb' | '1E' | '1E#' | '1Fb' | '1F' | '1F#' | '1Gb' | '1G' | '1G#' | '1Ab' | '1A' | '1A#' | '1Bb' | '1B' | '1B#' | '1Cb' |
  '2C' | '2C#' | '2Db' | '2D' | '2D#' | '2Eb' | '2E' | '2E#' | '2Fb' | '2F' | '2F#' | '2Gb' | '2G' | '2G#' | '2Ab' | '2A' | '2A#' | '2Bb' | '2B' | '2B#' | '2Cb' |
  '3C' | '3C#' | '3Db' | '3D' | '3D#' | '3Eb' | '3E' | '3E#' | '3Fb' | '3F' | '3F#' | '3Gb' | '3G' | '3G#' | '3Ab' | '3A' | '3A#' | '3Bb' | '3B' | '3B#' | '3Cb' |
  '4C' | '4C#' | '4Db' | '4D' | '4D#' | '4Eb' | '4E' | '4E#' | '4Fb' | '4F' | '4F#' | '4Gb' | '4G' | '4G#' | '4Ab' | '4A' | '4A#' | '4Bb' | '4B' | '4B#' | '4Cb' |
  '5C' | '5C#' | '5Db' | '5D' | '5D#' | '5Eb' | '5E' | '5E#' | '5Fb' | '5F' | '5F#' | '5Gb' | '5G' | '5G#' | '5Ab' | '5A' | '5A#' | '5Bb' | '5B' | '5B#' | '5Cb' |
  '6C' | '6C#' | '6Db' | '6D' | '6D#' | '6Eb' | '6E' | '6E#' | '6Fb' | '6F' | '6F#' | '6Gb' | '6G' | '6G#' | '6Ab' | '6A' | '6A#' | '6Bb' | '6B' | '6B#' | '6Cb' |
  '7C' | '7C#' | '7Db' | '7D' | '7D#' | '7Eb' | '7E' | '7E#' | '7Fb' | '7F' | '7F#' | '7Gb' | '7G' | '7G#' | '7Ab' | '7A' | '7A#' | '7Bb' | '7B' | '7B#' | '7Cb' |
  '8C' | '8C#' | '8Db' | '8D' | '8D#' | '8Eb' | '8E' | '8E#' | '8Fb' | '8F' | '8F#' | '8Gb' | '8G' | '8G#' | '8Ab' | '8A' | '8A#' | '8Bb' | '8B' | '8B#' | '8Cb' |
  '9C' | '9C#' | '9Db' | '9D' | '9D#' | '9Eb' | '9E' | '9E#' | '9Fb' | '9F' | '9F#' | '9Gb' | '9G' | '9G#' | '9Ab' | '9A' | '9A#' | '9Bb' | '9B' | '9B#' | '9Cb';