<template>
  <div id="comment">
    <div>
      <div id="head">
        <p>评论 2</p>
        <p>赞 2</p>
      </div>
      <div v-infinite-scroll="loadMore" :infinite-scroll-disabled="isLoad" infinite-scroll-distance="10" class="loadmore">
        <ul id="list">
          <li v-for="x in 9">
            <div class="LZinfo">
              <img class="uPic" src="../../static/img/test.png">
              <p class="uName">提提丫皮</p>
              <p class="uDate">12-10 10:17</p>
              <div class="zang">
                <img src="../../static/img/zangN.png">
                <span>65</span>
              </div>
            </div>
            <div class="revertBox">
              <p class="uText">支持作者，作者牛批</p>
              <div class="twoRevert">
                <p class="twoText"><span>我是女神</span>:挺精彩，很喜欢～作者加油</p>
                <p class="threeText"><span>傻逼小星星</span>回复<span>@我是女神</span>:谢谢</p>
                <p class="more"><span>共3条回复></span></p>
              </div>
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
  </div>
</template>
<script>
/*
*  一级评论页 适用页面：文章详情 社区评论
*  传参 postAddress 请求后台数据地址
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
  }
}
</script>
<style scoped>
#comment{
  width:100%;
  background: #fff;
  overflow: hidden;
}
#comment>div{
  width:100%;
  overflow: hidden;
}
#head{
  width:96.8%;
  height:.88rem;
  box-sizing:border-box;
  border-bottom:.01rem solid #efefef;
  font-size:.22rem;
  color:#7f7f7f;
  line-height:.88rem;
  float: right;
}
#head>p{
  display: table;
}
#head>p:last-child{
  float: left;
}
#head>p:first-child{
  float: right;
  margin-right:.24rem;
}
#list{
  width:96.8%;
  float: right;
  overflow: hidden;
}
#list>li{
  width:100%;
  float: left;
  overflow: hidden;
}
.LZinfo{
  width:100%;
  height:.7rem;
  overflow: hidden;
  margin-top:.24rem;
  position: relative;
}
.LZinfo>p{
  display: table;
  padding-left:.13rem;
  margin-top:.02rem;
}
.uPic{
  width:.7rem;
  height:.7rem;
  border-radius:50%;
  float: left;
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
.revertBox{
  width:88.567%;
  float: right;
  font-size:.24rem;
  color:#7f7f7f;
  border-bottom:.01rem solid #efefef;
  overflow: hidden;
}
.revertBox p{
  display: table;
  font-weight:bold;
}
.uText{
  padding:.14rem 0 .2rem 0;
}
.twoRevert{
  width:96.2675%;
  border-radius:.08rem;
  background:#eff6f6;
  float: left;
  overflow: hidden;
  margin-bottom:.17rem;
  padding-bottom:.15rem;
}
.twoRevert>p{
  margin-left:.26rem;
  margin-top:.15rem;
}
.twoRevert span{
  color:#38b9ba;
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
