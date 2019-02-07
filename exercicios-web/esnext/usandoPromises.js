// com promise

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            // Os dados não chegam todos de uma vez, vai chegando aos poucos, como um stream
            res.on('data', dados => {
                // console.log(dados)
                resultado += dados
            })
    
            // Quando terminar de receber os dados
            res.on('end' ,() => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
}

let nomes = []

// Jeito errado de fazer
// dispara cada promise de cada vez, uma depois da outra, sem pararelizar

getTurma('A').then( alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    // console.log(nomes)
    getTurma('B').then( alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        // console.log(nomes)


        getTurma('C').then( alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            // console.log(nomes)
        })
    })
})

// jeito certo
// Dispara todas as promises em pararelo e depois que todas retornarem executa o then

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
//.then(x => console.log(x)) // Retorna uma array de arrays (matriz [1][N]]) com o resultado de todas as requisições 
                           // EX: [ [{resultado 1}, {resultado 1}], [{resultado 2}, {resultado 2}], [{resultado 3}, {resultado 3}]
.then(turmas => [].concat(...turmas))  // Junta todos os objetos num array só [{resultado 1}, {resultado 1}, {resultado 2}, {resultado 2},{resultado 3}, {resultado 3}]                         
//.then(y => console.log(y))
.then(alunos => alunos.map(aluno => aluno.nome))
.then(nomes => console.log(nomes))

// Testando caso de erro passando letra D, que não existe o arquivo

getTurma('D').catch(e => console.log('Erro, não existe arquivo com a letra D', e))