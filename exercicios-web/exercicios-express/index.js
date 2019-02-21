const express = require('express')

const app = express()

// Qualquer URL vai bater aqui
// Use recebe qualquer tipo de requisição
app.use((req, resp) => {
    resp.send("iiiiiiiiiiii")
})

app.listen(3000, () => {
    console.log("Servidor iniciado...")
})