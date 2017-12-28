<template>
  <div class="xlyradio-comment">
    <mt-header title="" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <xly-comment></xly-comment>
  </div>
</template>
<script>
  import XlyComment from '@/components/comment.vue'
  export default {
    name: 'radioComment',
    components: {
      XlyComment
    }
  }
</script>
<style lang="stylus">
  @import '../../common/styl/mixin.styl'
  .xlyradio-comment
    .mint-header
      $setheader()
</style>