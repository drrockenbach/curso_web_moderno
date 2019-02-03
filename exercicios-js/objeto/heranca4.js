function MeuObjeto() {
}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)

console.log(MeuObjeto.prototype === obj2.__proto__)

MeuObjeto.prototype.nome = 'Vai aparecer tanto para obj1 como para obj2'
MeuObjeto.prototype.falar = () => console.log("oiiii")
console.log("obj1: ", obj1.nome)
console.log("obj2: ",obj2.nome)
obj2.falar()