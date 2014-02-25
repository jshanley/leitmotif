define(['d3'],
function(d3) {
	console.log('d3:', d3);
	var height = 300;
	var inputArea = d3.select('.input-area').append('svg:svg')
		.attr('width', 800)
		.attr('height', height);


	// draw staff on input area
	var staff = inputArea.append('svg:g')
		.attr('class', 'input-staff');
	var spacing = height / 15;
	for (var s = 1; s < 15; s++) {
		staff.append('svg:line')
			.attr('x1', 0)
			.attr('x2', 100)
			.attr('y1', s * spacing)
			.attr('y2', s * spacing)
			.attr('stroke', function() {
				if (s > 4 && s < 10) {
					return '#333'
				} else {
					return '#999'
				}
			});
	}

	return inputArea;

}
);