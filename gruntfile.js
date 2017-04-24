module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  		sass: {
      			options: {
        				sourceMap: true
      			},
      			dist: {
        				files: {
          						'style.css': 'style.sass'
        				}
      			}
    	},
      watch: {
            scripts: {
                    files: ['style.sass'],
                    tasks: ['sass'],
                    options: {
                        spawn: false,
                    },
            } 
      },
      browserSync: {
                  bsFiles: {
                          src : ['*.css', //css/*.css' - * oznacza jakikolwiek plik css szuka ze zbioru wszystkich
                                '*.html', // kiedy jest określony 'assets/css/style.css - szuka wtedy konkretny plik css
                                '*.js'
                          ]
                  },                                   
                  options: {
                          server: {
                                baseDir: "./"
                          }
                  }
      }
  
  });

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync'); 
  
  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch', 'browserSync']);
};