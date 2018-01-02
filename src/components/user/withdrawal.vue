<template>
  <div id="withdrawal">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back">
      <span>提现</span>
    </nav>
    <ul id="list">
      <li v-for="x in list" @click="WithdrawalTo(x.operation)">
        <p>{{x.name}}</p>
        <img src="../../../static/img/user/arrow1.png">
      </li>
    </ul>
    <p id="ps">亲，提现遇到问题请及时联系客服哦</p>
    <div id="contact">
      <p>联系客服</p>
    </div>
    <withdrawalTo :data="data" @close="close" :class="{translateX:withdrawalTo}"></withdrawalTo>
  </div>
</template>
<script>
import withdrawalTo from './withdrawalTo'
export default {
  data () {
    return {
      withdrawalTo: false,
      list: [
        {
          name: '提现到支付宝',
          operation: 0
        },
        {
          name: '提现到银行卡',
          operation: 1
        }
      ],
      data: {
        title: '',
        ps: '',
        operation: 0
      }
    }
  },
  methods: {
    close () {
      this.withdrawalTo = false
    },
    WithdrawalTo (operation) {
      if (operation === 0) {
        this.data.title = '提现到支付宝'
        this.data.ps = '为保证账户安全，若支付宝账号与姓名不符我们将不予提现'
      } else {
        this.data.title = '提现到银行卡'
        this.data.ps = '为保证账户安全，若银行卡号与姓名不符我们将不予提现'
      }
      this.data.operation = operation
      this.withdrawalTo = true
    },
    back () {
      this.$emit('close', 5)
    }
  },
  components: {
    withdrawalTo
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
  height:2rem;
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
.translateX{
  transform: translateX(0)!important;
}
</style>
