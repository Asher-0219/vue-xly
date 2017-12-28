<template>
  <div class="list">
    <div class="list-item" v-for="item in list" @click="toCategory(item.route)">
      <img class="list-item__icon" :src="'static/img/user/'+item.name+'.png'" alt="">
      <p>{{item.text}}</p>
      <img class="list-item__arrow" src="static/img/user/arrow1.png" alt="">
    </div>
  </div>
</template>
<script>
  /**
   * 个人中心分类列表
   * @params {Array} list 分类数据
   */
  export default {
    name: 'categoryList',
    props: ['list'],
    methods: {
      toCategory (name) {
        this.$router.push({name: name})
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .list-item
    display flex
    align-items center
    box-sizing border-box
    width 100%
    height 1rem
    padding 0 .24rem 0 .35rem
    border .01rem solid #f5f5f7
    font-size .28rem
    color #090909

    .list-item__icon
      width .4rem
      margin-right .18rem
    .list-item__arrow
      width .12rem
      margin-left auto
  .list-item:last-child
    border none
</style>
