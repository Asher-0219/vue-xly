<template>
  <div id="withdrawalTo">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back">
      <span>{{data.title}}</span>
    </nav>
    <div id="list">
      <div v-if="data.operation==0">
        <p>账户</p>
        <input v-model="info.account" type="text" placeholder="请输入支付宝账号">
      </div>
      <div>
        <p>户名</p>
        <input v-model="info.name" type="text" placeholder="请输入您的真实姓名">
      </div>
      <div v-if="data.operation==1">
        <p>卡号</p>
        <input id="kh" type="text" placeholder="请输入银行卡号" @focus="clear=true" @blur="clear=false" @input="input">
        <div id="X" @click="Clear" v-show="clear"></div>
      </div>
      <div id="bank" v-if="data.operation==1">
        <p>银行</p>
        <input v-model="info.bank" type="text" placeholder="请选择开户银行" readonly @click="reviseBank=true">
        <img src="../../../static/img/user/arrow1.png">
      </div>
      <p>{{data.ps}}</p>
      <div>
        <p>金额(元)</p>
        <input type="number" placeholder="请输入提现金额" @input="Money">
      </div>
      <p>请输入整百的倍数，最多可提现: 500元</p>
    </div>
    <p id="ps">亲，提现遇到问题请及时联系客服哦</p>
    <div id="post" :class="{post:post}" @click="Post">
      <p>马上提现</p>
    </div>
    <reviseBank v-show="reviseBank" @close="bankClose" @ok="bankOk"></reviseBank>
  </div>
</template>
<script>
import reviseBank from '../../components/revise-bank'
export default {
  data () {
    return {
      info: {
        account: '',
        name: '',
        bank: '',
        money: ''
      },
      post: false,
      clear: false,
      reviseBank: false
    }
  },
  methods: {
    Post () {
      console.log('提交成功')
    },
    Money (e) {
      if (e.target.value > 500) {
        e.target.value = 500
      } else if (e.target.value < 0) {
        e.target.value = 0
      }
      e.target.value = parseInt(e.target.value)
      this.info.money = e.target.value
    },
    bankClose () {
      this.reviseBank = false
    },
    bankOk (bank) {
      this.info.bank = bank
      this.reviseBank = false
    },
    input (e) {
      this.info.account = e.target.value
      let test = /\D/g
      let test2 = /(\d{4})/g
      this.info.account = this.info.account.replace(test, '')
      this.info.account = this.info.account.replace(test2, '$1 ')
      console.log(this.info.account)
      this.$j('#kh').val(this.info.account)
    },
    Clear () {
      this.info.account = ''
      this.$j('#kh').val(this.info.account)
    },
    back () {
      this.$emit('close')
    },
    if () {
      if (this.info.account !== '' && this.info.name !== '' && this.info.money !== '') {
        if (this.data.operation === 0) {
          this.post = true
        } else {
          if (this.info.bank !== '') {
            this.post = true
          }
        }
      } else {
        this.post = false
      }
    }
  },
  props: {
    data: {
      type: Object
    }
  },
  watch: {
    'info.account' () {
      this.if()
    },
    'info.name' () {
      this.if()
    },
    'info.bank' () {
      console.log(this.info.bank)
      this.if()
    },
    'info.money' () {
      this.if()
    }
  },
  components: {
    reviseBank
  }
}
</script>
<style scoped>
#withdrawalTo{
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
  overflow: hidden;
  box-sizing:border-box;
}
#list>div{
  width:100%;
  height:1rem;
  box-sizing:border-box;
  border-bottom:.01rem solid #efefef;
  float: left;
  overflow: hidden;
  padding-left:.24rem;
  background:#fff;
  position: relative;
}
#list>p{
  font-size:.21rem;
  color:#c4c4c4;
  font-weight:500;
  line-height:.21rem;
  padding:.24rem .24rem .42rem .24rem;
  display: table;
}
#list>div>p{
  font-size:.28rem;
  font-weight:600;
  color:#303030;
  line-height:1rem;
  float: left;
}
#list>div>input{
  width:5.47rem;
  box-sizing:border-box;
  height:1rem;
  border:none;
  font-size:.26rem;
  font-weight:600;
  color:#303030;
  float: right;
}
#bank>img{
  width:.12rem;
  height:.24rem;
  position: absolute;
  top:0;
  bottom:0;
  right:.24rem;
  margin:auto;
}
#ps{
  font-size:.22rem;
  color:#959595;
  padding-bottom:.15rem;
  text-align: center;
}
#post{
  width:6.2rem;
  height:.88rem;
  background:#dfdfdf;
  border-radius:.08rem;
  margin:0 auto;
}
.post{
  background:#00b9b9 !important;
}
#post>p{
  font-size:.31rem;
  color:#fff;
  text-align: center;
  line-height:.88rem;
  font-weight:bold;
}
#X{
  width:.3rem;
  height:.3rem;
  position: absolute;
  padding-right:.24rem;
  right:0;
  top:0;
  bottom:0;
  margin:auto;
  background:url(../../../static/img/user/wallet/clear.png) no-repeat;
  background-size:.3rem .3rem;
}
</style>
