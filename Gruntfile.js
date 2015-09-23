module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	 connect: {
	     server: {
	       options: {
	         port: 9002,
	         base: './',
				open: true,
				keepalive: true
	       }
	     }
	   }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['connect']);

};
