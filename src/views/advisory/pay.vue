<template>
  <div id="pay">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back" alt="">
      <span>支付</span>
    </nav>
    <div id="expertsBox">
      <p class="title">预约号: 17110252905</p>
      <div id="experts">
        <img id="expertsPic" src="../../../static/img/test.png">
        <p id="expertsName">方警报<br><span>国家二级心理咨询师 婚姻情感师 副本</span></p>
        <p id="expertsCount">语言咨询1次</p>
      </div>
      <div id="priceBox">
        <p>总计</p>
        <p>￥<span>200</span></p>
      </div>
    </div>
    <div id="modeBox">
      <p class="title">支付方式</p>
      <ul id="modeList">
        <li @click="mode=1">
          <img src="../../../static/img/advisory/mode1.png">
          <p>余额支付</p>
          <div :class="{mode:mode==1}"></div>
        </li>
        <li @click="mode=2">
          <img src="../../../static/img/advisory/mode2.png">
          <p>支付宝</p>
          <div :class="{mode:mode==2}"></div>
        </li>
        <li @click="mode=3">
          <img src="../../../static/img/advisory/mode3.png">
          <p>微信支付</p>
          <div :class="{mode:mode==3}"></div>
        </li>
      </ul>
    </div>
    <div id="text">
      <p>咨询费用支付到心理园，若中途咨询失效或取消，咨询费用将全额退回支付账号</p>
    </div>
    <div id="stipulateBox">
      <p @click="refunds=true">退款规定<span>点击阅读</span></p>
      <p>确认支付，即代表你已阅读并同意<span>《退款规定》</span></p>
    </div>
    <div id="post">
      <p>立即预约</p>
    </div>
    <div id="refundsBox" v-show="refunds">
      <div>
        <p id="refundsTitle">退款规定</p>
        <div id="refundsText">
          <p>在来访者已付款的情况下，申请退款，需遵循以下规定：</p>
          <p>1.在咨询师尚未接受预约时，来访者决定放弃预约，可私信咨 询者; 使订单失效；</p>
          <p>2.在咨询师尚未接受预约时，来访者决定放弃预约，可私信咨 询者; 使订单失效；在咨询师尚未接受预约时，来访者决定放 弃预约，可</p>
        </div>
      </div>
      <div id="refundsOk" @click="refunds=false">
        <p>确定</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      mode: 0,
      refunds: false
    }
  },
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>
<style scoped>
#pay{
  width:100%;
  overflow: hidden;
  position: relative;
  background: #efefef;
}
nav{
  height: 0.88rem;
  width: 100%;
  position: relative;
  line-height: 0.88rem;
  color: #4c4c4c;
  font-weight:bold;
  font-size: 0.34rem;
  text-align: center;
  border-bottom:.01rem solid #e2e2e2;
  background: #fff;
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
#expertsBox{
  width:100%;
  background: #fff;
  overflow: hidden;
  box-sizing:border-box;
  padding:0 .24rem;
  margin-bottom:.18rem;
}
.title{
  padding:.3rem 0;
  font-size:.24rem;
  font-weight:bold;
  color:#090909;
}
#experts{
  width:100%;
  height:.88rem;
  padding-bottom:.24rem;
  border-bottom:.01rem solid #efefef;
  overflow: hidden;
}
#expertsPic{
  width:.88rem;
  height:.88rem;
  border-radius:.04rem;
  border:.01rem solid #efefef;
  float: left;
  margin-right:.2rem;
}
#expertsName{
  font-size:.28rem;
  color:#090909;
  font-weight:bold;
  display: table;
  float: left;
  line-height:.44rem;
}
#expertsName>span{
  font-size:.22rem;
  color:#535353;
}
#expertsCount{
  font-size:.22rem;
  color:#959595;
  float: right;
  display: table;
  float: right;
  line-height:.88rem;
}
#priceBox{
  width:100%;
  height:.88rem;
  display: flex;
  align-items:center;
  justify-content:space-between;
  overflow: hidden;
}
#priceBox>p:first-child{
  color:#090909;
  font-size:.24rem;
  font-weight:bold;
}
#priceBox>p:last-child{
  color:#f65353;
  font-size:.18rem;
  font-weight:bold;
}
#priceBox>p:last-child>span{
  font-size:.27rem !important;
}
#modeBox{
  width:100%;
  overflow: hidden;
  background:#fff;
  box-sizing:border-box;
  padding-left:.24rem;
}
#modeList{
  width:100%;
  overflow: hidden;
}
#modeList>li{
  width:100%;
  height:1rem;
  box-sizing:border-box;
  border-bottom:.01rem solid #efefef;
  overflow: hidden;
  display: flex;
  align-items:center;
  position: relative;
}
#modeList>li>img{
  width:.5rem;
  height:.5rem;
  float: left;
  margin-right:.18rem;
}
#modeList>li>p{
  font-size:.28rem;
  font-weight:bold;
  color:#090909;
  display: table;
}
#modeList>li>div{
  width:.44rem;
  height:.44rem;
  border:.02rem solid #c4c4c4;
  border-radius:50%;
  box-sizing:border-box;
  position: absolute;
  right:.26rem;
}
.mode{
  border:none !important;
  background:url(../../../static/img/advisory/consent-round.png) no-repeat;
  background-size:100% 100%;
}
#text{
  width:100%;
  box-sizing:border-box;
  padding:0 .24rem;
  overflow: hidden;
  margin:.18rem 0;
}
#text>p{
  font-size:.18rem;
  color:#959595;
  display: table;
  line-height:.36rem;
}
#stipulateBox{
  width:100%;
  height:1rem;
  box-sizing:border-box;
  padding:0 .24rem;
  position: relative;
  margin-bottom:2.76rem;
  background: #fff;
}
#stipulateBox>p:first-child{
  font-size:.27rem;
  color:#090909;
  font-weight:bold;
  line-height:1rem;
}
#stipulateBox>p:first-child>span{
  font-size:.24rem;
  color:#959595;
  padding-right:.32rem;
  background:url(../../../static/img/advisory/more.png) no-repeat;
  background-size:.12rem .21rem;
  background-position: center right;
  float: right;
}
#stipulateBox>p:last-child{
  font-size:.19rem;
  color:#959595;
  position: absolute;
  left:.24rem;
  bottom:-.47rem;
}
#stipulateBox>p:last-child>span{
  color:#00b9b9;
}
#post,#refundsOk{
  width:100%;
  height:.97rem;
  overflow: hidden;
  background:linear-gradient(to bottom right,#53deab,#3cc2d2);
}
#post>p,#refundsOk>p{
  font-size:.27rem;
  color:#fff;
  font-weight:bold;
  text-align: center;
  line-height:.97rem;
}
#refundsBox{
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  left:0;
  overflow: hidden;
  background:rgba(0,0,0,.7);
}
#refundsBox>div:first-child{
  width:100%;
  position: absolute;
  bottom:.97rem;
  background: #fff;
  overflow: hidden;
  padding:0 .45rem;
  box-sizing:border-box;
  font-size:.22rem;
  color:#535353;
  padding-bottom:2rem;
}
#refundsTitle{
  font-size:.26rem;
  font-weight:bold;
  color:#090909;
  text-align: center;
  padding:.39rem 0 .49rem 0;
  line-height:.26rem;
}
#refundsText>p{
  margin-bottom:.3rem;
  line-height:.4rem;
}
#refundsOk{
  position: absolute;
  bottom:0;
}
</style>
