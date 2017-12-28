<template>
  <div class="list">
    <div class="list-item" v-for="item in radioList">
      <!-- <div class="list-item__img" :style="'background-image:url(http://oxyevccoz.bkt.clouddn.com/jimo-app-file/2017/11/1510555814258430?vframe/jpg/offset/1)'"> -->
      <div @click="goRadioDetail" class="list-item__img" v-lazy:background-image="'http://oxyevccoz.bkt.clouddn.com/jimo-app-file/2017/11/1510555814258430?vframe/jpg/offset/1'">
        <div class="list-item-info">
          <span class="list-item__play"></span>
          <span class="list-item__playnum">2.4W</span>
        </div>
      </div>
      <p class="list-item__desc">每一条留言，都孤独的要命</p>
      <div class="list-item-author">
        <span>繁星</span>
        <div class="list-item__tag">免费</div>
      </div>
    </div>
  </div>
</template>
<script>
  /**
   * 电台列表
   * @params ｛Array} radioList 列表数组
   */
  export default {
    name: 'radiolist',
    props: ['radioList'],
    methods: {
      goRadioDetail () {
        this.$router.push({path: `/radio/voice/夜空中最亮的星`})
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import '../../common/styl/mixin.styl'
  .list
    display flex
    flex-wrap wrap
    width 100%
    font-size .24rem
  .list-item
    width 2.24rem
    margin 0 .15rem .2rem 0
  .list-item:nth-child(3n)
    margin-right 0
  .list-item__img
    position relative
    width 100%
    height 2.24rem
    $bacsize()
  .list-item__desc
    display -webkit-box
    -webkit-line-clamp 2
    -webkit-box-orient vertical
    overflow hidden
    width 100%
    height .56rem
    margin-top .12rem
    line-height .28rem
  .list-item-info
    position absolute
    bottom 0
    left 0
    box-sizing border-box
    width 100%
    padding .14rem 0 .14rem .14rem
    color #fff
    background-image linear-gradient(to bottom, rgba(239, 239, 239, 0), rgba(0, 0, 0, .6))
    $clear()
  .list-item__play
    float left
    display block
    width 0
    height 0
    $triangle(.13rem, .18rem)
  .list-item__playnum
    float left
    display block
    margin-left -.08rem
  .list-item-author
    $flex-row()
    margin-top .13rem
    font-size .2rem
    color #7f7f7f
  .list-item__tag
    box-sizing border-box
    width .59rem
    height .28rem
    border .01rem solid #38b9ba
    border-radius .05rem
    line-height .28rem
    text-align center
    color #38b9ba
</style>
