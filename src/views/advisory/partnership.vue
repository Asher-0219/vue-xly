<template>
  <div id="partnership">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back" alt="">
      <span>专家入驻</span>
    </nav>
    <div id="box">
      <p id="title">如何入驻心理园</p>
      <ul>
        <li>
          <p>填写资料</p>
          <p>1.电脑网页搜索心理园</p>
          <p>2.点击咨询师申请入驻按钮</p>
          <p>3.完整填写资料并提交</p>
        </li>
        <li>
          <p>等待审核</p>
          <p>1.3-5个工作日审核材料</p>
          <p>2.资料合格，通知面试</p>
          <p>3.通过面试</p>
        </li>
        <li>
          <p>入驻成功</p>
          <p>开启您在心理园的旅程</p>
        </li>
      </ul>
    </div>
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
#partnership{
  width:100%;
  overflow: hidden;
  position: relative;
  background: #fff;
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
#box{
  width:100%;
  overflow: hidden;
}
#title{
  font-size:.44rem;
  font-weight:bold;
  color:#4c4c4c;
  text-align: center;
  line-height:.44rem;
  padding:1.09rem 0;
}
#box>ul{
  width:100%;
  height:6.02rem;
  background:url(../../../static/img/advisory/partnership.png) no-repeat;
  background-size:2.17rem 6.02rem;
  background-position:.56rem 0;
  overflow: hidden;
  position: relative;
}
#box>ul>li{
  width:4.6rem;
  height:.94rem;
  position: absolute;
  right:0;
}
#box>ul>li:nth-of-type(1){
  top:0;
}
#box>ul>li:nth-of-type(2){
  top:0;
  bottom:0;
  margin:auto;
}
#box>ul>li:nth-of-type(3){
  bottom:0;
}
#box>ul>li>p:first-child{
  font-size:.32rem;
  font-weight:bold;
  color:#4d4d4d;
}
#box>ul>li>p{
  font-size:.21rem;
  color:#7e7e7e;
  margin-bottom:.05rem;
}
</style>
