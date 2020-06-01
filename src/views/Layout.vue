<template>
	<main @click="hideSideBar">
		<TheSidebar></TheSidebar>
		<TheNavbar></TheNavbar>
		<router-view />
	</main>

</template>

<script>
import TheSidebar from '@/components/TheSidebar'
import TheNavbar from '@/components/TheNavbar'
import { mapState, mapMutations } from 'vuex'

export default {
	data() {
		return {
			
		}
	},
	components: {
		TheSidebar,
		TheNavbar
	},
	computed: {
		...mapState(['sidebar']),
	},
	methods: {
		...mapMutations(['SET_SIDEBAR']),
		hideSideBar() {
			if (this.sidebar) this.SET_SIDEBAR(false)
		}
	}
}
</script>

<style lang="scss">
main {
	padding: 20px 20px 0 280px;
	transition: padding-left ease-in-out 500ms;
	height: 100vh;
	box-sizing: border-box;
}

@media (max-width: $max-width) {
	main {
		padding-left: 20px;
	}
}
</style>