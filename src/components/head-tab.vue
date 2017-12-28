<template>
  <div id="head-tab">
    <ul>
      <li v-for="(x,i) in list" :class="{electType:i==typeIndex}" @click="typeSlidi(x.index,i)"><span>{{x.name}}</span></li>
    </ul>
    <div id="slidiBar" :style="{width:slidiBarWidth,left:slidiBarLeft}"></div>
  </div>
</template>
<script>
  /*
  *  顶部选项卡 适用页面：测试列表 社区列表 咨询师推荐页面
  *  传参 list [{name:'全部'，index:'索引'},....]
  *  返回 @headTab: data{index:'索引'}
  * */
  export default {
    data () {
      return {
        typeIndex: 0, // 类型index 初始0
        typeWidth: null, // 类型宽度
        typeLeft: null, // 类型居中left
        slidiBarWidth: 0, // 滑动条width
        slidiBarLeft: 0, // 滑动条left
        initSlidiBarLeft: 0, // 初始left
        initialization: false
      }
    },
    methods: {
      typeSlidi (index, i) {
        let the = this
        the.typeIndex = i
        let Mobile = the.typeWidth * i - the.typeLeft
        let maxMobie = the.$j('#head-tab>ul').width() - the.$j('#head-tab').width()
        if (Mobile <= 0) {
          the.$j('#head-tab').animate({scrollLeft: 0}, 300)
        } else if (Mobile >= maxMobie) {
          the.$j('#head-tab').animate({scrollLeft: maxMobie}, 300)
        } else {
          the.$j('#head-tab').animate({scrollLeft: Mobile}, 300)
        }
        the.initSlidiBarLeft += (parseFloat(the.slidiBarWidth) - the.$j('#head-tab>ul>li>span:eq(' + i + ')').width()) / 2
        the.slidiBarLeft = the.initSlidiBarLeft + the.typeWidth * i + 'px'
        the.slidiBarWidth = the.$j('#head-tab>ul>li>span:eq(' + i + ')').width() + 'px'
        the.$emit('headTab', i)
      },
      init () {
        let the = this
        the.$j('#head-tab>ul').css('width', the.list.length * 1.5 + 'rem')
        the.$j(function () {
          the.typeWidth = the.$j('#head-tab>ul>li:eq(0)').width()
          the.typeLeft = (the.$j('#head-tab').width() - the.typeWidth) / 2
          the.slidiBarWidth = the.$j('#head-tab>ul>li>span:eq(0)').width() + 'px'
          the.initSlidiBarLeft = the.$j('#head-tab>ul>li>span:eq(0)').offset().left // - the.$j(window).width()
          the.slidiBarLeft = the.initSlidiBarLeft + 'px'
          if (the.initialization) {
            the.$emit('close')
          } else {
            the.initialization = true
          }
        })
      }
    },
    created () {

    },
    mounted () {
      this.init()
    },
    watch: {
      list: function () {
        this.init()
      }
    },
    props: {
      list: {
        type: Array,
        default: function () {
          return [
            {
              name: '全部',
              index: 10
            },
            {
              name: '二选项',
              index: 11
            },
            {
              name: '三选项',
              index: 12
            },
            {
              name: '四选项',
              index: 13
            },
            {
              name: '五选项',
              index: 14
            },
            {
              name: '六选项',
              index: 15
            }
          ]
        }
      }
    }
  }
</script>
<style scoped>
  #head-tab{
    width:100%;
    height:.88rem;
    background:#fff;
    overflow-y: hidden;
    overflow-x: auto;
    position: relative;
  }
  #head-tab>ul{
    height:.88rem;
    width:100%;
  }
  #head-tab>ul>li{
    font-size: .24rem;
    color: #4c4c4c;
    font-weight:bold;
    float: left;
    width: 1.5rem;
    height: .88rem;
    text-align: center;
    line-height: .88rem;
  }
  #head-tab>ul>li>span{
    display: inline-block;
    box-sizing: border-box;
  }
  .electType{
    color:#38b9ba !important;
  }
  #slidiBar{
    height:.03rem;
    position: absolute;
    bottom:.13rem;
    background:#38b9ba;
    transition: all .3s ease;
  }
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>
