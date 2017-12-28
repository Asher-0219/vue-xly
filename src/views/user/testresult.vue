<template>
  <div class="xlyuser-testresult">
    <mt-header title="测试结果" fixed>
      <div @click="$router.go(-1)" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="content">
      <div class="title">爱情测试：你的落单指数有多高？</div>
      <div class="info">
        <span class="num">240人测试过</span>
        <span class="date">2017-10-31   10:00</span>
      </div>
      <div class="answer-result">
        <div class="result-content">
          <div class="result-title">我的测试结果</div>
          <div class="result-text">你的落单指数90%你的落单指数90%你的落单指数90%你的 落单指数90%你的落单指数90%</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
  .xlyuser-testresult
    .mint-header
      border-bottom .01rem solid #e2e2e2
      color #4c4c4c
      background-color #fff
  .content
    position absolute
    top 0.88rem
    bottom 0
    width 100% 
    background #eff6f6
    .title
      color #4c4c4c
      font-size 0.3rem
      margin-bottom 0.28rem
      text-align center
      margin-top 0.48rem
    .info
      margin-bottom 0.5rem
      text-align center
      color #7f7f7f
      font-size 0.2rem
      .num
        margin-right 0.56rem
  .answer-result
    font-size 0.24rem
    .result-title
      height 0.63rem
      background #38b9ba
      color #ffffff
      line-height 0.63rem
      padding-left 0.32rem
    .result-content
      padding 0 0.2rem
      color #4c4c4c
      .result-text
        background #ffffff
        padding 0.32rem   
</style>