<template>
  <div class="xly-radio-catg">
    <mt-header :title="$route.params.category" fixed>
      <router-link to="/radio" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <!-- <mt-button slot="right">
        <div style="background-image:url(../../static/img/home/login.png)"></div>
      </mt-button> -->
    </mt-header>
    <div class="xly-radio-catg-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <radio-list :radioList="radioList"></radio-list>
    </div>
    <p v-show="loading" class="page-infinite-loading">
      <mt-spinner type="fading-circle"></mt-spinner>
      <span>加载中...</span>
    </p>
  </div>
</template>
<script>
  import RadioList from '@/components/radio/RadioList'
  export default {
    name: 'radioCategory',
    components: {
      RadioList
    },
    mounted () {
      // todo
    },
    data () {
      return {
        loading: false,
        radioList: 12
      }
    },
    methods: {
      loadMore () {
        this.loading = true
        setTimeout(() => {
          this.radioList += 6
          this.loading = false
        }, 2500)
      }
    }
  }
</script>
<style lang="stylus">
  @import '../../common/styl/mixin.styl'
  .xly-radio-catg
    padding-top .25rem
    background-color #fff
    .mint-header
      $setheader()
  .xly-radio-catg-list
    padding 0 .24rem
</style>