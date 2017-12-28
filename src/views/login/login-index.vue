<template>
  <div class="login-index">
    <nav>
      <img @click="back" src="../../../static/img/login/back.png" alt="">
    </nav>
    <div class="logo">
      <img src="../../../static/img/login/logo.png" alt="">
    </div>
    <div class="btn">
      <div class="btn-login" @click="goLogin">登录</div>
      <div class="btn-reg" @click="goReg">注册</div>
    </div>
    <div class="login-footer">
      <div class="icons">
        <div class="qq">
          <img src="../../../static/img/login/qq.png" alt="">
        </div>
        <div class="wechat">
          <img src="../../../static/img/login/wechat.png" alt="">          
        </div>
      </div>
      <div class="text">登录或注册即同意<span>《心理园用户协议》</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      back () {
        this.$router.go(-1)
      },
      goLogin () {
        this.$router.push({name: 'loginLogin'})
      },
      goReg () {
        this.$router.push({name: 'loginReg'})
      }
    }
  }
</script>

<style lang="stylus" scoped>
.login-index
  height 100vh
  width 100%
  position relative
nav
  height 0.98rem
  display flex
  align-items center
  padding 0 0.24rem
  margin-bottom 0.98rem
  img
    width 0.24rem
    height 0.24rem
.logo
  width 1.8rem
  height 2.03rem
  margin 0 auto
  margin-bottom 1.34rem
  img
    width 100%
    height 100%
.btn
  &>div
    width 6.41rem
    height 0.8rem
    border-radius 0.8rem
    margin 0 auto
    line-height 0.8rem
    font-size 0.32rem
    text-align center
    box-sizing border-box
    margin-bottom 0.48rem
  .btn-login
    background #38b9ba
    color #ffffff
  .btn-reg
    background #ffffff
    border 0.02rem solid #38b9ba
    color #38b9ba
.login-footer
  position absolute
  bottom 0.58rem
  left 0
  right 0
  margin 0 auto
  display flex
  align-items center
  flex-direction column
  .icons
    display flex
    align-items center
    margin-bottom 0.43rem
    img
      width 100%
      height 100%
    .qq
      width 0.43rem
      height 0.48rem
      margin-right 1.02rem
    .wechat
      width 0.62rem
      height 0.48rem
  .text
    color #c4c4c4
    font-size 0.24rem
    span
      color #38b9ba      
</style>
