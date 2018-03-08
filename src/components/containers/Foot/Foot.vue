<template>
        <div class="app-foot">
			<div class="main-nav">
				
			
				
					<router-link :to="nav.path" class="footer-item" v-for="nav in navs" :key="nav.id" >
						<i :class="nav.class"></i>
						<span>{{nav.title}}</span>
					</router-link>
			
				
			</div>
        </div>
</template>

<script>

export default {
    name:'app-foot',
	data () {
	    return {
	      navs:[
	        {id:1,title:'首页',path:'/',class:'fa fa-home'},
	        {id:2,title:'分类',path:'/list',class:'fa fa-list'},
	        {id:3,title:'购物车',path:'/shop',class:'fa fa-shopping-cart'},
	        {id:4,title:'我的果园',path:'/mine',class:'fa fa-user-o'},
	        
	      ]
	    }
	  }
	   

}    
</script>
<style lang="scss">
	.main-nav{
		    top: auto;
		    bottom: 0;
		    left: 0;
		    width: 100%;
		    position: fixed;
		    display: -webkit-box;
		    display: -moz-box;
		    display: -ms-box;
		    display: -o-box;
		    display: box;
		    box-shadow: 0 -2px 2px 0 rgba(0,0,0,.15);
		    background: #fff;
		    height: .42rem;
		    font-size: .1rem;
		    line-height: 1.2;
		 .footer-item{
		 	    position: relative;
			    width: 100%;
			    color: #898989;
			    display: block;
			    text-align: center;
			    -webkit-box-flex: 1;
			    -moz-box-flex: 1;
			    -ms-box-flex: 1;
			    -o-box-flex: 1;
			    box-flex: 1;
			i{
				    display: block;
   					 font-size: .24rem;
			}
		 }
		 .router-link-active{
		 	color: #65a032;
		 }
	}
</style>
