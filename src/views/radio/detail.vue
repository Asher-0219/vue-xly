<template>
  <div class="xly-radio-detail">
    <mt-header :title="$route.params.voiceName" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
      <mt-button slot="right">
        <div style="background-image:url(../../static/img/share.png)"></div>
      </mt-button>
    </mt-header>
    <!-- http://qn-video.xys.ren/newdiscuz/2017/11/15111590910008322.jpg -->
    <img class="voice-pioneer" :style="{transform:'rotate('+rotate+')'}" src="static/img/radio/pioneer.png" alt="">
    <div class="detail-wrapper" :style="'height:'+bacH">
      <div ref="bac" class="detail-bac" style="background-image:url(http://qn-video.xys.ren/newdiscuz/2017/11/15111590910008322.jpg)" :style="'height:'+bacH"></div>
      <div class="detail-content">
        <div class="detail-cd">
          <img src="http://qn-video.xys.ren/newdiscuz/2017/11/15111590910008322.jpg" alt="夜空中最亮的星">
        </div>
        <div class="detail-content-bottom">
          <p class="progress-timeshow">{{nowTime}} / {{totalTime}}</p>
          <audio ref="audio" class="voice-audio" @loadedmetadata="loadedmetadata" @timeupdate="timeupdate" @ended="ended" src="http://qn-video.xys.ren/radio/2017/12/20171207160116o85dk9.mp3" preload="auto"></audio >
          <div ref="progressBac" class="progress-bac" @click="jumpAnyTime">
            <div class="progress-time" :style="{width: progress}">
              <img class="progress-tag" ref="progressTag" @touchstart.stop="touchstart" @touchmove.stop="touchmove" @touchend.stop="touchend" src="static/img/radio/progress.png" alt="">
            </div>
          </div>
          <div class="clickBar">
            <div class="comment" @click="toCommentPage">
              <img src="static/img/radio/comment.png">
              <div class="comment__num">99</div>
            </div>
            <img class="previous" src="static/img/radio/previous.png">
            <img id="start" @click="start" :src="[isStart?'static/img/radio/stop.png':'static/img/radio/start.png']">
            <img class="next" src="static/img/radio/next.png">
            <img class="collect" :src="[isCollect?'static/img/radio/collected.png':'static/img/radio/collect.png']">
          </div>
        </div>
        <div class="collect-success">收藏成功</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'radioDetail',
    data () {
      return {
        bacH: '',
        isStart: true,
        progress: '0%',
        rotate: '-25deg',
        totalTime: '00:00',
        nowTime: '00:00',
        startX: 0,
        endX: 0,
        isCollect: false
      }
    },
    mounted () {
      this.changeHeight()
      // this.$refs.audio.play()
      this.rotate = 0
      window.addEventListener('resize', this.changeHeight, false)
      this.$messagebox({
        title: '',
        message: '心理园付费电台<br>收听完整版请付费购买',
        confirmButtonText: '立即购买',
        showCancelButton: true
      }).then(action => {
        console.log(action)
      })
    },
    methods: {
      changeHeight () {
        let height = document.documentElement.clientHeight
        let headerH = document.querySelector('.mint-header').offsetHeight
        let bacH = height - headerH + 'px'
        if (bacH !== this.backH) {
          this.bacH = bacH
        }
      },
      start () {
        if (this.isStart) {
          this.$refs.audio.pause()
          this.rotate = '-25deg'
        } else {
          this.$refs.audio.play()
          this.rotate = 0
        }
        this.isStart = !this.isStart
      },
      timeFormat (ms) {
        let minutes = parseInt(ms / 60)
        let seconds = parseInt(ms % 60)
        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds
        return `${minutes}:${seconds}`
      },
      loadedmetadata () {
        this.totalTime = this.timeFormat(this.$refs.audio.duration)
      },
      timeupdate () {
        let audio = this.$refs.audio
        // 如果正在播放的时候滑动则不改变时间和进度条
        if (this.startX === 0) {
          this.nowTime = this.timeFormat(audio.currentTime)
          this.progress = audio.currentTime / audio.duration * 100 + '%'
        }
      },
      ended () {
        this.isStart = false
      },
      jumpAnyTime (event) {
        let width = this.$refs.progressBac.offsetWidth
        let clientX = event.clientX
        let proportion = clientX / width > 1 ? 1 : clientX / width
        let audio = this.$refs.audio
        audio.currentTime = audio.duration * proportion
        this.progress = proportion * 100 + '%'
      },
      touchstart (event) {
        this.startX = event.touches[0].pageX
      },
      touchmove (event) {
        event.preventDefault()
        this.endX = event.touches[0].pageX
        // let dragX = endX - this.startX
        let progressTagW = this.$refs.progressTag.offsetWidth
        let progressBacW = this.$refs.progressBac.offsetWidth
        let totalWidth = progressBacW - progressTagW
        this.proportion = this.endX / totalWidth > 1 ? 1 : this.endX / totalWidth
        let audio = this.$refs.audio
        if (audio.duration) {
          this.nowTime = this.timeFormat(this.proportion * audio.duration)
        }
        this.progress = this.proportion * 100 + '%'
      },
      touchend (event) {
        event.preventDefault()
        if (this.endX) {
          let audio = this.$refs.audio
          audio.currentTime = audio.duration * this.proportion
        }
        this.startX = 0
        this.endX = 0
        this.proportion = 0
      },
      toCommentPage () {
        this.$router.push({path: `/radio/comment/夜空中最亮的星`})
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import '../../common/styl/mixin.styl'
  .xly-radio-detail
    .mint-header
      z-index 10
      $setheader()
    .mint-button-text
      div
        $setHeaderImg(.3rem, .3rem)
  .detail-wrapper
    position relative
    overflow hidden
    width 100%
  .detail-bac
    overflow hidden
    width 100%
    height 100%
    background-position center
    background-repeat no-repeat
    background-size auto 100%
    filter blur(10px)
    transform scale(1.5)
  .detail-content
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    width 100%
    height 100%
  .detail-cd
    overflow hidden
    width 6.43rem
    height 6.43rem
    margin 1.39rem auto 1.76rem
    border-radius 50%
    background-image url('../../../static/img/radio/radioplay.png')
    $bacsize()
    transform rotate(0deg)
    img
      width 4.6rem
      height 4.6rem
      margin .93rem auto
      border-radius 50%
      object-fit cover
  .detail-content-bottom
    position absolute
    bottom 0
    left 0
    width 100%
  .clickBar{
    display flex
    align-items center
    width:100%;
    height:1.05rem;
    margin-bottom .45rem
    text-align: left;
  }
  #clickBar>img{
    float: left;
  }
  .comment{
    position relative
    width:.39rem;
    height:.31rem;
    margin-left .42rem
  }
  .comment__num
    position absolute
    top -.15rem
    right -.25rem
    width .34rem
    height .34rem
    border-radius .34rem
    font-size .16rem
    line-height .34rem
    text-align center
    color #fff
    background-color #fe3745
  .next{
    width .7rem
    height .7rem
    margin 0 1.12rem 0 .68rem
  }
  #start{
    width:1.05rem;
    height:1.05rem;
  }
  .previous{
    width:.7rem;
    height:.7rem;
    margin 0 .68rem 0 1.03rem
  }
  .collect{
    width .3rem
    height .3rem
    margin-right .42rem
  }
  .progress-timeshow
    margin-bottom .23rem
    font-size .2rem
    color #fff
    text-align center
  .progress-bac
    box-sizing border-box
    width 100%
    height .05rem
    margin-bottom .81rem
    padding-right .3rem
    background-color #fff
  .progress-time
    position relative
    height .05rem
    margin-right .3rem
    background-color #38b9ba
  .progress-tag
    position absolute
    top -.125rem
    right -.3rem
    width .3rem
    height .3rem
  .voice-audio
    opacity 0
    height 0
  .voice-pioneer
    position absolute
    z-index 1
    top .61rem
    left 4.2rem
    width 1.4rem
    height 2.93rem
    transform-origin .25rem .25rem
    transition all .5s ease
  .collect-success
    position absolute
    z-index 2
    top 0
    left 0
    width 100%
    height .52rem
    font-size .2rem
    line-height .52rem
    text-align center
    color #fff
    background-color rgba(255, 168, 0, .9)
</style>
