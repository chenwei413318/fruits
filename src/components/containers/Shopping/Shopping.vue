<template>
	<div class="shop shop-list">
		
		<nav>
			<div class="back">
				<router-link to="/list">
					<i class="fa fa-angle-left "></i>
				</router-link>
			</div>
			<div class="text">购物车</div>
			<a class="next">编辑</a>
		</nav>
		<!---->
		<div class="cart">
			<div class="address-con">
				<a class="address">
					<span class="specific">
						<i class="fa fa-location-arrow"></i>
						<div class="info">添加地址</div>
						<i class="fa fa-angle-right "></i>
					</span>
				</a>
			</div>
		
			<shop-con :shops="shops" :item="item"></shop-con>
		</div>
		<foot-con></foot-con>
	</div>
</template>

<script>
	import ShopCon from './Shopcon'
	import FootCon from './Foot'
	import config from '../../../modules/config'
import axios from 'axios'
	export default {
		name:'shop-list',
		components:{
			ShopCon,FootCon
		},
		data () {
			 return {
			 	 shops:[],
			 	 item:[],
			 }
		},
		methods:{
				getshops () {
					  axios.get(this.$root.config.host+'gy//v3/cart/get?connect_id=lsl1d67c7qmegfth0f8rntavj1&store_id_list=3&item_id='
				).then(res=>{
				this.shops = res.data.cart.products,
					this.item = res.data.cart.alerts[0],
				console.log(res.data.cart.alerts)
				})
		}
		
	},
	created () {
		this.getshops()
	}
	}

  


	
	
	
</script>

<style lang="scss">
	body{
		    background: #f5f5f5;
		   
		nav{
			    position:  fixed;;
			    border-bottom: none;
			    background: 0 0;
			    border-bottom: .01rem solid #d8d8d8;
			    color: #75a739;
			    height: .45rem;
			    line-height: .43rem;
				top: 0;
			    left: 0;
			    width: 100%;
			    display: -webkit-box;
			       background: #FFFFFF;
			       z-index: 9;
			.back{
				    color: #76a741;
   					 display: inline-block;
       				 width: .88rem;
       			a{
       				width: .4rem;
				    color: #75a739;
				    display: inline-block;
				    font-size: .22rem;
				    float: left;
				    text-align: center;
				    padding-left: .07rem;
				    text-align: center;
				   
       			}
       			.fa-angle-left{
       				height:0.125rem;
       				width:0.11rem
       			}	 
			}
			.text{
				    text-align: center;
				    font-size: .17rem;
				    white-space: nowrap;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    display: block;
				    flex: 1;
			}
			.next{
				width: .8rem;
			    margin-right: .08rem;
			    text-align: right;
			    color: #76a741;
			    display: inline-block;
			}    
		}
		.cart{
			margin-top: .46rem;
			padding-bottom: .45rem;
			.address{
				    display: block;
				    margin-bottom: .1rem;
    				background-color: #fff;
    			.specific{
    				    min-height: .4rem;
    				    line-height: .4rem;;
					    padding: .2rem 0;
					    display: -webkit-box;
					     display: box;
					         box-align: center;
					i{
						    font-size: .18rem;
						    color: #ff8000;
						    padding: .1rem;
					}
					.info{
						color: #3a3a3a;
					    -webkit-box-flex: 1;
					    -moz-box-flex: 1;
					    -ms-box-flex: 1;
					    -o-box-flex: 1;
					    box-flex: 1;
					    display: block;
					}
					.fa-angle-right{
						text-align: right;
					    padding: .1rem .08rem;
					    color: #bfbfbf;
					
					    font-size: 16px;
					    font-style: normal;
					}
    			}	
    			
			}
				.address:before{
    					    content: '';
						    display: block;
						    width: 100%;
						    height: .02rem;
						    background-image: url(https://wap.fruitday.com/content/images/main/border.png);
    				}
    				.address:after{
    					    content: '';
						    display: block;
						    width: 100%;
						    height: .02rem;
						    background-image: url(https://wap.fruitday.com/content/images/main/border.png);
    				}
		}
	}
	
</style>