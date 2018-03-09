<template>
        <div class="list-content" v-if="!isShow">
            <div class="fruitday-category">
          		<ul class="tab">
          			<li v-for="fruit in groups" :key="fruit.id" @click = "addclass(fruit.id)" :class="[classId==fruit.id?'active':'']" >
          		<!--<li v-for="fruit in furitgroup" :key="fruit.id" @click = "addclass(fruit.id)" :class="[classId==fruit.id?'active':'']" >-->
          				<em>{{fruit.name}}</em>
          			</li>
          			
          		</ul>
          		<list-item :furitli="furitli" :furitname="furitname"></list-item>
            </div>
        </div>
</template>

<script>
	//config.host+'gy/v3/product/sub_category_list?store_id_list=3&class2_id='+310+'&class3_id='+id+'&sort_type=1&tms_region_type=1'
import {CLASSID} from '../../../store/particles/const'
import {GETGROUP} from '../../../store/particles/const'
 import config from '../../../modules/config'
 import ListItem from './ListItem'
 import axios from 'axios'
import {mapState,mapActions} from 'vuex'
export default {
    name:'list-content',
   props:['isShow'],
    data () {
    	return {
			furitgroup:[],
			furitli:[],
			furitId:"",
		
			furitname:'',
			classId:"",
			id:""	
    	}
    },
    methods:{
    	getfuritlist (id) {
    		axios.get(config.host+'gy/v3/product/category_list?store_id_list=3&class_id='+id).then(res=>{
    			this.furitli = res.data.data.childrenList[0]
    			
    			 this.furitgroup = res.data.data.classOneGroup
    			 this.furitname = res.data.data.childrenList[0].class2Name.name
 			 this.furitId = res.data.data.childrenList[0].class2Name.id
 		
    			 this.classId = res.data.data.classId
    			 this.$store.commit(CLASSID,this.furitId)
    			 localStorage.chen = this.furitId
    		})
    	},
    	addclass (id) {
    			this.id = id
    			this.getfuritlist (id)
	 			
	 			
	 			
   		},
   		
   		
   		
   		...mapActions([GETGROUP])
   		
   		
    },
    
    created () {
    	this.getfuritlist(this.id)
    	this[GETGROUP]()
    },
    updated () {
  	console.log(this.furitId)
//  	console.log(this.classId)
//  	console.log(this.furitli)
//  	console.log(this.furitgroup)
    },
   computed:{
      ...mapState({
          groups:state=>state.particles.groups
      }),
     
  },
   
  components:{
    ListItem

  }
   

}    
</script>
<style lang="scss">
.list-content{
    padding-bottom: .42rem;
    display: block;
    font-size: .14rem;
    .fruitday-category{
            display: block;
        .tab{
        		position: fixed;
			    left: 0;
			    top: .47rem;
			    width: .8rem;
			    background: #f5f5f5;
			    text-align: center;
			    margin: 0;
			    overflow-y: auto;
			    height: calc(100% - .89rem);
			li.active{
				    border-left: .02rem solid #65a032;
				    color: #65a032;
				    background: #fff;
			}
			li{		display: block;
				    height: .46rem;
				    width: .8rem;
				    line-height: .46rem;
				    font-size: .15rem;
				    color: #3a3a3a;
				    border: .02rem solid #f5f5f5;
				    border-right: 0;
				em{
					font-style: normal;
				}
			}    
			
        }     
    }
}
</style>
