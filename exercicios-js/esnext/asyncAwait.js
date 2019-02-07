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

// Recurso do ES8
// Objetivo simplificar o uso de promises, fazendo parecer mais sincrono
// Para poder utilizar o await dentro da function é necessário colocar o async, conforme abaixo.
let obterAlunos = async () => {
    
    console.log('Vai executar 1')
    const turmaA = await getTurma('A') // só vai para a próxima linha quando tiver concluída essa execução
    console.log('Terminou 1')
    console.log('Vai executar 2')
    const turmaB = await getTurma('B') // Retorna o resultado do then da promise
    console.log('Terminou 2')
    console.log('Vai executar 3')
    const turmaC = await getTurma('C')
    console.log('Terminou 3')

    // const turmaD = await getTurma('D') // Se der erro, conforme acontece nesse caso, vai cair no catch externo.
    // console.log('Terminou 4')  // Não falou na aula se da pra tratar aqui dentro

    return [].concat(turmaA, turmaB, turmaC) // Não retorna diretamente o array, vai retornar um objeto AsyncFunction
}

obterAlunos() // acessa o retorno como se fosse promise
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log( nomes ))
    .catch( e => console.log( 'Deu erro', e))