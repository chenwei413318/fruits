<template>
    <div class="content-title">
      <div class="hot-ftuits-title">
        <a class="title"  href="#">
          <img :src="title.image" title="果园热卖" width="100%">
        </a>
      </div>
   </div>
   
</template>

<script>

export default {
  name: 'content-title',
  props:['title']
}
</script>

<style lang="scss" scoped >
  .title{
    img{
      position:relative;
      top:0.2rem;
    }
  }
</style>
