/** @fileoverview MIDI API bits. */
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NoteState;
    (function (NoteState) {
        NoteState["ON"] = "on";
        NoteState["OFF"] = "off";
    })(NoteState = exports.NoteState || (exports.NoteState = {}));
    const MIDI_CMD_ON = 0x90;
    const MIDI_CMD_OFF = 0x80;
    class MidiApi {
        constructor(midiAccess, config) {
            this.midiAccess = midiAccess;
            this.config = config;
            this.initialized = false;
            this.noteCallback = null;
            this.pitchMap = null;
        }
        addListener(noteCallback) {
            if (!this.initialized) {
                this.initialize();
            }
            this.noteCallback = noteCallback;
        }
        initialize() {
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
        onMidiMessage(e) {
            if (this.config.enableDebug) {
                const debugData = Array.from(e.data).map((value) => `0x${value.toString(16)}`).join(' ');
                console.debug(`MIDI message received: [${debugData}]`);
            }
            const [cmd, pitch, velo] = e.data;
            if (cmd != MIDI_CMD_ON && cmd != MIDI_CMD_OFF)
                return;
            if (pitch < this.config.midiRangeStart || pitch > this.config.midiRangeEnd)
                return;
            const codes = this.pitchMap[pitch];
            const note = {
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
    exports.MidiApi = MidiApi;
    const PITCHES = [
        ['C'],
        ['C#', 'Db'],
        ['D'],
        ['D#', 'Eb'],
        ['E', 'Fb'],
        ['F', 'E#'],
        ['F#', 'Gb'],
        ['G'],
        ['G#', 'Ab'],
        ['A'],
        ['A#', 'Bb'],
        ['B'],
    ];
    const PITCH_0_UNDER = 'B#';
    const PITCH_11_ABOVE = 'Cb';
    function buildPitchCodeMap(midiRangeStart, midiRangeEnd) {
        const result = {};
        for (let i = midiRangeStart; i <= midiRangeEnd; i++) {
            const octave = Math.floor(i / 12);
            const pitches = PITCHES[i % 12];
            const codes = pitches.map((p) => `${octave}${p}`);
            if (i % 12 == 0) {
                codes.push(`${octave - 1}${PITCH_0_UNDER}`);
            }
            if (i % 12 == 11) {
                codes.push(`${octave + 1}${PITCH_11_ABOVE}`);
            }
            result[i] = codes;
        }
        return result;
    }
    function noteToString(note) {
        return `${note.state} [${note.codes.join(',')}] (${note.velo})`;
    }
    function noteToPrimaryString(note) {
        return `${note.state} ${note.codes} (${note.velo})`;
    }
});
//# sourceMappingURL=midiapi.js.map