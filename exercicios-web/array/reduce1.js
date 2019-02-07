const alunos = [ 
    {nome: 'João', nota:7.3, bolsista: false},
    {nome: 'Maria', nota:9.2, bolsista: true},
    {nome: 'Pedro', nota:79.8, bolsista: false},
    {nome: 'Ana', nota:8.7, bolsista: true}
]

// O reduce pega um array e começa chamando o callback, passando o valor acumulador e valor atual. 
// O acumulador, caso não seja passado um valor inicial, será a primeira posição do array.
// o valor atual, será sempre a próxima posição
// EX: para o array  [1,2,3,4,5,6]
// a primeira entrada do reduce seria acumulador = 1, atual=2
// a próxima entrada o acumulador seria o retorno do callback, que no caso abaixo seria 3 e o atual seria o valor da próxima posição do array, no caso 3
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)

// Com valor inicial
const resultado2 = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log(resultado2)