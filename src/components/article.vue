<template>
  <div class="article-list">
    <div class="article-item" v-for="(item, index) in articleList" @click="goArticle(index)">
      <div class="item-top">
        <div class="item-info">
          <div class="item-title">每次失恋都有想自杀的冲动,这是为什么呢</div>
          <div class="item-text">我们每次都会遇到失恋的这种情况，面对失联我们应该怎么办呢</div>
        </div>
        <div class="item-avatar">
          <img src="static/img/community/a.png" alt="">
        </div>
      </div>
      <div class="item-down">
        <div class="item-sign">心理咨询师</div>
        <div class="item-num">浏览2.4W</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'article',
    props: ['articleList'],
    methods: {
      goArticle (id) {
        this.$router.push({name: 'article-item', params: {Id: id}})
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .article-item
    height 2.78rem
    width 100%
    box-sizing border-box
    border-bottom 1px solid #efefef
    padding 0.24rem 0 0 0.24rem
    background-color #fff
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
</style>