<template>
  <div id="topUp">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back">
      <span>账户充值</span>
    </nav>
    <div id="box">
      <div>
        <p>充值方式</p>
        <input v-model="way" type="text" placeholder="请选择充值方式" readonly @click="select=true">
        <img src="../../../static/img/user/arrow1.png">
      </div>
      <div>
        <p>金额(元)</p>
        <input @input="input" type="number" min="0" placeholder="请输入充值金额">
      </div>
    </div>
    <p id="ps">亲，充值遇到问题请及时联系客服哦</p>
    <div id="post" :class="{post:post}" @click="Post">
      <p>马上充值</p>
    </div>
    <div id="select" v-show="select" @click="select=false">
      <div @click.stop="">
        <p id="title">选择充值方式</p>
        <div v-for="x in list" @click="Select(x.name)">
          <img :src="'../../../static/img/user/wallet/' + x.pic + '.png'">
          <p>{{x.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      way: '',
      money: '',
      post: false,
      select: false,
      list: [
        {
          name: '支付宝',
          pic: 'ZFB'
        },
        {
          name: '微信支付',
          pic: 'WX'
        },
        {
          name: '银联支付',
          pic: 'up'
        }
      ]
    }
  },
  methods: {
    input (e) {
      let RE = /[^\d]/g
      e.target.value = e.target.value.replace(RE, '')
      this.money = parseInt(e.target.value)
    },
    Select (name) {
      this.way = name
      this.select = false
    },
    if () {
      if (this.way !== '' && this.money > 0) {
        this.post = true
      } else {
        this.post = false
      }
    },
    Post () {
      console.log('充值成功')
    },
    back () {
      this.$emit('close', 4)
    }
  },
  watch: {
    way () {
      this.if()
    },
    money () {
      this.if()
    }
  }
}
</script>
<style scoped>
#topUp{
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
#box{
  width:100%;
  height:2.4rem;
  box-sizing:border-box;
  padding-left:.24rem;
  overflow: hidden;
  background:#fff;
  margin:.2rem 0 1.25rem 0;
}
#box>div{
  width:100%;
  height:1.19rem;
  float: left;
  border-bottom:.01rem solid #efefef;
  position: relative;
}
#box>div>p{
  width:1.55rem;
  line-height:1.19rem;
  font-size:.28rem;
  color:#303030;
  font-weight:600;
  float: left;
}
#box>div>input{
  width:5.7rem;
  height:1.19rem;
  border:none;
  font-size:.28rem;
  color:#303030;
  font-weight:600;
  float: left;
}
#box>div>img{
  width:.12rem;
  height:.21rem;
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
#select{
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  left:0;
  overflow: hidden;
  background:rgba(0,0,0,.5);
}
#select>div{
  width:5.39rem;
  height:3.9rem;
  background:#fff;
  box-sizing:border-box;
  padding:0 .2rem;
  border-radius:.05rem;
  position: absolute;
  top:0;
  bottom:0;
  right:0;
  left:0;
  margin:auto;
  overflow: hidden;
}
#select>div>p{
  font-size:.26rem;
  color:#090909;
  font-weight:bold;
  text-align: center;
  line-height:.26rem;
  padding:.34rem 0 .31rem 0;
}
#select>div>div{
  width:100%;
  height:.98rem;
  border-bottom:.01rem solid #dfdfdf;
  display: flex;
  align-items:center;
}
#select>div>div:last-child{
  border:none !important;
}
#select>div>div>img{
  width:.5rem;
  margin:0 .18rem 0 .11rem;
}
#select>div>div>p{
  font-size:.28rem;
  color:#090909;
  font-weight:600;
}

</style>
