module.exports = function(grunt) {
    
    var watchFiles = {
        clientViews: ['public/*.html'],
        clientJS: ['public/*.js'],
        clientCSS: ['public/*.css']
    };
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            clientViews: {
                files: watchFiles.clientViews,
                options: {
                    livereload: true,
                }
            },
            clientJS: {
                files: watchFiles.clientJS,
                tasks: ['jshint', 'test'],
                options: {
                    livereload: true
                }
            },
            clientCSS: {
                files: watchFiles.clientCSS,
                tasks: ['csslint'],
                options: {
                    livereload: true
                }
            }
        },
        jshint: {
            all: {
                src: watchFiles.clientJS,
                options: {
                    jshintrc: true
                }
            }
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc',
            },
            all: {
                src: watchFiles.clientCSS
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    nodeArgs: ['--debug'],
                    ext: 'js,html'
                }
            }
        },
        concurrent: {
            default: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true,
                limit: 10
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }        
    });
    
    require('load-grunt-tasks')(grunt);
    
    grunt.registerTask('default', ['lint', 'concurrent:default']);
    
    grunt.registerTask('lint', ['jshint', 'csslint']);
    
    grunt.registerTask('test', ['karma:unit']);
};