<template>
  <div id="receiptDetail">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back" alt="">
      <span>订单详情</span>
      <p id="service">客服</p>
    </nav>
    <div>
      <div id="bkBox">
        <p id="bkState">咨询完成</p>
        <p id="bkText">给咨询师一个好评吧</p>
      </div>
      <div id="userBox">
        <div id="userInfo">
          <img src="../../../static/img/test.png">
          <p id="userName">方警报<br><span>语音咨询1次</span></p>
          <div id="history">
            <p>历史预约1次</p>
          </div>
        </div>
        <div id="receiptState">
          <p>订单状态: 对方已付款，等待确认咨询</p>
        </div>
        <div id="contactBox">
          <div><p id="private">私信</p></div>
          <div><p id="phone" class="phoneN">电话联系</p></div>
        </div>
      </div>
      <div class="dataBox">
        <p class="title">预约信息</p>
        <div class="label">
          <p>姓名:</p>
          <p>联系方式:</p>
          <p>性别:</p>
          <p>年龄:</p>
          <p>问题类型:</p>
          <p>问题描述:</p>
          <p>预约时间:</p>
        </div>
        <div class="data">
          <p>派大星</p>
          <p>15267190215</p>
          <p>男</p>
          <p>18</p>
          <p>恋爱心理 情绪管理</p>
          <p>想要调节自己最近的压力</p>
          <p>2017-11-12 08:00</p>
        </div>
      </div>
    </div>
    <div class="dataBox">
      <p class="title">预约信息</p>
      <div class="label">
        <p>创建时间:</p>
        <p>预约编号:</p>
        <p>金额:</p>
      </div>
      <div class="data">
        <p>2017-11-11 11:04:05</p>
        <p>15267190215</p>
        <p>￥200.00</p>
      </div>
    </div>
    <div id="Notice">
      <div>
        <p>知情同意书</p>
        <div></div>
      </div>
      <div>
        <p>退款规定</p>
        <div></div>
      </div>
    </div>
    <div id="buttonBox">
      <div id="closeReceipt">
        <p><span>拒绝订单</span></p>
      </div>
      <div id="like" hidden>
        <p><span>写感谢信</span></p>
      </div>
      <div id="button">
        <p @click="execution(0)"><span>评价</span><span hidden>确认订单</span><span hidden>重新预约</span><span hidden>马上付款</span></p>
      </div>
    </div>
    <appraise @X="appraiseShow=false" :show="appraiseShow"></appraise>
  </div>
