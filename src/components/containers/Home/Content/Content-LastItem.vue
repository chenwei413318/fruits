<template>
  <div class="last-item">
    <div class="last-itemtitle">
      <a class="title"  href="#">
        <img :src="lastTitle[0].content[0].image" title="果园热卖" width="100%">
      </a>
    </div>
    <div v-for="(goodsItem,i) in goodsItem" :key="i">
    <div class="hot-show-box">
        <div class="img-box">
          <img id="img-box" :src="goodsItem.image" alt=""/>
        </div>
        <div class="desc">
          <h5>{{goodsItem.title}}</h5>
          <p>{{goodsItem.subtitle}}</p>
          <div class="desc-price">
            <span class="desc-money">
              ￥{{goodsItem.price}} /
              <em>6个</em>
            </span>
            <i class="fa fa-plus-circle fa-2x"></i>
          </div>
        </div>
    </div>
  </div>
   </div>
</template>




<script>
export default {
  name: 'last-item',
  props:['lastTitle','goodsItem']
}
</script>

<style lang="scss">
	.last-item{
		margin-top:0.2rem;
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
    			p{
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
						width:1.9rem;
    				.desc-money{
    					    display: block;
						    color: #ff8000;
						    width: 100%;
						    white-space: nowrap;
						    overflow: hidden;
						    text-overflow: ellipsis;
						    font-size: .16rem;
						    em{
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
</style>
