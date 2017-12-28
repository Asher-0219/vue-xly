<template>
  <div id="myWithdrawal">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back">
      <span>我的提现</span>
    </nav>
    <table id="table" cellpadding="0" cellspacing="0">
      <tr>
        <th>提现日期</th>
        <th>提现金额</th>
        <th>扣除U币</th>
      </tr>
      <tr v-for="x in 20">
        <td>2017-10-21</td>
        <td>200元</td>
        <td>200U币</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$emit('close', 3)
    }
  }
}
</script>
<style scoped>
#myWithdrawal{
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
#table{
  width:100%;
  overflow: hidden;
}
#table>tr{
  width:100%;
  height:.88rem;
  background:#fff;
  font-size:.24rem;
  color:#535353;
  text-align: center;
}
#table>tr>th,#table>tr>td{
  width:33.3%;
  border-bottom:.01rem solid #f5f5f7;
}
#table>tr>th{
  font-weight:600;
}
</style>
