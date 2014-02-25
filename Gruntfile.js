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
                files: ['scripts/**/*.js']
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
        }
    });
    grunt.loadNpmTasks('grunt-contrib-gluejs');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less:dev']);
    grunt.registerTask('preview', ['less:dev', 'connect', 'watch']);
};