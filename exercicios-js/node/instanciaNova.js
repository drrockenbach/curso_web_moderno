// Uma factory retorna um novo objeto, diferente do módulo instanciaUnica.js
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}