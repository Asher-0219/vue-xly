<template>
  <div class="xlyuser-message">
    <mt-header fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="xlyuser-message-header">
      <div class="xlyuser-message-header-content">
        <div @click="tabActive=1" :class="{'xlyuser-message-header-active': tabActive==1}">通知</div>
        <div @click="tabActive=2" :class="{'xlyuser-message-header-active': tabActive==2}">私信</div>
      </div>
    </div>
    <div ref="xlyUserMessage">
      <!-- 通知 -->
      <div v-if="tabActive==1">
        <div class="xlyuser-message-notice" @click="toCommentPage">
          <img src="static/img/user/message1.png" alt="">
          <span>评论</span>
          <div class="xlyuser-message-badge">1</div>
        </div>
        <div class="xlyuser-message-notice" @click="toSystemNotice">
          <img src="static/img/user/message2.png" alt="">
          <span>系统通知</span>
          <div class="xlyuser-message-badge">1</div>
        </div>
      </div>
      <!-- 私信 -->
      <div v-if="tabActive==2">
        <div class="xlyuser-message-letter" @click="withUserChat">
          <img src="http://qn-video.xys.ren/newdiscuz/2017/11/15111590910008322.jpg" alt="">
          <div class="xlyuser-message-letter-desc">
            <p>gontte</p>
            <p>苟全性命于乱世，不求闻达于诸侯</p>
          </div>
          <div class="xlyuser-message-letter-info">
            <p>10小时前</p>
            <div class="xlyuser-message-badge">1</div>
          </div>
        </div>
        <div class="xlyuser-message-letter" @click="withUserChat">
          <img src="http://qn-video.xys.ren/newdiscuz/2017/11/15111590910008322.jpg" alt="">
          <div class="xlyuser-message-letter-desc">
            <p>gontte</p>
            <p>苟全性命于乱世，不求闻达于诸侯</p>
          </div>
          <div class="xlyuser-message-letter-info">
            <p>10小时前</p>
            <div class="xlyuser-message-badge">1</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'mymessage',
    data () {
      return {
        tabActive: 1
      }
    },
    mounted () {
      this.$xys.setWrapperHeight(this.$refs.xlyUserMessage)
    },
    methods: {
      withUserChat () {
        this.$router.push({name: 'myChat', params: {id: '123456'}})
      },
      toCommentPage () {
        this.$router.push({name: 'myComment'})
      },
      toSystemNotice () {
        this.$router.push({name: 'myNotice'})
      }
    }
  }
</script>
<style lang="stylus">
  .xlyuser-message
    background-color #f5f5f7
    .mint-header
      border-bottom .01rem solid #e2e2e2
      color #4c4c4c
      background-color #fff
  .xlyuser-message-badge
    width .36rem
    height .36rem
    margin-left auto
    border-radius .18rem
    font-size .2rem
    line-height .36rem
    text-align center
    color #fff
    background-color #ff3636
  .xlyuser-message-header
    position fixed
    z-index 2
    top 0
    left 0
    height .88rem
    margin-left 50%
    transform translateX(-50%)
    font-size .3rem
    line-height .62rem
    color #4c4c4c
  .xlyuser-message-header-content
    display flex
    margin-top .1rem
    div
      margin-right .53rem
    div:last-child
      margin-right 0
  .xlyuser-message-header-active
    border-bottom .04rem solid #38b9ba
    color #38b9ba
  .xlyuser-message-notice
    display flex
    align-items center
    height 1.2rem
    padding 0 .24rem
    border-bottom .01rem solid #efefef
    background-color #fff
    img
      width .5rem
      margin-right .17rem
    span
      font-size .3rem
      color #090909
  .xlyuser-message-notice:last-of-type
    border-bottom none
  .xlyuser-message-letter
    display flex
    align-items center
    height 1.4rem
    padding 0 .24rem
    background-color #fff
    img
      object-fit cover
      width .88rem
      height .88rem
      margin-right .19rem
      border .01rem solid #efefef
      border-radius .06rem
  .xlyuser-message-letter-desc
    p:first-child
      margin-bottom .18rem
      font-size .3rem
      font-weight bold
      color #090909
    p:last-child
      width 4.87rem
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      font-size .24rem
      color #535353
  .xlyuser-message-letter-info
    p
      margin-bottom .17rem
      font-size .2rem
      color #c4c4c4
</style>