<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible || !user}">
		<Header title="Cod3r - Base de Conhecimento" :hideToggle="!user"
		:hideUserDropdown="!user"/>
		<Menu v-if="user" />
		<Content />
		<Footer />
	</div>
</template>

<script>
// O @ no from abaixo, diz que vai pegar a partir do src do projeto

import Content from '@/components/template/Content'
import Header from '@/components/template/Header'
import Menu from '@/components/template/Menu'
import Footer from '@/components/template/Footer'
import { mapState } from 'vuex'
import axios from 'axios'
import { baseApiUrl, userKey} from '@/global'

export default {
	name: "App",
	components: {
		Header,
		Menu, Content, Footer
	},
	computed: mapState(['isMenuVisible', 'user']),
	data: function() {
		return {
			validatingToken: true
		}
	},
	methods: {
		async validateToken() {
			this.validatingToken = true
			const json = localStorage.getItem(userKey)
			const userData = JSON.parse(json)
			this.$store.commit('setUser', null)

			// Se não tiver usuário no localStorage é por que está deslogado. Redireciona para a tela de login
			if (!userData) {
				this.validatingToken = false
				this.$router.push({name: 'auth'})
				return
			}

			// valida o token no backend
			const res = await axios.post(`${baseApiUrl}/validateToken`, userData)

			// Se token estiver válido, coloca na store novamente
			if (res.data) {
				this.$store.commit('setUser', userData)
			} else { // Se não validou o token
				localStorage.removeItem(userKey)
				this.$router.push({name: 'auth'})
			}

			this.validatingToken = false
		}
	},
	created() { // chama antes do mounted
		this.validateToken()
	}
}
</script>

<style>
	* {
		font-family: "Lato", sans-serif;
	}

	body {
		margin: 0;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 40px; /* Header content footer */
		grid-template-columns: 300px 1fr; /* menu content*/
		grid-template-areas: 
		"header header"
		"menu content"
		"menu footer";
	}

	#app.hide-menu { /* Quando clicar para esconder o menu, define um novo template grid */
		grid-template-areas: 
		"header header"
		"content content"
		"footer footer";
	}
</style>