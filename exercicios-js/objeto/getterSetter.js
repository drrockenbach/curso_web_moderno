const sequencia = {
    _valor: 1, // Convenção, que determina que essa variável é privada, e não deve ser acessada diretamente.
    get valor() {return this._valor++},
    set valor(valor) { 
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}