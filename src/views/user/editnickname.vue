<template>
  <div class="xlyuser-editname">
    <mt-header title="昵称" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div ref="xlyUserEditName">
      <div class="edit-input">
        <input v-model="nickname" type="text">
        <p>X</p>
      </div>
      <p class="edit-tip">使用真实姓名让人更快的找到和联系你</p>
      <div class="edit-btn">确定</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'editName',
    data () {
      return {
        nickname: '王羲之'
      }
    },
    mounted () {
      this.$xys.setWrapperHeight(this.$refs.xlyUserEditName)
    }
  }
</script>
<style lang="stylus" scoped>
  @import '../../common/styl/mixin.styl'
  .xlyuser-editname
    overflow-y scroll
    font-size 0
    $setHeaderAll()
  .edit-input
    position relative
    width 100%
    height 1rem
    margin-top .2rem
    line-height .26rem
    color #090909
    background-color #fff
    input
      display block
      box-sizing border-box
      width 100%
      height 1rem
      padding 0 .72rem 0 .24rem
      border none
    p
      position absolute
      top .36rem
      right .24rem
      width .28rem
      height .28rem
      border-radius .14rem
      font-size .12rem
      line-height .28rem
      text-align center
      color #fff
      background-color #b5b5b5
  .edit-tip
    margin .21rem 0 0 .24rem
    font-size .24rem
    color #959595
  .edit-btn
    $btn(7.02rem, .88rem)
    margin 1.18rem auto 0
    font-size .3rem
    color #fff
    background-color #38b9ba
</style>