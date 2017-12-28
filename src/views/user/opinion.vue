<template>
  <div id="opinion">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back" alt="">
      <span>意见反馈</span>
      <!--<p id="record">反馈记录</p>-->
    </nav>
    <div id="box">
      <textarea id="text" placeholder="请填写反馈内容" v-model="text"></textarea>
      <div id="imgBox">
        <div>
          <img src="../../../static/img/test.png">
          <div @click="delect()"></div>
        </div>
        <div>
          <img @click="sheetVisible=true" src="../../../static/img/user/addImg.png">
        </div>
      </div>
    </div>
    <div id="post" :class="{postY:isPost}" @click="post">
      <p>确定</p>
    </div>
    <p id="ps"> 提醒：未登录时您将无法看到您的反馈记录及收到我们客服的回复哦~</p>
    <mt-actionsheet cancelText="取消" :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>
<script>
export default {
  data () {
    return {
      actions: [
        {
          name: '从手机相册选择',
          method: this.album
        },
        {
          name: '拍照',
          method: this.taking
        }
      ],
      sheetVisible: false,
      text: '',
      isPost: false
    }
  },
  methods: {
    post () {
      let the = this
      if (the.isPost) {
        console.log('提交了')
      }
    },
    album () {
      console.log('相册')
    },
    taking () {
      console.log('拍照')
    },
    delect () {
      this.$messagebox({
        title: '提示',
        message: '是否删除图片',
        showCancelButton: true
      }).then(action => {
        console.log(action)
      })
    },
    back () {
      window.history.back()
    }
  },
  watch: {
    text () {
      let text = this.text
      let RE = / /g
      text = text.replace(RE, '')
      if (text.length > 0) {
        this.isPost = true
      } else {
        this.isPost = false
      }
    }
  }
}
</script>
<style scoped>
#opinion{
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  box-sizing:border-box;
  padding-top:.89rem;
  overflow-x: hidden;
  overflow-y: auto;
  background: #efefef;
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
#record{
  font-size:.24rem;
  color:#4c4c4c;
  line-height:.88rem;
  display: table;
  right: .24rem;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
#box{
  width:100%;
  padding:.18rem .24rem .46rem .24rem;
  background:#fff;
  box-sizing:border-box;
  overflow: hidden;
  margin-bottom:.26rem;
}
#text{
  width:100%;
  height:2.2rem;
  resize:none;
  padding:.17rem;
  box-sizing:border-box;
  background:#f5f5f7;
  border-radius:.08rem;
  color:#090909;
  font-size:.25rem;
  font-weight:500;
  margin-bottom:.52rem;
  border:none;
}
#imgBox{
  width:100%;
  overflow: hidden;
}
#imgBox>div{
  width:1.24rem;
  height:1.24rem;
  float: left;
  border-radius:.06rem;
  margin-right:.21rem;
  margin-bottom:.21rem;
  overflow: hidden;
  position: relative;
}
#imgBox>div>img{
  width:100%;
  height:100%;
  object-fit:cover;
}
#imgBox>div>div{
  width:.24rem;
  height:.24rem;
  background:url(../../../static/img/user/delectImg.png) no-repeat;
  background-size:100% 100%;
  position: absolute;
  top:.03rem;
  right:.03rem;
}
#imgBox>div:nth-of-type(5n){
  margin-right:0 !important;
}
#post{
  width:7.02rem;
  margin:0 auto;
  height:.98rem;
  background:#c4c4c4;
  border-radius:.08rem;
  margin-bottom:.29rem;
}
.postY{
  background:linear-gradient(to right bottom,#00b9b9,#00b9b9) !important;
}
#post>p{
  font-size:.28rem;
  color:#fff;
  font-weight:bold;
  text-align: center;
  line-height:.98rem;
}
#ps{
  font-size:.26rem;
  color:#959595;
  font-weight:500;
  width:7.02rem;
  margin:0 auto;
  display: table;
}
</style>
