## Notes on Structure/Workflow

### Core Ideas
Musical notes and written directions are both tied to a chronology of events. A musical instruction cannot exist outside of time. Even instructions that are general guidelines for an entire performance are tied to the time during which the music is being performed.

Notation logic should reflect this. A musical score should be a reflection of the series of musical events that it is meant to describe.

#### Events
An 'event' shall be defined as any instruction or set of instructions which are meant to occur or be interpreted at a single moment (ie. simultaneously), that can be expressed in musical notation. This includes notes, rests, and musical directions including written instructions or performance guidelines.

Events can occur in a single voice or across many voices and/or staves.

An event may be filtered by part or by stave so that individual parts may be easily rendered. 

#### Global context
Each score will define a global context, which does the following:
- States how many parts the score contains, and how many staves per part
- Sets the global divisions value of divisions per quarter note
- May set a global key and tempo (which can be overridden by individual parts)
- May define a title, composer or other metadata

An event may alter the global context, as in a key or tempo change.

#### Local context
Each stave will have a local context, which does the following:
- Defines a clef and key signature
- Contains state of accidentals used on a per-measure basis

An event may alter the local context, as in a clef, key, or tempo change.
