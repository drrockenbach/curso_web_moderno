<template>
    <div class="category-admin">
        <b-form>
            <input type="hidden" id="category-id" v-model="category.id" />

            <b-row>
                <b-col sm="12">
                    <b-form-group label="Nome:" label-for="category-name">
                        <b-form-input id="category-name" type="text" v-model="category.name" required :readonly="mode === 'remove'"
                            placeholder="Informe o Nome da Categoria..." />
                    </b-form-group>
                </b-col>
                
            </b-row>

            <b-row v-if="mode === 'save'">
                <b-col sm="12">
                    <b-form-group label="Categoria Pai:" label-for="category-parentId">
                       <b-form-select id="category-parentid" :options="categories"
                        v-model="category.parentId"> <!--v-model="category.parentId" Quando selecionar um registro, é para esse campo que vai o valor do selecionado-->

                       </b-form-select>
                    </b-form-group>
                </b-col>
                
            </b-row>

            <b-row v-else>
                <b-col sm="12">
                    <b-form-group label="Categoria Pai:" label-for="category-parentId">
                       <b-form-input id="category-parentId" type="text" v-model="category.path" :readonly="mode === 'remove'"
                             />
                    </b-form-group>
                </b-col>
                
            </b-row>
            
            <b-row>
                <b-col xs='12'>
                    <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
                    <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
                    <b-button class="ml-2" @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>

        </b-form>
        <hr>
        <b-table hover striped :items="categories" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadCategory(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadCategory(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>

    </div>
</template>

<script>

import axios from 'axios'
import { baseApiUrl, showError } from '@/global'

export default {
    name: 'CategoryAdmin',
    data: function() {
        return {
            mode: 'save',
            category: {},
            categories: [],
            fields: [
                {key: 'id', label: 'Código', sortable: true},
                {key: 'name', label: 'Nome', sortable: true},
                {key: 'path', label: 'Caminho', sortable: true},
                {key: 'actions', label: 'Ações'}
            ]
        }
    },
    methods: {
        loadCategories() {
            const url = `${baseApiUrl}/categories`
            axios.get(url).then(res => {
                // this.categories = res.data
                // Adicionando mais dois atributos em cada registro de categoria, que vai servir para o combobox
                // O componente b-form-select já espera o atributo value na lista e o atributo text
                this.categories = res.data.map(category => {
                    return {...category, value: category.id, text: category.path }
                })
            })
        },
        save() {
            const method = this.category.id ? 'put' : 'post'
            const id = this.category.id ? `/${this.category.id}` : ''
            const url = `${baseApiUrl}/categories`
            axios[method](`${url}${id}`, this.category)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        remove() {
            const id = this.category.id
            const url = `${baseApiUrl}/categories`
            axios.delete(`${url}/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        reset() {
            this.mode = 'save'
            this.category = {}
            this.loadCategories()
        },
        loadCategory(category, mode = 'save') {
            this.mode = mode
            this.category = { ...category }
        }
    },
    mounted() {
        this.loadCategories()
    }
}
</script>

<style>

</style>

