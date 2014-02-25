define(['d3'],
function(d3) {
	var outputArea = d3.select('.output-area').append('svg:svg')
		.attr('width', 800)
		.attr('height', 300);

	return outputArea;
});