Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (callback(element, index, this) === true) {
            newArray.push(element)
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Barra de ouro', preco: 600, fragil: false},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const caros = p => p.preco >= 500
const fragil = p => p.fragil

console.log(produtos.filter2(caros).filter2(fragil))