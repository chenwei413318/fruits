<template>
	<div class="home-show">
		<div class="show-top">
			<img class="show-1" src="../../../../static/images/show-1.jpg"/>
			<img class="show-2" src="../../../../static/images/show-2.jpg"/>
		</div>
		<div class="show-bottom">
			<img class="show-3" src="../../../../static/images/show-3.gif"/>
		</div>
	</div>
</template>

<script>
	export default {
		name:'home-show'
	}
</script>

<style lang="scss">
	.home-show{
		height: 2.7rem;
		padding-top: 0.1rem;
		background: #FFFFFF;
		.show-top{
			display: flex;
			justify-content: space-around;
			
		}
		.show-bottom{
			margin-top: 0.2rem;
		}
		.show-1{
			width: 1.75rem;
			height: 0.857rem;
		}
		.show-2{
			width: 1.75rem;
			height: 0.857rem;
		}
		.show-3{
			width: 3.75rem;
			height: 1.6rem;
		}
	}
</style>