define(['jquery', 'd3', 'getGlyph'],
function($, d3, getGlyph) {
	console.log('d3:', d3);
	var width = $(window).width();
	var height = 300;
	var inputArea = d3.select('.input-area').append('svg:svg')
		.attr('class', 'svg-input')
		.attr('width', width)
		.attr('height', height);

	var spacing = height / 12;

	// draw staff on input area
	var staff = inputArea.append('svg:g')
		.attr('class', 'input-staff');

	// returns the y-position of a given line (1 - 5) or ledger (-3 - -1) (6 - 8)
	function onLine(line) {
		// middle line (3) is height / 2
		var mid = height / 2;
		return (mid + (3 * spacing)) - (line * spacing);
	}
	function onSpace(space) {
		var mid = height / 2;
		return (mid + (2.5 * spacing)) - (space * spacing);
	}

	// draw staff lines
	for (var s = 1; s <= 5; s += 1) {
		staff.append('svg:line')
			.attr('class', 'staff line line' + s.toString())
			.attr('x1', 0)
			.attr('x2', width)
			.attr('y1', onLine(s))
			.attr('y2', onLine(s));
	}
	// draw upper ledgers
	for (var lu = 6; lu <= 8; lu += 1) {
		staff.append('svg:line')
			.attr('class', 'ledger line upper line' + lu.toString())
			.attr('x1', 0)
			.attr('x2', width)
			.attr('y1', onLine(lu))
			.attr('y2', onLine(lu));
	}
	// draw lower ledgers
	for (var ld = 0; ld >= -2; ld -= 1) {
		staff.append('svg:line')
			.attr('class', 'ledger line lower line' + ld.toString())
			.attr('x1', 0)
			.attr('x2', width)
			.attr('y1', onLine(ld))
			.attr('y2', onLine(ld));
	}

	function drawDirections(cleftype, key, time) {
		var padding = spacing;
		var directions = staff.append('svg:g')
			.attr('class', 'directions')
			.attr('font-size', spacing * 4);


		var clef = directions.append('svg:text')
			.attr('class', 'clef')
			.attr('x', padding)
			.attr('y', function() {
				if (cleftype === 'G') { return onLine(2); }
				else if (cleftype === 'F') { return onLine(4); }
			})
			.text(function(){
				if (cleftype === 'G') { return getGlyph('gClef'); }
				else if (cleftype === 'F') { return getGlyph('fClef'); }
			});
		var clefWidth = spacing * 3;

		var timesig = directions.append('svg:g')
			.attr('class', 'timesig')
			.attr('transform', 'translate(200,0)')
			.attr('text-anchor','middle');

		var numerator = timesig.append('svg:text')
			.attr('x', 0)
			.attr('y', onLine(4))
			.text(getGlyph('timeSig3'));
		var denominator = timesig.append('svg:text')
			.attr('x', 0)
			.attr('y', onLine(2))
			.text(getGlyph('timeSig4'));
	}

	drawDirections('G', 'Db', '3/4');

	return inputArea;

}
);