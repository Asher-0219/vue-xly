<template>
  <div class="community community-detail">
    <div class="community-nav">
      <img @click="back" class="community-back" src="../../../static/img/community/detail/back.png" alt="">
      <span>帖子详情</span>
    </div>
    <div class="community-content">
      <div class="community-containter">
        <div class="community-item">
          <!-- 顶部信息 -->
          <div class="community-title">
            <div class="community-avatar"><img src="../../../static/img/home/a.png" alt=""></div>
            <div class="community-info">
              <div class="community-name">小鸡儿炖蘑菇</div>
              <div class="community-date">两小时前</div>
            </div>
            <div class="community-star" :class="{'active':star}" @click="starClick">{{starSign}}</div>
          </div>
          <!-- 图片 -->
          <div class="community-item-imgs">
            <img src="../../../static/img/community/a.png" alt="">
          </div>
          <!-- 多图 -->
          <div class="community-lot-img">
            <img v-for="(item, index) in 6" src="../../../static/img/community/a.png" alt="">
          </div>
          <!-- 视频 -->
          <div class="community-video">
            <img class="community-video-bg" src="../../../static/img/community/a.png" alt="">
            <img class="community-video-btn" src="../../../static/img/community/play.png" alt="">
          </div>
          <!-- 音频 -->
          <div class="community-audio">
            <img class="community-audio-btn audio-play" @click="playAudio" v-if="!audioPlay" src="../../../static/img/community/audio-play.png" alt="">
            <img class="community-audio-btn audio-stop" @click="stopAudio" v-else src="../../../static/img/community/audio-stop.png" alt="">
            <div class="community-audio-line"></div>
            <div class="community-audio-time">37”</div>
          </div>
          <!-- 文字内容 -->
          <div class="community-item-text">清醒的时候放不下矜持，不敢说我喜欢你，只有在某个夜晚多愁善感又萦绕在心头，或是朋友聚会上的大醉，才敢借着情绪说，我喜欢你，喜欢了好久好久...</div>
        </div>
        <div class="community-line"></div>
      </div>      
    </div>
    <comment></comment>
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
        starSign: '关注',
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
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus">
@import './community'
.community-detail .community-content
  margin-top 0
.community-nav
  width 100%
  height 0.98rem
  line-height 0.98rem
  border-bottom 1px solid #e2e2e2
  color #4c4c4c
  font-size 0.34rem
  text-align center
  position relative
  font-weight bold
  img
    position absolute
    top 0
    bottom 0
    margin auto
    width 0.14rem
    height 0.24rem
    left 0.24rem 
</style>
