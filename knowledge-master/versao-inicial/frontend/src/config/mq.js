import Vue from 'vue'
import VueMq from 'vue-mq'

// Será registrado no main.js e estará acessível a partir de this.$mq === 'xs', por exemplo.
// Exemplo de utilização no Menu.vue ao selecionar um item de menu no método onNodeSelect
Vue.use(VueMq, {
    breakpoints: {
        xs: 576,
        sm: 768,
        md: 960,
        lg: 1140,
        xl: Infinity
    }
})