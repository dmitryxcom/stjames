/** @filevoerview Show director. */
import {MidiApi} from '../midi/midiapi';
import {HueApi} from '../hue/hueapi';
import {lightsConfig} from './lightsconfig';
import {Note, NoteState} from '../midi/types';
import {Score, ScoreNote} from './score';
import {SHOW_ENABLE_DEBUG} from '../config';

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

  reset() {
    console.log('Resetting the show.');
    this.scoreIterator = undefined;
    this.nextScoreNote();
  }

  private initiliazeMidiListener() {
    this.midi.addListener((note) => {this.onMidiNote(note)});
  }

  private onMidiNote(note: Note) {
    if (!this.scoreNote) {
      // No notes further.
      return;
    }
    if (!note.codes.includes(this.scoreNote.note)) {
      // Not interesting.
      return;
    }
    if (note.state == NoteState.ON && this.scoreNote.on) {
      if (SHOW_ENABLE_DEBUG) {
        console.debug('Show note playing on', this.scoreNote);
      }
      this.hue.changeLights(this.scoreNote.on);
      return;
    }
    if (note.state == NoteState.OFF) {
      if (this.scoreNote.off) {
        if (SHOW_ENABLE_DEBUG) {
          console.debug('Show note playing off', this.scoreNote);
        }
        this.hue.changeLights(this.scoreNote.off);
      }
      this.nextScoreNote();
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
    if (SHOW_ENABLE_DEBUG) {
      console.debug('Next note is', this.scoreNote);
    }
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