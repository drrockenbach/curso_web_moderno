// arquivo defaul do gulp, como se fosse um index
// Para rodar, entrar na pasta desse arquivo pelo termina, e rodar o comando "gulp"

const gulp = require('gulp')

const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel') // O babel pode converter códigos de JS mais modernos para versões mais antigas, a fim de manter maior compatibilidade
                                    // Pode também, por exemplo, converter typescript, que o browser não entende, para JS

// Task default do gulp, o ponto de inicio, como se fosse o main. 
// O nome deve ser esse, "default", caso contrário da erro
gulp.task('default', () => {
    // gulp.start('copiar', 'fim') // Representa outras duas tasks que vão ser criadas com esses nomes
    return gulp.src('src/**/*.js') // Pega todos os arquivos js dentro de src e subpastas
        .pipe(babel({
            comments: false, // remover comentários
            presets: ["env"], // Preset mais moderno, determina automaticamente os presets que precisa EX: ES2015, ES2016...
                             // Ex: Dentro de calculadora.js, é utilizado ** para potencia, e isso no final é substituído por Math.pow(), que tem melhor compatibilidade
            minified: true
        }))
        // .pipe(uglify()) // minifica, tira todos espaços, linhas e tal. Pode ser substituído pelo parâmetro minified no babel
        .on('error', function (err) {console.log(err)})
        .pipe(concat('codigo.min.js')) // Concatena todos os arquivos e gera um único com o nome passado
        .pipe(gulp.dest('build')) // joga na pasta build
})
