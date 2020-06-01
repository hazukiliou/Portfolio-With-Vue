<template>
	<div class="navbar">
		<BaseMenuIcon @click="showSidebar"></BaseMenuIcon>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
import BaseMenuIcon from '@/components/BaseMenuIcon'

export default {
	components: {
		BaseMenuIcon
	},
	methods: {
		...mapMutations(['SET_SIDEBAR']),
		showSidebar() {
			this.SET_SIDEBAR(true)
		}
	}
}
</script>

<style lang="scss" scoped>
.navbar {
	width: 100%;
	height: 60px;
	background-color: #10163a;
	border-radius: 5px;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	padding: 0 10px;
	box-sizing: border-box;
}
</style>