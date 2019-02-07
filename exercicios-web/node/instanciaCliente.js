const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
// Como o node faz cache dos módulos, o contadorA e contadorB vão compartilhar do mesmo valor, como pode ser confirmado com o console.log abaixo
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
// Desta forma, como o módulo retorna um novo objeto a partir de uma factory, contadorC e contadorD tem valores distintos.
console.log(contadorC.valor, contadorD.valor)
