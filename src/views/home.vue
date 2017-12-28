<template>
  <div class="home">
    <nav>
      <span>心理园</span>
      <!-- <img @click="login" src="../../static/img/home/login.png" alt=""> -->
      <img @click="toUserHome" src="../../static/img/home/login.png" alt="">
    </nav>
    <!-- 顶部轮播 -->
    <swiper-c></swiper-c>
    <!-- 分类 -->
    <div class="home-tab">
      <div class="home-tab-item" v-for="(item, index) in tab" @click="catergoryEntry(item.route)">
        <img :src="'../../static/img/home/tab'+(index+1)+'.png'" alt="">
        <div>{{item.name}}</div>
      </div>
    </div>
    <!-- 公告 -->
    <notice></notice>
    <div class="line"></div>
    <!-- 推荐专家 -->
    <div class="home-expert home-item">
      <div class="home-expert-title home-item-title">
        <img src="../../static/img/home/expert.png" alt="">
        <div>推荐专家</div>
      </div>
      <swiper-a></swiper-a>
    </div>
    <!-- 更多专家 -->
    <div class="home-more-expert home-more-item">更多专家</div>
    <div class="line"></div>
    <!-- 心里电台 -->
    <div class="home-item home-radio">
      <div class="home-item-title home-radio-title">
        <img src="../../static/img/home/radio.png" alt="">
        <div>心里电台</div>
      </div>
      <div class="radio-list">
        <div class="radio-item" v-for="(item, index) in 3">
          <div class="radio-item-content">
            <img class="radio-img" src="../../static/img/home/a.png" alt="">
            <div class="radio-num">
              <img src="../../static/img/home/play.png" alt="" class="radio-icon">
              <div class="radio-play-num">2.4W</div>
            </div>
          </div>
          <div class="radio-sign">干了这碗热翔</div>
        </div>
      </div>
    </div>
    <div class="home-more-expert home-more-item" @click="catergoryEntry('radio')">更多电台</div>
    <div class="line"></div>
    <!-- 推荐文章 -->
    <div class="home-article home-item">
      <div class="home-item-title home-article-title">
        <img src="../../static/img/home/article.png" alt="">
        <div>推荐文章</div>
      </div>
      <div class="home-article-item" @click="goArticle(index)" v-for="(item, index) in 3">
        <div class="article-item-top">
          <div class="article-item-text">
            <div class="article-item-title">每次失恋都有想自杀的冲动,这是为什么呢</div>
            <div class="article-item-sign">我们每次都会遇到失恋的这种情况，面对失恋我们应该怎么办呢</div>
          </div>
          <div class="article-item-img">
            <img src="../../static/img/home/a.png" alt="">
          </div>
        </div>
        <div class="article-item-down">
          <div class="article-item-name">心理咨询师</div>
          <div class="article-item-num">浏览2.4W</div>
        </div>
      </div>
    </div>
    <div class="home-more-article home-more-item" @click="catergoryEntry('article')">查看更多</div>
    <div class="line"></div>
    <!-- 心理测试 -->
    <div class="home-test home-item">
      <div class="home-item-title home-test-title">
        <img src="../../static/img/home/test.png" alt="">
        <div>心理测试</div>
      </div>
      <div class="home-test-item" @click="startTest(index)" v-for="(item, index) in 3">
        <div class="test-item-top">
          <div class="test-item-img">
            <img src="../../static/img/home/a.png" alt="">
          </div>
          <div class="test-item-text">
            <div class="test-item-title">爱情测试：你的落单指数有多高？</div>
            <div class="test-item-sign">测试下你在爱情下的神秘小心理</div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-more-test home-more-item" @click="catergoryEntry('test')">更多测试</div>
  </div>
</template>

<script>
import swiperC from '../components/swiper-c.vue'
import swiperA from '../components/swiper-a.vue'
import notice from '../components/notice'

export default {
  components: {
    swiperC,
    swiperA,
    notice
  },
  data () {
    return {
      // 顶部分类
      tab: [
        {name: '两性文章', route: 'article'},
        {name: '情感社区', route: 'community'},
        {name: '心理测试', route: 'test'},
        {name: '专家咨询', route: 'advisory'},
        {name: '情感电台', route: 'radio'}
      ]
    }
  },
  mounted () {
  },
  methods: {
    catergoryEntry (route) {
      this.$router.push({name: route})
    },
    login () {
      this.$router.push({name: 'loginIndex'})
    },
    toUserHome () {
      this.$router.push({name: 'userIndex'})
    },
    goArticle (id) {
      this.$router.push({name: 'article-item', params: {Id: id}})
    },
    startTest (id) {
      this.$router.push({name: 'testStart', params: {Id: id}})
    }
  }
}
</script>

