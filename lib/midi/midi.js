define(["require", "exports", "../config", "./midiapi"], function (require, exports, config_1, midiapi_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function initMidi() {
        return navigator.requestMIDIAccess()
            .then(onReady)
            .then(debugIo)
            .then((midiAccess) => {
            const config = {
                midiRangeStart: config_1.MIDI_RANGE[0],
                midiRangeEnd: config_1.MIDI_RANGE[1],
                portId: config_1.MIDI_INPUT_PORT_ID,
                enableDebug: config_1.DEBUG_MIDI_DATA,
            };
            return new midiapi_1.MidiApi(midiAccess, config);
        });
    }
    exports.initMidi = initMidi;
    function onReady(midiAccess) {
        console.info('MIDI ready!');
        return midiAccess;
    }
    function debugIo(midiAccess) {
        if (!config_1.DEBUG_MIDI_DATA)
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
});
//# sourceMappingURL=midi.js.map