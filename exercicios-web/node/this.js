console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log("Dentro de uma função...")
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
    
    this.perigo = 'Isso vai ser adicionado dentro do escopo global, pois dentro de function, o this aponta para o global.'
}

logThis()