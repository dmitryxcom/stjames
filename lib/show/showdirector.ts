/** @filevoerview Show director. */
import {MidiApi} from '../midi/midiapi';
import {HueApi} from '../hue/hueapi';
import {lightsConfig} from './lightsconfig';
import {Note, NoteState} from '../midi/types';
import {Score, ScoreNote} from './score';

export class ShowDirector {
  private scoreIterator: Iterator<ScoreNote>|undefined;
  private scoreNote: ScoreNote|undefined;

  constructor(private midi: MidiApi, private hue: HueApi, private score: Score) {}

  start() {
    this.hue.setLights(lightsConfig)
      .then(() => {
        this.nextScoreNote();
        this.initiliazeMidiListener();
      });
  }

  initiliazeMidiListener() {
    this.midi.addListener((note) => {this.onMidiNote(note)});
  }

  private onMidiNote(note: Note) {
    // if (note.code != this.scoreNote.note)
    //    return;
    //  if (note.state == ON && this.scoreNote.on) {
    //    changeLigths()
    //    if (!this.scoreNote.off) {nextNote()}
    //  }
    //  if (note.state == OFF && this.scoreNote.off) {
    //    changeLights();
    //    nextNote();
    //  }
    //   if this.nextNote.ON
    if (note.state == NoteState.ON) {
      console.log('current note', this.scoreNote);
      this.nextScoreNote();
      //const change = this.changeGen.next().value;
      //this.hue.changeLights(change);
    }
  }

  private nextScoreNote() {
    if (!this.scoreIterator) {
      this.scoreIterator = this.getScoreIterator();
    }
    const next = this.scoreIterator.next();
    if (next.done) {
      console.log('Show\'s over!');
    }
    this.scoreNote = next.value;
  }

  private *getScoreIterator() {
    yield *this.score;
  }
}

function* changesGenerator() {
  let i = 0;
  while (true) {
    const change = 3;
    if (++i == 5) {
      i = 0;
    }
    yield change;
  }
}