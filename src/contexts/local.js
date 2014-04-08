Leitmotif.LocalContext = function(globalContext, config) {
	config = config || {};
	this.key = config.key || globalContext.key;
	this.tempo = config.tempo || globalContext.tempo;
	this.time = config.time || globalContext.time;
	this.clef = config.clef || { sign: 'G', line: 2 };
	this.octaveDisplacement = config.octaveDisplacement || 0;
	this.transpose = config.transpose || { diatonic: 0, chromatic: 0 };
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