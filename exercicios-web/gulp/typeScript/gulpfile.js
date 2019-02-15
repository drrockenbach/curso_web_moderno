const gulp = require('gulp')
const ts = require('gulp-typescript')

// Arquivo de configuração
// Diz onde vão estar os arquivos
// Diz a versão de javascript que é pra converter
// "noImplicitAny": true, -- Não aceitar parâmetros implicitos do tipo Any
const tsProject = ts.createProject('tsconfig.json') 

gulp.task('default', () => {
    return tsProject.src() // Não precisa informar pois já está dentro do .json de config
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
})