# St. James Infirmary (for piano, Web MIDI API & Philips Hue) 

A demo for writing a MIDI score to control Philips Hue lights. 

# Demo

Here is a simple piece demo for a very specific configuration of lights.
The result, is captured in this *poorly edited* video: [YouTube](https://www.youtube.com/watch?v=xJ2nlYEM9ug)
The piece itself is a simple arrangement of the
[St. James Infirmary (Wikipedia)](https://en.wikipedia.org/wiki/St._James_Infirmary_Blues)
 

## What this is (and is not)

As noted above, the code is written specifically for this demo, that is for a specific configuration of lights and for a
very specific score. It does not magically create any effects based on MIDI data. Instead, this allows to map a musical
score to Philips Hue light changes.

The example of this mapping looks like this:

```typescript
// ShortScore is TS interface that makes writing the score
// type checked and less of nightmare
const m3: ShortScore = [  // measure 3
  {
    note: '4Eb', // when E flat of the 4th octave is ..
    on: [ // pressed
      [L.SFR, C.BLUE, T.T2], // perform the light change
      // L is an enum of all the lights;
      // C is a dictionary for all the Colors used in the
      // light show, Color is expressed as a HL/brightness or
      //  an (x, y) coordinate in the CIE 1931 color space
      // (see Hue developers documentation for details); 
      // T is timing objects for transitions
    ],
  },
  ...
];
```

The project consists of:
- An abstraction over MIDI API that filters MIDI-messages leaving only notes and allows to specify a callback for
  note-on and note-off events passing human readable strings, such as `3Ab` (meaning A-flat, third octave) instead of
  MIDI codes.
- An abstraction over Philips Hue API that allows to specify light changes with a bit of structure to them. It also
  performs state diffs and state check to make sure to only send required changes (cause Bridge is slow and requires
  optimization for light changes to propagate faster).
- A "show director" that defines the structure for writing the light effects in terms of notes.
- And an actual score used in the demo.   

This is not meant to be reused as-is and is not written in a form of a reusable library. However,
all that it would take to write another show is to modify the score found in `score/scoreconfig.ts` and
`score/score.ts`. You can also make it into a reusable library (or, rather, a collection of) :)
I might do that some time if I ever going to write another score.

## I mean, what is this, really?

It's uhm... a webpage. It only works in Google Chrome(for it is [the only browser](https://caniuse.com/#feat=midi) to
support Web MIDI API as of Dec 10, 2017).
The page listens to MIDI events in a sequence, which this project allows to specify in an *elegant* manner and
translates those MIDI events to HTTP requests to a Philips Hue Bridge, which this project also allows to specify
in an *elegant* manner. The result is a light show for a song played on a MIDI controller.     

### How to copy the setup

Please let me know if you are actually interested in this. I'll fill out this section.  

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Tens of thousands thanks to *Sean Fujiwara* for shooting the video, inspiration and help along the way! 

