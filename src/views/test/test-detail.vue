<template>
  <div class="testDetail">
    <nav>
      <img class="back" @click="back" src="../../../static/img/test/detail/back.png" alt="">
      <img class="share" @click="share" src="../../../static/img/test/detail/share.png" alt="">
      <span>测试详情</span>
    </nav>
    <div class="content">
      <div class="title">爱情测试：你的落单指数有多高？</div>
      <div class="info">
        <div class="num">240人测试过</div>
        <div class="date">2017-10-31   10:00</div>
      </div>
      <div class="img">
        <img src="../../../static/img/test/detail/a.png" alt="">
      </div>
      <div class="sign">面对爱情，每个人都有不同的表现，有的人全身心面对爱情，每个 人都有不同的表现，！</div>
      <div class="btn" @click="startTest(1)">开始测试</div>
    </div>
    <div class="line"></div>
    <!-- 列表 -->
    <div class="list">
      <div class="list-title">大家都在测</div>
      <test-item></test-item>
    </div>
  </div>
</template>

<script>
  import testItem from '../../components/test-item'
  export default {
    methods: {
      back () {
        this.$router.push({name: 'test'})
      },
      share () {
        // 分享
      },
      startTest (id) {
        this.$router.push({name: 'testStart', params: {Id: id}})
      }
    },
    components: {
      testItem
    }
  }
</script>

<style lang="stylus" scoped>
nav 
  height 0.98rem
  line-height 0.98rem
  color #4c4c4c
  font-size 0.34rem
  text-align center
  position relative
  font-weight bold
  border-bottom 1px solid #e2e2e2
  .back
    width 0.14rem
    height 0.24rem
    position absolute
    left 0.24rem
    top 0
    bottom 0
    margin auto 0
  .share
    width 0.3rem
    height 0.3rem
    position absolute
    right 0.24rem
    top 0
    bottom 0
    margin auto 0
.content
  padding 0.4rem 0.24rem 0.76rem 0.24rem
  .title
    color #4c4c4c
    font-size 0.3rem
    margin-bottom 0.28rem
  .info
    margin-bottom 0.35rem
    color #7f7f7f
    font-size 0.2rem
    display flex
    align-items center
    .num
      margin-right 0.56rem
  .img
    width 7.01rem
    height 3.86rem
    margin-bottom 0.32rem
    img
      width 100%
      height 100%
  .sign
    color #7f7f7f
    font-size 0.24rem
    margin-bottom 0.56rem
  .btn
    background-color rgb(56, 185, 186)
    width 2.88rem
    height 0.78rem
    border-radius 0.78rem 
    margin auto
    line-height 0.78rem
    color #ffffff
    font-size 0.32rem
    text-align center
.line
  width 100%
  height 0.2rem
  background #eff6f6
.list
  padding-top 0.15rem
  .list-title
    color #7f7f7f
    font-size 0.24rem
    margin-left 0.2rem
    line-height 0.52rem
    height 0.52rem
</style>
