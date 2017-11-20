/** @filevoerview Show director. */
import {MidiApi} from '../midi/midiapi';
import {HueApi, LightChangeSet} from '../hue/hueapi';
import {lightsConfig} from './lightsconfig';
import {Note, NoteState, PitchCode} from '../midi/types';
import {Score, ScoreNote} from './score';
import {SHOW_ENABLE_DEBUG, SHOW_REST_ON_PITCH} from '../config';

export class ShowDirector {
  private scoreIterator: Iterator<ScoreNote>|undefined;
  private scoreNote: ScoreNote|undefined;
  private offNoteHandlers: PitchCodeToChangeSetMap = {};

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
    this.hue.allOff();
    this.scoreIterator = undefined;
    this.nextScoreNote();
  }

  private initiliazeMidiListener() {
    this.midi.addListener((note) => {this.onMidiNote(note)});
  }

  private onMidiNote(note: Note) {
    if (note.state == NoteState.ON && note.pitch == SHOW_REST_ON_PITCH) {
      this.reset();
      return;
    }
    if (note.state == NoteState.OFF) {
      this.playOffNote(note);
      return;
    }
    if (!this.scoreNote) {
      // No notes further.
      return;
    }
    if (!note.codes.includes(this.scoreNote.note)) {
      // Not interesting.
      return;
    }
    if (this.scoreNote.on) {
      if (SHOW_ENABLE_DEBUG) {
        console.debug('Show note playing on', this.scoreNote);
      }
      this.addOffNote();
      this.hue.changeLights(this.scoreNote.on);
      this.nextScoreNote();
      return;
    }
  }

  private addOffNote() {
    if (!this.scoreNote || !this.scoreNote.off) {
      return;
    }
    this.offNoteHandlers[this.scoreNote.note] = this.scoreNote.off;
  }

  private playOffNote(note: Note) {
    for (const code of Object.keys(this.offNoteHandlers)) {
      if (!note.codes.includes((code as PitchCode))) {
        continue;
      }
      const changeSet = this.offNoteHandlers[code];
      delete this.offNoteHandlers[code];
      this.hue.changeLights(changeSet);
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

interface PitchCodeToChangeSetMap {
  [key: string]: LightChangeSet;
}