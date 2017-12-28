<template>
  <div class="reg">
    <nav>
      <img @click="back" src="../../../static/img/login/back1.png" alt="">
    </nav>
    <div class="reg-title">忘记密码</div>
    <div class="phone">
      <img src="../../../static/img/login/iphone.png" alt="">
      <input v-model="phone" type="number" placeholder="请输入手机号">
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
          this.$router.push({name: 'loginStep1'})
        }
      }
    },
    data () {
      return {
        phone: null
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
  margin-bottom 0.8rem
.phone
  display flex
  height 0.56rem
  width 6.43rem
  margin auto
  border-bottom 1px solid #efefef
  margin-bottom 1.5rem
  img
    width 0.22rem
    height 0.32rem
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
</style>


