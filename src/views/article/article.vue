<template>
  <div class="article">
    <div class="head">
      <nav>
        <img @click="back" src="../../../static/img/community/back.png" alt="">
        <span>文章</span>
      </nav>
      <tab @headTab="getIndex"></tab>
    </div>
    <div class="article-content">
      <swiper v-if="tabIndex===0"></swiper>
      <div class="choose-list" v-if="tabIndex!==0">
        <div class="choose-content">
          <div class="choose-item" @click="choose(index)" :class="{active:typeTab===index}" v-for="(item,index) in chooseList">{{item}}</div>
        </div>
        <div @click="showMore=!showMore" :class="{active:showMore}" class="choose-more">
          <img src="../../../static/img/article/more.png" alt="">
        </div>
      </div>
      <div class="line" v-if="tabIndex!==0"></div>
      <div v-infinite-scroll="loadMore" :infinite-scroll-disabled="isLoad" infinite-scroll-distance="10" class="loadmore">
        <article-list :articleList="10"></article-list>
        <div v-show="!isLoad" class="page-infinite-loading">
          <mt-spinner type="fading-circle" class="spinner"></mt-spinner>
          <span>加载中...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import tab from '../../components/head-tab'
  import swiper from '../../components/swiper-c'
  import ArticleList from '@/components/article'
  export default {
    data () {
      return {
        tabIndex: 0,
        typeTab: 0,
        chooseList: ['全部', '精神分裂', '情感创伤修复', '抑郁症'],
        showMore: null,
        allList: [],
        someList: [],
        isLoad: false
      }
    },
    components: {
      tab,
      swiper,
      ArticleList
    },
    methods: {
      getIndex (index) {
        this.tabIndex = index
      },
      choose (index) {
        if (this.typeTab === index) return
        this.typeTab = index
      },
      back () {
        this.$router.go(-1)
      },
      goArticle (id) {
        this.$router.push({name: 'article-item', params: {Id: id}})
      },
      loadMore () {
        // 加载更多文章
      }
    },
    watch: {
      showMore () {
        if (this.showMore) {
          this.chooseList = this.allList
        } else {
          this.chooseList = this.someList
        }
      }
    },
    mounted () {
      this.chooseList.forEach((v, i) => {
        this.allList.push(v)
        if (i < 3) {
          this.someList.push(v)
        }
      })
      this.chooseList = this.someList
    }
  }
</script>

<style lang="stylus" scoped>
.head
  width 100%
  position fixed
  top 0
  z-index 9
nav
  width 100%
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
.article-content
  margin-top calc(0.98rem + 0.88rem)
  width 100%
.article-item
  height 2.78rem
  width 100%
  box-sizing border-box
  border-bottom 1px solid #efefef
  padding 0.24rem 0 0 0.24rem
  .item-top
    margin-bottom 0.26rem
    display flex
  .item-info
    width 5rem
    .item-title
      line-height 0.45rem
      color #4c4c4c
      font-size 0.3rem
      font-weight bold
    .item-text
      color #7f7f7f
      font-size 0.24rem
      line-height 0.36rem
  .item-avatar
    border-radius 0.05rem
    width 1.8rem
    height 1.80rem
    object-fit cover
    margin-left auto
    margin-right 0.24rem
  .item-down
    color #7f7f7f
    font-size 0.2rem
    display flex
  .item-num
    margin-left auto
    margin-right 0.24rem   
.choose-list
  width 100%
  position relative
  display flex
  background-color rgb(255, 255, 255)
  box-shadow 0px 8px 10px rgba(0, 0, 0, 0.1) inset
  padding 0rem 0.24rem 0rem 0.24rem
  box-sizing border-box
  transition all 0.5s ease
  overflow hidden
.choose-content
  display flex
  flex-wrap wrap
  margin-top 0.24rem
.choose-item
  height 0.41rem
  border-radius 0.41rem
  line-height 0.41rem
  padding 0 0.2rem
  font-size 0.2rem
  text-align center
  color #535353
  border 1px solid #535353
  font-weight bold
  box-sizing border-box
  margin-right 0.44rem
  margin-bottom 0.27rem
  &.active
    border none
    background #38b9ba
    color #ffffff
.choose-more
  position absolute
  bottom 0.48rem
  right 0.24rem
  width 0.17rem
  height 0.1rem
  transition transform 0.5s ease
  &.active
    transform rotate(180deg)
.line
  height 0.2rem
  width 100%
  background #efefef
</style>
