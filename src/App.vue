<template>
  <div id="app">
    <!--<home-header></home-header>-->
    <!--<home-footer></home-footer>-->
  	<router-view></router-view>
   <app-foot></app-foot>
    
  </div>
</template>

<script>
//import HomeHeader from './components/containers/Home/Header.vue'

	import AppFoot from './components/containers/Foot/Foot.vue'
export default {
  name: 'Foot',
  components:{
  	AppFoot
  }
}
</script>

<style lang="scss">
@import './stylesheets/_reset.scss';
@import './stylesheets/_common.scss';
</style>
