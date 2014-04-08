(function() {
  var Leitmotif = function(config) {
    this.ctx = new Leitmotif.GlobalContext(config);
    return this;
  };

  Leitmotif.GlobalContext = function(config) {
    config = config || {};
    this.key = config.key || {
      fifths: 0,
      mode: 'major'
    };
    this.time = config.time || {
      beat: 4,
      beatType: 4
    };
    this.tempo = config.tempo || 110;
    this.parts = config.parts || [{
      name: 'P1',
      staves: 1
    }];
    this.divisions = config.divisions || 192;
    this.meta = config.meta || {};
    return this;
  };
  Leitmotif.GlobalContext.prototype.setTempo = function(value) {
    if (typeof value !== 'number' || value % 1 !== 0 || value < 0) {
      throw new Error('Unable to set tempo. Value must be a positive integer.');
    }
    this.tempo = value;
  };
  Leitmotif.GlobalContext.prototype.setTime = function(value) {
    var timeObject;
    if (typeof value === 'object' && value.beat && value.beatType) {
      timeObject = value;
    } else if (typeof value === 'string' && /^\d+\/\d+$/.test(value)) {
      var arr = value.split('/');
      timeObject = {
        beat: parseInt(arr[0], 10),
        beatType: parseInt(arr[1], 10)
      };
    } else {
      throw new Error('Unable to set time. Value must be either an object with properties of "beat" and "beatType", or a string representation such as "4/4".');
    }
    var binaryBeatType = timeObject.beatType.toString(2);
    if (!/^1(?:0)*$/.test(binaryBeatType)) {
      throw new Error('Unable to set time. Time.beatType (time signature denominator) must be a power of 2.')
    }
    this.time = timeObject;
  };
  Leitmotif.GlobalContext.prototype.setKey = function(value) {
    this.key = value;
  };
  Leitmotif.GlobalContext.prototype.setDivisions = function(value) {
    this.divisions = value;
  };
  Leitmotif.GlobalContext.prototype.addPart = function(name, staves) {
    if (typeof name === 'object' && name.name && name.staves) {
      this.parts.push(name);
    } else {
      this.parts.push({
        name: name,
        staves: staves
      });
    }
  };
  Leitmotif.GlobalContext.prototype.removePart = function(name) {
    switch (typeof name) {
      case 'string':
        for (var p = 0; p < this.parts.length; p++) {
          if (this.parts[p].name === name) {
            this.parts.splice(p, 1);
            return;
          }
        }
        break;
      case 'number':
        if (this.parts.length > name) {
          this.parts.splice(name);
        }
        break;
    }
  };
  Leitmotif.LocalContext = function(globalContext, config) {
    config = config || {};
    this.key = config.key || globalContext.key;
    this.tempo = config.tempo || globalContext.tempo;
    this.time = config.time || globalContext.time;
    this.clef = config.clef || {
      sign: 'G',
      line: 2
    };
    this.octaveDisplacement = config.octaveDisplacement || 0;
    this.transpose = config.transpose || {
      diatonic: 0,
      chromatic: 0
    };
    return this;
  };
  Leitmotif.LocalContext.prototype.setKey = function(value) {
    this.key = value;
  };
  Leitmotif.LocalContext.prototype.setTempo = function(value) {
    this.tempo = value;
  };
  Leitmotif.LocalContext.prototype.setTime = function(value) {
    this.time = value;
  };
  Leitmotif.LocalContext.prototype.setClef = function(value) {
    this.clef = value;
  };
  Leitmotif.LocalContext.prototype.setOctaveDisplacement = function(value) {
    this.octaveDisplacement = value;
  };
  // an Event is a simultaneity
  // Events can contain any combination of notes, rests and directions
  //   that happen simultaneously in the score

  Leitmotif.Event = function(evt) {
    this.notes = evt.notes || [];
    this.rests = evt.rests || [];
    this.directions = evt.directions || [];
    return this;
  };

  if (typeof define === 'function' && define.amd) {
    define(Leitmotif);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = Leitmotif;
  } else {
    this.Leitmotif = Leitmotif;
  }
})();
