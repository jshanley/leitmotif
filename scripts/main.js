require.config({
	baseUrl: 'scripts/src',
	paths: {
		d3: '../../bower_components/d3/d3'
	}
});

require(['svg/output', 'svg/input'], function(o,i) {
	console.log(o,i);
});