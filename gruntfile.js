module.exports = function (grunt) {
  grunt.initConfig({
    patternpack: {
      run: {},
      build: {},
      release: {}
    }
  });

  grunt.loadNpmTasks('patternpack');

  grunt.registerTask('default', ['patternpack:run']);
}
