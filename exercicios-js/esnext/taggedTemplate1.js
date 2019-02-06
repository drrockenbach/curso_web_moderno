// tagged templates - processa o template dentro de uma função

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
// Passa para a função tag os valores da template string
// O parâmetro partes recebe um array com tudo o que não for os parâmetros ${} da template e o spread valores recebe tudo o que for ${}
console.log( tag `${aluno} está ${situacao}`) 