
console.log( typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Calos', 'Ana']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] ='Paulo'

console.log(aprovados[3])

aprovados.push('Diomar')

aprovados[9] = 'Rafael'

console.log(aprovados)
console.log(aprovados.length)

console.log(aprovados[8] === undefined)

console.log(aprovados)

aprovados.sort()

console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

// A partir do indice 1, exclui 2 elementos. Ou seja, vai começar pelo Carlos, e excluir também Ana. Se fosse passado 1, 1, excluiria apenas o Carlos.
aprovados.splice(1, 2)
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

// Também da para adicionar elementos no mesmo método, basta passar a lista depois dos parâmetros de remoção
aprovados.splice(1, 2, 'Elemento1','Elemento2')
console.log(aprovados)

// Caso não queira remover, passar zero no segundo elemento. Assim, a partir do indice informado no primeiro elemento, 
// vai adicionar os elementos informados, e passar os demais a frente.
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1','Elemento2')
console.log(aprovados)