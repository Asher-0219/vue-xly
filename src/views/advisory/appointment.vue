<template>
  <div id="appointment">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back" alt="">
      <span>预约咨询</span>
    </nav>
    <div id="userBox">
      <div>
        <img id="uPic" src="../../../static/img/test.png">
        <p id="uName">汪林奇</p>
        <p id="uText">国家二级心理咨询师 婚姻情感师</p>
        <div id="msgBT">私信</div>
      </div>
    </div>
    <div id="priceBox">
      <div>
        <p class="title">咨询方式<span>(每次50分钟)</span></p>
        <div id="pBprice">
          <img src="../../../static/img/advisory/microphones.png">
          <p>电话咨询</p>
          <p>打个电话与咨询师畅谈一下吧</p>
          <p>￥<span>200</span><span> / 次</span></p>
        </div>
        <div id="pBCount">
          <p>咨询次数</p>
          <div>
            <img @click="Count(-1)" src="../../../static/img/advisory/reduce.png">
            <input v-model="count" type="number">
            <img @click="Count(1)" src="../../../static/img/advisory/increase.png">
          </div>
        </div>
        <div id="pBtotal">
          <p>总计</p>
          <p>￥<span>{{price * count}}</span></p>
        </div>
      </div>
    </div>
    <div id="phoneBox">
      <p class="marking">手机号</p>
      <input class="input" type="number" placeholder="请输入手机号">
    </div>
    <div id="infoBox">
      <p class="title">基本资料</p>
      <ul>
        <li>
          <p class="marking">姓名</p>
          <input class="input" type="text" placeholder="请输入真实姓名">
        </li>
        <li>
          <p class="marking">年龄</p>
          <input class="input" type="number" placeholder="请输入真是年龄">
        </li>
        <li>
          <p class="marking">性别</p>
          <div id="ageBox">
            <div @click="age=0">
              <img :src="[age==0?'../../../static/img/advisory/ageY.png':'../../../static/img/advisory/ageN.png']">
              <p>男</p>
            </div>
            <div @click="age=1">
              <img :src="[age==1?'../../../static/img/advisory/ageY.png':'../../../static/img/advisory/ageN.png']">
              <p>女</p>
            </div>
          </div>
        </li>
        <li>
          <p class="marking">手机号</p>
          <div id="date" @click="timeBounces=true">
            <input type="text" readonly placeholder="请选择预约时间">
            <img src="../../../static/img/advisory/more.png">
          </div>
        </li>
      </ul>
    </div>
    <div id="question">
      <p class="title">问题类型及描述<span>(可多选)</span></p>
      <ul id="questionList">
        <li v-for="(x,i) in 8" :class="{questionY:question.indexOf(i)>=0}" @click="Question(i)"><p>手淫自慰</p></li>
      </ul>
      <textarea placeholder="请简要描述你需要咨询的内容，以及期待达到的咨询目标。" maxlength="300" @input="wordCount=$event.target.textLength"></textarea>
      <p id="wordCount">{{wordCount}} / 300</p>
    </div>
    <div id="protocol">
      <div :class="{consent:consent}" @click="consent=!consent"><img v-show="consent" src="../../../static/img/advisory/consent.png"></div>
      <p>同意<span>《心理咨询预约协议》</span>与<span>《知情同意书》</span></p>
    </div>
    <div id="ok" @click="ok">
      <p>确定</p>
    </div>
    <timing @close="closeTime" v-show="timeBounces"></timing>
  </div>
