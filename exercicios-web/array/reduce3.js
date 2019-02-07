Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let index = indiceInicial; index < this.length; index++) {
        const element = this[index];
        acumulador = callback(acumulador, element, index, this)
    }
    return acumulador
}

const alunos = [ 
    {nome: 'João', nota:7.3, bolsista: false},
    {nome: 'Maria', nota:9.2, bolsista: true},
    {nome: 'Pedro', nota:79.8, bolsista: false},
    {nome: 'Ana', nota:8.7, bolsista: true}
]

// Todos os alunos são bolsitas?

const todosBolsistas = alunos.map(p => p.bolsista).reduce2( (anterior, atual)  => {
    return anterior && atual
})

console.log(todosBolsistas)

// Algum aluno é bolsita?

const algumBolsista = alunos.map(p => p.bolsista).reduce2( (anterior, atual)  => {
    return anterior || atual
})

console.log(algumBolsista)