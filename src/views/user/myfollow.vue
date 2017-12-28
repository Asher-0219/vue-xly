<template>
  <div class="xlyuser-follow">
    <mt-header title="我的粉丝" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="xlyuser-follow-wrapper" ref="list">
      <div class="xlyuser-follow-user" v-for="item in 6">
        <div class="xlyuser-follow__avatar" style="background-image:url(static/img/test.png)"></div>
        <div class="xlyuser-follow-info">
          <p><span>gontte</span><span>♀</span></p>
          <p>清风徐来，水波不兴</p>
        </div>
        <div class="xlyuser-follow__btn" :class="{'xlyuser--followed':follow}" @click="follow=true">关注</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'myfollow',
    data () {
      return {
        follow: false
      }
    },
    mounted () {
      this.$xys.setWrapperHeight(this.$refs.list)
    }
  }
</script>
<style lang="stylus">
  @import '../../common/styl/mixin.styl'
  .xlyuser-follow
    .mint-header
      border-bottom .01rem solid #e2e2e2
      color #4c4c4c
      background-color #fff
  .xlyuser-follow-wrapper,xlyuser-follow-user
    width 100%
    background-color #f5f5f7
  .xlyuser-follow-user
    display flex
    align-items center
    width 100%
    height 1.5rem
    border-bottom .01rem solid #f5f5f7
    background-color #fff
  .xlyuser-follow-user:last-child
    border-bottom none
  .xlyuser-follow__avatar
    width 1rem
    height 1rem
    margin-left .24rem
    border-radius .07rem
    $bacsize()
  .xlyuser-follow-info
    margin-left .1rem
    p:first-child
      font-size 0
      span:first-child
        font-size .3rem
        color #090909
      span:last-child
        display inline-block
        $btn(.32rem, .26rem, .05rem)
        margin-left .1rem
        font-size .26rem
        color #fff
        background-color #ff77a7
    p:last-child
      margin-top .18rem
      font-size .24rem
      color #535353
  .xlyuser-follow__btn
    $btn(1.1rem, .48rem)
    margin-left auto
    margin-right .24rem
    font-size .24rem
    color #fff
    background-color #00b9b9
  .xlyuser--followed
    background-color #c4c4c4
</style>