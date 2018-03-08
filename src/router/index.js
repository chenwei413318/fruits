import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/containers/Home/Home.vue'
import Detail from '../components/containers/Detail/Detail.vue'
import Position from '../components/containers/Home/Position.vue'

import List from '../components/containers/List/List.vue'
import Mine from '../components/containers/Mine/Mine.vue'
import Shopping from '../components/containers/Shopping/Shopping.vue'
import Css from '../components/containers/List/SearchBox.vue'
import ListNext from '../components/containers/ListNext/ListNext.vue'
Vue.use(Router)

export default new Router({
	
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/position',
      name: 'Position',
      component: Position
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    { path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
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
    }
  ]
})