</template>
<script>
import appraise from '../../components/advisory/appraise'
export default {
  data () {
    return {
      appraiseShow: false
    }
  },
  methods: {
    execution (state) {
      if (state === 0) {
        this.appraiseShow = true
      }
    },
    back () {
      window.history.back()
    }
  },
  components: {
    appraise
  }
}
</script>
<style scoped>
#receiptDetail{
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
#receiptDetail>div{
  width:100%;
  overflow: hidden;
}
#bkBox{
  width:100%;
  height:2rem;
  background:url(../../../static/img/advisory/detailBk.png) no-repeat;
  background-size:100% 100%;
  box-sizing:border-box;
  padding-left:.24rem;
  overflow: hidden;
}
#bkBox>p{
  line-height:100%;
  color:#fff;
  display: table;
}
#bkState{
  font-size:.32rem;
  font-weight:bold;
  margin:.58rem 0 .22rem 0;
}
#bkText{
  font-size:.22rem;
}
#userBox{
  width:100%;
  overflow: hidden;
  background:#fff;
  margin-bottom:.18rem;
}
#userInfo{
  width:100%;
  height:1.39rem;
  box-sizing:border-box;
  padding:0 .24rem;
  display: flex;
  align-items:center;
  position: relative;
}
#userInfo>img{
  width:.86rem;
  height:.86rem;
  border:.01rem solid #efefef;
  border-radius:.04rem;
  margin-right:.2rem;
}
#userName{
  font-size:.28rem;
  font-weight:bold;
  color:#090909;
}
#userName>span{
  font-size:.23rem;
  font-weight:normal;
  color:#535353;
}
#history{
  position: absolute;
  height:.48rem;
  background:#38b9ba;
  border-radius:1.6rem;
  top:0;
  bottom:0;
  right:.24rem;
  margin:auto;
  padding:0 .25rem;
}
#history>p{
  font-size:.18rem;
  color:#fff;
  font-weight:bold;
  text-align: center;
  line-height:.48rem;
}
#receiptState{
  width:100%;
  height:.88rem;
  border-top:.01rem solid #efefef;
  margin-left:.24rem;
}
#receiptState>p{
  font-size:.23rem;
  color:#f65353;
  line-height:.88rem;
}
#contactBox{
  width:100%;
  height:.88rem;
  border-top:.01rem solid #efefef;
  overflow: hidden;
  display: flex;
  align-items: center;
}
#contactBox>div{
  width:50%;
  height:.24rem;
  float: left;
}
#contactBox>div:first-child{
  box-sizing:border-box;
  border-right:.01rem solid #efefef;
}
#contactBox>div>p{
  font-size:.22rem;
  line-height:.24rem;
  color:#090909;
  margin: 0 auto;
  display: table;
}
#private{
  padding-left:.44rem;
  background: url(../../../static/img/advisory/Private.png) no-repeat;
  background-size:.3rem .23rem;
}
#phone{
  padding-left:.33rem;
  background:url(../../../static/img/advisory/phoneY.png) no-repeat;
  background-size:.24rem .24rem;
}
.phoneN{
  background-image:url(../../../static/img/advisory/phoneN.png) !important;
  color:#dedede !important;
}
.dataBox{
  width:100%;
  padding-left:.24rem;
  box-sizing:border-box;
  background:#fff;
  overflow: hidden;
  padding-bottom:.2rem;
  margin-bottom:.17rem;
}
.title{
  font-size:.24rem;
  color:#090909;
  line-height:.24rem;
  font-weight:bold;
  padding:.3rem 0 .4rem 0;
}
.label{
  width:1.12rem;
  float: left;
}
.label>p{
  color:#c4c4c4;
}
.label>p,.data>p{
  font-size:.23rem;
  line-height:.23rem;
  display: table;
  margin-bottom:.24rem;
}
.data{
  float: left;
  margin-left:.63rem;
}
.data>p{
  color:#090909;
}
#Notice{
  width:100%;
  padding-left:.24rem;
  box-sizing:border-box;
  background:#fff;
}
#Notice>div{
  width:100%;
  height:.99rem;
  display: flex;
  align-items:center;
  justify-content:space-between;
  border-top:.01rem solid #efefef;
}
#Notice>div:first-child{
  border:none;
}
#Notice>div>p{
  font-size:.27rem;
  font-weight:bold;
  color:#090909;
}
#Notice>div>div{
  background:url(../../../static/img/advisory/more.png) no-repeat;
  background-size:.1rem .17rem;
  width:.1rem;
  height:.17rem;
  margin-right:.24rem;
}
#buttonBox{
  width:100%;
  height:1rem;
  background:#fff;
  margin-top:1rem;
  position: relative;
}
#buttonBox>div{
  width:1.4rem;
  height:.48rem;
  box-sizing:border-box;
  position: absolute;
  top:0;
  bottom:0;
  margin:auto;
  border:.01rem solid #39b9ba;
  background:#39b9ba;
  border-radius:1.4rem;
}
#buttonBox>div>p{
  font-size:.22rem;
  color:#fff;
  font-weight:bold;
  text-align: center;
  line-height:.48rem;
}
#closeReceipt{
  right:1.8rem;
  background:none !important;
  border-color:#b0aca9 !important;
}
#closeReceipt>p{
  color:#c4c4c4 !important;
}
#like{
  right:1.8rem;
}
#button{
  right:.25rem;
}
</style>
