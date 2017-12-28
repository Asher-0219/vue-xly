<template>
  <div id="swiper-a">
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" @click="toInfo">
          <img class="ranking" src="../../static/img/ranking1.jpg">
          <img class="pic" src="../../static/img/test.png">
          <p class="name">方精宝</p>
          <p class="labelling">高级咨询师</p>
          <p class="text">国家二级心理咨询师  婚姻情感师</p>
        </div>
        <div class="swiper-slide">
          <img class="ranking" src="../../static/img/ranking2.jpg">
          <img class="pic" src="../../static/img/test.png">
          <p class="name">方精宝</p>
          <p class="labelling">咨询师</p>
          <p class="text">国家二级心理咨询师  婚姻情感师</p>
        </div>
        <div class="swiper-slide">
          <img class="ranking" src="../../static/img/ranking3.jpg">
          <img class="pic" src="../../static/img/test.png">
          <p class="name">方精宝</p>
          <p class="labelling">咨询师</p>
          <p class="text">国家二级心理咨询师  婚姻情感师</p>
        </div>
        <div class="swiper-slide">
          <img class="pic" src="../../static/img/test.png">
          <p class="name">方精宝</p>
          <p class="labelling">咨询师</p>
          <p class="text">国家二级心理咨询师  婚姻情感师</p>
        </div>
        <div class="swiper-slide">
          <img class="pic" src="../../static/img/test.png">
          <p class="name">方精宝</p>
          <p class="labelling">咨询师</p>
          <p class="text">国家二级心理咨询师  婚姻情感师</p>
        </div>
        <div class="swiper-slide">
          <img class="pic" src="../../static/img/test.png">
          <p class="name">方精宝</p>
          <p class="labelling">高级咨询师</p>
          <p class="text">国家二级心理咨询师  婚姻情感师</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /*
  *  咨询师滑动框 适用页面：心理园咨询页等
  *  传参 list:[
      {
        picPath: '头像路径',
        name: '咨询师昵称',
        labelling: '咨询师标签',
        test: '咨询师介绍',
        toPath: '跳转链接'
      },
      ...
    ],
    ranking: Boolean 是否显示排名标签
  *  没有返回值
  * */
  import swiperAsync from 'swiper'
  export default {
    data () {
      return {
      }
    },
    methods: {
      toInfo () {
        this.$router.push({name: 'consultantInfo'})
      },
      async _initSwiper () {
        // let the = this
        let Swiper = await swiperAsync // 异步加载的
        const container = this.$refs.swiper // ref='swiper'
        const config = {  // swiper的参数配置
          direction: 'horizontal',
          effect: 'slide', // 可设置为 fade（淡入）cube（方块） coverflow （3d流） slide(位移) flip（翻转）
          slidesPerView: 'auto', // 幻灯片视图
          centeredSlides: false, // 若为真，那么活动块会居中，而非默认状态下的居左...
          initialSlide: 0,
          loop: false, // loop模式：会生成第一个slide接在最后一个slide后面...
          speed: 600, // slide滑块自动滑动时的持续时间，即slide开始滑动到滑动结束的时间
          coverflow: {
            rotate: 70,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
          }
        }
        this.mySwiper = new Swiper(container, config)
      }
    },
    created () {

    },
    mounted () {
      this._initSwiper()
    },
    props: {
      list: {
        type: []
      },
      ranking: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style scoped>
  #swiper-a{
    width:100%;
    overflow: hidden;
  }
  .swiper-container{
    width:100%;
    height:3.1rem;
    padding-left:.24rem;
    padding-top:.04rem;
  }
  .swiper-slide{
    width:2.49rem;
    height:3.1rem;
    border-radius:.08rem;
    border:.01rem solid #dfdfdf;
    box-sizing:border-box;
    margin-right:.16rem;
    position: relative;
  }
  .swiper-slide:last-child{
    margin-right:.4rem;
  }
  .pic{
    width:1rem;
    height:1rem;
    border-radius:50%;
    margin:.32rem auto .17rem auto;
  }
  .name{
    font-size:.25rem;
    font-weight:bold;
    color:#090909;
    text-align: center;
    margin-bottom:.08rem;
  }
  .labelling{
    font-size:.17rem;
    color:#ff5e66;
    padding:.01rem .11rem;
    border:.01rem solid #ff5e66;
    border-radius:.03rem;
    display: table;
    margin:0 auto .12rem auto;
  }
  .text{
    font-size:.18rem;
    color:#c4c4c4;
    width:1.77rem;
    margin:0 auto;
    text-align: center;
  }
  .ranking{
    width:.31rem;
    height:.35rem;
    position: absolute;
    top:-.04rem;
    left:.1rem;
  }
</style>

