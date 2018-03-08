<template>
	<div class="home-swiper">
		<div class="swiper-slide">

			<div class="item" v-for="product in products" :key="product.id">
				<img class="good-img" :src="product.photo"/>
				<dl>
					<dt>{{product.product_name}} </dt>
					<dd>{{product.product_desc}}</dd>
					<dd>{{product.volume}}</dd>
					<div>
						<small>￥</small>
						<big>{{parseInt(product.price)}}</big>
						<small>{{product.price|small}}</small>
						<span>明日达</span>
					</div>
				</dl>
				<div class="count">
					<span class="num"></span>
					<span class="plus">
						<i class="fa fa-plus-circle"></i>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	  export default {
	  	name:'home-swiper',
	  	props:['products',],
	  	
	  	
	  	
	  }
	
	
	
</script>

<style lang="scss">
	.home-swiper{
		padding-top: 1.25rem;
		margin: 0 auto;
	    position: relative;
	    overflow: hidden;
	    z-index: 0;
	    text-align: center;
	    min-height: 834px;
   		 width: 375px;
   		.swiper-slide{
		    min-height: 547px;
			 width: 375px;
			 height: auto;
			.item{
				    padding: .1rem;
				    position: relative;
				    border-bottom: .01rem solid #d8d8d8;
				    color: #3a3a3a;
				    display: -webkit-box;
				.good-img{
					width: 1.05rem;
				    height: 1.05rem;
				    margin-right: .1rem;
				    border-radius: .04rem;
				}
				dl{
					margin: 0;
					text-align: left;
    				height: 1.05rem;
       				 -webkit-box-flex: 1;
           			 position: relative;
           			     width: 1%;
           			dt{
           				    display: -webkit-box;
						    -webkit-line-clamp: 2;
						    -webkit-box-orient: vertical;
						    -moz-box-orient: vertical;
						    overflow: hidden;
						    text-overflow: ellipsis;
           			}
           			dd{
           				    height: .2rem;
						    font-size: .12rem;
						    color: #878787;
						    line-height: 1.8;
						    white-space: nowrap;
						    overflow: hidden;
						    text-overflow: ellipsis;
						    margin-left:0 ;
						    
           			}
           			dd:last-of-type{
           				top: .6rem;
					    right: 0;
					    bottom: auto;
					    left: 0;
					    position: absolute;
           			}
           			div{
           				margin-top: .05rem;
					    color: #ff8000;
					    line-height: 1;
					    top: auto;
					    right: 0;
					    bottom: 0;
					    left: 0;
					    position: absolute;
					  	small{
					  		font-size: .1rem;
					  	}
					  	big{
					  		font-size: .2rem;
					  	}
					  	span{
					  		position: relative;
						    top: -.03rem;
						    border-radius: .02rem;
						    padding: .02rem .02rem;
						    line-height: 1;
						    margin-left: .08rem;
						    font-size: .08rem;
						    color: #fff;
						    background: #ff8000;;
					  	}
           			}
				}
				.count{
					position: absolute;
				    width: .74rem;
				    line-height: .22rem;
				    right: .1rem;
				    bottom: 0;
				    height: .43rem;
				    .num{
				    	position: absolute;
					    width: .74rem;
					    line-height: .22rem;
					    right: .1rem;
					    bottom: 0;
					    height: .43rem;
					    display: none;
				    }
				    .plus{
				    	right: -.1rem;
					    text-align: right;
					    padding: .1rem;
					    position: absolute;
					    top: 0;
					    i{
					    	text-align: center;
						    display: inline-block;
						    border: .01rem solid #d8d8d8;
						    color: #ff7e05;
						    border-radius: 100%;
						    width: .2rem;
						    height: .2rem;
						    line-height: .2rem;
						    background: #fff;
					    }
				    }
				}
				
			} 
   		}
   		
	}
</style>