<style lang="stylus" scoped>
nav {
  background linear-gradient(to right, #00b8bd, #00deae)
  height: 0.88rem;
  width: 100%;
  position: relative;
  line-height: 0.88rem;
  color: #ffffff;
  font-size: 0.34rem;
  text-align: center;

  img {
    width: 0.54rem;
    height: 0.54rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: 0.24rem;
  }
}

.home-tab {
  height: 1.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #f5f5f7;

  .home-tab-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #535353;
    font-size: 0.24rem;

    img {
      margin-bottom: 0.18rem;
    }
  }

  .home-tab-item:nth-child(1) img {
    width: 0.5rem;
    height: 0.6rem;
  }

  .home-tab-item:nth-child(2) img {
    width: 0.6rem;
    height: 0.6rem;
  }

  .home-tab-item:nth-child(3) img {
    width: 0.57rem;
    height: 0.6rem;
  }

  .home-tab-item:nth-child(4) img {
    width: 0.52rem;
    height: 0.54rem;
    margin-bottom 0.24rem
  }
  .home-tab-item:nth-child(5) img {
    width: 0.58rem;
    height: 0.57rem;
    margin-bottom 0.21rem
  }
}
.line {
  width: 100%;
  height: 0.2rem;
  background: #f5f5f7;
}
.swiper-container
  height 100%
.home-item
  padding-top 0.37rem
  padding-left 0.24rem
  padding-bottom 0.34rem
  border-bottom 1px solid #f5f5f7
  .home-item-title
    margin-bottom 0.33rem
    display flex
    align-items center
    color #5c5c5c
    font-size 0.24rem
    img
      margin-right 0.06rem
      width 0.3rem
      height 0.22rem
.home-more-item
  height 0.88rem
  line-height 0.88rem
  width 100%
  font-size 0.26rem
  color #535353
  text-align center
.home-radio .home-radio-title
  img
    width 0.24rem
    height 0.23rem
.radio-list
  display flex
  align-items center
  .radio-item
    margin-right 0.15rem
    border-radius 0.05rem
    text-align left
    display flex
    flex-direction column
    .radio-item-content
      position relative
      margin-bottom 0.2rem
    .radio-img
      width 2.24rem
      height 2.24rem
      border-radius 0.05rem
    .radio-num
      position absolute
      left 0.14rem
      bottom 0.14rem
      display flex
      align-items center
      color #ffffff
      font-size 0.24rem
      img
        width 0.13rem
        height 0.18rem
        margin-right 0.1rem
    .radio-sign
      font-size 0.26rem
      color #535353
.home-article .home-article-title img
  width 0.22rem
  height 0.24rem
.home-article
  border none
  padding-bottom 0
.home-article-item
  width 100%
  height 2.9rem
  padding 0.4rem 0.24rem 0.24rem 0
  box-sizing border-box
  border-bottom 1px solid #efefef
.article-item-top
  text-align left
  display flex
  margin-bottom 0.24rem
  .article-item-text
    width 4.88rem
    .article-item-title
      font-size 0.3rem
      color #090909
      margin-bottom 0.24rem
    .article-item-sign
      color #5e5e5f
      font-size 0.24rem
  .article-item-img
    width 1.8rem
    height 1.8rem
    margin-left auto
    img
      width 100%
      height 100%
      border-radius 0.05rem
.article-item-down
  display flex
  font-size 0.2rem
  .article-item-name
    color #ff5e66
  .article-item-num
    color #959595
    margin-left auto
.home-test .home-test-title img
  width 0.24rem
  height 0.24rem
.home-test
  border none
  padding-bottom 0
.home-test-item
  width 100%
  height 2.15rem
  padding 0.36rem 0.24rem 0.36rem 0
  box-sizing border-box
  border-bottom 1px solid #efefef
.test-item-top
  text-align left
  display flex
  margin-bottom 0.24rem
  .test-item-text
    width 4.88rem
    .test-item-title
      font-size 0.3rem
      color #090909
      margin-bottom 0.2rem
    .test-item-sign
      color #5e5e5f
      font-size 0.24rem
  .test-item-img
    width 1.4rem
    height 1.4rem
    margin-right 0.2rem
    img
      width 100%
      height 100%
      border-radius 0.05rem
</style>
