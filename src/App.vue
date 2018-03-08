<template>
  <div id="app">
    <!--<home-header></home-header>-->
    <router-view/>
    <!--<home-footer></home-footer>-->
  </div>
</template>

<script>
//import HomeHeader from './components/containers/Home/Header.vue'
import HomeFooter from './components/containers/Foot/Foot.vue'
export default {
  name: 'App',
  components:{HomeFooter}
}
</script>

<style lang="scss">

@import './stylesheets/_reset.scss';
@import './stylesheets/_common.scss';
</style>
