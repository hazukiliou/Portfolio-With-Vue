<template>
	<main>
		<Sidebar></Sidebar>
		<router-view />
	</main>

</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
	components: {
		Sidebar
	}
}
</script>

<style>
main {
	padding: 50px 20px 0 280px;
}
</style>