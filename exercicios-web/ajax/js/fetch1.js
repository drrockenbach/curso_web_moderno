const url = 'dados/estados.json'
fetch(url)
    .then(resp => resp.json()) // O método json() retorna uma promisse com o json. Então o que vai ser retornado nesse primeiro then, é uma outra promisse, que pode ser utilizada
    .then(estados => {
        const itens = estados.reduce(
            (html, estado) => html + `<li>${estado.nome}</li>` ,''
        )
        document.body.insertAdjacentHTML('beforeend', `<ul>${itens}</ul>`)
    })