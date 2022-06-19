<template>
	<div id="app">
		<Header></Header>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from "./components/Header";
	import Footer from "./components/Footer";
	export default {
		name: "App",
		components: {
			Header,
			Footer,
		},
	};
</script>

<style>
	@font-face {
		font-family: "lv";
		src: url("./assets/font/LouisVuitton-Medium.otf");
	}

	@font-face {
		font-family: 'lv_2';
		src: url('./assets/font/LouisVuitton-BoldOblique.otf');
	}
</style>
