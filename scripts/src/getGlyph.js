define('getGlyph', ['./glyphnames'],
function(glyphnames) {
	return function(glyph_name) {
		var unicode = parseInt(glyphnames[glyph_name].codepoint.slice(2), 16);
		return String.fromCharCode(unicode);
	}
}
);