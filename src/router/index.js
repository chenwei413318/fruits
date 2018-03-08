import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/containers/Home/Home.vue'
import Detail from '../components/containers/Detail/Detail.vue'
import Position from '../components/containers/Home/Position.vue'
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
    }
  ]
})
