// .js is becase TSC is fucking stupid.
import { MIDI_INPUT_PORT_ID as INPUT_PORT_ID, MIDI_RANGE, DEBUG_MIDI_DATA } from "../config.js";
import { MidiApi } from './midiapi.js';
export function initMidi() {
    return navigator.requestMIDIAccess()
        .then(onReady)
        .then(debugIo)
        .then((midiAccess) => {
        const config = {
            midiRangeStart: MIDI_RANGE[0],
            midiRangeEnd: MIDI_RANGE[1],
            portId: INPUT_PORT_ID,
            enableDebug: DEBUG_MIDI_DATA,
        };
        return new MidiApi(midiAccess, config);
    });
}
function onReady(midiAccess) {
    console.info('MIDI ready!');
    return midiAccess;
}
function debugIo(midiAccess) {
    if (!DEBUG_MIDI_DATA)
        return midiAccess;
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
//# sourceMappingURL=midi.js.map