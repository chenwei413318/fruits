<template>
	<div class="fruitday-category">
		<header>
			<nav>
				<div class="back">
					<router-link to="/list">
						<i class="fa fa-angle-left "></i>
					</router-link>
				</div>
				<div class="text">{{bigs.name}}</div>
				<a class="next"><i class="fa fa-search" ></i></a>
			</nav>
			<!---->
			<div class="menu-swiper">
				<div class="swiper-wrapper">
					<div class="swiper-slide " v-for="title in titles" :key="title.id" @click="change(title.id)">
						<span  @click="toggle(title.id)" :class="[showType==title.id?'active':'']">
							{{title.name}}
						</span>
					</div>
				</div>
			</div>
			<!---->
			<div class="sort">
				<ul class="other-type">
		 				<li>综合</li>
					<li>销量</li>
					<li>价格 
						<em class="sort-price ">
							
						</em>
					</li>
				</ul>
			</div>
		</header>
	</div>
</template>

<script>
	export default {
		props:['titles','bigs','change','classId'],
		data () {
			return {
				  showType: '1',
			}
		},
		methods:{
			toggle:function (id) {
        	this.showType = id;
        	
    		}
		}
	}
	
</script>

<style lang="scss">
	.fruitday-category{
		display: block;
		header{
			    display: block;
			    height: 1.1rem;
			    background: rgba(248,248,248,.95);
			    -webkit-box-shadow: inherit;
			    box-shadow: inherit;
			        position: fixed;
			    left: 0;
			    top: 0;
			    width: 100%;
			    padding: .08rem 0;
			    
			    z-index: 9;
			    line-height: .3rem;
		
		nav{
			    position: static;
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
		.menu-swiper{
			line-height: .36rem;
    		background: #fff;
    		margin: 0 auto;
		    position: relative;
		    overflow-x:scroll;
		    z-index: 0;
		    text-align: center;	
		    .swiper-wrapper{
		    	    position: relative;
				    width: 100%;
				    height: 100%;
				    z-index: 1;
				    transform: translate3d(0px, 0px, 0px);
				    transition-duration: 0ms;
				.swiper-slide{
					white-space: nowrap;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    height: 100%;
    				position: relative;
    				width: 81.5217px;
    				span{
    					display: inline-block; 
    				}
				}    
		    }
		}
		.active{
			color: #65a032;
		}
		.active:after{
			
			   position: absolute;
			    content: ' ';
			    width: 0;
			    height: .02rem;
			    bottom: .01rem;
			    left: 50%;
			    -webkit-transition: all .4s ease 0s;
			    -moz-transition: all .4s ease 0s;
			    -o-transition: all .4s ease 0s;
			    transition: all .4s ease 0s;
			    border-radius: .06rem .06rem 0 0;
			    background-color: #65a032;
			    opacity: 0;
			    opacity: 1;
			    left: 10%;
			    width: 80%;
		}
		ul{	
			display: block;
			display: flex;
			justify-content: space-between;
			background: #f5f5f5;
		    text-align: center;
		    line-height: .36rem;
		    width: 100%;
		    li{
		    
				line-height: .36rem;
		    	-webkit-box-flex: 1;
		    	 display: list-item;
  				  text-align: -webkit-match-parent;
  				 width: 1.24rem;
  				.sort-price{
  					display: inline-block;
				    position: relative;
				    top: .02rem;
				    margin-left: .05rem;
				    height: .12rem;
				    }
				    .sort-price:before{
				    	    border-bottom: 5px solid #d8d8d8;
						    top: 0;
						    content: ' ';
						    position: absolute;
						    left: 0;
						    width: 0;
						    height: 0;
						    border-left: 4px solid transparent;
						    border-right: 4px solid transparent;
						    
				    }
				    .sort-price:after{
				    	    border-top: 5px solid #d8d8d8;
						    bottom: 0;
						    content: ' ';
						    position: absolute;
						    left: 0;
						    width: 0;
						    height: 0;
						    border-left: 4px solid transparent;
						    border-right: 4px solid transparent;
				    }
  				
  				 
		    }
		}
	}
	
	}
</style>