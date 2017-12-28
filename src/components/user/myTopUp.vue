<template>
  <div id="myTopUp">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back">
      <span>我的充值</span>
    </nav>
    <ul id="list">
      <li v-for="x in 20">
        <p>充值成功<br><span>2017-10-21</span></p>
        <p>+100.00</p>
      </li>
    </ul>
    <div id="noRecord" hidden>
      <img src="../../../static/img/user/wallet/noRecord.png">
      <p>您暂无充值记录</p>
      <div @click="">
        <p>立即充值</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$emit('close', 0)
    }
  }
}
</script>
<style scoped>
#myTopUp{
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
#list{
  width:100%;
  box-sizing:border-box;
  padding-left:.24rem;
  overflow-x: hidden;
  overflow-y: auto;
}
#list>li{
  width:100%;
  box-sizing:border-box;
  padding-right:.24rem;
  height:1rem;
  border-bottom:.01rem solid #f5f5f7;
  float: left;
  display: flex;
  align-items:center;
  justify-content: space-between;
}
#list>li>p{
  font-size:.25rem;
  color:#090909;
  font-weight:600;
  line-height:.4rem;
}
#list>li>p:first-child>span{
  font-size:.15rem;
  font-weight:normal;
  color:#535353;
}
#noRecord{
  width:2.28rem;
  height:3.16rem;
  position: absolute;
  top:3.53rem;
  left:0;
  right:0;
  margin:auto;
}
#noRecord>img{
  width:100%;
  height:1.41rem;
  margin-bottom:.4rem;
}
#noRecord>p{
  font-size:.22rem;
  color:#959595;
  text-align: center;
  line-height:.22rem;
}
#noRecord>div{
  width:2.24rem;
  height:.8rem;
  border-radius:.08rem;
  background:#39b9ba;
  position: absolute;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
}
#noRecord>div>p{
  font-size:.28rem;
  color:#fff;
  text-align: center;
  line-height:.8rem;
  font-weight:bold;
}
</style>
