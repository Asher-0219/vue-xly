<template>
  <div class="xlyuser-chat">
    <mt-header title="临江仙" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div ref="xlyUserChat">
      <span class="xlyuser-chat__time">13:44</span>
      <div class="xlyuser-chat-content xlyuser-chat-content--other">
        <img src="http://qn-video.xys.ren/newdiscuz/2017/11/15111590910008322.jpg" alt="">
        <p>梦后楼台高锁，酒醒帘幕低垂。去年春恨却来时。落花人独立，微雨燕双飞。</p>
      </div>
      <span class="xlyuser-chat__time">13:44</span>
      <div class="xlyuser-chat-content xlyuser-chat-content--mine">
        <img src="http://qn-video.xys.ren/newdiscuz/2017/11/15111590910008322.jpg" alt="">
        <p>记得小苹初见，两重心字罗衣。琵琶弦上说相思。当时明月在，曾照彩云归。</p>
      </div>
    </div>
    <div class="xlyuser-chat-input">
      <input type="text">
      <span>发送</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'mychat',
    mounted () {
      this.$xys.setWrapperHeight(this.$refs.xlyUserChat)
    }
  }
</script>
<style lang="stylus">
  @import '../../common/styl/mixin.styl'
  .xlyuser-chat
    overflow-y scroll
    font-size 0
    text-align center
    $setHeaderAll()
  .xlyuser-chat__time
    display inline-block
    margin .35rem 0
    padding .1rem .15rem
    border-radius .08rem
    font-size .24rem
    text-align center
    color #fff
    background-color #c4c4c4
  .xlyuser-chat-content
    display flex
    padding 0 .24rem
    font-size .26rem
    line-height .4rem
    img
      width .88rem
      height .88rem
      object-fit cover
      border .01rem solid #efefef
      border-radius .06rem
    p
      position relative
      display flex
      align-items center
      box-sizing border-box
      max-width 4.92rem
      // min-height .88rem
      padding .14rem .18rem
      border-radius .1rem
    p:before,p:after
      position absolute
      top .35rem
      display block
      content ''
  .xlyuser-chat-content--other
    color #090909
    img
      margin-right .2rem
    p
      background-color #fff
    p:before
      left -.18rem
      $triangle(.1rem, .1rem)
      transform rotate(180deg)
  .xlyuser-chat-content--mine
    flex-direction row-reverse
    color #fff
    img
      margin-left .2rem
    p
      background-color #38b9ba
    p:after
      right -.18rem
      $triangle(.1rem, .1rem, #38b9ba)
  .xlyuser-chat-input
    position fixed
    bottom 0
    left 0
    box-sizing border-box
    width 100%
    padding .18rem .24rem
    background-color #fff
    input
      display inline-block
      width 5.4rem
      height .64rem
      padding 0 .2rem
      border none
      border-radius .1rem
      font-size .26rem
      line-height .64rem
      color #090909
      background-color #efefef
    span
      display inline-block
      margin-left .1rem
      $btn(1.12rem, .64rem, .1rem)
      font-size .3rem
      color #fff
      background-color #38b9ba
</style>