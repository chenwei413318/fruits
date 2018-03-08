<template>
	<div class="home-fruit-box-hot" >
		<!--<hot-show></hot-show>
		<fruit-banner></fruit-banner>-->
		<!--水果热卖-->
		<div class="show-box" v-for="(item,i) in Items" :key="i">
			<div class="hot-show">
				<img width="100%" :src="item[0].content[0].image"/>
				<div class="hot-show-box" v-if="(item[1].group_type=='normalBanner_v51')">
					<div class="img-box">
						<img id="img-box" :src="item[1].content[0].image"/>
					</div>
					<div class="desc">
						<h5>{{item[1].content[0].title}}</h5>
						<p class="desc-title">{{item[1].content[0].subtitle}}</p>
						<div class="tag">限量供应</div>
						<div class="desc-price">
							<span class="desc-money">
								￥{{item[1].content[0].price}} /
								<em class="desc-num">{{item[1].content[0].volume}}</em>
							</span>
							<i class="fa fa-plus-circle fa-2x"></i>
						</div>
					</div>
				</div>
			</div>
			<!--水果轮播-->
			<div class="fruit-banner">
				<div class="box" v-for="(img,i) in item[2].content" :key="i">
					<div class="img-box">
						<img id="img-box" :src="img.image"/>
					</div>
					<p class="banner-name">{{img.title}}</p>
					<div class="price">
						<span class="money">
							￥{{img.guide_price}}/
							<em class="banner-kg">2kg</em>
						</span>
						<i class="fa fa-plus-circle fa-2x"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//	import HotShow from './HotShow.vue'
//	import FruitBanner from './FruitBanner.vue'
	import axios from 'axios'
	import config from '../../../modules/config'
	export default {
		name:'home-fruit-box-hot',
//		components:{HotShow,FruitBanner},
		data() {
	    return {
	      BannerItem:[],
	      Items:[]
	    }
	  },
	   methods: {
	    getBanners () {
	      axios.get('http://localhost:8080/gy/v3/ad/homepage?connect_id=&type=0&lonlat=116.25153%2C40.11624&ad_code=110114')
	        .then(this.resSuccuss.bind(this))
	        .catch(this.resErr.bind(this))
	    },
	    resSuccuss (res) {
	      let Item = [];
	      let content = res.data.data.banner.mainBanners
	       Item.push(content.slice(5,8))
	       Item.push(content.slice(8,11))
	      this.Items = Item
	      console.log(this.Items)
	   
	    },
	    resErr (err) {
	      console.log(err)
	    }
	  },
	  created () {
	      this.getBanners()
	  }
	}
</script>

<style lang="scss" scoped>
	.home-fruit-box-hot{
		margin-top: 0.2rem;
		.show-box{
			margin-bottom: 0.1rem;
		}
		.hot-show{
			background: #FFFFFF;
			.hot-show-box{
				position: relative;
			    display: -webkit-box;
			    display: -moz-box;
			    display: -ms-box;
			    display: -o-box;
			    display: box;
			    -webkit-box-align: center;
			    -moz-box-align: center;
			    -ms-box-align: center;
			    -o-box-align: center;
			    box-align: center;
			    padding: 0 .12rem 0 .25rem;
			    height: 1.6rem;
			    border-top: .005rem solid rgba(220,220,220,.2);
			    .img-box{
			    	position: relative;
			    	#img-box{
			    		width: 1.2rem;
			    		height: 1.2rem;
			    		border: 0;
			    		display: block;
			    	}
			    }
			    .desc{
			    	height: 1.05rem;
			    	position: relative;
			    	
	    			margin-left: .25rem;
	    			text-align: left;
	    			display: flex;
	    			flex-direction: column;
	    			justify-content: space-around;
	    			
	    			h5{
	    				width: 1.9rem;
	    				 white-space: nowrap;
			             overflow: hidden;
			             text-overflow: ellipsis;
					    font-size: .17rem;
					    /*margin-bottom: .05rem;*/
					    color: #3a3a3a;
					    font-weight: 400;
					    line-height: normal;
					    margin: 0;
					    
					    
	    			}
	    			.desc-title{
	    				white-space: nowrap;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    color: #878787;
					    margin-bottom: .37rem;
					    text-align: justify;
					    margin: 0;
					    position: relative;
					    top: -0.1rem;
					    
	    			}
	    			.tag{
	    				position: absolute;
					    top: .55rem;
					    left: 0;
					    padding: .03rem .06rem;
					    color: #fff;
					    font-size: .09rem;
					    background-color: #ff8a65;
					    border-radius: .04rem .04rem .04rem .04rem;
					    margin-bottom: 0.1rem;
	    			}
	    			.desc-price{
	    				position: relative;
	    				text-align: left;
	    				line-height: normal;
	    				top: 0.05rem;
	    				width: 1.9rem;
	    				.desc-money{
	    					    display: block;
							    color: #ff8000;
							    width: 100%;
							    white-space: nowrap;
							    overflow: hidden;
							    text-overflow: ellipsis;
							    font-size: .16rem;
							    .desc-num{
							    	font-size: .12rem;
							    	font-style: normal;
							    	color: #ff8000;
							    	white-space: nowrap;
							    }
	    				}
	    				.fa-plus-circle{
	    					position: absolute;
						    top: -.09rem;
						    right: 0;
						    width: .74rem;
						    height: .4rem;
						    text-align: right;
						    line-height: .35rem;
						    font-size: 20px;
						    font-style: normal;
						    -webkit-font-smoothing: antialiased;
						    color: #ff8000;
	    				}
	    			}
			    }
			}
		}
		.fruit-banner{
		    height: 170px;
		    width: 375px;
		    overflow-x: scroll;
		    display: flex;
		    display: -webkit-box;
		    flex-wrap: nowrap;
		    overflow-y: hidden;
			.box{
				width: 112px;
				height: 170px;
				background: #FFFFFF;
				
				padding: .1rem .08rem .15rem;
				padding-bottom: 0;
				.img-box{
					#img-box{
						width: 0.96rem;
						height: 0.96rem;
					}
				}
				.banner-name{
					font-size: .13rem;
				    color: #3a3a3a;
				    text-align: center;
				    white-space: nowrap;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    margin-top: .12rem;	
				}
				.price{
					display: -webkit-box;
					position: relative;
					.money{
					    text-align: center;
						font-size: .12rem;
						display: block;
					    color: #ff8000;
					    width: 100%;
					    white-space: nowrap;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    .banner-kg{
					    	color: #ff8000;
					    	font-size: .1rem;
					    	font-style: normal;
					    	text-align: center;
					    	white-space: nowrap;
					    }
					}
					.fa-plus-circle{
						    position: absolute;
						    top: -.09rem;
						    right: -0.03rem;
						    width: .74rem;
						    height: .4rem;
						    text-align: right;
						    line-height: .35rem;
						    font-size: 20px;
						    font-style: normal;
						    -webkit-font-smoothing: antialiased;
						    color: #ff8000;
					}
				}
			}
		}
	}
</style>