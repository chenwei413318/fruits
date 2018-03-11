<template>
	
	<div class="cart-con">
		<div class="section">
			<div class="title">
				<div class="pull-right">总重约{{all_info.all_weight}}kg</div>
				商品清单
			</div>
			<ul >
				<li v-for="shop in cars" :key="shop.id">
				<i class="fa fa-check"></i>
					<a href="">
						<div class="pro-img">
							<img :src="shop.photo" alt="" />
						</div>
						<div class="pro-info" >
							<h3>{{shop.name}}</h3>
							<h4></h4>
							<h5><span>{{shop.volume}}</span>kg</h5>
							<p>
								<span class="price">
									<small>￥</small>
									<big>{{parseInt(shop.price)}}</big>
									<small>{{shop.price|small}}</small>
									
								</span>
								<span class="tag" style="background: #FF8000"> 明日达</span>
							</p>
						</div>
					</a>
					<!---->
					<div class="count">
						<span class="minus" @click="ADDGOOD({
							id:shop.id,type:-1
						})"><i class="fa fa-minus"></i></span>
						<span class="num">{{shop.num}}</span>
						<span class="plus" @click="ADDGOOD({
							id:shop.id,type:1
						})"><i class="fa fa-plus"></i></span>
					</div>
				</li>
			</ul>
		</div>
		<!---->
		<div class="cart-tips">
			<a href="">
				<span class="tag"> {{item.tag}}</span>
				<span class="info">{{item.msg}}</span>
				<i class="fa fa-angle-right "></i>
			</a>
		</div>
		
	</div>
</template>

<script>
	import { mapState,mapMutations,mapGetters } from 'vuex'
	import {ADDGOOD} from '../../../store/shops/const'
	export default {
		name:'cart-con',
		props:['item'],
		
		computed: {
			...mapState({
				cars:state=>state.shops.cars
			}),
			...mapGetters(['all_info'])
			
		},
		methods:{
			...mapMutations([ADDGOOD])
		},
		mounted () {
			console.log(this)
		}
		
	}
	
</script>

