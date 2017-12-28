<template>
  <div class="xlyuser-notice">
    <mt-header title="系统消息" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div ref="xlyUserNotice">
      <span class="xlyuser-notice__time">2016-08-11 15:45</span>
      <div class="xlyuser-notice-panel">
        <p class="xlyuser-notice-panel__title">注册成功</p>
        <p class="xlyuser-notice-panel__time">12月10日</p>
        <div class="xlyuser-notice__divide"></div>
        <p class="xlyuser-notice-panel__content">亲爱的小七，恭喜您成功加入心理园</p>
      </div>
      <span class="xlyuser-notice__time">2016-08-11 15:45</span>
      <div class="xlyuser-notice-panel">
        <p class="xlyuser-notice-panel__title">咨询师申请</p>
        <p class="xlyuser-notice-panel__time">12月10日</p>
        <div class="xlyuser-notice__divide"></div>
        <p class="xlyuser-notice-panel__content">小七！恭喜您成为咨询师</p>
        <p class="xlyuser-notice-panel__time--about">咨询师申请时间：&nbsp;<span>2016-03-06 15：00：00</span></p>
        <p class="xlyuser-notice-panel__time--about">预计完成时间：&nbsp;&nbsp;&nbsp;&nbsp;<span>2016-03-06 15：00：00</span></p>
        <div class="xlyuser-notice__divide"></div>
        <div class="xlyuser-notice-progress">
          <div class="xlyuser-notice-icon"><i class="fa fa-pencil"></i></div>
          <div class="xlyuser-notice-icon__divide"></div>
          <div class="xlyuser-notice-icon"><i class="fa fa-ellipsis-h"></i></div>
          <div class="xlyuser-notice-icon__divide"></div>
          <div class="xlyuser-notice-icon"><i class="fa fa-check"></i></div>
        </div>
        <div class="xlyuser-notice-desc"><span>申请成功</span><span>审核中</span><span>成为声优</span></div>
      </div>
      <span class="xlyuser-notice__time">2016-08-11 15:45</span>
      <div class="xlyuser-notice-panel">
        <p class="xlyuser-notice-panel__title">咨询师申请</p>
        <p class="xlyuser-notice-panel__time">12月10日</p>
        <div class="xlyuser-notice__divide"></div>
        <p class="xlyuser-notice-panel__content">小七！您的信息审核失败!</p>
        <p class="xlyuser-notice-panel__time--about">咨询师申请时间：&nbsp;<span>2016-03-06 15：00：00</span></p>
        <p class="xlyuser-notice-panel__time--about">预计完成时间：&nbsp;&nbsp;&nbsp;&nbsp;<span>2016-03-06 15：00：00</span></p>
        <div class="xlyuser-notice__divide"></div>
        <div class="xlyuser-notice-progress">
          <div class="xlyuser-notice-icon"><i class="fa fa-pencil"></i></div>
          <div class="xlyuser-notice-icon__divide"></div>
          <div class="xlyuser-notice-icon"><i class="fa fa-ellipsis-h"></i></div>
          <div class="xlyuser-notice-icon__divide"></div>
          <div class="xlyuser-notice-icon xlyuser-notice-bac--false"><i class="fa fa-close"></i></div>
        </div>
        <div class="xlyuser-notice-desc"><span>申请成功</span><span>审核中</span><span class="xlyuser-notice-color--false">申请失败</span></div>
        <p class="xlyusr-notice-reason--false">*失败原因: 头像违规</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'mychat',
    mounted () {
      this.$xys.setWrapperHeight(this.$refs.xlyUserNotice)
    }
  }
</script>
<style lang="stylus">
  @import '../../common/styl/mixin.styl'
  .xlyuser-notice
    overflow-y scroll
    padding-bottom 1.13rem
    font-size 0
    text-align center
    $setHeaderAll()
  .xlyuser-notice__time
    display inline-block
    margin .31rem 0 .24rem
    padding .1rem .15rem
    border-radius .08rem
    font-size .24rem
    text-align center
    color #fff
    background-color #c4c4c4
  .xlyuser-notice__divide
    width 100%
    border-bottom .01rem dashed #eee
  .xlyuser-notice-panel
    box-sizing border-box
    width 6.8rem
    margin 0 auto
    padding .14rem .31rem
    border-radius .05rem
    text-align left
    background-color #fff
  .xlyuser-notice-panel__title
    font-size .32rem
    font-weight bold
    line-height .49rem
    color #4c4c4c
  .xlyuser-notice-panel__time
    margin-bottom .13rem
    font-size .2rem
    line-height .37rem
    color #959595
  .xlyuser-notice-panel__content
    margin-top .17rem
    font-size .24rem
    line-height .39rem
    color #4c4c4c
  .xlyuser-notice-panel__time--about
    font-size .24rem
    line-height .45rem
    color #959595
    span
      color #4c4c4c
  .xlyuser-notice-panel .xlyuser-notice-panel__time--about:first-of-type
    margin-top .13rem
  .xlyuser-notice-panel .xlyuser-notice-panel__time--about:last-of-type
    margin-bottom .22rem
  .xlyuser-notice-progress
    display flex
    align-items center
    height .4rem
    margin .4rem 0 0 .29rem
    .xlyuser-notice-icon
      width .4rem
      height .4rem
      border-radius .2rem
      text-align center
      background-color #fec843
      i
        font-size .16rem
        line-height .4rem
        color #fff
  .xlyuser-notice-icon__divide
    width 2.2rem
    height .01rem
    background-color #fec843
  .xlyuser-notice-desc
    margin-top .15rem
    $flex-row()
    font-size .24rem
    color #fec843
  .xlyuser-notice-color--false
    color #fe5b00
  .xlyuser-notice-progress
    .xlyuser-notice-bac--false
      background-color #fe5b00
  .xlyusr-notice-reason--false
    margin-top .36rem
    font-size .2rem
    color #fe5b00
</style>