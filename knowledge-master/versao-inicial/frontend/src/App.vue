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

export default {
	name: "App",
	components: {
		Header,
		Menu, Content, Footer
	},
	computed: mapState(['isMenuVisible', 'user'])
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