<template>
  <div>
    <div class="community-containter" v-for="(item, index) in list" @click="goDetail">
      <div class="community-item">
        <!-- 顶部信息 -->
        <div class="community-title">
          <div class="community-avatar"><img src="static/img/home/a.png" alt=""></div>
          <div class="community-info">
            <div class="community-name">小鸡儿炖蘑菇</div>
            <div class="community-date">两小时前</div>
          </div>
          <div v-if="type=='regular'" class="community-star" :class="{'active':star}" @click="starClick">{{starSign}}</div>
          <div v-if="type=='status'" class="community-aduit">
            <span :class="{'community-aduit--false':item.aduit}">审核中</span>
            <i class="community-aduit" @click="deletePost"></i>
          </div>
        </div>
        <!-- 图片 -->
        <div class="community-item-imgs" v-if="item.type==='img'">
          <img src="static/img/community/a.png" alt="">
        </div>
        <!-- 多图 -->
        <div class="community-lot-img" v-if="item.type==='imgs'">
          <img v-for="(item, index) in 6" src="static/img/community/a.png" alt="">
        </div>
        <!-- 视频 -->
        <div class="community-video" v-if="item.type==='video'">
          <img class="community-video-bg" src="static/img/community/a.png" alt="">
          <img class="community-video-btn" src="static/img/community/play.png" alt="">
        </div>
        <!-- 音频 -->
        <div class="community-audio" v-if="item.type==='audio'">
          <img class="community-audio-btn audio-play" @click="playAudio" v-if="!audioPlay" src="static/img/community/audio-play.png" alt="">
          <img class="community-audio-btn audio-stop" @click="stopAudio" v-else src="static/img/community/audio-stop.png" alt="">
          <div class="community-audio-line"></div>
          <div class="community-audio-time">37”</div>
        </div>
        <!-- 文字内容 -->
        <div class="community-item-text">清醒的时候放不下矜持，不敢说我喜欢你，只有在某个夜晚多愁善感又萦绕在心头，或是朋友聚会上的大醉，才敢借着情绪说，我喜欢你，喜欢了好久好久...</div>
        <!-- 底部操作 -->
        <div class="community-footer">
          <div class="community-footer-left">
            <div class="community-read-num">132个阅读</div>
            <div class="community-comment-num">45个评论</div>
          </div>
          <div class="community-footer-right">
            <img class="community-zan-icon" src="static/img/community/zan.png" alt="">
            <img class="community-comment-icon" src="static/img/community/comment.png" alt="">
          </div>
        </div>
      </div>
      <div class="community-line"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'community',
    props: {
      type: {
        default: 'regular'
      }
    },
    data () {
      return {
        star: false,
        starSign: '关注',
        list: [{type: 'img'}, {type: 'imgs', aduit: true}, {type: 'video'}, {type: 'audio'}],
        audioPlay: false
      }
    },
    methods: {
      // 关注
      starClick () {
        this.star = !this.star
        if (this.star) {
          this.starSign = '已关注'
        } else {
          this.starSign = '关注'
        }
      },
      playAudio () {
        // 播放音频
        this.audioPlay = true
      },
      stopAudio () {
        // 暂停音频
        this.audioPlay = false
      },
      goDetail () {
        // 跳到帖子详情
        this.$router.push({name: 'communityDetail'})
      },
      creatCrticle () {
        // 编写文章
        this.$router.push({name: 'creatCrticle'})
      },
      goSearch () {
        // 搜索
        this.$router.push({name: 'communitySearch'})
      },
      deletePost () {
        // 删除帖子
      }
    }
  }
</script>
<style lang="stylus">
  @import '../common/styl/mixin.styl'
  .community-item
    padding 0 0.24rem
  .community-title
    display flex
    align-items center
    height 1.2rem
  .community-avatar
    width .7rem
    height .7rem
    margin-right 0.07rem
    img
      width 100%
      height 100%
      border-radius 50%
  .community-name
    color #535353
    font-size 0.24rem
    margin-bottom 0.1rem
  .community-date
    color #c5c5c5
    font-size 0.2rem
  .community-star
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
  .community-item-text
    line-height 0.45rem
    color #7f7f7f
    font-size 0.26rem
    margin-top .28rem
  .community-footer
    height 0.86rem
    border-top 1px dashed #c4c4c4
    margin-top 0.41rem
    display flex
    align-items center
    color #5e5e5f
    font-size 0.22rem
    &>div
      display flex
      align-items center
    .community-read-num
      margin-right 0.23rem
    .community-footer-right
      margin-left auto
    .community-zan-icon
      width 0.34rem
      height 0.31rem
      margin-right 0.5rem
    .community-comment-icon
      width 0.39rem
      height 0.31rem
  .community-item-imgs
    width 3.5rem
    height 3.5rem
    img
      width 100%
      height 100%
      border-radius 0.1rem
  .community-lot-img
    display flex
    flex-wrap wrap
    img
      flex none
      width 2.33rem
      height 2.33rem
  .community-video
    width 7.03rem
    height 3.51rem
    position relative
    border-radius 0.1rem
    .community-video-btn
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      margin auto
      width 0.88rem
      height 0.88rem
    .community-video-bg
      position absolute
      width 100%
      height 100%
  .community-post
    width 1.3rem
    height 1.3rem
    img
      width 1.3rem
      height 1.3rem
      position fixed
      bottom 0.75rem
      left 0
      right 0
      margin auto
  .community-audio
    width 7.03rem
    height 1.18rem
    background #eff6f6
    border-radius 0.1rem
    display flex
    align-items center
    .community-audio-btn
      width 0.23rem
      height 0.3rem
      margin-right 0.13rem
      margin-left 0.42rem
    .community-audio-play
      width 0.23rem
    .community-audio-stop
      width 0.18rem
      margin-right 0.18rem
    .community-audio-line
      width 5.27rem
      height 2px
      border-radius 1px
      background #38b9ba
      margin-right 0.24rem
    .community-audio-time
      font-size 0.26rem
      color #38b9ba
      margin-right 0.24rem
  .community-aduit
    display flex
    align-items center
    margin-left auto
    span
      display inline-block
      width 1.2rem
      height .32rem
      font-size .23rem
      text-align center
      color #00b9b9
      background-color #f5f5f7
    i
      display inline-block
      width .2rem
      height .23rem
      margin-left .4rem
      background-image url('../../static/img/delete.png')
      $bacsize()
    .community-aduit--false
      color #ff5458
</style>