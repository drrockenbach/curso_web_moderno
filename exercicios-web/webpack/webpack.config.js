const webpack = require('webpack')

module.exports = {
    mode:'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.css$/, // se for arquivos com extensão .css
                use: [
                    'style-loader', // Adiciona CSS a DOM injetando a tag <style>, ou seja, não adiciona um arquivo .css na pasta de build. 
                                    // Ele pega todo o css e coloca no arquivo de saída, o principal.js
                    'css-loader' // interpreta @import, url()...
                ]
            }
        ]
    }
}

