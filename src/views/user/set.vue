<template>
  <div id="set">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back" alt="">
      <span>设置</span>
    </nav>
    <div>
      <div id="disturb">
        <p>勿扰时段</p>
        <mt-switch v-model="disturb"></mt-switch>
      </div>
      <div id="ps">
        <p>打开勿扰时段功能，手机在这个时间段收到的通知将不会有任何声音和震动</p>
      </div>
      <ul id="list">
        <li>
          <p class="title">账户安全</p>
          <img src="../../../static/img/user/arrow1.png">
        </li>
        <li>
          <p>给个好评鼓励一下</p>
          <img src="../../../static/img/user/arrow1.png">
        </li>
        <li>
          <p>分享给朋友</p>
          <img src="../../../static/img/user/arrow1.png">
        </li>
        <li @click="to('opinion')">
          <p>意见反馈</p>
          <img src="../../../static/img/user/arrow1.png">
        </li>
        <li>
          <p>版本信息</p>
          <p>1.0.0</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      disturb: false
    }
  },
  methods: {
    to (name) {
      this.$router.push({name: name})
    },
    back () {
      window.history.back()
    }
  }
}
</script>
<style scoped>
#set{
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  box-sizing:border-box;
  padding-top:.89rem;
  overflow-x: hidden;
  overflow-y: auto;
  background: #f5f5f7;
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
#disturb,#list>li{
  width:100%;
  height:1rem;
  box-sizing:border-box;
  padding-left:.24rem;
  border-bottom:.01rem solid #f5f5f7;
  background:#fff;
  display: flex;
  justify-content: space-between;
  align-items:center;
}
#disturb>p,#list>li>p:first-child{
  font-size:.27rem;
  color:#090909;
  font-weight:600;
}
.mint-switch{
  margin-right:.24rem;
}
#ps{
  width:100%;
  margin-bottom:.14rem;
  box-sizing:border-box;
  padding:0 .24rem;
  display: flex;
  align-items: center;
}
#ps>p{
  padding: .23rem 0;
  font-size:.19rem;
  color:#959595;
  font-weight:500;
}
#list{
  width:100%;
  overflow: hidden;
}
#list>li>img{
  width:.12rem;
  height:.21rem;
  margin-right:.24rem;
}
#list>li>p:last-child{
  font-size:.2rem;
  color:#959595;
  margin-right:.24rem;
}
</style>
