const schedule = require('node-schedule')


// cron = '*/5 * 12 * * 2' executa de 5 em 5 segundos, qualquer minuto, as 12 horas, qualquer dia do mês, qualquer mês as terças-feiras. Os dois começam em zero = domingo
const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 3', function() {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] // Segunda a sexta
regra.hour = 14
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})