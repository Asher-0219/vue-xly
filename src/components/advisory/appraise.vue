<template>
  <div id="appraise"  v-show="show" >
    <div :class="{slippage:slippage}">
      <div id="topBox">
        <img src="../../../static/img/advisory/x.png" @click="X">
        <p>评价</p>
      </div>
      <div id="appraiseBox">
        <ul id="starList">
          <li :class="{appraiseY:appraise>0}" @click="appraise=1"></li>
          <li :class="{appraiseY:appraise>1}" @click="appraise=2"></li>
          <li :class="{appraiseY:appraise>2}" @click="appraise=3"></li>
          <li :class="{appraiseY:appraise>3}" @click="appraise=4"></li>
          <li :class="{appraiseY:appraise>4}" @click="appraise=5"></li>
        </ul>
        <p>{{text[appraise]}}</p>
      </div>
      <textarea placeholder="对咨询师说一些话吧。" id="textFrame"></textarea>
      <div id="ok" @click="ok">
        <p>确认</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text: [
        '给咨询师打个评价吧',
        '咨询师脑子有病',
        '一点都不满意',
        '还行，一般般',
        '挺满意的，效果显著',
        '非常满意，无可挑剔'
      ],
      appraise: 0,
      slippage: false
    }
  },
  methods: {
    ok () {
      if (this.appraise > 0) {
        location.reload(true)
      } else {
        this.$mint.Toast('给咨询师打个评价吧')
      }
    },
    X () {
      this.slippage = false
      setTimeout(() => {
        this.$emit('X')
      }, 500)
    }
  },
  watch: {
    show () {
      if (this.show === true) {
        setTimeout(() => {
          this.slippage = true
        }, 20)
      }
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
#appraise{
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  left:0;
  overflow: hidden;
  background:rgba(0,0,0,.5);
}
#appraise>div{
  width:100%;
  height:6.44rem;
  position: absolute;
  left:0;
  bottom:0;
  background:#fff;
  overflow: hidden;
  transition: all .5s ease;
  transform: translateY(100%);
}
#topBox{
  width:100%;
  height:1.02rem;
  display: flex;
  align-items: center;
}
#topBox>img{
  width:.24rem;
  height:.24rem;
  position: absolute;
  left:.24rem;
}
#topBox>p{
  font-size:.26rem;
  font-weight:bold;
  color:#090909;
  margin:0 auto;
}
#appraiseBox{
  width:100%;
  height:2.05rem;
  overflow: hidden;
}
#starList{
  width:4.03rem;
  height:.5rem;
  display: flex;
  justify-content: space-between;
  margin:.32rem auto .54rem auto;
}
#starList>li{
  width:.5rem;
  height:.5rem;
  float: left;
  background:url(../../../static/img/advisory/appraiseN.png) no-repeat;
  background-size:100% 100%;
}
.appraiseY{
  background-image:url(../../../static/img/advisory/appraiseY.png) !important;
}
#appraiseBox>p{
  font-size:.22rem;
  font-weight:500;
  text-align: center;
  color:#535353;
}
#textFrame{
  width:6.51rem;
  height:1.83rem;
  border-radius:.08rem;
  box-sizing:border-box;;
  display: block;
  resize: none;
  font-size:.22rem;
  color:#4c4c4c;
  padding:.19rem .21rem;
  margin:0 auto;
  border:.01rem solid #dfdfdf;
}
#ok{
  width:100%;
  height:.98rem;
  position: absolute;
  bottom:0;
  background:linear-gradient(to right bottom,#2cdead,#00c2d0);
}
#ok>p{
  color:#fff;
  font-size:.28rem;
  font-weight:bold;
  text-align: center;
  line-height:.98rem;
}
.slippage{
  transform: translateY(0%) !important;
}
</style>
