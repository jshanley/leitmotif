module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		gluejs: {
			build: {
				options: {
					export: 'leitmotif',
					main: 'scripts/src/main.js'
				},
				src: 'scripts/src/**/*.js',
				dest: 'scripts/leitmotif.js'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-gluejs');

	grunt.registerTask('default', ['gluejs']);
};