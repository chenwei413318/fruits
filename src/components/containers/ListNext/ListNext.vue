<template>
        <div class="main-box list-next">
       <next-head :titles="titles" :bigs="bigs" :change="change" :classId="class3Id"></next-head>
    	<next-concent :products="products"></next-concent>
        </div>
</template>

<script>
import NextConcent from './NextConcent'
	 import config from '../../../modules/config'
	  import axios from 'axios'
import NextHead from './NextHead'
export default {
    name:'list-next',
    props:['id'],
	data () {
	  		return {
	  			titles:[],
	  			bigs:[],
	  			products:[],
	  			class3Id:320,
//	  			class2Id:this.id
	  			
	  		}
	},
	methods:{
	  		gettitle (id) {
    		axios.get(config.host+'gy/v3/product/sub_category_list?store_id_list=3&class2_id='+310+'&class3_id='+id+'&sort_type=1&tms_region_type=1').then(res=>{	
//com/v3/product/sub_category_list?store_id_list=3&class2_id=310&class3_id=320&sort_type=1&tms_region_type=1
    			this.titles = res.data.data.brotherClass
    			this.bigs = res.data.data.fatherClass
    			this.products = res.data.data.productGroup
				console.log(this.furitli)
    			 console.log(res.data.data)
    		})
    	},
    	change (id) {
//  			this.class3Id = id
    			this.gettitle (id)
    	}
	  	},
	  	created (){ 
	  	this.gettitle(this.class3Id)
	  	},

	  	
    components:{
    NextConcent,NextHead

  }
   

}    
</script>
<style lang="scss">

</style>