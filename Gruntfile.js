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
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '_site/css',
          //src: ['*.css', '!*.min.css'],
          src: ['clean.css'],
          dest: '_site/css',
          ext: '.min.css',
        }]
      }
    },
    imagemin: {
      options: {
        optimizationLevel: 7 // 7 = 240 trials
      },
      main: {
        files: [{
            expand: true, // Enable dynamic expansion
            cwd: 'img', // Where to find images
            src: '*.{png,PNG,jpg,JPG,gif,GIF,jpeg,JPEG}', // Search for all image types
            dest: 'img' // Where to save compressed images to (overwrite)
          }],
        },

      baytv: {
        files:[{
              expand: true, // Enable dynamic expansion
              cwd: 'img/baytv', // Where to find images
              src: '*.{png,PNG,jpg,JPG,gif,GIF,jpeg,JPEG}', // Search for all image types
              dest: 'img/baytv' // Where to save compressed images to (overwrite)
            }],
          },
    },
    uncss: {
      dist: {
        options: {
          stylesheets: ['css/main.css','css/normalize.css','css/yotfh.css'] // List of stylesheets to clean up
        },
        files: {
          '_site/css/clean.css': ['_site/index.html'], // What files to check for usage
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-uncss');

  // Default task(s).
  grunt.registerTask('default', ['imagemin', 'uncss', 'cssmin']);

};