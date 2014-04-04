// an Event is a simultaneity
// Events can contain any combination of notes, rests and directions
//   that happen simultaneously in the score

Leitmotif.Event = function(evt) {
    this.notes = [];
    this.rests = [];
    this.directions = [];
    return this;
};
