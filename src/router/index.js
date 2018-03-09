import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import List from '../components/containers/List/List.vue'
import Mine from '../components/containers/Mine/Mine.vue'
import Shopping from '../components/containers/Shopping/Shopping.vue'
import Css from '../components/containers/List/SearchBox.vue'
import ListNext from '../components/containers/ListNext/ListNext.vue'
Vue.use(Router)

export default new Router({
	
  routes: [
 
    {
      path: '/list',
      name: 'list',
      component: List
    },
      {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
      {
      path: '/home',
      name: 'home',
      component: Home
    },
      {
      path: '/shop',
      name: 'shop',
      component: Shopping
    },
      {
      path: '/css',
      name: 'css',
      component: Css
    },
    {
      path: '/next/:id',
      name: 'next',
      component: ListNext,
      props:true,
    },

  ]
})
