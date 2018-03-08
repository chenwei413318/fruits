<template>
        <div class="main-box list">
        <list-header :toggle = 'toggle'></list-header>  
        <list-content :isShow = "isShow" :toggle = 'toggle'></list-content>
        <search-box :isShow = "isShow" :toggle = 'toggle'> </search-box >
        
        </div>
</template>

<script>
import ListHeader from './Header'
import ListContent from './ListContent'
import SearchBox from './SearchBox'
export default {
    name:'list',
    data (){
    	 return{
      		isShow:false
    }
    },
    methods:{
    toggle(){
        this.isShow = !this.isShow
    }
},
    components:{
     ListHeader,ListContent,SearchBox

  }
   

}    
</script>
<style lang="scss">

</style>
