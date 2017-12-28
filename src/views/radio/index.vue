<template>
  <div class="xly-radio-index">
    <mt-header title="电台" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right">
        <div @click="toUserHome" style="background-image:url(../../static/img/home/login.png)"></div>
      </mt-button>
    </mt-header>
    <div class="xlyradio-catg">
      <div class="xlyradio-catg-item" v-for="(item,index) in category" @click="goCategory(item)">
        <div :style="categoryBac(index)"></div>
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="xlyradio-rcmd">
      <p class="xlyradio-rcmd__title">推荐Ting.Recommended</p>
      <radio-list :radioList="6"></radio-list>
    </div>
    <div class="xlyradio-rcmd">
      <div class="xlyradio-rcmd__title">热门Ting.Hot</div>
      <radio-list :radioList="3"></radio-list>
    </div>
    <div class="xlyradio-rcmd">
      <div class="xlyradio-rcmd__title">全部Ting.All</div>
      <radio-list :radioList="3"></radio-list>
    </div>
  </div>
</template>
<script>
  import RadioList from '@/components/radio/RadioList'
  export default {
    name: 'radioIndex',
    components: {
      RadioList
    },
    data () {
      return {
        category: [
          {name: '个人成长'},
          {name: '情绪管理'},
          {name: '人际关系'},
          {name: '恋爱婚姻'},
          {name: '职场管理'},
          {name: '亲自家庭'},
          {name: '心理科普'},
          {name: '课程讲座'}
        ]
      }
    },
    methods: {
      categoryBac (index) {
        return 'background-image: url(../../static/img/radio/radio' + index + '.png'
      },
      goCategory (item) {
        this.$router.push({path: `/radio/${item.name}`})
      },
      toUserHome () {
        this.$router.push({name: 'userIndex'})
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import '../../common/styl/mixin.styl'
  .xly-radio-index
    .mint-header
      background linear-gradient(to right, #00b8bd, #00deae)
    .mint-button-text
      div
        $setHeaderImg(.54rem, .54rem)
    
  .xlyradio-catg,.xlyradio-rcmd
    background-color #fff
  .xlyradio-catg
    $flex-row()
    width 100%
    padding .24rem 0
  .xlyradio-catg-item
    $flex-column()
    width 25%
    height 1.28rem
    margin .24rem 0
    div
      width 1rem
      height .6rem
      margin-bottom .25rem
      $bacsize()
  .xlyradio-catg-item:last-child img
      width .35rem
  
  .xlyradio-rcmd
    margin-top .2rem
    padding .13rem .24rem 0
  .xlyradio-rcmd__title
    line-height .72rem
</style>