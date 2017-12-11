# St. James Infirmary (for piano, Web MIDI API & Philips Hue) 

A demo for writing MIDI score to control Philips Hue lights. 

# Demo

This is really just a one-simple-song demo for a very specific configuration of lights.
The result, is captured in this poorly edited video: [YouTube](https://www.youtube.com/watch?v=xJ2nlYEM9ug)
The song is a simple arrangement of the
[St. James Infirmary Blues (Wikipedia)](https://en.wikipedia.org/wiki/St._James_Infirmary_Blues)
 

## What is this (and is not)

This is just a one-simple-song demo for a very specific configuration of lights and for a very specific
score.
This is not meant to be reused as-is and is not written in a form of a reusable library. However,
all that it would take to write another show is to modify the score found in `score/scoreconfig.ts` and
`score/score.ts`. You can also make it into a reusable library (or a collection of) :)
Although, I have some plans to make another one of these, and so if you are actually going to do that - please let me
know :)

## I mean, what is this, really?

It's a uhm... webpage. That works only in Google Chrome browser (for it is
[the only browser](https://caniuse.com/#feat=midi) to support Web MIDI API as of Dec 10, 2017).
The page listens to MIDI events in a sequence, which this project allows to specify in an ~elegant~ manner and
translates those MIDI events to HTTP requests to a Philips Hue Bridge, which this project also allows to specify
in an ~elegant~ manner. The result is a light show for a song played on a MIDI controller.     

### How to copy the setup

Please let me know if you are actually interested in this. I'll fill out this section.  

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Tens of thousands thanks to *Sean Fujiwara* for shooting the video, inspiration and help along the way! 

