// Criando método igual ao Map para melhor entendimento do método

Array.prototype.map2 = function(callback) {

    newArray = []

    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        newArray.push(callback(element, index, this))
    }

    return newArray;
}

const nums = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Assim
const precos = nums.map(e => {
    return JSON.parse(e).preco
})

console.log(precos)


// Ou assim.

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = nums.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)