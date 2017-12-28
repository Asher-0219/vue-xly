<template>
  <div id="consultantInfo">
    <nav>
      <img id="back" src="../../../static/img/test/back.png" @click="back" alt="">
      <span>汪林奇心理工作室</span>
      <img id="complaints" src="../../../static/img/advisory/complaints.png" @click="toComplaints">
      <img id="sharing" src="../../../static/img/advisory/sharing.png">
    </nav>
    <!--个人信息-->
    <div id="infoBox">
      <div>
        <img id="uPic" src="../../../static/img/test.png">
        <p id="uName">房警报<span>23</span><span>咨询师</span></p>
        <p id="uText">愿化作一缕春风温暖你的心，生命很美要...</p>
        <p id="uEfficiency">好评率: 100%<span>接单: 214</span></p>
        <div id="thank" @click="toThank">
          <img src="../../../static/img/advisory/thank.png">
          <p>感谢信</p>
          <img src="../../../static/img/advisory/to.png">
        </div>
      </div>
    </div>
    <!--简介-->
    <div id="resume">
      <div class="box" @click="toResume">
        <p>应用心理学学士、硕士，国家二级心理咨询师...</p>
        <p>咨询师简介</p>
      </div>
    </div>
    <!--动态-->
    <div id="state">
      <div class="box">
        <p class="title">ta的动态</p>
        <div>
          <img src="../../../static/img/advisory/state.png">
          <p>查看ta的动态<span>(100)</span></p>
        </div>
      </div>
    </div>
    <!--资质-->
    <div id="qualification">
      <div class="box">
        <p class="title">从业资质</p>
        <p class="Qlist"><span>从业10年</span><span>国家二级心理咨询师</span><span>婚姻情感师</span></p>
      </div>
    </div>
    <!--擅长领域-->
    <div id="beGoodAt">
      <div class="box" @click="bGABOk(true)">
        <p class="title">擅长领域</p>
        <p class="Blist"><span>个人成长</span><span>人际关系</span><span>性心理</span></p>
        <img src="../../../static/img/advisory/more.png">
      </div>
    </div>
    <div class="alertBox" v-show="bGAB">
      <div>
        <p class="alertTitle">擅长领域</p>
        <div class="alertList">
          <div id="bGAB">
            <div>
              <p>在婚姻家庭领域<span>我专注的咨询主题为</span></p>
              <div v-for="x in 4">手淫自慰</div>
            </div>
            <div>
              <p>在情绪管理领域<span>我专注的咨询主题为</span></p>
              <div v-for="x in 4">手淫自慰</div>
            </div>
            <div>
              <p>在个人成长领域<span>我专注的咨询主题为</span></p>
              <div v-for="x in 4">手淫自慰</div>
            </div>
          </div>
        </div>
        <div class="alertOk" @click="bGABOk(false)">确定</div>
      </div>
    </div>
    <!--对象-->
    <div id="object">
      <div class="box">
        <p class="title">咨询对象</p>
        <ul class="Olist">
          <li v-for="x in 12">
            <img src="../../../static/img/advisory/objectN.png">
            <p>青少年</p>
          </li>
        </ul>
      </div>
    </div>
    <!--咨询须知-->
    <div id="Zinstructions">
      <div class="box">
        <p class="title">咨询须知</p>
        <div>
          <img class="microphones" src="../../../static/img/advisory/microphones.png">
          <p class="Ztext1">电话咨询</p>
          <p class="Ztext2">打个电话与咨询师畅谈一下吧</p>
          <p class="Ztext3">￥<span>200</span><span> / 次</span></p>
        </div>
      </div>
    </div>
    <!--预约须知-->
    <div id="Yinstructions">
      <div class="box">
        <p class="title">预约须知</p>
        <ul class="Ylist">
          <li>
            <div></div>
            <p>回应时长<span>我将在收到订单后6小时内回复是否接受咨询，且在6小时内通过私信、电话与来访者协商咨询时间、地点</span></p>
          </li>
          <li>
            <div></div>
            <p>可预约时段<span>我将在收到订单后6小时内回复是否接受咨询，且在6小时内通过私信、电话与来访者协商咨询时间、地点</span></p>
          </li>
          <li>
            <div></div>
            <p>若变更预约<span>我将在收到订单后6小时内回复是否接受咨询，且在6小时内通过私信、电话与来访者协商咨询时间、地点</span></p>
          </li>
          <li>
            <div></div>
            <p>爽约/迟到<span>我将在收到订单后6小时内回复是否接受咨询，且在6小时内通过私信、电话与来访者协商咨询时间、地点</span></p>
          </li>
        </ul>
      </div>
    </div>
    <!--保障-->
    <div id="safeguard">
      <div class="box"  @click="safBOk(true)">
        <p class="title">心理园平台保障</p>
        <div>
          <p>来访者隐私安全</p>
          <p>支持取消预约并退款</p>
          <p>咨询师资料100%真实</p>
          <p>咨询时入驻5轮考核</p>
          <img src="../../../static/img/advisory/more.png">
        </div>
      </div>
    </div>
    <div class="alertBox" v-show="safB">
      <div>
        <p class="alertTitle">心理园平台保障</p>
        <div class="alertList">
          <div id="safB">
            <p>来访者隐私安全</p>
            <p>支持取消预约并退款<span>付款后。若未能与咨询师在咨询时间等细节达成一致，来访者可与咨询师 协商取消预约并退款</span></p>
            <p>咨询师资料100%真实</p>
            <p>咨询时入驻5轮考核</p>
          </div>
        </div>
        <div class="alertOk" @click="safBOk(false)">确定</div>
      </div>
    </div>
    <!--bottom-->
    <div id="bottom">
      <div id="look" @click="Look"><p :class="look?'lookY':'lookN'"><span v-if="look">已</span>关注</p></div>
      <div id="sendInfo" @click="Message(true)"><p>私信</p></div>
      <div id="about" @click="toAppointment">立即预约</div>
    </div>
    <!--私信-->
    <div id="sendInfoBox" v-show="isMessage">
      <div>
        <p>发送私信</p>
        <textarea></textarea>
        <div id="sendBox">
          <div @click="Message(false)">取消</div>
          <p></p>
          <div @click="Message(false)">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      safB: false, // 保障说明框
      look: true, // 关注
      bGAB: false, // 擅长领域
      isMessage: false // 私信框
    }
  },
  methods: {
    toThank () {
      this.$router.push({name: 'thank'})
    },
    toComplaints () {
      this.$router.push({name: 'complaints'})
    },
    toAppointment () {
      this.$router.push({name: 'appointment'})
    },
    Message (state) {
      this.isMessage = state
    },
    toResume () { // 到简介页面
      this.$router.push({name: 'resume'})
    },
    bGABOk (state) {
      this.bGAB = state
    },
    Look () { // 关注&取消关注
      this.look = !this.look
    },
    safBOk (state) { // 显示隐藏保障框
      this.safB = state
    },
    back () {
      window.history.back()
    }
  }
}
</script>
<style scoped>
#consultantInfo{
  width:100%;
  overflow: hidden;
  background:#efefef;
  position: relative;
  padding-bottom: .98rem;
}
nav {
  background: #00b9b9;
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
#complaints{
  width:0.36rem;
  height:0.29rem;
  position:absolute;
  right:0.89rem;
  top:0;
  bottom:0;
  margin:auto 0;
}
#sharing{
  width:0.3rem;
  height:0.29rem;
  position:absolute;
  right:0.24rem;
  top:0;
  bottom:0;
  margin:auto 0;
}
#infoBox{
  width:100%;
  height:2.54rem;
  background:url(../../../static/img/advisory/infoBk.png) no-repeat;
  background-size:100% 100%;
  overflow: hidden;
}
#infoBox>div{
  width:96.8%;
  height:1.28rem;
  overflow: hidden;
  margin-top:.72rem;
  float: right;
  position: relative;
}
#infoBox>div p{
  color:#fff;
  display: table;
}
#uPic{
  width:1.2rem;
  height:1.2rem;
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
#thank{
  width:1.69rem;
  height:.54rem;
  background: linear-gradient(to bottom right, #2cdead, #00c2d0);
  border-bottom-left-radius: 1.69rem;
  border-top-left-radius: 1.69rem;
  position: absolute;
  right:0;
  bottom:0;
}
#thank>p{
  font-size:.21rem;
  font-weight:bold;
  line-height:.54rem;
  display: table;
  margin-left:.55rem;
}
#thank>img{
  position: absolute;
  top:0;
  bottom:0;
  margin:auto;
}
#thank>img:first-child{
  width:.25rem;
  height:.23rem;
  left:.23rem;
}
#thank>img:last-child{
  width:.1rem;
  height:.17rem;
  right:.24rem;
}
#state{
  width:100%;
  height:1.8rem;
  background: #fff;
  overflow: hidden;
  margin:.18rem 0;
}
.box{
  width:93.6%;
  height:100%;
  margin:0 auto;
  overflow: hidden;
  padding-bottom:.4rem;
  position:relative;
}
.title{
  font-size:.24rem;
  font-weight:bold;
  color:#090909;
  margin-top: .18rem;
  margin-bottom:.35rem;
}
#state>div>div{
  width:100%;
  height:.38rem;
  margin-top:.35rem;
}
#state>div>div>img{
  width:.48rem;
  height:.38rem;
  float: left;
  margin-right:.2rem;
}
#state>div>div>p{
  font-size:.22rem;
  color:#090909;
  background:url(../../../static/img/advisory/more.png) no-repeat;
  background-size:.1rem .17rem;
  background-position: center right;
  line-height:.38rem;
}
#state>div>div>p>span{
  color:#00b9b9 !important;
}
#resume{
  width:100%;
  height:1.1rem;
  background: #fff;
  overflow: hidden;
}
#resume>div>p{
  font-size:.22rem;
  display: table;
  line-height:1.1rem;
}
#resume>div>p:first-child{
  color:#535353;
  float: left;
}
#resume>div>p:last-child{
  color:#00b9b9 !important;
  padding-right:.24rem;
  background:url(../../../static/img/advisory/to2.png) no-repeat;
  background-size:.1rem .17rem;
  background-position: center right;
  float: right;
}
#qualification{
  width:100%;
  background: #fff;
  box-sizing:border-box;
  border-bottom:.01rem solid #efefef;
}
.Qlist{
  font-size:.22rem;
  color:#535353;
  dispaly:table;
}
.Qlist>span{
  margin-right:.27rem;
}
#beGoodAt{
  width:100%;
  background: #fff;
  box-sizing:border-box;
  border-bottom:.01rem solid #efefef;
}
.Blist{
  display: table;
  font-size:.22rem;
  color:#00b9b9;
}
.Blist>span{
  border:.01rem solid #00b9b9;
  border-radius:.08rem;
  padding:.06rem .31rem;
  margin-right:.18rem;
}
#beGoodAt>div>img{
  width:.1rem;
  height:.17rem;
  position: absolute;
  bottom:.45rem;
  right:0;
}
#object{
  width:100%;
  background:#fff;
  box-sizing:border-box;
  border-bottom:.01rem solid #efefef;
}
.Olist{
  width:100%;
  overflow: hidden;
}
.Olist>li{
  width:1.08rem;
  height:1rem;
  float: left;
  text-align: center;
  margin:0 .9rem .35rem 0;
}
.Olist>li:nth-of-type(4n){
  margin-right:0 !important;
}
.Olist>li>img{
  width:.6rem;
  height:.6rem;
  border-radius:50%;
  margin:0 auto;
}
.Olist>li>p{
  font-size:.23rem;
  color:#535353;
  margin-top:.12rem;
}
#Zinstructions{
  width:100%;
  background:#fff;
  box-sizing:border-box;
  border-bottom:.01rem solid #efefef;
}
#Zinstructions>div>div{
  width:100%;
  height:.58rem;
  position: relative;
}
.microphones{
  width:.4rem;
  height:.58rem;
  float: left;
  margin-right:.3rem;
}
#Zinstructions>div>div>p{
  display: table;
  line-height:100%;
}
.Ztext1{
  font-size:.24rem;
  font-weight:bold;
  color:#090909;
}
.Ztext2{
  font-size:.19rem;
  color:#c4c4c4;
  padding-top:.12rem;
}
.Ztext3{
  font-size:.18rem;
  color:#ff5458;
  position: absolute;
  right:0;
  bottom:.13rem;
  font-weight:bold;
}
.Ztext3>span:first-child{
  font-size:.25rem;
}
.Ztext3>span:last-child{
  font-size:.22rem;
  font-weight:normal;
  color:#c4c4c4;
}
#Yinstructions{
  width:100%;
  background:#fff;
  box-sizing:border-box;
  border-bottom:.01rem solid #efefef;
}
.Ylist{
  width:100%;
  overflow: hidden;
}
.Ylist>li{
  width:100%;
  overflow: hidden;
  margin-bottom:.2rem;
}
.Ylist>li>div{
  width:.1rem;
  height:.1rem;
  border-radius:50%;
  background:#00b9b9;
  float: left;
  margin:.12rem .15rem 0 0;
}
.Ylist>li>p{
  font-size:.22rem;
  color:#090909;
  display: table;
}
.Ylist>li>p>span{
  color:#959595;
  margin-left:.37rem;
}
#safeguard{
  width:100%;
  background:#fff;
  box-sizing:border-box;
  border-bottom:.01rem solid #efefef;
  margin-bottom:.4rem;
}
#safeguard>div>div{
  width:100%;
  position: relative;
  overflow: hidden;
}
#safeguard>div>div>p{
  display: table;
  font-size:.19rem;
  color:#959595;
  padding-left:.31rem;
  background:url(../../../static/img/advisory/safeguard.png) no-repeat;
  background-size:.22rem .22rem;
  background-position: center left;
  float: left;
  margin-right:.42rem;
  margin-top:.12rem;
}
#safeguard>div>div>img{
  width:.1rem;
  height:.17rem;
  position: absolute;
  right:0;
  bottom:.3rem;
}
#bottom{
  width:100%;
  height:.98rem;
  background: #fff;
  position: absolute;
  bottom:0;
  overflow: hidden;
}
#bottom>div{
  float: left;
  line-height:.98rem;
  text-align:center;
}
#look,#sendInfo{
  width:1.95rem;
  height:100%;
  font-size:.22rem;
  color:#00b9b9;
  overflow: hidden;
}
#look>p{
  display: table;
  padding-left:.35rem;
  background-repeat: no-repeat;
  background-size:.28rem .31rem;
  background-position: 0 .32rem;
  margin: 0 auto;
}
.lookN{
  background-image:url(../../../static/img/advisory/lookY.png);
}
.lookY{
  background-image:url(../../../static/img/advisory/lookN.png);
  color:#c4c4c4;
}
#sendInfo>p{
  display: table;
  padding-left:.44rem;
  background:url(../../../static/img/advisory/sendInfo.png) no-repeat;
  background-size:.36rem .28rem;
  background-position: center left;
  margin: 0 auto;
}
#about{
  width:3.6rem;
  height:100%;
  background: linear-gradient(to bottom right, #2cdead, #00c2d0);
  font-size:.26rem;
  color:#fff;
  font-weight:bold;
  overflow: hidden;
}
.alertBox{
  width:100%;
  height:100%;
  position: fixed;
  background: rgba(0,0,0,.5);
  top:0;
  z-index: 999;
}
.alertBox>div{
  width:100%;
  padding-bottom:.98rem;
  background: #fff;
  position: absolute;
  bottom:0;
  overflow: hidden;
}
.alertTitle{
  font-size:.26rem;
  font-weight:bold;
  color:#090909;
  line-height:100%;
  padding:.4rem 0 .32rem 0;
  text-align: center;
}
.alertList{
  width:6.56rem;
  overflow: hidden;
  margin:0 auto;
}
#safB{
  height:4.5rem
}
#safB>p{
  font-size:.23rem;
  color:#535353;
  padding-left:.37rem;
  background: url(../../../static/img/advisory/safeguard.png) no-repeat;
  background-size:.22rem .22rem;
  background-position:0 .05rem;
  margin-bottom:.4rem;
}
#safB>p>span{
  display: table;
  font-size:.16rem;
  color:#c4c4c4;
  margin-top:.12rem;
}
.alertOk{
  width:100%;
  height:.98rem;
  position: absolute;
  bottom:0;
  background:linear-gradient(to top left, #00c2d0, #2cdead);
  font-size:.28rem;
  color:#fff;
  font-weight:bold;
  text-align: center;
  line-height:.98rem;
}
#bGAB{
  height:6.5rem;
  overflow: hidden;
}
#bGAB>div{
  width:100%;
  overflow: hidden;
  float: left;
  margin-bottom:.4rem;
}
#bGAB>div>p{
  font-size:.22rem;
  color:#535353;
  font-weight:bold;
}
#bGAB>div>p>span{
  font-size:.16rem;
  color:#c4c4c4;
  font-weight:normal;
  padding-left:.08rem;
}
#bGAB>div>div{
  font-size:.2rem;
  color:#00b9b9;
  background: #eff6f6;
  border-radius:.2rem;
  float: left;
  line-height:.2rem;
  padding:.14rem .26rem;
  margin:.28rem .18rem 0 0;
}
#sendInfoBox{
  width:100%;
  height:100%;
  position: fixed;
  background:rgba(0,0,0,.5);
  top:0;
}
#sendInfoBox>div{
  width:5.4rem;
  height:4.5rem;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
  background: #fff;
  border-radius:.08rem;
  overflow: hidden;
}
#sendInfoBox>div>p{
  font-size:.26rem;
  line-height:.26rem;
  font-weight:bold;
  color:#090909;
  text-align: center;
  padding:.36rem 0;
}
#sendInfoBox>div>textarea{
  width:4.92rem;
  height:2.22rem;
  display: block;
  border:.01rem solid #dfdfdf;
  border-radius:.08rem;
  background: #f5f5f7;
  margin: 0 auto;
  resize:none;
  box-sizing:border-box;
  padding:.22rem;
  font-size:.22rem;
  font-weight:bold;
  color:#535353;
}
#sendInfoBox>div>textarea::-webkit-scrollbar{
  width:0;
}
#sendBox{
  width:100%;
  height:.8rem;
  background:linear-gradient(to bottom right, #2cdead, #00c2d0);
  position: absolute;
  bottom:0;
}
#sendBox>div{
  width:50%;
  float: left;
  font-size:.26rem;
  color:#fff;
  font-weight:bold;
  text-align: center;
  line-height:.8rem;
}
#sendBox>p{
  display: block;
  width:.01rem;
  height:.4rem;
  background: #fff;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
}
</style>
