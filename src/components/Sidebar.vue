<template>
	<div class="sidebar">
		<ul class="sidebar-list">
			<li :class="{'active': item.name === nowPage }"
				v-for="item in sidebarList"
				:key="item.name">{{ item.name }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			sidebarList: [
				{
					link: '',
					name: 'Todo'
				},
				{
					link: '',
					name: 'Calendar'
				}
			]
		}
	},
	computed: {
		nowPage() {
			// todo 根據router參數切換頁面？
			return 'Todo'
		}
	}
}
</script>

<style lang="scss" scoped>
.sidebar {
	position: fixed;
	background-color: #10163a;
	width: 260px;
	height: 100%;
	top: 0;
	left: 0;
}

.sidebar-list {
	padding: 0 20px;

	li {
		width: 100%;
		line-height: 40px;
		border-radius: 5px;
		text-align: left;
		cursor: pointer;
		transition: transform ease-in-out 500ms;
		padding: 0 0 0 15px;
		box-sizing: border-box;
		margin: 5px 0;

		&:hover {
			transform: translateX(5%);
		}

		&.active {
			background: linear-gradient(to right, #7165ed, #574fbd);

			&:hover {
				transform: none;
			}
		}
	}
}
</style>