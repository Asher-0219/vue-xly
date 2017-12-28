<template>
  <!-- 公告 -->
  <div class="notice">
    <img class="home-notice-icon" src="../../static/img/home/notice.png" alt="">
    <div class="swiper-container" id="home-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide home-notice-text" v-for="(item, index) in 3">我是***预约了王二小 1 次 ¥500.00 语音咨询</div>
      </div>
    </div>
  </div>
</template>
<script>
/*
*  公告 适用页面：首页 专家咨询页
*  传参 list[
*         {
*           text: '公告文本'
*         }
*       ]
*  没有返回
* */
import Swiper from 'swiper'
export default {
  mounted () {
    this.swiper1 = new Swiper('#home-swiper', {
      autoplay: 5000,
      direction: 'vertical'
    })
  },
  props: {
    list: {
      type: []
    }
  }
}
</script>
<style lang="stylus" scoped>
  .notice {
    height: 0.88rem;
    width: 100%;
    display: flex;
    align-items: center;
    line-height: 0.88rem;
    color: #959595;
    font-size: 0.24rem;
    background: #fff;

    img {
      width: 0.89rem;
      height: 0.62rem;
      margin-right: 0.44rem;
      margin-left: 0.21rem;
    }
  }
  .swiper-container
    height 100%
</style>
