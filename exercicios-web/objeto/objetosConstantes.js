// pessoa aponta para um endereço de memória
const pessoa = {nome: 'Joao'}
// Quando faz isso, ainda é o mesmo objeto, mudando seu atributo
pessoa.nome = 'Pedro'

// Quando faz isso, vai tentar mudar o endereço de memória, pois está passando um novo objeto.
//pessoa = {nome: 'Ana'}

// Método que congela o objeto, então não da pra mexer em mais nada do objeto. Apesar de não dar erro caso tente alterar o conteúdo, não vai mudar.
// Isso torna o objeto constante.
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

// Já cria o objeto como constante.

const pessoaConstante = Object.freeze({nome: 'Constante'})

pessoaConstante.nome = 'Tenta mudar, mas não vai'

console.log(pessoaConstante)