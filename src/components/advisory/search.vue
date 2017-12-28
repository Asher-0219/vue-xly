<template>
  <div id="search">
    <div id="box">
      <div>
        <p :class="{dropY:drop==1}" @click="Drop(1)">{{address}}</p>
      </div>
      <div>
        <p :class="{dropY:drop==2}" @click="Drop(2)">{{price}}</p>
      </div>
      <div>
        <p :class="{dropY:drop==3}" @click="Drop(3)">{{permutation}}</p>
      </div>
    </div>
    <div id="selectBox">
      <ul id="addressBox" v-show="drop==1">
        <li v-for="(x,i) in addressList" @click="Address(i,x)" :class="{select1Y:i==addressIndex}">
          <p>{{x}}</p>
        </li>
      </ul>
      <ul id="priceBox" v-show="drop==2">
        <li v-for="(x,i) in priceList" @click="Price(i,x)" :class="{select1Y:i==priceIndex}">
          <p>{{x}}</p>
        </li>
      </ul>
      <ul id="permutationBox" v-show="drop==3">
        <li v-for="(x,i) in permutationList" @click="Permutation(i,x)" :class="{select2Y:i==permutationIndex}">
          <p>{{x}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      address: '全国',
      price: '不限',
      permutation: '综合排序',
      addressList: [
        '全国',
        '北京市',
        '上海市',
        '广州市',
        '深圳市',
        '武汉市',
        '成都市',
        '杭州市',
        '南京市',
        '青岛市'
      ],
      priceList: [
        '不限',
        '200以下',
        '200-300元',
        '301-500元',
        '501-1000元',
        '100以上'
      ],
      permutationList: [
        '综合排序',
        '预约排序',
        '最多加入'
      ],
      drop: 0,
      addressIndex: 0,
      priceIndex: 0,
      permutationIndex: 0
    }
  },
  methods: {
    Price (state, text) {
      let the = this
      the.price = text
      the.priceIndex = state
    },
    Permutation (state, text) {
      let the = this
      the.permutation = text
      the.permutationIndex = state
    },
    Address (state, text) {
      let the = this
      the.address = text
      the.addressIndex = state
    },
    Drop (state) {
      let the = this
      if (the.drop === state) {
        the.drop = 0
      } else {
        the.drop = state
      }
    }
  }
}
</script>
<style scoped>
#search{
  width:100%;
  overflow: hidden;
}
#box{
  width:100%;
  height:.79rem;
  background:#efefef;
  overflow: hidden;
}
#box>div{
  width:2.5rem;
  height:.36rem;
  margin-top:.21rem;
  float: left;
}
#box>div>p{
  line-height:.36rem;
  font-size:.24rem;
  font-weight:bold;
  color:#9b9b9b;
  background:url(../../../static/img/advisory/dropN.png) no-repeat;
  background-size:.16rem .13rem;
  background-position: center right;
  padding-right:.26rem;
  display: table;
  margin:0 auto;
}
.dropY{
  background-image:url(../../../static/img/advisory/dropY.png) !important;
}
#box>div>img{

}
#box>div:nth-of-type(2){
  box-sizing:border-box;
  border-left:.01rem solid #c4c4c4;
  border-right:.01rem solid #c4c4c4;
}
#selectBox{
  width:100%;
  background: #fff;
  overflow: hidden;
}
#addressBox,#priceBox{
  width:100%;
  box-sizing:border-box;
  padding:.5rem .24rem .2rem .24rem;
  overflow: hidden;
}
#addressBox>li,#priceBox>li{
  width:2.18rem;
  height:.58rem;
  border:.01rem solid #c4c4c4;
  border-radius:2.18rem;
  float: left;
  margin:0 .21rem .3rem 0;
}
#addressBox>li:nth-of-type(3n),#priceBox>li:nth-of-type(3n){
  margin-right:0 !important;
}
#addressBox>li>p,#priceBox>li>p{
  color:#959595;
  font-size:.22rem;
  font-weight:bold;
  text-align: center;
  line-height:.58rem;
}
#permutationBox{
  width:100%;
  overflow: hidden;
}
#permutationBox>li{
  width:100%;
  height:.88rem;
  float: left;
  border-bottom:.01rem solid #efefef;
}
#permutationBox>li:last-child{
  border:none !important;
}
#permutationBox>li>p{
  font-size:.24rem;
  color:#959595;
  font-weight:bold;
  text-align: center;
  line-height:.88rem;
}
.select1Y{
  background:#38b9ba !important;
  border-color:#38b9ba !important;
}
.select1Y>p{
  color:#fff !important;
}
.select2Y>p{
  color:#38b9ba !important;
}
</style>
