
const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app') // Não precisa armazenar em variáveis, pois quando lê o arquivo com require, já vai instanciar as tasks do gulp
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    if (util.env.production) { // se for production, primeiro chama o deps e depois o app
                               // para passar a flag, rodar 'gulp --production'. No package.json tem um script para isso, com nome build entao 'npm build'
        // sequence('deps', 'app')
        gulp.start('deps', 'app')
    } else {
        // sequence('deps', 'app', 'servidor') // Sequence garante que será processado de forma serial, um atrás do outro.  
                                              // O gulp, em algumas versões, executa de forma paralela, então o servidor pode terminar antes de deps e app terminarem, 
                                              // o que geraria problemas
        gulp.start('deps', 'app', 'servidor') // Se der problema assim, voltar para o sequence
    }
})