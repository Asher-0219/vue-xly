<template>
  <div id="withdrawal">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back">
      <span>提现</span>
    </nav>
    <ul id="list">
      <li v-for="x in list">
        <p>{{x.name}}</p>
        <img src="../../../static/img/user/arrow1.png">
      </li>
    </ul>
    <p id="ps">亲，提现遇到问题请及时联系客服哦</p>
    <div id="contact">
      <p>联系客服</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          name: '提现到支付宝'
        },
        {
          name: '提现到微信钱包'
        },
        {
          name: '提现到银行卡'
        }
      ]
    }
  },
  methods: {
    back () {
      this.$emit('close', 5)
    }
  }
}
</script>
<style scoped>
#withdrawal{
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
  height:3rem;
  background:#fff;
  overflow: hidden;
  box-sizing:border-box;
  padding-left:.24rem;
  margin-bottom:1.3rem;
}
#list>li{
  width:100%;
  height:1rem;
  box-sizing:border-box;
  border-bottom:.01rem solid #efefef;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#list>li:last-child{
  border:none !important;
}
#list>li>p{
  font-size:.28rem;
  font-weight:bold;
  color:#303030;
}
#list>li>img{
  width:.12rem;
  height:.21rem;
  margin-right:.24rem;
}
#ps{
  font-size:.22rem;
  color:#959595;
  padding-bottom:.15rem;
  text-align: center;
}
#contact{
  width:6.2rem;
  height:.88rem;
  background:#00b9b9;
  border-radius:.08rem;
  margin:0 auto;
}
#contact>p{
  font-size:.31rem;
  color:#fff;
  text-align: center;
  line-height:.88rem;
  font-weight:bold;
}
</style>
