<template>
    <div class="article-by-id">
        <PageTitle icon="fa fa-file-o" :main="article.name" :sub="article.description" />

        <!--O conteúdo do artigo já vem formatado como HTML. É o que é cadastrado naquele componente completo no cadastro de artigos-->
        <div class="article-content" v-html="article.content" /> 
    </div>
</template>

<script>

import { baseApiUrl } from '@/global'
import axios from 'axios'
import PageTitle from '../template/PageTitle'
import 'highlightjs/styles/dracula.css'
import hljs from 'highlightjs/highlight.pack.js'

export default {
    name: 'ArticleById',
    components: { PageTitle },
    data: function() {
        return {
            article: {}
        }
    },
    mounted() {
        const url = `${baseApiUrl}/articles/${this.$route.params.id}`
        axios.get(url).then(res => this.article = res.data)
    },
    updated() {
        document.querySelectorAll('.article-content pre').forEach(element => {
            hljs.highlightBlock(element)
        })
    }

}
</script>

<style>
    .article-content {
        background-color: #fff;
        border-radius: 8px;
        padding: 25px;
    }

    /* CSS para quando o conteúdo tiver formatação de código */
    .article-content pre {
        padding: 20px;
        border-radius: 20px;
        font-size: 1.2rem;
        background-color: #1e1e1e;
        color: #fff;
    }

    /* CSS para quando o conteúdo tiver imagem */
    .article-content img {
        max-width: 100%; /* Para limitar as imagens ao tamanho máximo do componente artigo, para que uma imagem muito grande não ultrapasse o componente */
    }

    .article-content :last-child {
        margin-bottom: 0px;
    }
    
</style>
