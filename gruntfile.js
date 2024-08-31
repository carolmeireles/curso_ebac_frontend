module.exports = function(grunt) {
	grunt.initConfig({ 
		pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:dist']
            },
            uglify: {
                files: ['src/scripts/**/*.js'],
                tasks: ['uglify']
            }
        },
        less: {
            dist: {
                files: {
                    'dist/styles/main.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.js': 'src/scripts/main.js'
                }
            }
        }
	});

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
}