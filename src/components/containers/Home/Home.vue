<template>
    <div class="home">
        <home-header></home-header>
        <home-banner></home-banner>
        <Content></Content>
         
    </div>
</template>

<script>
import HomeHeader from './Header.vue'
import HomeBanner from './Banner.vue'
// import HomeShow from './Show.vue'
// import FruitBoxHot from './FruitBoxHot.vue'
import Content from './Content/Content'
    export default{
        name:"home",
        components:{HomeHeader,HomeBanner,Content}
    }
</script>

<style lang="scss">
    .home{
    	width: 100%;
    	margin-top: 0.38rem;
    }
</style>