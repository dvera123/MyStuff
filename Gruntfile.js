'use strict';

module.exports = function (grunt) {

	// Time how long tasks take to execute
    require('time-grunt')(grunt);

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
    	'connect:livereload:keepalive'
        ]);
    });

}