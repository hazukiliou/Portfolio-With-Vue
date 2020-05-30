<template>
	<main>
		<TheSidebar></TheSidebar>
		<router-view />
	</main>

</template>

<script>
import TheSidebar from '@/components/TheSidebar'

export default {
	data() {
		return {
			
		}
	},
	components: {
		TheSidebar
	}
}
</script>

<style lang="scss">
main {
	padding: 50px 20px 0 280px;
	transition: padding-left ease-in-out 500ms;
}

@media (max-width: $max-width) {
	main {
		padding-left: 20px;
	}
}
</style>