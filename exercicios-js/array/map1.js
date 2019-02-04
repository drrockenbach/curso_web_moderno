const nums = [1, 2, 3, 4, 5]

// Map é um for com algum propósito. Retorna um array de mesmo tamanho, onde pode ser realizada transformação em cada elemento

let resultado = nums.map((element) => {
    return element * 2
})

console.log(resultado)

// funções
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)