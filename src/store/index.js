import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import position from './position'
import particles from './particles'

const store = new Vuex.Store({
    modules:{
        position,particles
    }
})

export default store

 

 
