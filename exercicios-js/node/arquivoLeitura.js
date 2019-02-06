const fs = require('fs')

// sincrono...
const caminho = __dirname +'/arquivo.json'
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log('1 - ',conteudo)

// assincrona - preferir esse ao sincrono, visto que o sincrono trava o eventloop do node até o arquivo ser carregado
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`2 - ${config.db.host}:${config.db.port}`)
})

// quando for JSON, da pra retornar o arquivo direto. 
// Detalhe que isso aqui vai executar antes da leitura assincrona acima, visto que esse caso é sincrono.
const config = require('./arquivo.json')
console.log("3 - ",config.db)

// Ler diretório

fs.readdir(__dirname, (err, arquivos) => {
    console.log("Conteúdo da pasta")
    console.log(arquivos)
}) 