</template>
<script>
import timing from '../../components/advisory/timing'
export default {
  data () {
    return {
      count: 1,
      price: 200,
      age: 0,
      timeBounces: true,
      question: [],
      wordCount: 0,
      consent: false
    }
  },
  methods: {
    ok () {
      this.$router.push({name: 'AdvisoryPay'})
    },
    Question (i) {
      if (this.question.indexOf(i) >= 0) {
        this.question.splice(this.question.indexOf(i), 1)
      } else {
        this.question.push(i)
      }
    },
    closeTime () {
      this.timeBounces = false
    },
    Count (count) {
      this.count += count
      if (this.count < 1) {
        this.count = 1
      } else if (this.count > 99) {
        this.count = 99
      }
    },
    back () {
      window.history.back()
    }
  },
  components: {
    timing
  }
}
</script>
<style scoped>
#appointment{
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
#userBox{
  width:100%;
  height:1.4rem;
  background: #fff;
  overflow: hidden;
}
#userBox>div{
  width:93.6%;
  height:.88rem;
  margin:.26rem auto 0 auto;
  overflow: hidden;
  position: relative;
}
#uPic{
  width:.86rem;
  height:.86rem;
  border-radius:.05rem;
  border:.01rem solid #efefef;
  float: left;
  margin-right:.2rem;
}
#userBox>div>p{
  display: table;
}
#uName{
  font-size:.28rem;
  color:#090909;
  font-weight:bold;
  line-height:.28rem;
  padding-top:.09rem;
}
#uText{
  font-size:.22rem;
  color:#535353;
  padding-top:.15rem;
}
#msgBT{
  width:1.3rem;
  height:.48rem;
  background: #38b9ba;
  border-radius:1.3rem;
  font-size:.23rem;
  color:#fff;
  font-weight:bold;
  text-align: center;
  line-height:.48rem;
  position: absolute;
  right:0;
  top:0;
  bottom:0;
  margin:auto;
}
#priceBox{
  width:100%;
  height:3.7rem;
  background: #fff;
  overflow: hidden;
  margin:.23rem 0;
}
#priceBox>div{
  width:93.6%;
  height:100%;
  margin:0 auto;
  overflow: hidden;
}
.title{
  font-size:.25rem;
  color:#090909;
  font-weight:bold;
  line-height:.25rem;
  padding:.3rem 0 .45rem 0;
}
.title>span{
  font-size:.19rem;
  color:#c4c4c4;
  margin-left:.1rem;
}
#pBprice{
  width:100%;
  height:.58rem;
  overflow: hidden;
  position: relative;
  margin-bottom:.5rem;
}
#pBprice>img{
  width:.4rem;
  height:.58rem;
  float: left;
  margin-right:.3rem;
}
#pBprice>p{
  display: table;
  line-height:100%;
}
#pBprice>p:nth-of-type(1){
  font-size:.24rem;
  font-weight:bold;
  color:#090909;
}
#pBprice>p:nth-of-type(2){
  font-size:.19rem;
  color:#c4c4c4;
  padding-top:.12rem;
}
#pBprice>p:nth-of-type(3){
  font-size:.18rem;
  color:#ff5458;
  position: absolute;
  right:0;
  bottom:.13rem;
  font-weight:bold;
}
#pBprice>p:nth-of-type(3)>span:first-child{
  font-size:.25rem;
}
#pBprice>p:nth-of-type(3)>span:last-child{
  font-size:.22rem;
  font-weight:normal;
  color:#c4c4c4;
}
#pBCount{
  width:100%;
  height:.54rem;
  position: relative;
  margin-bottom:.3rem;
}
#pBCount>p{
  font-size:.24rem;
  font-weight:bold;
  color:#090909;
  line-height:.54rem;
  float: left;
}
#pBCount>div{
  width:2.26rem;
  height:100%;
  float: right;
}
#pBCount>div>img{
  width:.54rem;
  height:.54rem;
  border-radius:.04rem;
  float: left;
}
#pBCount>div>input{
  width:1.1rem;
  height:100%;
  box-sizing:border-box;
  border-radius:.04rem;
  border:.01rem solid #dfdfdf;
  background:none;
  color:#090909;
  font-size:.18rem;
  float: left;
  text-align: center;
  margin:0 .03rem;
}
#pBtotal{
  width:100%;
  height:.87rem;
  border-top:.01rem solid #f3f3f3;
  line-height:.87rem;
}
#pBtotal>p:first-child{
  font-size:.24rem;
  color:#090909;
  font-weight:bold;
  float: left;
}
#pBtotal>p:last-child{
  font-size:.18rem;
  color:#f65353;
  font-weight:bold;
  float: right;
}
#pBtotal>p:last-child>span{
  font-size:.27rem !important;
}
#phoneBox{
  width:100%;
  height:1rem;
  margin-bottom:.24rem;
  background:#fff;
  padding-left:.24rem;
  box-sizing:border-box;
}
.marking{
  font-size:.25rem;
  color:#090909;
  float: left;
  font-weight:bold;
  line-height:1rem;
}
.input{
  width:3.6rem;
  height:1rem;
  border:none;
  text-align: right;
  float: right;
  padding-right:.27rem;
  color:#090909;
  font-size:.24rem;
}
#infoBox{
  width:100%;
  background: #fff;
  overflow: hidden;
  margin-bottom:.2rem;
  padding-left:.24rem;
  box-sizing:border-box;
}
#infoBox>ul{
  width:100%;
  overflow: hidden;
}
#infoBox>ul>li{
  width:100%;
  height:1rem;
  overflow: hidden;
  float: left;
  border-bottom:.01rem solid #efefef;
}
#ageBox{
  width:2.14rem;
  float: right;
  margin-right:.24rem;
  height:1rem;
}
#ageBox>div{
  width:50%;
  height:100%;
  float: left;
  overflow: hidden;
  display: flex;
  align-items:center;
  justify-content:flex-end;
}
#ageBox>div>img{
  width:.28rem;
  height:.28rem;
  float: left;
  margin-right:.14rem;
}
#ageBox>div>p{
  font-size:.21rem;
  color:#090909;
}
#date{
  width:3.6rem;
  height:100%;
  float: right;
  overflow: hidden;
  display: flex;
  align-items:center;
}
#date>input{
  width:3.15rem;
  height:100%;
  text-align: right;
  color:#090909;
  font-size:.24rem;
  border:none;
  float: left;
  margin-right:.33rem;
}
#date>img{
  width:.1rem;
  height:.17rem;
  margin-right:.24rem;
}
#question{
  width:100%;
  padding-left:.24rem;
  overflow: hidden;
  box-sizing:border-box;
  background: #fff;
}
#questionList{
  width:100%;
  overflow: hidden;
  border-bottom:.01rem solid #efefef;
  padding-bottom:.15rem;
}
#questionList>li{
  width:1.58rem;
  height:.46rem;
  border:.01rem solid #c4c4c4;
  float: left;
  margin-right:.19rem;
  border-radius:.08rem;
  text-align: center;
  line-height:.46rem;
  font-size:.22rem;
  color:#c4c4c4;
  margin-bottom:.2rem;
}
.questionY{
  color:#39b9ba !important;
  border-color:#39b9ba !important;
}
#question>textarea{
  width:100%;
  height:2.48rem;
  box-sizing:border-box;
  padding-right:.24rem;
  border:none;
  resize: none;
  font-size:.21rem;
  color:#090909;
  padding-top:.24rem;
  float: left;
}
#wordCount{
  font-size:.18rem;
  color:#cccccc;
  display: table;
  float: right;
  padding:0 .24rem .15rem 0;
}
#protocol{
  width:100%;
  height:.86rem;
  box-sizing:border-box;
  padding-left:.24rem;
  display: flex;
  align-items: center;
  margin-bottom:.27rem;
}
#protocol>div{
  width:.32rem;
  height:.32rem;
  box-sizing:border-box;
  border:.01rem solid #c4c4c4;
  border-radius:.03rem;
  background:#fff;
  margin-right:.15rem;
}
#protocol>div>img{
  width:100%;
  height:100%;
}
#protocol>p{
  font-size:.22rem;
  font-weight:bold;
  color:#090909;
}
.consent{
  border:none !important;
}
#protocol>p>span{
  color:#38b9ba !important;
}
#ok{
  width:100%;
  height:.97rem;
  overflow: hidden;
  background:linear-gradient(to bottom right,#53deab,#3cc2d2);
}
#ok>p{
  font-size:.27rem;
  color:#fff;
  font-weight:bold;
  text-align: center;
  line-height:.97rem;
}
</style>
