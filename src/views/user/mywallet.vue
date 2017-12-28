<template>
  <div id="wallet">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back">
      <span>我的钱包</span>
    </nav>
    <div id="banner">
      <p>我的资产(元)</p>
      <p>11188.00</p>
    </div>
    <ul id="list">
      <li @click="myTopUp=true">
        <img src="../../../static/img/user/wallet/top-up.png">
        <p>我的充值</p>
      </li>
      <li @click="myConsumption=true">
        <img src="../../../static/img/user/wallet/consumption.png">
        <p>我的消费</p>
      </li>
      <li @click="myIncome=true">
        <img src="../../../static/img/user/wallet/income.png">
        <p>我的收入</p>
      </li>
      <li @click="myWithdrawal=true">
        <img src="../../../static/img/user/wallet/withdrawal.png">
        <p>我的提现</p>
      </li>
    </ul>
    <div id="bottom">
      <div id="top-up" @click="topUp=true"><p>充值</p></div>
      <div id="withdrawal" @click="withdrawal=true"><p>提现</p></div>
    </div>
    <myTopUp :class="{translateX:myTopUp}" @close="close"></myTopUp>
    <myConsumption :class="{translateX:myConsumption}" @close="close"></myConsumption>
    <myIncome :class="{translateX:myIncome}" @close="close"></myIncome>
    <myWithdrawal :class="{translateX:myWithdrawal}" @close="close"></myWithdrawal>
    <topUp :class="{translateX:topUp}" @close="close"></topUp>
    <withdrawal :class="{translateX:withdrawal}" @close="close"></withdrawal>
  </div>
</template>
<script>
import myTopUp from '../../components/user/myTopUp'
import myConsumption from '../../components/user/myConsumption'
import myIncome from '../../components/user/myIncome'
import myWithdrawal from '../../components/user/myWithdrawal'
import topUp from '../../components/user/topUp'
import withdrawal from '../../components/user/withdrawal'
export default{
  data () {
    return {
      myTopUp: false,
      myConsumption: false,
      myIncome: false,
      myWithdrawal: false,
      topUp: false,
      withdrawal: false
    }
  },
  methods: {
    close (state) {
      switch (state) {
        case 0: this.myTopUp = false
          break
        case 1: this.myConsumption = false
          break
        case 2: this.myIncome = false
          break
        case 3: this.myWithdrawal = false
          break
        case 4: this.topUp = false
          break
        case 5: this.withdrawal = false
          break
      }
    },
    back () {
      window.history.back()
    }
  },
  components: {
    myTopUp,
    myConsumption,
    myIncome,
    myWithdrawal,
    topUp,
    withdrawal
  }
}
</script>
<style scoped>
#wallet{
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  box-sizing:border-box;
  padding-top:.89rem;
  overflow-x: hidden;
  overflow-y: auto;
  background: #f5f5f7;
}
nav{
  height: 0.88rem;
  width: 100%;
  position: fixed;
  top:0;
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
#banner{
  width:100%;
  height:2.4rem;
  background:url(../../../static/img/user/wallet/banner.png) no-repeat;
  background-size:100% 100%;
}
#banner>p{
  padding-left:.24rem;
  line-height:100%;
}
#banner>p:first-child{
  font-size:.22rem;
  color:#fff;
  padding-top:.54rem;
}
#banner>p:last-child{
  padding-top:.32rem;
  font-size:.44rem;
  font-weight:bold;
  color:#fff;
}
#list{
  width:100%;
  overflow: hidden;
  margin-top:.18rem;
}
#list>li{
  width:100%;
  height:1rem;
  box-sizing:border-box;
  border-bottom:.01rem solid #f5f5f7;
  float: left;
  display: flex;
  align-items:center;
  padding-left:.24rem;
  background:url(../../../static/img/user/arrow1.png) no-repeat #fff;
  background-size:.12rem .21rem;
  background-position:7.14rem .39rem;
}
#list>li>img{
  width:.36rem;
  height:.32rem;
  margin:0 .2rem 0 .02rem;
}
#list>li>p{
  font-size:.26rem;
  font-weight:600;
  color:#090909;
}
#bottom{
  width:100%;
  height:1rem;
  position: absolute;
  bottom:0;
}
#bottom>div{
  width:50%;
  height:100%;
  float: left;
}
#bottom>div>p{
  text-align: center;
  line-height:1rem;
  font-size:.29rem;
  font-weight:600;
}
#top-up{
  background:#fff;
  color:#39b9ba;
}
#withdrawal{
  color:#fff;
  background: linear-gradient(to right bottom,#53deab,#3cc2d2);
}
.translateX{
  transform: translateX(0)!important;
}
</style>
