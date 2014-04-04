Leitmotif.Context = function(config) {
    config = config || {};
    this.key = config.key || { 'fifths': 0, 'mode': 'major' };
    this.divisions = config.divisions || 192;
    this.time = config.time || { 'beats': 4, 'beat-type': 4 };
    this.tempo = config.tempo || 110;
    this.clef = config.clef || { 'sign': 'G', 'line': 2 };
};
Leitmotif.Context.prototype.setAttr = function(attr, value) {
    this[attr] = value;
};
