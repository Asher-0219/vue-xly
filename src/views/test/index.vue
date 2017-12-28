<template>
  <div class="test">
    <nav>
      <img src="../../../static/img/test/back.png" @click="back" alt="">
      <span>心理测试</span>
    </nav>
    <!-- 顶部导航 -->
    <tab @headTab="getIndex"></tab>
    <!-- 轮播 -->
    <swiper-c></swiper-c>
    <!-- 列表 -->
    <div v-infinite-scroll="loadMore" :infinite-scroll-disabled="isLoad" infinite-scroll-distance="10" class="loadmore">
      <test-item></test-item>
      <div v-show="!isLoad" class="page-infinite-loading">
          <mt-spinner type="fading-circle" class="spinner"></mt-spinner>
          <span>加载中...</span>
      </div>
    </div>  
  </div>
</template>

<script>
  import tab from '../../components/head-tab'
  import testItem from '../../components/test-item'
  import swiperC from '../../components/swiper-c.vue'
  export default {
    data () {
      return {
        index: 0,
        isLoad: true
      }
    },
    components: {
      tab,
      testItem,
      swiperC
    },
    methods: {
      getIndex (ind) {
        this.index = ind
      },
      back () {
        this.$router.push({name: 'home'})
      },
      loadMore () {
        // 加载更多测试
      }
    }
  }
</script>

<style lang="stylus" scoped>
nav
  height 0.98rem
  position relative
  line-height 0.98rem
  font-size 0.34rem
  color #ffffff
  background #38b9ba
  text-align center
  img
    width 0.14rem
    height 0.24rem
    position absolute
    left 0.24rem
    top 0
    bottom 0
    margin auto 0
</style>
