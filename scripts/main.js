(function() {

	'use strict';

	require.config({
		baseUrl: 'scripts/src',
		paths: {
			'jquery': '../../vendor/jquery/dist/jquery',
			'd3': '../../vendor/d3/d3'
		}
	});

	require(['app'], function(app) {
		app.init();
	});

})();