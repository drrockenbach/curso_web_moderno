// Estrutura com export default é padrão ecmascript, enquanto o padrão no arquivo moduloB.js é padrão node

export default class Pessoa {
// module.exports = class Pessoa {
    cumprimentar() {
        return 'Bom dia'
    }
}