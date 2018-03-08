<template>
  <div id="app">
  	<router-view></router-view>
   <app-foot></app-foot>
    
  </div>
</template>

<script>
	import AppFoot from './components/containers/Foot/Foot.vue'
	
export default {
  name: 'Foot',
  components:{
  	AppFoot
  }
}
</script>

<style lang="scss">
#app {

}
@import './stylesheets/_reset.scss';
@import './stylesheets/_common.scss';
</style>
