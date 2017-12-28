<template>
  <div id="swiper-b">
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="x in 6">
          <img src="../../static/img/test.png">
          <p>个人成长遇到瓶颈 怎么办?</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /*
  *  疑难杂症滑动框 适用页面：心理园咨询页等
  *  传参 list:[
      {
        imgPath: '图片路径',
        text: '文本',
        toPath: '跳转链接'
      },
      ...
    ]
  *  没有返回值
  * */
  import swiperAsync from 'swiper'
  export default {
    data () {
      return {
      }
    },
    methods: {
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
      }
    }
  }
</script>
<style scoped>
  #swiper-b{
    width:100%;
    overflow: hidden;
  }
  .swiper-container{
    width:100%;
    height:1.6rem;
    padding-left:.24rem;
  }
  .swiper-slide{
    width:3.02rem;
    height:1.6rem;
    border-radius:.08rem;
    border:.01rem solid #dfdfdf;
    box-sizing:border-box;
    margin-right:.2rem;
    position: relative;
    overflow: hidden;
  }
  .swiper-slide:last-child{
    margin-right:.44rem;
  }
  .swiper-slide>img{
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
  }
  .swiper-slide>p{
    width:2.07rem;
    font-size:.24rem;
    color:#fff;
    font-weight:bold;
    display: table;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
    text-align: center;
  }
</style>
