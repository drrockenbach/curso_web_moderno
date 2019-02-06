// O node faz cache. Fazendo da forma abaixo, vai ter um única instância deste módulo, comos e fosse um singleton

module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}