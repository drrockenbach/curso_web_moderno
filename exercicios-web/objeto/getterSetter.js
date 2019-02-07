
const sequencia = {
    _valor: 1, // Convenção, que determina que essa variável é privada, e não deve ser acessada diretamente.
    get valor() {return this._valor++},
    set valor(valor) { 
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)