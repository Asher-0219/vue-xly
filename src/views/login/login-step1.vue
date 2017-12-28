<template>
  <div class="step1">
    <nav>
      <img @click="back" src="../../../static/img/login/back1.png" alt="">
    </nav>
    <div class="reg-title">手机号码验证</div>
    <div class="info">手机号码已发送<span>15383593422</span></div>
    <div class="phone">
      <img src="../../../static/img/login/password.png" alt="">
      <input v-model="phone" type="number" placeholder="请输入验证码">
      <div class="msg">
        <div v-if="!send" class="sendMsg" v-html="msg"></div>
        <div v-else @click="countDown" class="reSendMsg">重新发送</div>
      </div>
    </div>
    <div class="btn" @click="nextTep" :class="{active:canNext}">下一步</div>
  </div>
</template>

<script>
  export default {
    methods: {
      back () {
        this.$router.go(-1)
      },
      nextTep () {
        if (this.phone) {
          this.$router.push({name: 'loginStep2'})
        }
      },
      countDown () {
        this.send = false
        this.countDownTime = 60
        this.msg = `已发送(${this.countDownTime}s)`
        let s = setInterval(() => {
          this.countDownTime--
          if (this.countDownTime <= 0) {
            this.send = true
            clearInterval(s)
            return
          }
          this.msg = `已发送(${this.countDownTime}s)`
        }, 1000)
      }
    },
    data () {
      return {
        phone: null,
        msg: '已发送(60s)',
        countDownTime: 60,
        send: false
      }
    },
    computed: {
      canNext () {
        if (this.phone) {
          return true
        } else {
          return false
        }
      }
    },
    mounted () {
      this.countDown()
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
.reg-title
  color #090909
  font-size 0.36rem
  padding-left 0.68rem
  margin-bottom 0.18rem
.info
  color #5e5e5f
  font-size 0.24rem
  margin-bottom 0.46rem
  padding-left 0.68rem  
.phone
  position relative
  display flex
  height 0.56rem
  width 6.43rem
  margin auto
  border-bottom 1px solid #efefef
  margin-bottom 1.5rem
  img
    width 0.22rem
    height 0.28rem
    margin-right 0.24rem 
  input
    border none
    height 0.32rem
    line-height 0.32rem
    color #090909
    font-size .28rem
    width 5rem
.btn
  background rgb(196, 196, 196)
  width 6.41rem
  height .8rem 
  line-height 0.8rem
  text-align center
  border-radius 0.8rem
  font-size 0.32rem
  color #ffffff
  margin auto
  &.active
    background #3ababb
.msg
  position absolute
  right 0.15rem
  font-size 0.28rem
  line-height 0.32rem
  .sendMsg
    color #c4c4c4
  .reSendMsg
    color #3ababb       
</style>


