module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less: {
			dev: {
				options: {
					paths: ['styles/less']
				},
				files: {
					'styles/main.css': 'styles/less/main.less'
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 8888
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			html: {
				files: ['index.html']
			},
			js: {
				files: ['scripts/src/**/*.js'],
				tasks: ['gluejs']
			},
			less: {
				options: {
					livereload: false
				},
				files: ['styles/less/**/*.less'],
				tasks: ['less'],
			},
			css: {
				files: ['styles/main.css']
			}
		},
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
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', ['gluejs', 'less:dev']);
	grunt.registerTask('preview', ['gluejs', 'less:dev', 'connect', 'watch']);
};