<template>
  <div class="search">
    <nav>
      <img @click="back" src="../../../static/img/community/detail/back.png" alt="" class="back">
      <div class="search">
        <img src="../../../static/img/community/search1.png" alt="">
        <form action="">
          <input type="text" placeholder="请输入搜索内容">
          <input type="text" style="display:none;">
        </form>
      </div>
      <div class="search-btn">搜索</div>
    </nav>
    <div class="tab">
      <div class="tab-item" :class="{active:tabActive===index}" @click="tabClick(index)" v-for="(item, index) in tabList">{{item}}</div>
    </div>
    <div class="search-content">
      <div class="search-user search-item" v-if="tabActive===0" v-for="(item,index) in 5">
        <div class="avatar">
          <img src="../../../static/img/community/a.png" alt="">
        </div>
        <div class="info">
          <div class="name">小鸡儿炖蘑菇</div>
          <div class="sign">资深咨询师</div>
        </div>
        <div class="btn" @click="starUser" :class="{active:star}">{{starText}}</div>
      </div>
      <div class="search-post search-item" v-if="tabActive===1" v-for="(item,index) in 5">
        <div class="search-item-top">
          <div class="avatar">
            <img src="../../../static/img/community/a.png" alt="">
          </div>
          <div class="text">清醒的时候放不下矜持，傻逼小星星，只有在某个夜晚多愁善感又萦绕在心头，或是朋友聚会上的大醉...敢借 着情绪说，我喜欢你，喜欢</div>
        </div>
        <div class="btn" @click="starUser" :class="{active:star}">{{starText}}</div>
      </div>
      <div class="search-circle search-item" v-if="tabActive===2" v-for="(item,index) in 5">
        <div class="search-item-top">
          <div class="avatar">
            <img src="../../../static/img/community/a.png" alt="">
          </div>
          <div class="info">
            <div class="title">小鸡儿炖蘑菇</div>
            <div class="text">清醒的时候放不下矜持</div>
          </div>
        </div>
        <div class="btn" @click="starUser" :class="{active:star}">{{starText}}</div>
      </div>
      <div class="search-radio search-item" v-if="tabActive===3" v-for="(item,index) in 5">
        <div class="avatar">
          <img src="../../../static/img/community/a.png" alt="">
          <img src="../../../static/img/community/play1.png" alt="" class="play-icon">
        </div>
        <div class="info">
          <div class="title">小鸡儿炖蘑菇</div>
          <div class="name">
            <div class="name-text">dj</div>
            <div class="name-sign">免费</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import tab from '../../components/head-tab'
  export default {
    components: {
      tab
    },
    data () {
      return {
        tabList: ['用户', '帖子', '文章', '电台'],
        tabActive: 0,
        star: false,
        starText: '关注'
      }
    },
    methods: {
      tabClick (index) {
        if (this.tabActive === index) return
        this.tabActive = index
      },
      starUser () {
        this.star = !this.star
        if (this.star) {
          this.starText = '已关注'
        } else {
          this.starText = '关注'
        }
      },
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.search
  img
    object-fit cover
  nav
    width 100%
    height 0.98rem
    line-height 0.98rem
    border-bottom 1px solid #e2e2e2
    color #4c4c4c
    font-size 0.22rem
    position relative
    font-weight bold
    padding 0 0.24rem
    justify-content space-between
    display flex
    align-items center
    width 100%
    box-sizing border-box
    img
      width 0.14rem
      height 0.24rem
    .search
      border-radius 0.1rem
      background-color rgb(239, 246, 246)
      width 6.08rem
      height 0.7rem
      line-height 0.7rem
      display flex
      align-items center
      img
        width 0.22rem
        height 0.2rem
        margin 0 0.14rem
      input
        width 5rem
        height 0.7rem
        border none
        line-height 0.7rem
        background rgb(239, 246, 246)
  .tab
    display flex
    align-items center
    justify-content space-around
    color #7f7f7f
    font-size 0.26rem
    height 0.85rem
    box-sizing border-box
    width 100%
    line-height 0.85rem
    border-bottom 1px solid #e2e2e2
    text-align center
    .tab-item
      width 0.73rem
      height 100%
      box-sizing border-box
      &.active
        border-bottom 0.03rem solid #38b9ba
.search-item
  width 100%
  box-sizing border-box
  padding 0 0.24rem
  border-bottom 1px solid #e2e2e2
  .btn
    background-color rgb(56, 185, 186)
    width 1.05rem
    height .4rem
    line-height 0.4rem
    text-align center
    font-size 0.2rem
    border-radius 0.4rem
    color #ffffff
    &.active
      background-color rgb(196, 196, 196)
  .search-item-top
    height 1rem
    display flex
    align-items center
    margin-top 0.29rem
    margin-bottom 0.15rem
    .avatar
      width 1rem
      height 1rem
      margin-right 0.1rem
      img
        width 100%
        height 100%
        border-radius 0.1rem
    .text
      color #7f7f7f
      font-size 0.26rem
      width 5.9rem
      line-height 0.45rem
      text-overflow ellipsis
.search-user
  height 1.26rem
  display flex
  align-items center
  .avatar
    width 0.71rem
    height 0.71rem
    margin-right 0.07rem
    img
      width 100%
      height 100%
      border-radius 50%
  .name
    color #ff5c5c
    font-size 0.26rem
    margin-bottom 0.1rem
  .sign
    color #c5c5c5
    font-size 0.2rem
  .btn
    margin-left auto
.search-post
  height 2.16rem
  .btn
    margin-left auto
.search-circle
  height 2.16rem
  .btn
    margin-left auto
  .title
    color #4c4c4c
    font-size 0.3rem
    margin-bottom 0.24rem
.search-radio
  height 1.45rem
  display flex
  align-items center
  .avatar
    width 1rem
    height 1rem
    margin-right 0.15rem
    border-radius 2px
  .title
    color #c4c4cf4
    font-size 0.24rem
    margin-bottom 0.2rem
  .name
    display flex
    align-items center
  .name-text
    color #7f7f7f
    font-size 0.2rem
    margin-right 0.28rem
  .name-sign
    border-width 1px
    border-color rgb(56, 185, 186)
    border-style solid
    border-radius 0.05rem
    width .57rem
    height .26rem
    line-height 0.26rem
    text-align center
    color #38b9ba
    font-size 0.2rem
</style>
