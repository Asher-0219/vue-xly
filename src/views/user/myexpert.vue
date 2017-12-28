<template>
  <div class="xlyuser-expert">
    <mt-header title="专家入住" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <img class="xlyuser-expert__guide" src="static/img/user/expert1.png" alt="">
    <img class="xlyuser-expert__guide" src="static/img/user/expert2.png" alt="">
    <img class="xlyuser-expert__guide" src="static/img/user/expert3.png" alt="">
  </div>
</template>
<style lang="stylus">
  .xlyuser-expert
    .mint-header
      border-bottom .01rem solid #e2e2e2
      color #4c4c4c
      background-color #fff
  .xlyuser-expert__guide
    width 100%
  .xlyuser-expert__guide:first-of-type
    margin-top 1.05rem
</style>