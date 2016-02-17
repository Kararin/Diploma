module.exports = function(grunt) {

    grunt.initConfig({
        pkg: 'package.json',

        reactBase: 'app/es6',
        reactApp: '<%= reactBase%>/app',
        vanillaApp: 'app/vanilla/',
        temp: 'temp/',
        tempApp: 'temp/app/',

        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015', 'react']
            },
            files: {
                expand: true,
                cwd: '<%= reactBase%>',
                src: ['**/*.js', '**/*.jsx'],
                dest: '<%=temp%>',
                ext: '.js'
            }
        },

        copy: {
            html: {
                src: '<%= reactBase%>/index.html',
                dest: '<%= vanillaApp%>/index.html'
            }
        },

        browserify: {
            '<%= vanillaApp%>/main.js': '<%= temp%>**/*.js',
            options: {
                browserifyOptions: {
                    debug: true
                }
            },
        },

        clean: {
            vanilla: {
                expand: true,
                src: '<%= vanillaApp%>'
            },

            temp: {
                expand: true,
                src: '<%= temp%>'
            }
        },

        watch: {
            scripts: {
                files: ['<%= reactApp%>/**/*.jsx', '<%= reactApp%>/**/*.js'],
                tasks: ['build'],
                options: {
                    spawn: false
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-reactify');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['clean:vanilla', 'babel', 'browserify', 'copy', 'clean:temp']);
};
