alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// Modo imperativo
let total1 = 0
for (let index = 0; index < alunos.length; index++) {
    total1 += alunos[index].nota;
}
console.log(total1 / alunos.length)

// Modo declarativo

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const getMedia = (total, qtd) => total / qtd
const media = getMedia(alunos.map(getNota).reduce(soma), alunos.length)
console.log(media)