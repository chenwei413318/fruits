<template>
    <div class="home">
        <home-header></home-header>
        <home-banner></home-banner>
        <home-show></home-show>
        <fruit-box-hot></fruit-box-hot>
    </div>
</template>

<script>
import HomeHeader from './Header.vue'
import HomeBanner from './Banner.vue'
import HomeShow from './Show.vue'
import FruitBoxHot from './FruitBoxHot.vue'
    export default{
        name:"home",
        components:{HomeHeader,HomeBanner,HomeShow,FruitBoxHot}
    }
</script>

<style lang="scss">
    .home{
    	width: 100%;
    	margin-top: 0.38rem;
    }
</style>