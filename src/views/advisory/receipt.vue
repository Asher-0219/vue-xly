<template>
  <div id="receipt">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back" alt="">
      <span>咨询订单</span>
      <p id="service">客服</p>
    </nav>
    <div id="tab">
      <div>
        <div @click="Tab(0)"><p :class="{tabY:tab==0}">全部</p></div>
        <div @click="Tab(1)"><p :class="{tabY:tab==1}">待支付</p></div>
        <div @click="Tab(2)"><p :class="{tabY:tab==2}">待完成</p></div>
      </div>
    </div>
    <ul id="list">
      <li v-for="x in 9">
        <div class="userBox">
          <img src="../../../static/img/test.png">
          <p class="uName">方劲爆</p>
          <p :class="['stateClose','uState']"><span>订单已取消</span><span hidden>待确认</span><span hidden>待回拨</span><span hidden>交易成功</span></p>
        </div>
        <div class="infoBox" @click="toDetail">
          <div class="label">
            <p>创建时间:</p>
            <p>预约编号:</p>
            <p>咨询方式:</p>
            <p>金额:</p>
          </div>
          <div class="data">
            <p>2017-11-02 16:30:49</p>
            <p>171102163049</p>
            <p>语音咨询</p>
            <p>￥200.00</p>
          </div>
          <div class="to"></div>
        </div>
        <div class="buttonBox">
          <div class="closeReceipt" @click="CloseReceipt">
            <p>取消订单</p>
          </div>
          <div class="button" @click="Button">
            <p><span>确认订单</span><span hidden>回拨</span><span hidden>查看评价</span></p>
          </div>
        </div>
      </li>
    </ul>
    <div id="noReceipt" hidden>
      <img src="../../../static/img/advisory/noReceipt.png">
      <p>暂无相关订单</p>
      <div @click="toList">
        <p>去预约</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tab: 0
    }
  },
  methods: {
    toDetail () {
      this.$router.push({name: 'receiptDetail'})
    },
    toList () {
      this.$router.push({name: 'advisoryList'})
    },
    CloseReceipt () {
      this.$messagebox({
        title: '',
        message: '是否取消订单',
        showCancelButton: true
      }).then(action => {
        console.log(action)
      })
    },
    Button () {
      this.$messagebox({
        title: '',
        message: '是否确认订单',
        showCancelButton: true
      }).then(action => {
        console.log(action)
      })
    },
    Tab (state) {
      this.tab = state
    },
    back () {
      window.history.back()
    }
  }
}
</script>
<style scoped>
#receipt{
  width:100%;
  height:100%;
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
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
#service{
  font-size:.24rem;
  color:#4c4c4c;
  line-height:.88rem;
  display: table;
  right: .24rem;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
#tab{
  width:100%;
  height:.88rem;
  background:#fff;
  margin-bottom:.19rem;
  overflow:hidden;
}
#tab>div{
  width:100%;
  height:.62rem;
  margin-top:.13rem;
}
#tab>div>div{
  width:2.5rem;
  height:100%;
  float: left;
}
#tab>div>div>p{
  font-size:.24rem;
  color:#535353;
  font-weight:bold;
  line-height:.62rem;
  display: table;
  margin:auto;
}
.tabY{
  color:#38b9ba !important;
  box-sizing:border-box;
  border-bottom:.03rem solid #38b9ba;
}
#list{
  width:100%;
  overflow: hidden;
}
#list>li{
  width:100%;
  overflow: hidden;
  box-sizing:border-box;
  padding-left:.24rem;
  float: left;
  margin-bottom:.17rem;
  background:#fff;
}
#list>li:last-child{
  margin-bottom:0 !important;
}
.userBox{
  width:100%;
  height:.87rem;
  border-bottom:.01rem solid #efefef;
  overflow: hidden;
}
.userBox>img{
  width:.46rem;
  height:.46rem;
  border-radius:.02rem;
  border:.01rem solid #efefef;
  float: left;
  margin-right:.24rem;
  margin-top:.21rem;
  object-fit: cover;
}
.uName{
  font-size:.24rem;
  font-weight:bold;
  color:#090909;
  line-height:.87rem;
  display: table;
  float: left;
}
.uState{
  font-size:.23rem;
  color:#f65353;
  line-height:.87rem;
  float: right;
  margin-right:.24rem;
}
.stateClose{
  color:#c4c4c4 !important;
}
.infoBox{
  width:100%;
  height:2.42rem;
  overflow: hidden;
  position: relative;
}
.label{
  width:1.06rem;
  float: left;
  margin-top:.36rem;
}
.data{
  float: left;
  margin-top:.36rem;
  margin-left:.24rem;
}
.label>p,.data>p{
  font-size:.22rem;
  color:#c4c4c4;
  display: table;
  margin-bottom:.26rem;
  line-height:.22rem;
  font-weight:bold;
}
.data>p{
  color:#090909 !important;
}
.to{
  width:.1rem;
  height:.17rem;
  background: url(../../../static/img/advisory/more.png) no-repeat;
  background-size:100% 100%;
  position: absolute;
  right:.24rem;
  top:0;
  bottom:0;
  margin:auto;
}
.buttonBox{
  width:100%;
  height:.89rem;
  border-top:.01rem solid #efefef;
  overflow: hidden;
  position: relative;
}
.buttonBox>div{
  width:1.38rem;
  height:.46rem;
  border:.01rem solid #b6b2af;
  border-radius:1.38rem;
  position: absolute;
  top:0;
  bottom:0;
  margin:auto;
}
.buttonBox>div>p{
  text-align: center;
  line-height:.46rem;
  font-size:.22rem;
}
.closeReceipt{
  color:#c4c4c4;
  right:1.83rem;
}
.button{
  color:#fff;
  background:#39b9ba;
  border-color:#39b9ba !important;
  right:.24rem;
}
#noReceipt{
  width:2.49rem;
  height:3.79rem;
  position: absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  margin:auto;
}
#noReceipt>img{
  width:2.1rem;
  height:2.08rem;
  display: block;
  margin:0 auto;
}
#noReceipt>p{
  font-size:.26rem;
  color:#959595;
  text-align: center;
  padding-top:.35rem;
}
#noReceipt>div{
  position: absolute;
  bottom:0;
  width:100%;
  height:.68rem;
  border-radius:.05rem;
  background:#00b9b9;
}
#noReceipt>div>p{
  font-size:.28rem;
  font-weight:bold;
  color:#fff;
  text-align: center;
  line-height:.68rem;
}
</style>
