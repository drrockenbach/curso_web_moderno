

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // resolve só aceita um parâmetro
        }, segundos *1000)
    })
}

falarDepoisDe(3, 'Que legal!')
.then(frase => frase.concat(' Se deu sucesso a promise, retorna aqui. '))
.then(frase => frase.concat(' Eu posso encadear varios then. Quando um terminar, chama o próximo passando o resultado!!'))
.then(frase => frase.concat(' Depois desse, vai ir para o then que vai imprimir o resultado! '))
.then(frase => console.log(frase))

console.log("Vai executar antes do código acima, visto que Promise é assincrono")