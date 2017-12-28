<template>
  <div class="login">
    <nav>
      <img @click="back" src="../../../static/img/login/back1.png" alt="">
    </nav>
    <div class="login-content">
      <div class="tab">
        <div @click="tabClick(0)" :class="{active:tab===0}" class="type-password">密码登录</div>
        <div @click="tabClick(1)" :class="{active:tab===1}" class="type-fast">验证码登录</div>
      </div>
      <div class="tab-content">
        <div class="pwd-content" v-if="tab===0">
          <div class="phone">
            <div class="item">
              <img src="../../../static/img/login/iphone.png" alt="">
              <input v-model="inputList.pwd[0].phone" type="number" placeholder="请输入手机号">
            </div>
          </div>
          <div class="password">
            <div class="item">
              <img src="../../../static/img/login/password.png" alt="">
              <input :type="inputType" v-model="inputList.pwd[1].pwd" placeholder="请输入密码">
              <img v-if="inputType==='password'" @click.stop="inputType='text'" src="../../../static/img/login/see.png" alt="">
              <img @click.stop="inputType='password'" v-else src="../../../static/img/login/see1.png" alt="">
            </div>
          </div>
        </div>
        <div class="fast-content" v-if="tab===1">
          <div class="phone">
            <div class="item">
              <img src="../../../static/img/login/iphone.png" alt="">
              <input v-model="inputList.fast[0].phone" type="number" placeholder="请输入手机号">
            </div>
          </div>
          <div class="password">
            <div class="item">
              <img src="../../../static/img/login/code.png" alt="">
              <input v-model="inputList.fast[1].pwd" type="text" placeholder="请输入验证">
              <span v-if="!send" v-html="msg"></span>
              <span v-if="send" v-html="msg" @click="countDown"></span>
            </div>
          </div>
        </div>
        <div class="forget" @click="goReset">
          <span v-show="tab===0">忘记密码</span>
        </div>
      </div>
      <div class="login-btn" :class="{active:canLogin}" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tab: 0, // 登录方式 0 手机密码 1 短信登录
        inputType: 'password', // 显示密码
        inputList: {pwd: [{phone: null}, {pwd: null}], fast: [{phone: null}, {pwd: null}]},
        countDownTime: 60,
        msg: '获取验证码',
        send: true
      }
    },
    methods: {
      tabClick (ind) {
        // 切换登录方式
        if (ind === this.tab) return
        this.tab = ind
        this.inputList = {pwd: [{phone: null}, {pwd: null}], fast: [{phone: null}, {pwd: null}]}
      },
      back () {
        this.$router.go(-1)
      },
      login () {
        // 点击登录
      },
      countDown () {
        this.send = false
        this.countDownTime = 60
        this.msg = `已发送(${this.countDownTime}s)`
        let s = setInterval(() => {
          this.countDownTime--
          if (this.countDownTime <= 0) {
            this.msg = '点击重新发送'
            this.send = true
            clearInterval(s)
            return
          }
          this.msg = `已发送(${this.countDownTime}s)`
        }, 1000)
      },
      goReset () {
        // 忘记密码
        this.$router.push({name: 'resetPwd'})
      }
    },
    computed: {
      canLogin () {
        if ((this.inputList.pwd[0].phone && this.inputList.pwd[1].pwd) || (this.inputList.fast[0].phone && this.inputList.fast[1].pwd)) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
nav
  height 0.98rem
  display flex
  align-items center
  padding 0 0.24rem
  margin-bottom 0.58rem
  img
    width 0.14rem
    height 0.24rem
.login-content
  padding 0 0.54rem
  .tab
    display flex
    color #c4c4c4
    font-size 0.36rem
    margin-left 0.14rem
    height 1.78rem
    align-items center
    .type-password
      margin-right 0.6rem
    &>div.active
      color #090909
      position relative
      &:after
        content: ''
        width 0.48rem
        height 0.06rem
        position absolute
        border-radius 0.06rem
        background #38b9ba
        bottom -0.2rem
        left 0
        right 0
        margin auto
.tab-content
  margin-bottom 0.78rem        
.pwd-content>div, .fast-content>div
  padding-left 0.14rem
  height 0.58rem
  border-bottom 1px solid #efefef
  .item
    height 0.32rem
    display flex
    align-items center
    position relative
  input
    width 5.3rem
    margin-left 0.24rem
    line-height 0.32rem
    color #090909
    font-size 0.32rem
    border none 
.phone
  margin-bottom 0.55rem
  .item 
    img
      width 0.22rem
      height 0.32rem
.password
  margin-bottom 0.4rem  
  .item
    img:nth-child(1)
      width 0.22rem
      height 0.28rem
    img:nth-child(3)
      width 0.36rem
      height 0.2rem
    span
      color #3ababb
      font-size 0.28rem
.fast-content
  span
    position absolute
    right 0.14rem
.forget
  font-size 0.24rem
  color #5e5e5f
  height 0.24rem
  line-height 0.24rem
  margin-left 0.14rem
.login-btn
  width 6.41rem
  height 0.8rem
  line-height 0.8rem
  text-align center
  margin auto
  font-size 0.32rem
  color #ffffff
  background #c4c4c4
  border-radius 0.8rem
  &.active
    background #3ababb  
</style>
