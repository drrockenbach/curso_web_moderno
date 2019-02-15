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
    console.log('copiar!!!!')
})

gulp.task('antesTaskCopiar1', () => {
    console.log('antesTaskCopiar1')
})

gulp.task('antesTaskCopiar2', () => {
    console.log('antesTaskCopiar2')
})

gulp.task('fim', () => {
    console.log('fim')
})