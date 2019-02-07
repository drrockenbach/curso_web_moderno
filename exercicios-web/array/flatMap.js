const escola = [
    {
        nome: 'Turma M1',
        alunos: [{
            nome: 'Gustavo',
            nota: 8.1
        },
        {
            nome: 'Ana',
            nota: 9.3
        }]
    },
    {
        nome: 'Turma M2',
        alunos: [{
            nome: 'Rebeca',
            nota: 8.9
        },
        {
            nome: 'Roberto',
            nota: 7.3
        }]
    }
]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const nota1 = escola.map(getNotasDaTurma)
// O resultado será um array de arrays, conforme exemplo:
// [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]
console.log(nota1)

// O flat map, é um método que concatena esses dois arrays e retorna tudo em um único array. Não é implementação default.

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

// O resultado passa a ser apenas um arrauy de notas, conforme exemplo:
//[ 8.1, 9.3, 8.9, 7.3 ]
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)