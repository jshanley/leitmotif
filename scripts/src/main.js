var getGlyph = require('./getGlyph');

var svg = d3.select('body').append('svg:svg')
	.attr('width', 500)
	.attr('height', 500);

var accSharp = svg.append('svg:text')
		.attr('class', 'bravura')
		.attr('x', 60)
		.attr('y', 100)
		.attr('text-anchor', 'middle')
		.text(getGlyph('accidentalSharp'));


