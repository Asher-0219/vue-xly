<template>
  <div class="xlyuser-editsign">
    <mt-header title="昵称" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div ref="xlyUserEditSign">
      <div class="editsign-input">
        <textarea name="" v-model="sign" placeholder="请编辑您的个人签名"></textarea>
        <p>0/30</p>
      </div>
      <div class="editsign-btn btn--false">确定</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'editSign',
    mounted () {
      this.$xys.setWrapperHeight(this.$refs.xlyUserEditSign)
    },
    data () {
      return {
        sign: ''
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import '../../common/styl/mixin.styl'
  .xlyuser-editsign
    overflow-y scroll
    font-size 0
    $setHeaderAll()
  .editsign-input
    position relative
    width 100%
    height 2.6rem
    font-size .26rem
    line-height .41rem
    color #090909
    background #fff
    textarea
      overflow hidden
      display block
      box-sizing border-box
      width 100%
      height 2.6rem
      padding .08rem .24rem 0 .24rem
      border none
      resize none
    p
      position absolute
      right .24rem
      bottom .17rem
      font-size .24rem
      color #c4c4c4
  .editsign-btn
    $btn(7.02rem, .88rem)
    margin 1.18rem auto 0
    font-size .3rem
    color #fff
    background-color #38b9ba
  .btn--false
    background #c4c4c4
</style>