module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    smash: {
      build: {
        src: 'src/index.js',
        dest: 'leitmotif.js'
      }
    },

    uglify: {
      standalone: {
        files: {
          'leitmotif.min.js': ['leitmotif.js']
        }
      }
    },

    jsbeautifier: {
      files: ['leitmotif.js'],
      options: {
        js: {
          indentChar: ' ',
          indentSize: 2,
          indentWithTabs: false
        }
      }
    },

    nodeunit: {
        all: ['test/*_test.js']
    }
  });

  grunt.loadNpmTasks('grunt-smash');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('default', ['build', 'test']);
  grunt.registerTask('build', ['smash', 'jsbeautifier', 'uglify']);
  grunt.registerTask('test', ['nodeunit']);
};
