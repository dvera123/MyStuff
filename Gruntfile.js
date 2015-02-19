'use strict';

module.exports = function (grunt) {

    // load all grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('assemble');

    grunt.initConfig({

    	// compile handlebars files into html
        assemble: {
            options: {
                flatten: true,
                data: ['app/{pages,components,data}/**/*.json'],
                layout: 'main.hbs',
                layoutdir: 'app/layouts',
                partials: ['app/components/**/*.hbs']
            },
            server: {
                files: {
                    '.tmp/': ['app/pages/**/*.hbs']
                }
            }
        },

         watch: {
            options: {
                livereload: true,
                spawn: false
            },
            assemble: {
                files: ['app/**/*.{hbs,json}'],
                tasks: ['assemble:server']
            }
        },

        connect: {
            options: {
                port: 3000,
                livereload: 35729,
                hostname: 'localhost'
            },

            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        'app'
                    ]
                }
            }
        }

    });

    grunt.registerTask('server', function (target) {
        grunt.task.run([
    		'assemble:server',
    		'connect:livereload',
    		'watch'
        ]);
    });

}