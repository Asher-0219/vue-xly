<template>
  <div class="xlyuser-comment">
    <mt-header title="评论" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div ref="xlyUserComment">
      <div class="xlyuser-comment-content">
        <div class="xlyuser-comment-top">
          <img src="http://qn-video.xys.ren/newdiscuz/2017/11/15111590910008322.jpg" alt="">
          <div class="xlyuser-comment-top-info">
            <p>gontte</p>
            <p>24楼<span>2小时前</span></p>
          </div>
        </div>
        <p class="xlyuser-comment-other">既自以心为形役，奚惆怅而独悲？</p>
        <div class="xlyuser-comment-me">我的动态：<span>悟已往之不谏，知来者之可追。</span></div>
      </div>
      <div class="xlyuser-comment-content">
        <div class="xlyuser-comment-top">
          <img src="http://qn-video.xys.ren/newdiscuz/2017/11/15111590910008322.jpg" alt="">
          <div class="xlyuser-comment-top-info">
            <p>gontte</p>
            <p>24楼<span>2小时前</span></p>
          </div>
        </div>
        <p class="xlyuser-comment-other">既自以心为形役，奚惆怅而独悲？</p>
        <div class="xlyuser-comment-me">我的动态：<span>悟已往之不谏，知来者之可追。</span></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'myComment',
    mounted () {
      this.$xys.setWrapperHeight(this.$refs.xlyUserComment)
    }
  }
</script>
<style lang="stylus">
  @import '../../common/styl/mixin.styl'
  .xlyuser-comment
    overflow-y scroll
    font-size 0
    $setHeaderAll()
  .xlyuser-comment-content
    margin-top .2rem
    padding .24rem .24rem .4rem
    background-color #fff
  .xlyuser-comment-top
    display flex
    align-items center
    height .7rem
    img
      width .7rem
      height .7rem
      margin-right .07rem
      border-radius .35rem
      object-fit cover
  .xlyuser-comment-top-info
    p:first-child
      font-size .24rem
      line-height  .35rem
      color #535353
    p:last-child
      font-size .2rem
      line-height .31rem
      color #c4c4c4 
      span
        display inline-block
        margin-left .57rem
  .xlyuser-comment-other
    margin .24rem 0 .3rem
    font-size .24rem
    color #4c4c4c
  .xlyuser-comment-me
    padding .2rem .22rem
    border-radius .1rem
    font-size .25rem
    line-height .36rem
    color #38b9ba
    background-color #efefef
    span
      color #7f7f7f
</style>