<template>
	<div class="menu-icon" @click.stop="clickMethod">
		<div class="line"></div>
	</div>
</template>

<script>
export default {
	methods: {
		clickMethod() {
			this.$emit('click')
		}
	}
}
</script>

<style lang="scss" scoped>
.menu-icon {
	width: 38px;
	height: 38px;
	border: 1px solid #414561;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	.line {
		position: relative;
		width: 22px;
		height: 2px;
		background-color: #c2c6dc;

		&::before,
		&::after {
			position: absolute;
			content: '';
			width: 100%;
			height: 100%;
			background-color: #c2c6dc;
		}

		&::before {
			transform: translateY(-7px);
		}

		&::after {
			transform: translateY(7px);
		}
	}
}
</style>