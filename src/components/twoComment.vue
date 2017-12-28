<template>
  <div id="twoComment">
    <div id="LZbox">
      <div class="infoBox">
        <img class="uPic" src="../../static/img/test.png">
        <p class="uName">提提丫皮</p>
        <p class="uDate">12-10 10:17</p>
        <div class="zang">
          <img src="../../static/img/zangN.png">
          <span>65</span>
        </div>
        <p class="text">我喜欢你，你喜欢我吗</p>
      </div>
    </div>
    <div v-infinite-scroll="loadMore" :infinite-scroll-disabled="isLoad" infinite-scroll-distance="10" class="loadmore">
      <ul id="list">
        <li>
          <div class="infoBox">
            <img class="uPic" src="../../static/img/test.png">
            <p class="uName">提提丫皮</p>
            <p class="uDate">12-10 10:17</p>
            <div class="zang">
              <img src="../../static/img/zangN.png">
              <span>65</span>
            </div>
            <p class="text">我喜欢你，你喜欢我吗</p>
          </div>
        </li>
        <li v-for="x in 2">
          <div class="infoBox">
            <img class="uPic" src="../../static/img/test.png">
            <p class="uName">提提丫皮</p>
            <p class="uDate">12-10 10:17</p>
            <div class="zang">
              <img src="../../static/img/zangN.png">
              <span>65</span>
            </div>
            <p class="text"><span>回复<span>@提提丫皮:</span></span>我喜欢你，你喜欢我吗</p>
          </div>
        </li>
      </ul>
      <div v-show="!isLoad" class="page-infinite-loading">
        <mt-spinner type="fading-circle" class="spinner"></mt-spinner>
        <span>加载中...</span>
      </div>
    </div>
    <div id="bottom">
      <div id="revertCount">
        <img src="../../static/img/revertCount.png">
        <p>32</p>
      </div>
      <div id="zangCount">
        <img src="../../static/img/zangN.png">
        <p>32</p>
      </div>
      <div id="loveCount">
        <img src="../../static/img/loveCount.png">
        <p>32</p>
      </div>
    </div>
    <div id="inputBox" hidden>
      <div>
        <textarea placeholder="写下您的评论"></textarea>
        <p>发送</p>
      </div>
    </div>
  </div>
</template>
<script>
  /*
    *  二级评论 适用页面：配合一级评论页使用
    *  传参 postAddress: '请求地址'
    *  没有返回值
    * */
export default {
  data () {
    return {
      isLoad: false
    }
  },
  methods: {
    loadMore () {
      console.log(1)
    }
  },
  mounted () {
    let the = this
    the.$j(function () {
      console.log(the.$j('#bottom').height())
      the.$j('#list').css('min-height', the.$j(window).height() - the.$j('#LZbox').height() - the.$j('#bottom').height() + 'px')
    })
  }
}
</script>
<style scoped>
#twoComment{
  width:100%;
  overflow: hidden;
}
#LZbox{
  width:100%;
  height:1.6rem;
  background:#fff;
}
.infoBox{
  width:100%;
  overflow: hidden;
  margin-top:.2rem;
  position: relative;
  float: left;
}
.infoBox>p{
  display: table;
  padding-left:.13rem;
  margin-top:.02rem;
}
.uPic{
  width:.7rem;
  height:.7rem;
  border-radius:50%;
  float: left;
  margin-left:.24rem;
}
.uName{
  font-size:.23rem;
  color:#7f7f7f;
  font-weight:bold;
}
.uDate{
  font-size:.16rem;
  color:#959595;
}
.zang{
  height:.31rem;
  position: absolute;
  right:.24rem;
  top:.11rem;
  overflow: hidden;
}
.zangY{
  color:#ff5050;
}
.zang>img{
  width:.33rem;
  height:.31rem;
  float: left;
}
.zang>span{
  font-size:.18rem;
  color:#7f7f7f;
  float: left;
  line-height:.4rem;
  padding-left:.15rem;
}
.text{
  font-size:.24rem;
  font-weight:bold;
  color:#7f7f7f;
  margin-top: .17rem !important;
  margin-left: .95rem;
}
.text>span>span{
  color:#38baba !important;
}
#list{
  width:100%;
  overflow: hidden;
  float: left;
  background:#f0f6f6;
}
#list>li{
  width:100%;
  height:1.6rem;
}
#bottom{
  width:100%;
  height:.96rem;
  border-top:.01rem solid #e2e2e2;
  position:fixed;
  bottom:0;
  overflow: hidden;
  background: #fff;
  z-index:99;
}
#bottom>div{
  width:33%;
  height:100%;
  float: left;
}
#bottom>div>p{
  font-size:.18rem;
  color:#7f7f7f;
  font-weight:bold;
  display: table;
  padding-left:.06rem;
  margin-top:.37rem;
}
#bottom>div>img{
  height:.31rem;
  float: left;
  margin:.33rem 0 0 .95rem;
}
#revertCount>img{
  width:.39rem;
}
#loveCount>img{
  width:.33rem;
}
#zangCount>img{
  width:.32rem;
}
#loveCount{
  width:34% !important;
}
#inputBox{
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  background:rgba(0,0,0,.5);
  z-index:999;
}
#inputBox>div{
  height:.96rem;
  width:7.14rem;
  border-radius:.04rem;
  background: #fff;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
  overflow: hidden;
}
#inputBox>div>textarea{
  width:5.64rem;
  height:.75rem;
  border:none;
  border-radius:.04rem;
  background:#eff6f6;
  position: absolute;
  top:.1rem;
  left:.1rem;
  resize: none;
  padding: .24rem;
  box-sizing: border-box;
  font-size:.22rem;
}
#inputBox>div>textarea::-webkit-scrollbar {
  display: none;
}
#inputBox>div>p{
  width:1.24rem;
  height:.75rem;
  font-size:.22rem;
  font-weight:bold;
  border-radius:.04rem;
  text-align: center;
  line-height:.75rem;
  color:#fff;
  background:#38b9ba;
  position: absolute;
  top:.1rem;
  right:.1rem;
}
.loadmore{
  width:100%;
  overflow: hidden;
  padding-bottom:.79rem;
}
.page-infinite-loading{
  height: .6rem;
  font-size: .28rem;
  line-height: .6rem;
  text-align: center;
  float: left;
  width:100%;
  position: relative;
  padding:.3rem 0;
}
.spinner{
  position: absolute;
  top:0;
  bottom:0;
  left:2.4rem;
  margin:auto;
  width: .6rem;
  height: .6rem;
}
</style>
