import {MidiApiConfig, Note, NoteCallback, NoteState, PitchCode} from './types';


const MIDI_CMD_ON = 0x90;
const MIDI_CMD_OFF = 0x80;


interface PitchCodeMap {
  [index: number]: PitchCode[];
}


export class MidiApi {
  private initialized = false;
  private noteCallback: NoteCallback|null = null;
  private pitchMap: PitchCodeMap|null = null;

  constructor(private midiAccess: WebMidi.MIDIAccess, private config: MidiApiConfig) {}

  addListener(noteCallback: NoteCallback) {
    if (!this.initialized) {
      this.initialize();
    }
    this.noteCallback = noteCallback;
  }

  private initialize() {
    this.initialized = true;
    this.pitchMap = buildPitchCodeMap(this.config.midiRangeStart, this.config.midiRangeEnd);
    this.midiAccess.inputs.forEach((port) => {
      if (!this.config.portId || (this.config.portId == port.id)) {
        port.onmidimessage = (event) => {
          this.onMidiMessage(event);
        };
      }
    });
  }

  private onMidiMessage(e: WebMidi.MIDIMessageEvent) {
    if (this.config.enableDebug) {
      const debugData = Array.from(e.data).map((value) => `0x${value.toString(16)}`).join(' ');
      console.debug(`MIDI message received: [${debugData}]`);
    }
    const [cmd, pitch, velo] = e.data;
    if (cmd != MIDI_CMD_ON && cmd != MIDI_CMD_OFF) return;
    if (pitch < this.config.midiRangeStart || pitch > this.config.midiRangeEnd) return;
    const codes = this.pitchMap[pitch];
    const note: Note = {
      state: cmd == MIDI_CMD_ON ? NoteState.ON : NoteState.OFF,
      pitch: pitch,
      velo: velo,
      codes: codes,
    };
    if (this.config.enableDebug) {
      console.debug(`MIDI note: ${noteToString(note)}`);
    }
    if (this.noteCallback) {
      this.noteCallback(note);
    }
  }
}


const PITCHES = [
  ['C'], // 0
  ['C#', 'Db'], // 1
  ['D'], // 2
  ['D#', 'Eb'], // 3
  ['E', 'Fb'], // 4
  ['F', 'E#'], // 5
  ['F#', 'Gb'], // 6
  ['G'], // 7
  ['G#', 'Ab'], // 8
  ['A'], // 9
  ['A#', 'Bb'], // 10
  ['B'], // 11
];
const PITCH_0_UNDER = 'B#';
const PITCH_11_ABOVE = 'Cb';


function buildPitchCodeMap(midiRangeStart: number, midiRangeEnd: number): PitchCodeMap {
  const result: PitchCodeMap = {};
  for (let i = midiRangeStart; i <= midiRangeEnd; i++) {
    const octave = Math.floor(i / 12);
    const pitches = PITCHES[i % 12];
    const codes: PitchCode[] = pitches.map((p) => (`${octave}${p}` as PitchCode));
    if (i % 12 == 0) {
      codes.push((`${octave - 1}${PITCH_0_UNDER}` as PitchCode));
    }
    if (i % 12 == 11) {
      codes.push((`${octave + 1}${PITCH_11_ABOVE}` as PitchCode));
    }
    result[i] = codes;
  }
  return result;
}


function noteToString(note: Note): string {
  return `${note.state} [${note.codes.join(',')}] (${note.velo})`;
}