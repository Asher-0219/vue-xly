<template>
  <div class="xlyuser-collect">
    <mt-header fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="xlyuser-collect-header">
      <div class="xlyuser-collect-header-content">
        <div @click="tabActive=1" :class="{'xlyuser-collect-header-active': tabActive==1}">文章</div>
        <div @click="tabActive=2" :class="{'xlyuser-collect-header-active': tabActive==2}">电台</div>
        <div @click="tabActive=3" :class="{'xlyuser-collect-header-active': tabActive==3}">动态</div>
      </div>
    </div>
    <div ref="xlyUserCollect" v-if="tabActive==1">
      <article-list :articleList="3"></article-list>
    </div>
    <div class="xlyuser-collect-content" v-if="tabActive==2">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <radio-list :radioList="radioList"></radio-list>
      </div>
    </div>
    <div class="xlyuser-collect-content" v-if="tabActive==3">
      <community></community>
    </div>
  </div>
</template>
<script>
  import ArticleList from '@/components/article'
  import RadioList from '@/components/radio/RadioList'
  import Community from '@/components/community.vue'
  export default {
    name: 'mycollect',
    data () {
      return {
        tabActive: 1,
        radioList: 12
      }
    },
    components: {
      RadioList,
      Community,
      ArticleList
    },
    methods: {
      loadMore () {
        this.loading = true
        setTimeout(() => {
          this.radioList += 6
          this.loading = false
        }, 2500)
      }
    },
    mounted () {
      this.$xys.setWrapperHeight(this.$refs.xlyUserCollect)
    }
  }
</script>
<style lang="stylus">
  @import '../../common/styl/mixin.styl'
  .xlyuser-collect
    overflow-y scroll
    $setHeaderAll()
  .xlyuser-collect-header
    position fixed
    z-index 2
    top 0
    left 0
    height .88rem
    margin-left 50%
    transform translateX(-50%)
    font-size .3rem
    line-height .62rem
    color #4c4c4c
  .xlyuser-collect-header-content
    display flex
    margin-top .1rem
    div
      margin-right .53rem
    div:last-child
      margin-right 0
  .xlyuser-collect-header-active
    border-bottom .04rem solid #38b9ba
    color #38b9ba
  .xlyuser-collect-content
    padding .24rem
    background-color #fff
</style>