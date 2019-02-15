const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode:'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, // se for arquivos com extensão .css
                use: [
                    MiniCssExtractPlugin.loader, // Para extrair o css como arquivo e não jogar dentro do js como o style-loader faz
                    // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>, ou seja, não adiciona um arquivo .css na pasta de build. 
                                    // Ele pega todo o css e coloca no arquivo de saída, o principal.js
                    'css-loader' // interpreta @import, url()...
                ]
            }
        ]
    }
}

