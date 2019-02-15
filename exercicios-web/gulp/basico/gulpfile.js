// arquivo defaul do gulp, como se fosse um index
// Para rodar, entrar na pasta desse arquivo pelo termina, e rodar o comando "gulp"

const gulp = require('gulp')

// Task default do gulp, o ponto de inicio, como se fosse o main. 
// O nome deve ser esse, "default", caso contrário da erro
gulp.task('default', () => {
    gulp.start('copiar', 'fim') // Representa outras duas tasks que vão ser criadas com esses nomes
})

gulp.task('copiar', ['antesTaskCopiar1', 'antesTaskCopiar2'], () => { // Array de tasks que devem ser executadas antes da task copiar 
                                                                      // e a função vai ser chamada quando a task copiar for invocada
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // Arquivos que vão ser utilizados
    // gulp.src('pastaA/*.txt') // Não entra em subpastas
    gulp.src('pastaA/**//*.txt') // Assim copia tanto o que está direto na pastaA, como as subpastas
        // .pipe(transformacao1()) // padrão pipe and filter
        // .pipe(transformacao2()) // Pipe line....
        .pipe(gulp.dest('pastaB')) // copia os arquivos passados no src para a pastaB. Não remove da origem
})

gulp.task('antesTaskCopiar1', () => {
    console.log('antesTaskCopiar1')
})

gulp.task('antesTaskCopiar2', () => {
    console.log('antesTaskCopiar2')
})

// gulp.task('fim', () => {
//     console.log('fim')
// })

gulp.task('fim', ['fim1', 'fim2'] ) 

gulp.task('fim1', () => {
    console.log('fim1')
})

gulp.task('fim2', () => {
    console.log('fim2')
})