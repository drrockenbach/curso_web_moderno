function Pessoa(nome) {

    this.falar = function() {
        console.log("Meu nome, função construtora: ", nome)
    }

}

const p1 = new Pessoa("Diomar")
p1.falar()
