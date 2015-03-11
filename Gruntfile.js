module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //uglify: {
    //  options: {
    //    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //  },
    //  build: {
    //    src: 'src/<%= pkg.name %>.js',
    //    dest: 'build/<%= pkg.name %>.min.js'
    //  }
    //}
    imagemin: {
      //static: {
        options: {
          optimizationLevel: 7 // 7 = 240 trials
        },
        files: {
          expand: true, // Enable dynamic expansion
          cwd: '_site/img', // Where to find images
          src: '*.{png,PNG,jpg,JPG,gif,GIF,jpeg,JPEG}', // Search for all image types
          dest: '_site/img' // Where to save compressed images to (overwrite)
        }
      //}
    }
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', ['imagemin']);

};