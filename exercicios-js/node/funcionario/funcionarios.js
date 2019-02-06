// Busca uma lista JSON de funcionários
const url ='http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

axios.get(url).then(response => {

    const funcionarios = response.data
    // console.log(funcionarios)
    

    getChinesaMenorSalario(funcionarios)

})

// Busca na lista a mulher chinesa de menor salário

let getChinesaMenorSalario = (funcionarios) => {

const getMulher = funcionario => funcionario.genero === 'F'
const getChinesa = funcionario => funcionario.pais === 'China'
const getMenorSalario = (funcAterior, funcAtual) => {
    return funcAterior.salario < funcAtual.salario ? funcAterior : funcAtual
}

console.log(funcionarios.filter(getChinesa).filter(getMulher).reduce(getMenorSalario))

}
