<template>
  <div class="xlyuser-desc">
    <mt-header title="个人信息" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div ref="xlyUserInfo">
      <div class="xlyuser-desc-wrapper">
        <div class="xlyuser-desc-item xlyuser-desc-item--avatar">
          <span>头像</span>
          <div class="xlyuser-desc-item-right">
            <img src="http://qn-video.xys.ren/newdiscuz/2017/11/15111590910008322.jpg" alt="">
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
        <div class="xlyuser-desc-item xlyuser-desc-item--regular" @click="toEditNickName">
          <span>昵称</span>
          <div class="xlyuser-desc-item-right">
            <span>王羲之</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
        <div class="xlyuser-desc-item xlyuser-desc-item--regular" @click="open('showChooseAge')">
          <span>年龄</span>
          <div class="xlyuser-desc-item-right">
            <span>{{age}}岁</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
        <div class="xlyuser-desc-item xlyuser-desc-item--regular">
          <span>性别</span>
          <div class="xlyuser-desc-item-right xlyuser-desc-item-right--gender">
            <p><i class="fa fa-dot-circle-o xlyusr-desc-item--checked"></i><span>男</span></p>
            <p><i class="fa fa-circle-o"></i><span>女</span></p>
          </div>
        </div>
        <div class="xlyuser-desc-item xlyuser-desc-item--regular" @click="open('showChooseArea')">
          <span>所在地</span>
          <div class="xlyuser-desc-item-right">
            <span v-if="!area" class="xlyuser-desc-item--font">请选择你的所在地</span>
            <span v-if="area">{{area.province}}<span v-if="area.province!=area.city">&nbsp;{{area.city}}</span></span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
        <div class="xlyuser-desc-item xlyuser-desc-item--sign" @click="toEditSign">
          <span>个人签名</span>
          <div class="xlyuser-desc-item-right">
            <span class="xlyuser-desc-item--font">请编辑您的个性签名</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
    <choose-age v-if="showChooseAge" @dateClose="showChooseAge=false" @dateOk="chooseAge"></choose-age>
    <choose-area v-if="showChooseArea" @areaClose="showChooseArea=false" @areaOk="chooseArea"></choose-area>
  </div>
</template>
<script>
  import ChooseAge from '@/components/revise-date'
  import ChooseArea from '@/components/revise-area'
  export default {
    name: 'myInfo',
    components: {
      ChooseAge,
      ChooseArea
    },
    data () {
      return {
        showChooseAge: false,
        age: 23,
        showChooseArea: false,
        area: null
      }
    },
    mounted () {
      this.$xys.setWrapperHeight(this.$refs.xlyUserInfo)
    },
    methods: {
      open (type) {
        this[type] = true
      },
      chooseAge (data) {
        this.showChooseAge = false
        this.age = data
      },
      chooseArea (data) {
        this.showChooseArea = false
        this.area = data
      },
      toEditNickName () {
        this.$router.push({name: 'editname'})
      },
      toEditSign () {
        this.$router.push({name: 'editsign'})
      }
    }
  }
</script>
<style lang="stylus">
  @import '../../common/styl/mixin.styl'
  .xlyuser-desc
    overflow-y scroll
    font-size .29rem
    $setHeaderAll()
  .xlyuser-desc-wrapper
    padding-left .24rem
    background-color #fff
  .xlyuser-desc-item
    display flex
    align-items center
    padding-right .24rem
    border-bottom .01rem solid #efefef
    background-color #fff
    >span
      color #090909
  .xlyuser-desc-item-right
    display flex
    align-items center
    margin-left auto
    i
      margin-left .18rem
      font-size .5rem
      color #c4c4c4
  .xlyuser-desc-item--avatar
    height 2rem
    .xlyuser-desc-item-right
      img
        width 1.2rem
        height 1.2rem
        object-fit cover
        border-radius .6rem
  .xlyuser-desc-item--regular
    height 1rem
  .xlyuser-desc-item--sign
    height 2rem
  .xlyuser-desc-item--font
    color #c4c4c4
  .xlyuser-desc-item-right--gender
    p:first-child
      margin-right .84rem
    i
      margin-right .11rem
      font-size .36rem
    .xlyusr-desc-item--checked
      color #38b9ba
  .xlyuser-desc
    .picker-toolbar
      padding 0 .24rem
      color #b9b9b9
    .mint-datetime-cancel
      text-align left
    .mint-datetime-confirm
      text-align right
</style>