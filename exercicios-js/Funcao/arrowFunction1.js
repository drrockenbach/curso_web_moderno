let dobro = function (a) {
    return 2 * a
}

console.log(dobro(2))

dobro = (a) => {
    return 2 * a
}

console.log(dobro(4))

dobro = a => 2 * a; // return implicito

console.log(dobro(Math.PI))


let ola = function () {
    return "Olá"
}

console.log(ola())

ola = () => "Olá"

console.log(ola())

ola = _ => "Olá" + _ // Quer dizer que possui um parâmetro, que pode ser inclusive omitido, conforme padrão do JS

console.log(ola(" = Parâmetro"))
