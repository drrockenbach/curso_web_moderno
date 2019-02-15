
const gulp = require('gulp')
const watch = require('gulp-watch')
const webServer = require('gulp-webserver')

gulp.task('monitorarMudancas', () => {
    watch('src/**/*.html' , () => gulp.start('app.html') ) // fica monitorando os htmls no src, quando tiver mudança, executa apenas o build dos htmls
    watch('src/**/*.scss' , () => gulp.start('app.css') ) 
    watch('src/**/*.js' , () => gulp.start('app.js') ) 
    watch('src/assets/imgs/**/*.*' , () => gulp.start('app.imgs') ) 
    // como dependências não são adicionadas com frequencia, não foi adicionado monitoramento
    // daí para o gulp e roda de novo
})

gulp.task('servidor', ['monitorarMudancas'], () => {
    return gulp.src('build').pipe(webServer({
        livereload: true,
        port: 8081,
        open: true
    }))
})