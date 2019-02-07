const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

// Pega todas as chaves do objeto
console.log(Object.keys(pessoa))

// Pega todos os valores do objeto
console.log(Object.values(pessoa))

// Devolve um array de arrays chave valor do objeto
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});

// Destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa,'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa)
console.log(Object.keys(pessoa))

// Object.assign (ES 2015)
const destino = { a: 1} 
const obj1 = {b: 2}
const obj2 = {c:3, a:4}

const novo = Object.assign(destino, obj1, obj2)

console.log(novo)