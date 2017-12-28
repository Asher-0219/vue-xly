<template>
  <div id="resume">
    <nav>
      <img id="back" src="../../../static/img/test/back.png" @click="back" alt="">
    </nav>
    <div id="infoBox">
      <div>
        <img id="uPic" src="../../../static/img/test.png">
        <p id="uName">房警报<span>23</span><span>咨询师</span></p>
        <p id="uText">国家二级心理咨询师 婚姻情感师</p>
        <p id="uEfficiency">好评率: 100%<span>接单: 214</span></p>
      </div>
    </div>
    <div class="dataBox">
      <p class="dataTitle">个人介绍</p>
      <div class="dataFrame">
        <p>国家二级心理咨询师 GPST全球专业人才认证国际催眠咨询师 NGH国际催眠治疗师 国际职业技能鉴定协会OH卡执行师 PEPC注</p>
        <ul id="myList">
          <li>
            <p>【擅长领域】:</p>
            <p>手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰</p>
          </li>
          <li>
            <p>【咨询风格】:</p>
            <p>手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰</p>
          </li>
          <li>
            <p>【咨询寄语】:</p>
            <p>手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰</p>
          </li>
          <li>
            <p>【主要培训经历】:</p>
            <p>手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰手淫自慰</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="dataBox">
      <p class="dataTitle">个案咨询时长</p>
      <div class="dataFrame">
        <p>截止到2017年5月，时长2271小时</p>
      </div>
    </div>
    <div class="dataBox">
      <p class="dataTitle">专业成长</p>
      <div class="dataFrame">
        <p>长期接受督导</p>
      </div>
    </div>
    <div class="dataBox">
      <p class="dataTitle">擅长疗法</p>
      <div class="dataFrame">
        <p>认知行为疗法(CBT)，人本主义，团体治疗，沙盘/箱庭疗法，存在 主义疗法，完形治疗(格式塔疗法)，家庭系统治疗，催眠治疗，心</p>
      </div>
    </div>
    <div class="dataBox">
      <p class="dataTitle">咨询风格</p>
      <div class="dataFrame">
        <p>温暖耐心/敏锐专业/接纳包容</p>
      </div>
    </div>
    <p id="bottom">咨询师本人承诺以上资料全部属实，接受公众监督，并为此承担相应 法律责任，如发现虚假信息，请关注(心理园客服)留言反馈。</p>
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>
<style scoped>
#resume{
  padding-bottom:1rem;
}
#resume nav{
  height: 0.88rem;
  width: 100%;
  position: absolute;
  top:0;
  line-height: 0.88rem;
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
#infoBox{
  width:100%;
  height:3rem;
  background:url(../../../static/img/advisory/resumeBk.png) no-repeat;
  background-size:100%;
  overflow: hidden;
}
#infoBox>div{
  width:93.6%;
  height:1.28rem;
  overflow: hidden;
  margin:1.1rem auto 0 auto;
}
#infoBox>div p{
  color:#fff;
  display: table;
}
#uPic{
  width:1.2rem;
  border-radius:50%;
  border:.04rem solid #fff;
  float: left;
  margin-right:.2rem;
}
#uName{
  font-size:.28rem;
  font-weight:bold;
  line-height:.28rem;
}
#uName>span{
  margin-left:.07rem;
  font-weight:normal;
}
#uName>span:first-child{
  width:.6rem;
  height:.26rem;
  background:url(../../../static/img/man.png) no-repeat;
  background-size:100% 100%;
  font-size:.16rem;
  padding-left:.26rem;
  box-sizing:border-box;
  margin-left:.07rem;
  display: inline-block;
}
#uName>span:last-child{
  font-size:.17rem;
  padding:0 .12rem;
  background: #ff5e66;
  border-radius:.04rem;
}
#uText{
  font-size:.2rem;
  margin-top:.12rem;
}
#uEfficiency{
  font-size:.2rem;
  margin-top:.22rem;
}
#uEfficiency>span{
  margin-left:.38rem;
}
.dataBox{
  width:96.8%;
  float: right;
  margin-top:.4rem;
  overflow: hidden;
}
.dataTitle{
  font-size:.22rem;
  font-weight:bold;
  color:#090909;
}
.dataFrame{
  overflow: hidden;
  padding-left:.33rem;
  position: relative;
  margin-top:.2rem;
}
.dataFrame p{
  font-size:.22rem;
  color:#959595;
  line-height: .3rem;
  letter-spacing: .01rem;
}
.dataFrame:after{
  content:'';
  width:.1rem;
  height:.1rem;
  border-radius:50%;
  background:#00b9b9;
  position: absolute;
  top:.11rem;
  left:0;
}
#myList{
  overflow: hidden;
  margin-top:.4rem;
}
#myList>li{
  overflow: hidden;
  margin-top:.4rem;
}
#myList>li:first-child{
  margin-top:0 !important;
}
#bottom{
  display: table;
  width:93.6%;
  margin:0 auto;
  padding-top:.6rem;
  font-size:.22rem;
  color:#00b9b9;
  line-height: .3rem;
}
</style>
