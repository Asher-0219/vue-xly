<template>
  <div class="community">
    <nav>
      <img @click="back" class="community-back" src="../../../static/img/community/back.png" alt="">
      <span>社区</span>
      <img @click="goSearch" class="community-search" src="../../../static/img/community/search.png" alt="">
    </nav>
    <tab></tab>
    <div class="community-content">
      <community></community>
    </div>
    <div class="community-post" @click="creatCrticle"><img src="../../../static/img/community/post.png" alt=""></div>
  </div>
</template>

<script>
  import tab from '../../components/head-tab'
  import Community from '@/components/community'
  export default {
    data () {
      return {
        star: false,
        starSign: '关注',
        list: [{type: 'img'}, {type: 'imgs'}, {type: 'video'}, {type: 'audio'}],
        audioPlay: false
      }
    },
    components: {
      tab,
      Community
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
      }
    }
  }
</script>

<style lang="stylus">
  @import './community'
</style>
