
// quando submeter o formulário vai capturar o evento
document.usuarioForm.onsubmit = async e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    data.append('ajax', true)

    const options ={  
        method: form.method,
        body: new URLSearchParams(data) // Precisa fazer assim para ser enviado correto, não teve uma explicação melhor
    }
    const resultado = document.getElementById('resultado')
    // fetch(form.action, options)
    //     .then(resp => resp.json())
    //     .then(json => {
    //         resultado.innerHTML = JSON.stringify(json)
    //     })
    //     .catch(e => {
    //         resultado.innerHTML = e
    //     })

    // O mesmo resultado que o comentado acima, porém de forma sincrona com async e await
    try {
        const resp = await fetch(form.action, options)
        const json = await resp.json()
        resultado.innerHTML = JSON.stringify(json)
    } catch (error) {
        resultado.innerHTML = e
    }
}
