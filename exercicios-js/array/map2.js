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

const resultado = nums.map(paraObjeto).map(apenasPreco)

console.log(resultado)