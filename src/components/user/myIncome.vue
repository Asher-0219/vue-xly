<template>
  <div id="myIncome">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back">
      <span>收入记录</span>
    </nav>
    <div id="tabBox">
      <p :class="{tab:tab==0}" @click="Tab(0)">全部</p>
      <p :class="{tab:tab==1}" @click="Tab(1)">今日</p>
      <p :class="{tab:tab==2}" @click="Tab(2)">本周</p>
    </div>
    <table id="table" cellpadding="0" cellspacing="0">
      <tr>
        <th>收入日期</th>
        <th>收入类型</th>
        <th>收入金额</th>
      </tr>
      <tr v-for="x in 20">
        <td>2017-10-21</td>
        <td>语音咨询</td>
        <td>200.00</td>
      </tr>
    </table>
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
    Tab (operation) {
      this.tab = operation
    },
    back () {
      this.$emit('close', 2)
    }
  }
}
</script>
<style scoped>
#myIncome{
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  box-sizing:border-box;
  padding-top:.89rem;
  overflow-x: hidden;
  overflow-y: auto;
  background: #f5f5f7;
  z-index:999;
  transition: all .5s ease;
  transform: translateX(100%);
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
#tabBox{
  width:100%;
  height:.87rem;
  border-bottom:.01rem solid #f5f5f7;
  display: flex;
  align-items:center;
  justify-content: space-around;
  background:#fff;
}
#tabBox>p{
  font-size:.24rem;
  color:#535353;
  line-height:.64rem;
  height:.64rem;
  box-sizing:border-box;
}
.tab{
  color:#38b9ba !important;
  border-bottom:.03rem solid #38b9ba;
}
#table{
  width:100%;
  overflow: hidden;
}
#table>tr{
  width:100%;
  height:.89rem;
  text-align: center;
  background: #fff;
  font-size:.24rem;
  color:#535353;
}
#table>tr>th,#table>tr>td{
  border-bottom:.01rem solid #f5f5f7;
  width:33.3%;
}
#table>tr>th{
  font-weight:600;
}
</style>
