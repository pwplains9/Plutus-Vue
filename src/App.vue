<template lang='pug'>
HeaderComponent
.content.is-hidden
	main
		
		router-view(v-slot="{Component}")
			transition(name='fade' mode="out-in")
				component(:is="Component" :key="$route.path")
		FooterComponent
PopupsComponent
</template>

<script>
import Content from "@/components/Content/Content";
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import PopupsComponent from "@/components/Popups/PopupsComponent";

export default {
	name: 'App',
	components: {PopupsComponent, FooterComponent, HeaderComponent, Content}
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s $easing-smooth;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transition: opacity 0.5s $easing-smooth;
}

</style>
