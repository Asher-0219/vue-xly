<template>
  <div class="xlyuser-level">
    <mt-header title="我的等级" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="xlyuser-level-top">
      <img src="static/img/user/level2.png" alt="">
      <div class="xlyuser-level-top-progress">
        <div style="width:80%"></div>
      </div>
      <p><span>0</span><span>距下次升级还差80经验值</span><span>500</span></p>
    </div>
    <p class="xlyuser-level__title">经验值介绍</p>
    <p class="xlyuser-level__content">
      每一位注册登录“性用社” App的社友们，就可以成功加入性用社体力系统。体力是性用社新纳入应用中的一种虚拟能量值，目的是为了奖励在性用社发布分享话题，参与活动等热情社友们。只要每次在性用社购买商品，发布的话题被推荐加精、分享、举报等，就能补充体力。体力能让你在性用社过上任性的土豪生活，拥有临时打招呼等炫酷功能，让你在性用社之旅更加精彩有趣。
    </p>
    <p class="xlyuser-level__title">经验值获取</p>
    <p class="xlyuser-level__content">体力怎么获得?</p>
    <p class="xlyuser-level__content">1、首次注册后获得(100体力)</p>
    <p class="xlyuser-level__content">2、绑定手机(10体力)</p>
    <p class="xlyuser-level__content">3、我的新手新手任务奖励</p>
    <p class="xlyuser-level__content">4、我的任务每日任务奖励</p>
    <p class="xlyuser-level__content">5、每日登陆(20/次)</p>
    <p class="xlyuser-level__content">6、每次充值(50/次)</p>
    <p class="xlyuser-level__content">7、在线支付(10/次)</p>
    <p class="xlyuser-level__content">8、购买商品(10/次)</p>
  </div>
</template>
<style lang="stylus">
  @import '../../common/styl/mixin.styl'
  .xlyuser-level
    padding-bottom .5rem
    .mint-header
      border-bottom .01rem solid #e2e2e2
      color #4c4c4c
      background-color #fff
  .xlyuser-level-top
    width 7.5rem
    height 4rem
    background-image url('../../../static/img/user/level1.png')
    $bacsize()
  .xlyuser-level-top
    overflow hidden
    font-size .2rem
    color #fff
    img
      width 2.65rem
      margin 1.26rem auto .76rem
    .xlyuser-level-top-progress
      width 7.04rem
      height .08rem
      margin 0 auto
      border-radius .04rem
      background-color #fff
      div
        height .08rem
        border-radius .04rem
        background-color #ffca63
    p
      $flex-row()
      width 7.04rem
      margin .18rem auto 0
  .xlyuser-level__title
    margin .45rem 0 .28rem .23rem
    font-size .3rem
    font-weight bold
    color #303030
  .xlyuser-level__content
    margin 0 .24rem
    font-size .24rem
    line-height  .42rem
    color #959595
</style>