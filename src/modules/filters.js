import Vue from "vue"
Vue.filter('small',function(value){
     let str = value.substring(0,value.indexOf('0'))
     let num = str.split('.')
   	if(num[1]){
   	 return '.'+num[1]
   	}else{
   	return ''
   	}	
})
