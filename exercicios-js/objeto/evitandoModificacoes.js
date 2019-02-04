
// Object.preventExtensions
// Não permite adicinar novas propriedades, mas permite remover

const produto = Object.preventExtensions({
    nome: "Qualquer",
    preco: 99,
    tag: "promoção"
})

console.log("Extensível: ", Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)

// Object.seal
// Não permite adicinar novas propriedades e nem remover
const pessoa = { nom: "Juliana", idade: 35}

Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze, congela o objeto, não deixando adicionar e nem remover propriedades e também não permite editar os existentes.

const pessoa2 = { nome: "Diomar", idade: 32}

Object.freeze(pessoa2)

console.log('Frozen: ', Object.isFrozen(pessoa2))

pessoa2.sobrenome = 'Silva'
delete pessoa2.nome
pessoa2.idade = 29
console.log(pessoa2)