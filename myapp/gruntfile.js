module.exports = function(grunt) {

    grunt.initConfig({
        pkg: 'package.json',

        reactBase: 'app/es6',
        reactApp: '<%= reactBase%>/app',
        vanillaApp: 'public/javascripts',
        cssVanillaApp: 'public/stylesheets',
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
            css: {
                src: '<%= reactBase%>/css/*.css',
                dest: '<%= cssVanillaApp%>/style.css'
            }
        },

        browserify: {
            '<%= vanillaApp%>/main.js': '<%= temp%>**/*.js',
            options: {
                browserifyOptions: {
                    debug: true
                },
                alias: {
                    'actions/teachers': './<%= tempApp%>actions/teachers.js',
                    'actions/pages': './<%= tempApp%>actions/pages.js',
                    'actions/teacherPositions': './<%= tempApp%>actions/teacherPositions.js',

                    'components/Input': './<%= tempApp%>/core/components/Input.js',
                    'components/Table': './<%= tempApp%>/core/components/table/Table.js',
                    'components/Header': './<%= tempApp%>/core/components/table/Header.js',
                    'components/Panel': './<%= tempApp%>/core/components/Panel.js',
                    'components/Page': './<%= tempApp%>/core/components/Page.js',
                    'components/Tab': './<%= tempApp%>/core/components/tabs/Tab.js',
                    'components/Tabs': './<%= tempApp%>/core/components/tabs/Tabs.js',
                    'components/Main': './<%= tempApp%>/app/Main.js',

                    'model/Teacher': './<%= tempApp%>/app/Teachers/Teacher.js',

                    'collection/Teacher': './<%= tempApp%>/app/Teachers/Teachers.js',

                    'teacher/Page': './<%= tempApp%>/app/Teachers/TeacherPage.js',
                    'teacher/PageHeaderButtons': './<%= tempApp%>/app/Teachers/TeacherPageHeader.js',
                    'teacher/Add': './<%= tempApp%>/app/Teachers/AddTeacher.js',
                    'teacher/List': './<%= tempApp%>/app/Teachers/List.js',

                    'teacherPositions/model': './<%= tempApp%>/app/TeacherPositions/TeacherPositionsModel.js',
                    'teacherPositions/collection': './<%= tempApp%>/app/TeacherPositions/TeacherPositionsCollection.js',
                    'teacherPositions/Page': './<%= tempApp%>/app/TeacherPositions/Page.js',
                    'teacherPositions/List': './<%= tempApp%>/app/TeacherPositions/Page.js',
                    'teacherPositions/AddNew': './<%= tempApp%>/app/TeacherPositions/AddNew.js',
                    'teacherPositions/Table': './<%= tempApp%>/app/TeacherPositions/Table.js',
                    'teacherPositions/container/Table': './<%= tempApp%>/app/TeacherPositions/containers/Table.js',
                    'teacherPositions/Row': './<%= tempApp%>/app/TeacherPositions/Row.js',

                    'utils/fetch': './<%= tempApp%>/utils/ajaxHelper.js'
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
            },
            css: {
                files: ['<%= reactBase%>/css/*.css'],
                tasks: ['copy:css'],
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
