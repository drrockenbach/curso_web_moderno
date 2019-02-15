const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('default', ['copiarHtml'] , () => {
    gulp.src('src/sass/index.scss') // já tem a referencia de todos os outros scss
        .pipe(sass().on('error', sass.logError)) // só roda o on('error') em caso de erro
        .pipe(uglifycss({"uglifyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
})

gulp.task('copiarHtml', () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})