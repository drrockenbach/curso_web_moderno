const a = 1
const b = 2
const c = 3

// Isso já cria o objeto com o nome e valor
const obj1 = {a, b, c}

console.log(obj1)

// Se quiser nome diferente

const obj2 = {aa: a, bb: b, cc: c}

console.log(obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}

obj3[nomeAttr] = valorAttr

console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}

console.log(obj4)

// Forma antiga de definir função
const obj5 = {
    funcao: function() {
        //....
    }
}

// Forma nova de definir função
const obj6 = {
    funcao() {
        //....
    }
}