<style lang="scss">
	.cart-con{
    font-family: Arial,"Microsoft Yahei",sans-serif;
	.section{
		
		margin-bottom: .1rem;
   background: #fff;
	    .title{
	    	    height: .3rem;
	    padding: 0 .1rem;
	    font-size: .12rem;
	    line-height: .3rem;
	    color: #878787;
	    border-bottom: .01rem solid #d8d8d8;
		.pull-right{
		  float: right!important;
		}
	    }
	    ul{		
	    		display: block;
	    	    touch-action: pan-y;
			    user-select: none;
			    -webkit-user-drag: none;
			    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			    width: 100%;
			    overflow: hidden;
			        margin: 0;
			    padding: 0;
			li{
				
				position: relative;
			    padding: .1rem;
			    border-bottom: .01rem solid #d8d8d8;
			    display: block;
			    display: -webkit-box;
			    display: -moz-box;
			    display: -ms-box;
			    display: -o-box;
			    display: box;
			    -webkit-box-align: center;
			  
			    box-align: center;
			    i{
		    	    display: inline-block;
				    width: .14rem;
				    height: .14rem;
				    margin-right: .1rem;
				    border: .01rem solid #bfbfbf;
				    background: #fff;
				    color: #fff;
				    border-radius: 100%;
				    line-height: .14rem;
				    text-align: center;
			    }
			     
			
			 .fa-check{
			 	    border-color: #ff8000;
   					 background: #ff8000;
     				margin: 0 .05rem 0 .1rem;
     				
     				color: #fff;
			 
			 }
			    a{display: -webkit-box;
			    display: -moz-box;
			    display: -ms-box;
			    display: -o-box;
			    display: box; 
			    box-align: center;
			   
			    .pro-img{
			    	position: relative;
				    width: .9rem;
				    height: .9rem;
				    margin-right: .1rem;
				    border-radius: .04rem;
				    overflow: hidden;
				    display: block;
				       border: 0;
				    img{
				    	
			    	    border: 0;
					    width: 100%;
					    display: block;
				    }
			    }
			    .pro-info{
			    	-webkit-box-flex: 1;
				    -moz-box-flex: 1;
				    -ms-box-flex: 1;
				    -o-box-flex: 1;
				    box-flex: 1;
				    height: .9rem;
				    h3{
				    	margin: 0 0 .05rem;
					    height: .3rem;
					    font-size: .14rem;
					    line-height: .15rem;
					    font-weight: 400;
					    color: #3a3a3a;
					    display: -webkit-box;
					    -webkit-line-clamp: 2;
					    -webkit-box-orient: vertical;
					    -moz-box-orient: vertical;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    
					    
					  
				    }
				    h4{
				    	height: .15rem;
					    margin: 0;
					    font-weight: 400;
				    }
				    h5{
				    	    height: .15rem;
					    margin: 0 0 .05rem;
					    font-weight: 400;
					    font-size: .1rem;
					    line-height: .15rem;
					    color: #878787;
					    span{
					    	float: left;
						    margin-right: .1rem;
						    font-size: .12rem;
					    }
				    }
				    p{
				    	font-size: .12rem;
					    color: #bfbfbf;
					    text-align: justify;
					    margin: 0;
					    display: block;
					   
					    .price{
					    	    font-size: .12rem;
    							color: #bfbfbf;
    						small{
    							    font-size: .1rem;
    							    color: #ff8000;
    						}
    						big{
    							font-size: .18rem;
    							 color: #ff8000;
    							 font-weight: 300;
    						}	
					    }
					    .tag{
					    	display: inline-block;
						    margin-left: .05rem;
						    padding: .02rem .02rem .01rem;
						    line-height: 1;
						    color: #fff;
						    font-size: .1rem;
						    border-radius: .02rem;
						     
					    }
				    }
			    }
			    
    			}
    			.count{
    				    top: auto;
					    right: .1rem;
					    bottom: 0rem;
					    left: auto;
					    position: absolute;
					    display: -webkit-box;
					    display: -moz-box;
					    display: -ms-box;
					    display: -o-box;
					    display: box;
					    height: .4rem;
					   
					.minus{
						    display: inline-block;
   							 padding: .1rem;
					} 
					.num{
						    display: inline-block;
					    min-width: .2rem;
					    height: .4rem;
					    font-size: .16rem;
					    line-height: .4rem;
					    color: #3a3a3a;
					    text-align: center;
					}
					.plus{
						    margin-right: -.1rem;
						    display: inline-block;
   							 padding: .1rem;
					}
					i{
						    display: inline-block;
						    width: .2rem;
						    height: .2rem;
						    border: .01rem solid #bfbfbf;
						    border-radius: 100%;
						    font-size: .16rem;
						    line-height: .2rem;
						    color: #ff8000;
						    text-align: center;
					}   
    			}
			}    
	    }
	}
	.cart-tips{
		margin-bottom: .1rem;
   		 background-color: #fff;
        display: block;
        font-size: .14rem;
        a{
        	display: block;
        	padding: .1rem;
        	.tag{
        		    display: inline-block;
				    padding: 0 .02rem;
				    background: #ff8000;
				    height: .14rem;
				    margin-right: .05rem;
				    font-size: .1rem;
				    line-height: .14rem;
				    color: #fff;
				    border-radius: .02rem;
        	}
        	.info{
        		font-size: .12rem;
			    color: #878787;
			    line-height: .14rem;
			       -webkit-box-flex: 1;
				    -moz-box-flex: 1;
				    -ms-box-flex: 1;
				    -o-box-flex: 1;
				    box-flex: 1;
				    display: inline-block;
        	}
        	i{
        		font-size: .14rem;
			    color: #878787;
			    float: right;
        	}
        }
	}
	}
</style>