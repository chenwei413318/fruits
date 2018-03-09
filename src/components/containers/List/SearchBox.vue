<template>
  <div class="modal search-box" v-if="isShow">
       <div class="m-component-nav">
      		<div class="navbar-header">
      				<i class="fa fa-angle-left fa-2x" ></i>
      				<span @click="toggle">返回</span>
      		</div>
      		<div class="searchbar" >
      			<i class="fa fa-search" ></i>
      			<input type="text" name="" id="" placeholder="新鲜水果、生鲜" />
      			<i display="" class="fa fa-close " ></i>
      		</div>
      		<div class="sub-btn">
      			搜索
      		</div>
      </div>
     	<div class="keyword">
     		<div class="hotword">
     				<div class="title">热门搜索</div>
     				<div class="con">
     					<a  v-for="(keyword,i) in keywords" :key="keyword.i" @click="tog">{{keyword}}</a>
     				</div>
     		</div>
     		<div class="hsword" v-if="isHas">
     				<div class="title">历史搜索</div>
     				<div class="con">
     					<a href="javascript" v-for="preword in prewords" :key="preword.index" >joajdo</a>
     				</div>
     		</div>
     		<div class="clear-sign">
     			<a v-if="isHas" @click="tog">清空搜索记录</a>
     		</div>
     	</div>
      
  </div>
</template>

<script>
 import config from '../../../modules/config'
 import axios from 'axios'
export default {
  name:'m-component-nav',
  props:['isShow','toggle'],
 data () {
 	  return {
 	  	isHas:false,
 	  	keywords:[],
 	  	prewords:[]
 	  }
 },
 methods:{
    	getkey () {
    		axios.get(config.host+'gy/v3/search/get_hot_keyword').then(res=>{
    	console.log(res.data.data)
    	 this.keywords = res.data.data
    		})
    	},
    	 tog(){
        this.isHas = !this.isHas
    },
    addword(){
//  	var btns = document.documentElementsByTagName("a");
//  	for(let i = 0;i < btns.length;i++){
// 		 btns[i].onclick = function(){
//      console.log(i);
//      return 
    }

    	 	
    
    	
    }, 
    created () {
    	this.getkey()
    },
    mounted () {

    }
  
  
}
</script>

<style lang="scss">
    .search-box{
      display: block;
    padding-top: .53rem;
      position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 90;
    overflow: hidden;
    width: 100%;
		 .m-component-nav{
		       position: fixed;
		    left: 0;
		    right: 0;
		    top: 0;
		    background-color: #fff;
		    border-bottom: 1px solid #d8d8d8;
		    padding: .1rem 0;
		    height: auto;
		    display:flex;
		   
		    .navbar-header{
		    	  color: #64a131;
				    font-size: .14rem;
				    width: auto;
				    height: .32rem;
				    margin-right: .06rem;
					  display: block;
					  float:left;
					  display:flex;
					  justify-content:space-between;
					  align-items: center;
					span{
						    margin-left:-.1rem;
						    display:inline-block;
						    color: #64a131;
    						font-size: .14rem;	
    					
					}	
					i{
						   	margin-left:0.05rem ;
						    font-size: .3rem;
						    display: inline-block;
						    position: relative;
						    top: 3px;
						    display:inline-block;
						    height:0.2rem;
						    width: 0.23rem;
						    position: relative;
						    top: -0.05rem;
					}	  
				  
				}
				.searchbar{
					    box-sizing: border-box;
					    position: relative;
					    background-color: #eee;
					    border-radius: .05rem;
					    color: #878787;
					    font-size: .14rem;
					    display: -webkit-box;
							flex: 1;
					    width: 2.3rem;
					    
					    z-index: 1;
					i{
						    font-size: .16rem;
						    margin: 0 .1rem;
						    position: relative;
						    line-height: .32rem;
						   
						
					}
					input{
						    white-space: nowrap;
						    overflow: hidden;
						    text-overflow: ellipsis;
						    max-width: 100%;
						    padding: 0 .3rem 0 0;
						    height: .32rem;
						    background-color: transparent;
						    border: medium none;
						    outline: medium none;
						    -webkit-appearance: none;
						        line-height: normal;
						     
						       z-index: 100;
					}    
				}
				.sub-btn{
					box-sizing: border-box;
			    height: .32rem;
			    line-height: .32rem;
			    color: #64a131;
			    font-size: .14rem;
			    padding: 0 .06rem;
			    white-space: nowrap;
			    float:left;
				}
			}
			.keyword{
				    height: 100%;
				    overflow: auto;
				    padding: 0 .1rem;
				    .hotword,.hsword{
				    	margin-top: .2rem;
				    	.con{
				    		    margin-left: -.04rem;
   									 margin-right: -.04rem;
				    	}
				    	
				    }

				    	.title{
				    		    color: #878787;
								    font-weight: lighter;
								    margin-bottom: .05rem;
				    	}
				    a{
				    	    color: #3a3a3a;
								    display: inline-block;
								    padding: .07rem .08rem;
								    margin: .1rem .04rem 0;
								    background-color: #f1f1f1;
								    border-radius: .05rem;
								    max-width: 1.8rem;
								    white-space: nowrap;
								    overflow: hidden;
								    text-overflow: ellipsis;
				    }
				.clear-sign{
							    text-align: center;
							    background-color: transparent;
							    margin: .5rem 0 .3rem;
							   a{
							   	display: inline-block;
							    color: #878787;
							    border: 1px solid #f1f1f1;
							    border-radius: .06rem;
							    padding: .1rem .4rem;
							    font-weight: lighter;
							   }
				}    
			}
    }
</style>

