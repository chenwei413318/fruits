import Vue from 'vue'
import Vuex from 'vuex'
 Vue.use(Vuex)
 
 import particles from './particles'
  import shops from './shops'
 const store = new Vuex.Store({
 	modules:{
 		particles,shops
 	}
 })
 export default store
