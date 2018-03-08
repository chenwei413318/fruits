<template>
	<div class="fruit-banner">
		<div class="box">
			<div class="img-box">
				<img id="img-box" src="../../../../static/images/mangguo.jpg"/>
			</div>
			<p>金蜜香芒果</p>
			<div class="price">
				<span class="money">
					￥53.8/
					<em>2kg</em>
				</span>
				<i class="fa fa-plus-circle fa-2x"></i>
			</div>
		</div>
		<div class="box">
			2
		</div>
		<div class="box">
			3
		</div>
		<div class="box">
			4
		</div>
		<div class="box">
			5
		</div>
	</div>
</template>

<script>
	export default {
		name:'fruit-banner'
	}
</script>

<style lang="scss">
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
			background: cornflowerblue;
			margin-right: 10px;
			padding: .1rem .08rem .15rem;
			padding-bottom: 0;
			.img-box{
				#img-box{
					width: 0.96rem;
					height: 0.96rem;
				}
			}
			p{
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
				span{
				    text-align: center;
					font-size: .12rem;
					display: block;
				    color: #ff8000;
				    width: 100%;
				    white-space: nowrap;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    em{
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
</style>