<template>
  <div id="advisoryList">
    <nav>
      <img id="back" src="../../../static/img/community/back.png" @click="back" alt="">
      <span>咨询师推荐</span>
    </nav>
    <headTab :list="list"></headTab>
    <search></search>
    <ul id="listBox">
      <li v-for="x in 9" @click="toInfo">
        <img src="../../../static/img/test.png">
        <div class="infoBox">
          <p class="name">方警报<span></span><span>咨询师</span></p>
          <p class="labelling"><span>国家二级心理咨询师</span><span>婚姻专家</span><span>手淫专家</span></p>
          <p class="skill">擅长:<span>失眠</span><span>强迫症</span><span>抑郁症</span></p>
          <div class="rendezvous" @click.stop="toAppointment">
            <p>预约</p>
          </div>
          <p class="price">￥<span>200</span>-<span>400</span></p>
          <p class="address">杭州</p>
        </div>
        <div class="historyBox">
          <div class="praise">
            <p>好评率: 99%</p>
          </div>
          <div class="count">
            <p>已接单: 200</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import headTab from '../../components/head-tab'
import search from '../../components/advisory/search'
export default {
  data () {
    return {
      list: [
        {
          name: '婚姻家庭',
          index: 1
        },
        {
          name: '情绪管理',
          index: 2
        },
        {
          name: '恋爱心理',
          index: 3
        },
        {
          name: '职场心理',
          index: 4
        },
        {
          name: '性心理',
          index: 5
        },
        {
          name: '手淫自慰',
          index: 6
        },
        {
          name: '小三上位',
          index: 7
        },
        {
          name: '婆媳',
          index: 8
        }
      ]
    }
  },
  methods: {
    toAppointment () {
      this.$router.push({name: 'appointment'})
    },
    toInfo () {
      this.$router.push({name: 'consultantInfo'})
    },
    back () {
      window.history.back()
    }
  },
  components: {
    headTab,
    search
  }
}
</script>
<style scoped>
#advisoryList{
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
  color: #fff;
  font-weight:bold;
  font-size: 0.34rem;
  text-align: center;
  border-bottom:.01rem solid #e2e2e2;
  background: #38b9ba;
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
#listBox{
  width:100%;
  overflow: hidden;
}
#listBox>li{
  width:100%;
  background: #fff;
  position: relative;
  overflow: hidden;
  margin-bottom:.18rem;
  padding-top:.4rem;
  padding-bottom:1.08rem;
}
#listBox>li>img{
  width:1.2rem;
  height:1.2rem;
  border-radius:.05rem;
  float: left;
  margin:0 .22rem 0 .24rem;
}
.infoBox{
  width:5.59rem;
  overflow: hidden;
  float: left;
  position: relative;
}
.infoBox>p{
  line-height:100%;
}
.name{
  font-size:.28rem;
  color:#090909;
  font-weight:bold;
  display: table;
  line-height:.28rem;
}
.name>span:first-child{
  padding-left:.32rem;
  background:url(../../../static/img/advisory/man.png) no-repeat;
  background-size:.32rem .26rem;
  background-position: center right;
  margin-left:.11rem;
}
.name>span:last-child{
  font-size:.17rem;
  color:#fff;
  background:#f65e63;
  padding:.05rem .12rem;
  border-radius:.03rem;
  margin-left:.06rem;
}
.labelling{
  font-size:.21rem;
  color:#535353;
  padding-top:.18rem;
}
.labelling>span{
  padding-right:.1rem;
}
.skill{
  font-size:.2rem;
  padding-top:.26rem;
  color:#959595;
  padding-bottom:.3rem;
}
.skill>span{
  padding-left:.15rem;
}
.rendezvous{
  position: absolute;
  right:0;
  top:.26rem;
  width:.68rem;
  height:.68rem;
  border-radius:50%;
  background:linear-gradient(to right,#13bdc2,#06dfb0);
}
.rendezvous>p{
  font-size:.21rem;
  color:#fff;
  text-align: center;
  line-height:.68rem;
  font-weight:bold;
}
.price{
  font-size:.22rem;
  font-weight:bold;
  color:#ff5353;
  float: left;
}
.address{
  font-size:.18rem;
  color:#c4c4c4;
  padding-left:.24rem;
  background:url(../../../static/img/advisory/address.png) no-repeath;
  background-size:.16rem .2rem;
  background-position: center left;
  float: right;
}
.historyBox{
  width:100%;
  height:.78rem;
  border-top:.01rem solid #dfdfdf;
  overflow: hidden;
  position: absolute;
  bottom: 0;
}
.historyBox>div{
  width:50%;
  height:.22rem;
  margin-top:.27rem;
  font-size:.19rem;
  color:#959595;
  float: left;
}
.historyBox>div>p{
  padding-left:.3rem;
  line-height:.22rem;
  background-size:.22rem .22rem;
  background-position: center left;
  background-repeat:no-repeat;
  display: table;
  margin:0 auto;
}
.praise{
  box-sizing:border-box;
  border-right:.01rem solid #dfdfdf;
}
.praise>p{
  background-image:url(../../../static/img/advisory/good.png);
}
.count>p{
  background-image:url(../../../static/img/advisory/Receipt.png);
}
</style>
