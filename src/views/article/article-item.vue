<template>
  <div id="ale-item">
    <nav>
      <img @click="back" src="../../../static/img/community/back.png" alt="">
      <img @click="share" src="../../../static/img/article/share.png" alt="">
      <span>文章详情</span>
    </nav>
    <div class="content">
      <div class="head">
        <img src="../../../static/img/community/a.png" alt="" class="avatar">
        <div class="info">
          <div class="info-top">
            <div class="name">小鸡儿炖蘑菇</div>
            <div class="sign">作者</div>
          </div>
          <div class="info-down">自己选择的路，跪着也要走下去</div>
        </div>
        <div class="star" :class="{'active':star}" @click="starClick">{{starSign}}</div>
      </div>
      <div class="middle">
        <div class="title">每次失恋都有想自杀的冲动,这是为什么呢？</div>
        <div class="middle-info">
          <div class="date">发表于2017-10-23</div>
          <div class="num">浏览2.4W</div>
        </div>
        <div class="img">
        <img src="../../../static/img/article/demo.png" alt="">
        </div>
        <div class="text">  清醒的时候放不下矜持，不敢说我喜欢你，只有在某个夜晚多愁善感又萦绕在心头，或是朋友聚会上的大醉，才敢借着情绪说，我喜欢你，喜欢了好久好久。<br>关于你，2012年的九月，那是我们认识的季节，在四十多平米的教室里，我认识了你。我们是同学，彼此都还不熟悉的同学。那一句个子还高嘛，是我关注你的开始，有意无意的从四组向一组瞟你，小心翼翼的眼神怕你发现，却又怕你不明白</div>        
      </div>
      <div class="zan">
        <div class="zan-title">赞</div>
        <div class="zan-list">
          <div class="zan-item" v-for="(item, index) in 10">
            <img src="../../../static/../static/img/community/a.png" alt="">
          </div>
        </div>
        <div class="zan-num">32</div>
      </div>
      <div class="line"></div>
      <comment></comment>
    </div>
  </div>
</template>

<script>
  import comment from '../../components/comment'
  export default {
    components: {
      comment
    },
    data () {
      return {
        star: false,
        starSign: '关注'
      }
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      starClick () {
        // 关注作者
        this.star = !this.star
        if (this.star) {
          this.starSign = '已关注'
        } else {
          this.starSign = '关注'
        }
      },
      share () {
        // 分享文章
      }
    },
    mounted () {
  
    }
  }
</script>

<style lang="stylus" scoped>
#ale-item
  overflow hidden
nav
  top 0
  width 100%
  height 0.98rem
  position fixed
  line-height 0.98rem
  font-size 0.34rem
  color #ffffff
  background #38b9ba
  text-align center
  z-index 9
  img:nth-child(1)
    width 0.14rem
    height 0.24rem
    position absolute
    left 0.24rem
    top 0
    bottom 0
    margin auto 0
  img:nth-child(2)
    width 0.3rem
    height 0.3rem
    position absolute
    right 0.24rem
    top 0
    bottom 0
    margin auto 0
.content
  margin-top 0.98rem
  .head
    width 100%
    height 1.24rem
    display flex
    align-items center
    padding 0 0.24rem
    box-sizing border-box
    margin-bottom 0.52rem
  .avatar
    width 0.7rem
    height 0.7rem
    border-radius 50%
    object-fit cover
    margin-right 0.07rem
  .info-top
    height 0.24rem
    line-height 0.24rem
    margin-bottom 0.09rem
    display flex
    align-items center
    .name
      color #4c4c4c
      font-size 0.24rem
      margin-right 0.1rem
    .sign
      border 1px solid rgb(56, 185, 186)
      border-radius .12rem
      width .57rem
      height .24rem
      font-size 0.18rem
      color #38b9ba
      text-align center
  .info-down
    color #c4c4c4
    font-size 0.2rem
  .star
    margin-left auto
    width 1.05rem
    height 0.4rem
    background #38b9ba
    border-radius 0.2rem
    color #ffffff
    font-size 0.2rem
    line-height 0.4rem
    text-align center
    margin-left auto
    &.active
      background #c4c4c4
  .middle
    overflow hidden
    margin-left 0.24rem
    box-sizing border-box
    width 100%
    border-bottom 1px solid #efefef
    padding-bottom 0.49rem
    padding-right 0.24rem    
    margin-bottom 0.2rem
    .title
      font-size 0.3rem
      color #4c4c4c
      font-weight bold
      margin-bottom 0.24rem
      line-height 0.3rem
    .middle-info
      font-size 0.2rem
      color #c4c4c4
      display flex
      line-height 0.2rem
      margin-bottom 0.42rem
    .num
      margin-left auto
      margin-right 0.24rem
    .img
      width 7.02rem
      object-fit cover
      margin-bottom 0.38rem
    .text
      line-height 0.47rem
      color #7f7f7f
      font-size 0.26rem
      font-weight bold
  .zan
    height 1.1rem
    display flex
    align-items center
    box-sizing border-box
    padding 0 0.24rem
    .zan-title
      color #7f7f7f
      font-size 0.24rem
      line-height 0.24rem
      margin-right 0.2rem
    .zan-list
      max-width 6rem
      display flex
      overflow hidden
    .zan-item
      width 0.58rem
      height 0.58rem
      margin-right 0.18rem
      flex none
      img
        width 100%
        height 100%
        object-fit cover
        border-radius 50%
    .zan-num
      width 0.58rem
      height 0.58rem
      line-height 0.58rem
      color #ffffff
      font-size 0.26rem
      text-align center
      background #38b9ba
      border-radius 50%
.line
  height 0.2rem
  width 100%
  background #efefef                 
</style>
