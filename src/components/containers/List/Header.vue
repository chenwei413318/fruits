<template>
	<div class="category-search" @click="toggle">
		
	
	  <div id="head"  >
	    <i class="fa fa-search"></i>
	      奇异果
	  </div>
  </div>
</template>

<script>
 import SearchBox from './SearchBox'
export default {
  name:'list-header',
   props:['toggle'],

  components:{
    SearchBox

  }
 }
</script>

<style lang="scss">
	.category-search{
		    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    line-height: .28rem;
    text-align: center;
    background: #f8f8f8;
    border-bottom: .01rem solid #d8d8d8;
	
    #head{
      margin: .08rem;
    background: #eee;
    border-radius: .04rem;
    color: #878787;
    font-size: .12rem;
    line-height: .28rem;
    text-align: center;
    }
    }
</style>

