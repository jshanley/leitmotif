var glyphnames = require('./glyphnames');

module.exports = function(glyphname) {
	var unicode = parseInt(glyphnames[glyphname].codepoint.slice(2), 16);
	return String.fromCharCode(unicode);
};