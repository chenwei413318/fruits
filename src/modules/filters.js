import Vue from "vue"
Vue.filter('small',function(value){
	 let val = String(value)
     let str = val.substring(0,val.indexOf('0'))
     let num = str.split('.')
   	if(num[1]){
   	 return '.'+num[1]
   	}else{
   	return ''
   	}	
    
})
