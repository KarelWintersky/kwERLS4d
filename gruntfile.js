var sources = require('./sources');
var srcList = sources.srcList;

module.exports = function(grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            md: {
                src: [].concat(srcList),
                dest: 'html/erls4d.md'
            }
        },
        markdown: {
            all: {
                files: [
                    {
                        expand: false,
                        src: 'html/erls4d.md',
                        dest: 'html/erls4d.html',
                        ext: '.html'
                    }
                ],
                options: {
                    template: 'tpl.jst'
                }
            }
        },
        'ftp-deploy': {
            build: {
                auth: {
                    host: '77.222.42.180',
                    port: 21,
                    authKey: 'karelwintersky'
                },
                src: 'html/',
                dest: '/wintersky.karel/public_html/erls4',
                exclusions: []
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-ftp-deploy');

    grunt.registerTask('default', ['concat', 'markdown', 'ftp-deploy']);
};