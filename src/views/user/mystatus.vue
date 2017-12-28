<template>
  <div class="xlyuser-status">
    <mt-header title="我的动态" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <community :type="'status'"></community>
  </div>
</template>
<script>
  import Community from '@/components/community.vue'
  export default {
    name: 'mystatus',
    components: {
      Community
    }
  }
</script>
<style lang="stylus">
  @import '../../common/styl/mixin.styl'
  .xlyuser-status
    .mint-header
      border-bottom .01rem solid #e2e2e2
      color #4c4c4c
      background-color #fff
</style>