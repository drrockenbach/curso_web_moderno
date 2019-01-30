
function getPreco(imposto = 0, moeda ='R$') {
    return `${moeda} ${this.preco * (1- this.desc) * (1+ imposto)}`
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())

/////////////


const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}

// O call e apply pode passar um objeto que vai ser utilizado como contexto para o this, conforme abaixo
// que é passado o objeto carro, que contem o preco e desconto, que são utilizado dentro do método no lugar do this.
// Esse deve ser sempre o primeiro parâmetro. Também da para passar os demais parâmetros depois. No caso do apply deve passar os demais dentro de um array

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, 'US$'))

console.log(getPreco.apply(carro, [0.17, 'Pila $']))