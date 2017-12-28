<template>
  <div class="xlyuser-test">
    <mt-header title="我的测试" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
      <mt-button slot="right">
        <div style="background-image:url(../../static/img/user/setting.png)"></div>
      </mt-button>
    </mt-header>
    <test-item type="mine"></test-item>
  </div>
</template>
<script>
  import TestItem from '@/components/test-item'
  export default {
    name: 'myTest',
    components: {
      TestItem
    }
  }
</script>
<style lang="stylus">
  .xlyuser-test
    .mint-header
      border-bottom .01rem solid #e2e2e2
      color #4c4c4c
      background-color #fff
</style>