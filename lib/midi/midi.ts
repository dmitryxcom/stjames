import {MIDI_INPUT_PORT_ID as INPUT_PORT_ID, MIDI_RANGE, DEBUG_MIDI_DATA} from "../config";
import {MidiApi} from './midiapi';
import {MidiApiConfig} from './types';



export function initMidi(): Promise<MidiApi> {
  return navigator.requestMIDIAccess()
    .then(onReady)
    .then(debugIo)
    .then((midiAccess) => {
      const config: MidiApiConfig = {
        midiRangeStart: MIDI_RANGE[0],
        midiRangeEnd: MIDI_RANGE[1],
        portId: INPUT_PORT_ID,
        enableDebug: DEBUG_MIDI_DATA,
      };
      return new MidiApi(midiAccess, config);
    });
}


function onReady(midiAccess: WebMidi.MIDIAccess) {
  console.info('MIDI ready!');
  return midiAccess;
}


function debugIo(midiAccess: WebMidi.MIDIAccess) {
  if (!DEBUG_MIDI_DATA) return midiAccess;
  for (let entry of midiAccess.inputs) {
    const port = entry[1];
    const msg = `Input port [type: ${port.type}] id: ${port.id}, name: ${port.name}`;
    console.debug(msg);
  }

  for (let entry of midiAccess.outputs) {
    const port = entry[1];
    const msg = `Input port [type: ${port.type}] id: ${port.id}, name: ${port.name}`;
    console.debug(msg);
  }

  // Keep that sweet chain going.
  return midiAccess;
}