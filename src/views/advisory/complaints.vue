<template>
  <div id="complaints">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back" alt="">
      <span>举报</span>
    </nav>
    <div id="box">
      <p id="text">请选择举报原因</p>
      <ul id="complaintsList">
        <li v-for="(x,i) in list" :class="{select:select==i}" @click="select=i">
          <p>{{x}}</p>
        </li>
      </ul>
    </div>
    <div id="ok" :class="{oky:select!=null}">
      <p>确定</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        '淫秽色情',
        '广告欺诈',
        '隐私泄露',
        '政治敏感',
        '欺诈骗钱',
        '违法(暴力恐怖、违禁品等)'
      ],
      select: null
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
#complaints{
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
#box{
  width:100%;
  overflow: hidden;
}
#text{
  font-size:.28rem;
  font-weight:bold;
  color:#959595;
  padding:.3rem 0 .22rem .24rem;
  line-height:.28rem;
}
#complaintsList{
  width:100%;
  overflow: hidden;
  background:#fff;
}
#complaintsList>li{
  width:100%;
  height:1rem;
  border-bottom:.01rem solid #dfdfdf;
  float: left;
}
#complaintsList>li>p{
  font-size:.28rem;
  font-weight:bold;
  color:#303030;
  line-height:1rem;
  padding-left:.24rem;
}
#ok{
  width:100%;
  height:1rem;
  background:#dfdfdf;
  margin-top:.2rem;
}
#ok>p{
  font-size:.33rem;
  font-weight:bold;
  color:#303030;
  text-align: center;
  line-height:1rem;
}
.oky{
  background:#38b9ba !important;
}
.oky>p{
  color:#fff !important;
}
.select{
  background:url(../../../static/img/advisory/hook.png) no-repeat #efefef;
  background-size:.25rem .18rem;
  background-position: 7rem .41rem;
}
</style>
