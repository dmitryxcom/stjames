/** @filevoerview Show director. */
import {MidiApi, Note, NoteState} from '../midi/midiapi';
import {HueApi, LightChangeSet} from '../hue/hueapi';
import {L, lightsConfig} from './config';

export class ShowDirector {
  private changeGen: Iterator<LightChangeSet> = changesGenerator();
  constructor(private midi: MidiApi, private hue: HueApi) {}

  start() {
    this.hue.setLights(lightsConfig)
      .then(() => {
        this.initiliazeMidiListener();
      });
  }

  initiliazeMidiListener() {
    this.midi.addListener((note) => {this.onMidiNote(note)});
  }

  private onMidiNote(note: Note) {
    if (note.state == NoteState.ON) {
      const change = this.changeGen.next().value;
      this.hue.changeLights(change);
    }
  }
}

const score: Array<LightChangeSet> = [
  [
    {id: L.BOOK, on: true, xy: [0.1541, 0.0808], bri: 38, t: 0},
  ],
  [
    {id: L.UP, on: true, xy: [0.3019, 0.3067], bri: 165, t: 0},
    {id: L.DOWN, on: true, xy: [0.1824, 0.447], bri: 254, t: 0},
  ],
  [
    {id: L.BOOK, on: false},
    {id: L.UP, on: false, t: 5},
    {id: L.DOWN, on: false, t: 5},
  ],
];

function* changesGenerator() {
  let i = 0;
  while (true) {
    const change = score[i];
    if (++i == score.length) {
      i = 0;
    }
    yield change;
  }
}