<template>
		<div class="items list-item" >
			<div class="item" >
				<h3>{{furitname}}</h3>
				<a href="#">全部 <i class="fa fa-angle-right"></i></a>
			
				<dl v-for="fruits in furitli.class3Group" :key="fruits.id" @click="toNext(fruits.id,fruits.name)"> 
				
					<dt><img :src="fruits.class_photo" alt=""></dt> 
					<dd>{{fruits.name}}</dd> 
					</a> 
				</dl>
			</div>
				<!--<div class="item" >
				<h3>{{furitname}}</h3>
				<a href="#">全部 <i class="fa fa-angle-right"></i></a>
			
				<dl v-for="fruits in furitli.class3Group" :key="fruits.id"> 
				
					<dt><img :src="fruits.class_photo" alt=""></dt> 
					<dd>{{fruits.name}}</dd> 
					</a> 
				</dl>
			</div>-->
		</div>
</template>

<script>
	
import {CLASSIDTHREE} from '../../../store/particles/const'
import {mapState,mapActions,mapMutations} from 'vuex'
	export default {
	  name:'list-item',
	  props:['furitli','furitname'],
	 
	  data () {
	  	return {
	  		name:['新鲜水果']
	  	}
	  },
	  methods:{
	
	  	toNext (id,name) {
	  		this.$router.push({name:'next',params:{id}})
	  		 this.$store.commit(CLASSIDTHREE,id)
    		localStorage.wei = id
	  	},
	  	
	  }

	
 
 }
</script>

<style lang="scss">
	.items{
		    margin-top: .47rem;
		      display: block;
		     font-size: .14rem;
		.item{
			
			    margin-left: .8rem;
			    padding: .1rem .1rem .18rem .1rem;
			    position: relative;
			    display: block;
			    min-height: 1rem;
			    height:200px;
			    h3{
			    	font-weight: 400;
				    height: .3rem;
				    line-height: .3rem;
				    text-align: center;
				    margin: 0;
				    font-size: .14rem;
				     display: block;
			    }
			    a{
			    	    display: block;
					    position: absolute;
					    top: .1rem;
					    right: 0;
					    height: .3rem;
					    line-height: .3rem;
					    font-size: .12rem;
					    color: #878787;
					    padding-right: .08rem;
			    }
			    dl{
			    	    width: 33%;
					    float: left;
					    text-align: center;
					    padding-bottom: .2rem;
					    display: block;
					dt{
					    padding: 0 .1rem;
					    display: block;
					   
					    img{
				    	    border: 0;
						    width: 100%;
						    display: block;
								   
					    }
					}
					dd{
						font-size: .13rem;
					    margin-top: .04rem;
					    margin-left: 0;
					    color: #3a3a3a;
					}
			    }
		}
	
	}
</style>