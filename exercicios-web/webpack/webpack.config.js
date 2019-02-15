const modoDev = process.env.NODE_ENV !== 'production' // variável de ambiente setada no package.json para o script build (para production)

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    optimization: { // Para minificar o css, que por default não é feito como o JS OBS: Só minifica quando for production
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCssAssetsPlugin({})
        ]  
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/, // primeiro "s" é opciona, depois pode ter "a" letra ou letra "c". Vai pegar ".css" ou ".scss" ou ".sass"
                use: [
                    MiniCssExtractPlugin.loader, // Para extrair o css como arquivo e não jogar dentro do js como o style-loader faz
                    // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>, ou seja, não adiciona um arquivo .css na pasta de build. 
                                    // Ele pega todo o css e coloca no arquivo de saída, o principal.js
                    'css-loader', // interpreta @import, url()...
                    'sass-loader'
                ]
            }
        ]
    }
}

