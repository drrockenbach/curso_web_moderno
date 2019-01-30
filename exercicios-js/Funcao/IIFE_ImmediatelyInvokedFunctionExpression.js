
(function () {
    console.log("Caso 1")
    console.log("Será executado na hora!")
    console.log("Foge do escopo mais abrangente, tudo criado estará apenas dentro deste escopo!")
})()

let caso2 = (function () {
    console.log("Caso 2")
    console.log("Será executado na hora!")
    console.log("Foge do escopo mais abrangente, tudo criado estará apenas dentro deste escopo!")
})

caso2()