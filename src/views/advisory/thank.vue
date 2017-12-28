<template>
  <div id="thank">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back" alt="">
      <span>感谢信</span>
    </nav>
    <div>
      <img src="../../../static/img/advisory/thankBK.png">
      <ul id="list">
        <li v-for="x in 7">
          <img src="../../../static/img/test.png">
          <div class="textBox">
            <p class="text">医生真的非常好，开解了我很多</p>
            <p class="user">署名: <span>方警报</span></p>
            <p class="date">日期: <span>2017-10-25</span></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>
<style scoped>
#thank{
  width:100%;
  overflow: hidden;
  position: relative;
  background: #fff;
}
nav{
  height: 0.88rem;
  width: 100%;
  position: relative;
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
  overflow: hidden;
  padding:0 .24rem;
}
#list>li{
  width:100%;
  overflow: hidden;
  margin-top:.28rem;
  float: left;
}
#list>li>img{
  width:.7rem;
  height:.7rem;
  border-radius:50%;
  object-fit: cover;
  float: left;
  margin:.02rem .13rem 0 0;
}
.textBox{
  width:6.18rem;
  overflow: hidden;
  border-radius:.08rem;
  background:#f5f5f7;
  font-size:.19rem;
  color:#959595;
  box-sizing:border-box;
  padding:.27rem .29rem .3rem .29rem;
}
.text{
  font-size:.22rem;
  color:#090909;
  padding-bottom:.6rem;
}
.user{
  line-height:.19rem;
  margin-bottom:.15rem;
}
.date{
  line-height:.19rem;
}
</style>
