<template>
	<div class="swiper-container home-banner">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="banner in banners" :key="banner.banner_ad_id">
				<img width="100%" :src="banner.image"/>
			</div>
		</div>
	</div>
</template>

<script>
	//https://wap.fruitday.com/v3/ad/homepage?connect_id=&type=2&lonlat=116.25153%2C40.11624&ad_code=110114&tab_id=
	import Swiper from 'swiper'
	import axios from 'axios'
	import config from '../../../modules/config'
	export default {
		name:'home-banner',
		data () {
			return{
				banners:[]
			}
		},
		methods:{
			getBanners(){
				axios.get(config.host+'gy/v3/ad/homepage?connect_id=&type=2&lonlat=116.25153%2C40.11624&ad_code=110114&tab_id=').then(res =>{
//					console.log(res.data.data.banner.mainBanners)
					let content = res.data.data.banner.mainBanners
					let arr = content.shift()
					this.banners = arr.content
//					console.log(this.banners)
					
				})
			}
		},
		created(){
			this.getBanners()
		},
		updated(){
			new Swiper('.home-banner',{
				loop:true
			})
		}
	}
</script>

<style lang="scss">
	.swiper-slide{
		height: 1.6rem;
	}
</style>