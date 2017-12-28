<template>
  <div class="community">
    <nav>
      <img @click="back" class="community-back" src="../../../static/img/community/back.png" alt="">
      <span>社区</span>
      <img @click="goSearch" class="community-search" src="../../../static/img/community/search.png" alt="">
    </nav>
    <tab @headTab="headTab"></tab>
    <div class="community-content">
      <div class="community-containter" v-for="(item, index) in list" @click="goDetail">
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
          <div class="community-item-imgs" v-if="item.type==='img'">
            <img src="../../../static/img/community/a.png" alt="">
          </div>
          <!-- 多图 -->
          <div class="community-lot-img" v-if="item.type==='imgs'">
            <img v-for="(item, index) in 6" src="../../../static/img/community/a.png" alt="">
          </div>
          <!-- 视频 -->
          <div class="community-video" v-if="item.type==='video'">
            <img class="community-video-bg" src="../../../static/img/community/a.png" alt="">
            <img class="community-video-btn" src="../../../static/img/community/play.png" alt="">
          </div>
          <!-- 音频 -->
          <div class="community-audio" v-if="item.type==='audio'">
            <img class="community-audio-btn audio-play" @click="playAudio" v-if="!audioPlay" src="../../../static/img/community/audio-play.png" alt="">
            <img class="community-audio-btn audio-stop" @click="stopAudio" v-else src="../../../static/img/community/audio-stop.png" alt="">
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
              <img class="community-zan-icon" src="../../../static/img/community/zan.png" alt="">
              <img class="community-comment-icon" src="../../../static/img/community/comment.png" alt="">
            </div>
          </div>
        </div>
        <div class="community-line"></div>
      </div>
    </div>
    <div class="community-post" @click="creatCrticle"><img src="../../../static/img/community/post.png" alt=""></div>
  </div>
</template>

<script>
  import tab from '../../components/head-tab'
  export default {
    data () {
      return {
        star: false,
        starSign: '关注',
        list: [{type: 'img'}, {type: 'imgs'}, {type: 'video'}, {type: 'audio'}],
        audioPlay: false,
        tabIndex: null
      }
    },
    components: {
      tab
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
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
      headTab (index) {
        this.tabIndex = index
      }
    }
  }
</script>

<style lang="stylus">
  @import './community'
</style>
