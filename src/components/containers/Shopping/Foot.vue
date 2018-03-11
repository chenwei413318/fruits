<template>
	<div class="base-nav">
		<span class="select_all">
		<i class="fa fa-check"></i>
		全选
		</span>
		<div class="info">
			合计
			<small>￥</small>
			<big>{{(all_info.all_price).toFixed(1)}}</big>
		
		</div>
		<a href="" class="account">结算 ({{all_info.all_num}})</a>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
	export default {
	name:'base-nav',
	computed: {
			...mapGetters(['all_info'])	
		},	
		mounted () {
			console.log(this.all_info.all_price)
			console.log(typeof(this.all_info.all_price))
		}
	}
</script>

<style lang="scss" scoped>
	.base-nav{
		    font-family: Arial,"Microsoft Yahei",sans-serif;
		    top: auto;
    bottom: 0.42rem;
    left: 0;
    width: 100%;
    position: fixed;
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
    height: .5rem;
    box-shadow: 0 -0.02rem 0.02rem 0 rgba(0,0,0,.15);
    background: #FFFFFF;
		
		.select_all{
		
		  font-size: .12rem;
    color: #878787;
			 i{
			 	      float: left;
				    width: .14rem;
				    height: .14rem;
				    margin: 0 .05rem 0 .1rem;
				    border: .01rem solid #bfbfbf;
				    background: #fff;
				    color: #fff;
				    border-radius: 100%;
				    line-height: .14rem;
			
			}
			
			 .fa-check{
			 	    border-color: #ff8000;
   					 background: #ff8000;
     				margin: 0 .05rem 0 .1rem;
     				
     				color: #fff;
			 
			 }
		}
		.info{
			-webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-box-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
    padding-right: .1rem;
    text-align: right;
    color: #878787;
    font-size: .12rem;

    	font-size: .14rem;
    color: #878787;
	    	small{
				    font-size: .1rem;
				    color: #ff8000;
			}
			big{
				font-size: .2rem;
				 color: #ff8000;
				 font-weight: 300;
			}	
		
		}
		.account{
		display: inline-block;
    min-width: 1rem;
    height: .5rem;
    padding: 0 .05rem;
    background: #ff8000;
    font-size: .16rem;
    line-height: .5rem;
    color: #fff;
    text-align: center;
		}
	}
</style>