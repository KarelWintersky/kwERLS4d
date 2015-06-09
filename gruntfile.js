module.exports = function(grunt) {
    var srcList = [
        // introduction
        'docs/introduction.md',
        'docs/toc.md', // оглавление
        'docs/crm.md', // суть механики разрешения конфликтов

        // 1 часть: параметры
        'docs/stats/mainstats.md',
        'docs/stats/addstats.md',
        'docs/stats/passivebonus.md',
        'docs/stats/calculatedstats.md',

        // 2 часть: навыки
        'docs/skills/intro.md',
        'docs/skills/levels.md',
        'docs/skills/s&s.md',
        'docs/skills/novice.md',
        'docs/skills/outro.md',

        // 3 часть: chargen
        'docs/chargen/intro.md',
        'docs/chargen/chargen.md',
        'docs/chargen/health.md',
        'docs/chargen/exping.md',
        'docs/chargen/crm_again.md',
        'docs/chargen/outro.md',

        // 4 часть: skills_info
        'docs/skills_info/intro.md',
        'docs/skills_info/weapons.md',
        'docs/skills_info/transport.md',
        'docs/skills_info/armour.md',
        'docs/skills_info/skills_str.md',
        'docs/skills_info/skills_dex.md',
        'docs/skills_info/skills_int.md',
        'docs/skills_info/skills_wll.md',
        'docs/skills_info/skills_other.md',
        // 'docs/skills_info/body_enhance.md',
        'docs/skills_info/outro.md',

        // 5 паранормалка

        // 6 дополнения
        // 'docs/addons/intro.md',
        // 'docs/addons/youngsters.md',
        // 'docs/addons/disabilities.md',
        // 'docs/addons/conversion.md',
        // 'docs/addons/',
        // 'docs/addons/',
        // 'docs/addons/',
        // 'docs/addons/',
        // 'docs/addons/outro.md',

        // final
        'docs/glossary.md', // глоссарий

        ];

    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            md: {
                src: [].concat(srcList),
                dest: '.temp/final.md'
            }
        },
        markdown: {
            all: {
                files: [
                    {
                        expand: false,
                        // src: 'md/*.md', // .temp/final.md
                        src: '.temp/final.md',
                        dest: 'html/erls4d.html',
                        ext: '.html'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-markdown');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'markdown']);
};