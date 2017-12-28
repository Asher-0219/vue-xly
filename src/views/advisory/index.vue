<template>
  <div id="advisory">
    <nav>
      <img id="back" src="../../../static/img/test/back.png" @click="back" alt="">
      <span>心理园咨询</span>
      <img id="my" src="../../../static/img/home/login.png" alt="">
    </nav>
    <!--顶部模块-->
    <div id="module">
      <img src="../../../static/img/advisory/module1.png" @click="toReceipt">
      <img src="../../../static/img/advisory/module2.png">
    </div>
    <!--公告-->
    <notice id="notice"></notice>
    <!--续单人气王-->
    <div class="experts">
      <div class="expertsTitle" @click="toList">
        <p>续单人气王</p>
        <p>更多</p>
      </div>
      <swiperA></swiperA>
    </div>
    <!--最新入驻-->
    <div class="experts">
      <div class="expertsTitle" @click="toList">
        <p>最新入驻</p>
        <p>更多</p>
      </div>
      <swiperA></swiperA>
    </div>
    <!--人生疑难杂症-->
    <div class="experts diseases">
      <div class=" expertsTitle">
        <p>人生疑难杂症</p>
        <p>更多</p>
      </div>
      <swiperB></swiperB>
    </div>
    <!--入驻咨询师-->
    <div class="experts intoBox">
      <div class=" expertsTitle">
        <p>入驻咨询师</p>
        <p></p>
      </div>
      <div class="into" @click="toPartnership">
        <img src="../../../static/img/advisory/into.png">
        <p>咨询师申请入驻心理园</p>
      </div>
    </div>
  </div>
</template>

<script>
  import swiperA from '../../components/swiper-a'
  import swiperB from '../../components/swiper-b'
  import notice from '../../components/notice'
  export default {
    methods: {
      toReceipt () {
        this.$router.push({name: 'receipt'})
      },
      toList () {
        this.$router.push({name: 'advisoryList'})
      },
      toPartnership () {
        this.$router.push({name: 'partnership'})
      },
      back () {
        this.$router.push({name: 'home'})
      }
    },
    components: {
      notice,
      swiperA,
      swiperB
    }
  }
</script>

<style scoped>
  #advisory{
    width:100%;
    overflow: hidden;
    background: #efefef;
  }
  nav {
    background: linear-gradient(to right, #00b8bd, #00deae);
    height: 0.88rem;
    width: 100%;
    position: relative;
    line-height: 0.88rem;
    color: #ffffff;
    font-size: 0.34rem;
    text-align: center;
  }
  #back{
    width:0.14rem;
    height:0.24rem;
    position:absolute;
    left:0.24rem;
    top:0;
    bottom:0;
    margin:auto 0;
  }
  #my{
    width: 0.54rem;
    height: 0.54rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: 0.24rem;
  }
  #module{
    width:100%;
    height:2.48rem;
    background: #fff;
  }
  #module>img{
    width:3.4rem;
    height:1.8rem;
    float: left;
    margin:.34rem 0 0 .24rem;
  }
  #module>img:last-child{
    margin-left:.21rem !important;
  }
  #notice{
    margin: .19rem 0;
  }
  .experts{
    width:100%;
    height:4.8rem;
    background:#fff;
    overflow: hidden;
    margin-bottom:.2rem;
  }
  .expertsTitle{
    width:93.6%;
    height:.3rem;
    overflow: hidden;
    margin:.46rem auto .39rem auto;
    box-sizing:border-box;
    border-left:.04rem solid #38b9ba;
  }
  .expertsTitle>p{
    display: table;
    line-height:.3rem;
  }
  .expertsTitle>p:first-child{
    font-size:.26rem;
    font-weight:bold;
    color:#090909;
    float: left;
    margin-left:.15rem;
  }
  .expertsTitle>p:last-child{
    font-size:.24rem;
    color:#959595;
    float: right;
    background: url(../../../static/img/advisory/more.png) no-repeat;
    background-size:.1rem .17rem;
    background-position: .55rem .03rem;
    padding-right:.18rem;
  }
  .diseases{
    height: 3.26rem !important;
  }
  .intoBox{
    height:3rem !important;
  }
  .into{
    width:93.6%;
    height:1.5rem;
    margin:0 auto;
    overflow: hidden;
  }
  .into>img{
    width:1.5rem;
    height:1.5rem;
    border-radius:50%;
    float: left;
    margin-right:.3rem;
  }
  .into>p{
    font-size:.26rem;
    color:#090909;
    background:url(../../../static/img/advisory/more.png) no-repeat;
    background-size:.1rem .17rem;
    background-position:center right;
    line-height:1.5rem;
  }
</style>
