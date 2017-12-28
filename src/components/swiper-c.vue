<template>
  <div id="swiper-c">
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="x in 6">
          <img src="../../static/img/test.png">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  /*
  *  轮播框 适用页面：心理园首页等
  *  传参 list:[
      {
        imgPath: '图片路径',
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
          centeredSlides: true, // 若为真，那么活动块会居中，而非默认状态下的居左...
          initialSlide: 0,
          autoplay: 3000, // 自动滚动
          autoplayDisableOnInteraction: false, // false用户操作后继续自动滚动
          loop: false, // loop模式：会生成第一个slide接在最后一个slide后面...
          speed: 600, // slide滑块自动滑动时的持续时间，即slide开始滑动到滑动结束的时间
          pagination: '.swiper-pagination', // 分页器
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
  #swiper-c{
    width:100%;
    overflow: hidden;
  }
  .swiper-container{
    width:100%;
    height:3rem;
  }
  .swiper-slide{
    width:100%;
    height:100%;
    overflow: hidden;
  }
  .swiper-slide>img{
    width:100%;
    height:100%;
  }
</style>
