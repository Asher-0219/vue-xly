<template>
  <div class="step2">
    <nav>
      <img @click="back" src="../../../static/img/login/back1.png" alt="">
    </nav>
    <div class="reg-title">设置密码</div>
    <div class="password">
      <img src="../../../static/img/login/password.png" alt="">
      <input :type="inputType" v-model="pwd" placeholder="请输入密码">
      <img v-if="inputType==='password'" @click.stop="inputType='text'" src="../../../static/img/login/see.png" alt="">
      <img @click.stop="inputType='password'" v-else src="../../../static/img/login/see1.png" alt="">
    </div>
    <div v-if="$route.params.type==='normal'" class="btn" @click="nextTep" :class="{active:canNext}">下一步</div>
    <div v-else class="btn" @click="nextTep" :class="{active:canNext}">确定</div>
  </div>
</template>

<script>
  export default {
    methods: {
      back () {
        this.$router.go(-1)
      },
      nextTep () {
        if (this.pwd) {
          if (this.$route.params.type === 'normal') {
            this.$router.push({name: 'loginStep3'})
          } else {
            this.$router.push({name: 'home'})
          }
        }
      }
    },
    data () {
      return {
        pwd: null,
        inputType: 'password'
      }
    },
    computed: {
      canNext () {
        if (this.pwd) {
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
.password
  position relative
  display flex
  height 0.56rem
  width 6.43rem
  margin auto
  border-bottom 1px solid #efefef
  margin-bottom 1.5rem
  padding-left 0.14rem
  box-sizing border-box
  img:nth-child(1)
      width 0.22rem
      height 0.28rem
      margin-right 0.24rem
  img:nth-child(3)
    position absolute
    right 0.15rem
    width 0.36rem
    height 0.2rem
  span
    color #3ababb
    font-size 0.28rem 
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


