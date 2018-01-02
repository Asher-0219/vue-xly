<template>
  <div class="xlyuser-index">
    <mt-header title="个人中心" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right">
        <div style="background-image:url(../../static/img/user/setting.png)" @click="$router.push({name: 'set'})"></div>
      </mt-button>
    </mt-header>
    <div class="xlyuser-top" @click="toMyInfo">
      <div class="xlyuser-top__avatar--wrapper">
        <div class="xlyuser-top__avatar" style="background-image:url(http://oxyevccoz.bkt.clouddn.com/jimo-app-file/2017/11/1510555814258430?vframe/jpg/offset/1)"></div>
      </div>
      <div class="xlyuser-info">
        <p class="xlyuser-info-base">
          <span>汪林奇</span>
          <span>♀23</span>
        </p>
        <p class="xlyuser-info__desc">国家二级心理咨询师 婚姻情感师</p>
      </div>
      <img class="xlyuser-triangle" src="static/img/user/arrow.png" />
    </div>
    <div class="xlyuser-data">
      <div class="xlyuser-data-item">
        <p>0</p>
        <p>动态</p>
      </div>
      <div class="xlyuser-data-item" @click="$router.push({name: 'myFollow'})">
        <p>123</p>
        <p>粉丝</p>
      </div>
      <div class="xlyuser-data-item">
        <p>10</p>
        <p>赞</p>
      </div>
    </div>
    <div class="xlyuser__divide"></div>
    <category-list :list="categoryList"></category-list>
    <div class="xlyuser-bottom">
      <div class="xlyuser__exit" @click="quit">退出登录</div>
    </div>
  </div>
</template>
<script>
  import CategoryList from '@/components/user/CategoryList'
  export default {
    name: 'userIndex',
    components: {
      CategoryList
    },
    data () {
      return {
        categoryList: [
          {name: 'message', text: '消息中心', route: 'myMessage'},
          // {name: 'advisory', text: '预约咨询'},
          {name: 'expert', text: '专家入驻', route: 'partnership'},
          {name: 'wallet', text: '我的钱包', route: 'myWallet'},
          {name: 'level', text: '我的等级', route: 'myLevel'},
          {name: 'status', text: '我的动态', route: 'myStatus'},
          {name: 'test', text: '我的测试', route: 'myTest'},
          {name: 'collect', text: '我的收藏', route: 'myCollect'}
          // {name: 'opinion', text: '我的反馈'}
        ]
      }
    },
    mounted () {
      // todo
    },
    methods: {
      quit () {
        this.$messagebox({
          title: '',
          message: '确认退出当前帐号?退出后无法查看<br>订单、发帖、评论等操作',
          confirmButtonText: '确定',
          showCancelButton: true
        }).then(action => {
          console.log(action)
        })
      },
      toMyInfo () {
        this.$router.push({name: 'myInfo'})
      }
    }
  }
</script>
<style lang="stylus">
  @import '../../common/styl/mixin.styl'
  .xlyuser-index
    background-color #fff
    .mint-header
      background-color #39b9ba
    .mint-button-text
      div
        $setHeaderImg(.36rem, .36rem)
  .xlyuser-top
    display flex
    align-items center
    box-sizing border-box
    width 100%
    height 2.55rem
    padding .72rem 0 .53rem
    margin-top -.01rem
    background-image url('../../../static/img/user/bac.png')
    $bacsize()
  .xlyuser-top__avatar--wrapper
    width 1.2rem
    height 1.2rem
    margin-left .24rem
    padding .04rem
    border-radius 1.24rem
    background-color #fff
  .xlyuser-top__avatar
    overflow hidden
    width 1.2rem
    height 1.2rem
    border-radius 1.2rem
    $bacsize()
  .xlyuser-info
    margin-left .2rem
    color #fff
  .xlyuser-info-base
    font-size 0
    span:first-child
      font-size .31rem
      line-height  .53rem
    span:last-child
      display inline-block
      width .6rem
      height .26rem
      margin-left .1rem
      border-radius .05rem
      font-size .2rem
      line-height .26rem
      text-align center
      vertical-align super
      background-color #f777a7
      -webkit-text-size-adjust none
  .xlyuser-info__desc
    font-size .23rem
    line-height .45rem
  .xlyuser-triangle
    width .19rem
    margin-right .24rem
    margin-left auto
  .xlyuser-data
    display flex
    align-items center
    width 100%
    height 1.2rem
  .xlyuser-data-item
    width 33.33%
    font-size .3rem
    line-height .5rem
    text-align center
    p:first-child
      font-weight bold
      color #090909
    p:last-child
      color #959595
  .xlyuser__divide
    width 100%
    height .2rem
    background-color #f5f5f7
  .xlyuser-bottom
    overflow hidden
    width 100%
    height 2.74rem
    background-color #f5f5f7
  .xlyuser__exit
    width 7.02rem
    height .98rem
    margin .48rem auto 0
    border-radius .1rem
    font-size .3rem
    line-height .98rem
    text-align center
    color #38b9ba
    background-color #fff
</style>
