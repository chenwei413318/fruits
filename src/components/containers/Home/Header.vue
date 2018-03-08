<template>
    <div class="home-header">
    	<div class="header-left">
    		<img class="logo" src="../../../../static/images/home-logo.png"/>
    		<router-link to='/position'  class="position" tag="div">
    			{{city}}
    			<i class="fa fa-sort-down"></i>
    		</router-link>
    	</div>
    	<div class="header-right">
    		<i class="fa fa-search"></i>
    	</div>
        
    </div>
</template>

<script>
	import { GETPOSITION} from '../../../store/position/const'
	import {mapState,mapActions,mapMutations} from 'vuex'
    export default{
        name:"home-header",
        computed:{
        	...mapState({
        		'city':state=>state.position.city
        	})
        },
        methods:{
        	...mapActions([GETPOSITION])
        },
        created(){
        	this[GETPOSITION]()
        }
    }
</script>

<style lang="scss" scoped>
    .home-header{
    	position: fixed;
    	top: 0;
    	left: 0;
    	z-index: 999;
    	display: flex;
    	background: #FFFFFF;
    	width: 100%;
    	/*box-shadow: 0 0.03rem 0.03rem 0 rgba(0,0,0,.2)*/
    	.header-left{
    		width: 70%;
    		margin: 0 0 0 0.16rem;
    		display: flex;
    		white-space: nowrap;
    		overflow: hidden;
    		height:0.38rem;
    		align-items: center;
    		.logo{
	    		width: 0.51rem;
	    		height: 0.14rem;
	    		margin-right: 0.05rem;
	    		display: block;
	    		line-height:0.38rem;
	    	}
	    	.position{
	    		color: #65a032;
	    		display: flex;
	    	}
    	}
    	.header-right{
    		width: 30%;
    		height: 38px;
    		display: flex;
    		justify-content: flex-end;
    		align-items: center;
    		i{
    			margin-right: 0.15rem;
    			font-size: 20px;
    		}
    	}
    	
    }
</style>