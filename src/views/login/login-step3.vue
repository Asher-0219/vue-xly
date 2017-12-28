<template>
  <div class="step3">
    <nav>
      <img @click="back" src="../../../static/img/login/back1.png" alt="">
    </nav>
    <div class="content">
      <div class="reg-title">完善资料</div>
      <div class="info">请填写您的真实信息</div>
      <div class="avatar">
        <img v-if="!info.avatar" @click="chooseImg" src="../../../static/img/login/avatar.png" alt="">
        <img @click="chooseImg" v-else :src="info.avatar" alt="">
        <input id="input" ref="inputfile" accept="image/*" type="file" @change="postPic">
      </div>
      <div class="inputs">
        <div class="item">
          <div class="item-title">姓名</div>
          <input type="text" v-model="info.name" placeholder="请输入你的真实姓名">
        </div>
        <div class="item">
          <div class="item-title">年龄</div>
          <input type="text" v-model="info.age" placeholder="请输入你的真实年龄">     
          <img class="more" @click.stop="date=true" src="../../../static/img/login/more.png"></img>     
        </div>
        <div class="item">
          <div class="item-title">性别</div>
          <div class="man">
            <div @click="info.gender=1" :class="{active:info.gender===1}"></div>
            <span>男</span>
          </div>
          <div class="woman">
            <div @click="info.gender=2" :class="{active:info.gender===2}"></div>            
            <span>女</span>
          </div>
        </div>
        <div class="item" @click="city=true">
          <div class="item-title">所在地</div>
          <input type="text" placeholder="请选择你的所在地" readonly v-model="info.address">
          <img class="more" src="../../../static/img/login/more.png"></img>          
        </div>
      </div>
    </div>
    <div class="btn" @click="nextTep" :class="{active:canNext}">确定</div>
    <date @dateClose="dateClose" @dateOk="dateOk" v-if="date"></date>
    <city @areaClose="cityClose" @areaOk="cityOk" v-if="city"></city>
  </div>
</template>

<script>
  import $ from 'jquery'
  import date from '../../components/revise-date'
  import city from '../../components/revise-area'
  export default {
    components: {
      date,
      city
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      nextTep () {
        if (this.canNext) {
          this.$router.push({name: 'home'})
        }
      },
      dateClose () {
        // 取消选择年龄
        this.date = false
      },
      dateOk (date) {
        // 确定选择年龄
        this.info.age = date
        this.date = false
      },
      cityClose () {
        // 取消选择所在地
        this.city = false
      },
      cityOk (data) {
        // 确定选择所在地
        this.info.address = data.city + data.province
        this.city = false
      },
      chooseImg () {
        // 选择头像
        this.$refs.inputfile.click()
      },
      postPic (event) { // 上传图片
        let the = this
        let files = event.target.files
        if (files) {
          let imgCount = 0
          for (let file of files) {
            the.postImg[imgCount] = new FormData()
            the.postImg[imgCount++].append('file', file)
          }
        }
        let data = []
        $.each(the.postImg, function (i, v) {
          the.postImg[i].append('action', 'xys_forum_post_uploadphoto')
          data[i] = the.postImg[i]
        })
        this.$mint.Indicator.open()
        let requests = data.map(the.makeRequest) // 返回Promise对象
        the.$http.all(requests).then(res => { // 并发请求 当用火选择的所有图片上传结束后重新获取数据
          this.$mint.Indicator.close()
          this.info.avatar = res[0].data.thumbfilepath
        })
      },
      makeRequest (data) { // 为并发请求返回提交方法
        return this.$http.post('/discuz.php?input=' + this.$xys.input, {
          xysPostFormData: data
        })
      }
    },
    data () {
      return {
        info: {name: null, gender: null, age: null, address: null, avatar: null}, // 完善资料
        inputType: 'password', // 密码是否可见
        date: false, // 选择年龄
        city: false, // 选择所在地
        postImg: []
      }
    },
    computed: {
      canNext () {
        if (this.info.name && this.info.gender && this.info.age && this.info.address && this.info.avatar) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
nav
  height 0.98rem
  display flex
  align-items center
  padding 0 0.24rem
  margin-bottom 0.58rem
  img
    width 0.14rem
    height 0.24rem
.content
  width 100%
  padding 0 0.55rem
  box-sizing border-box
  margin-bottom 1.28rem   
.reg-title
  color #090909
  font-size 0.36rem
  margin-bottom 0.18rem
  margin-left 0.14rem
.info
  color #5e5e5f
  font-size 0.24rem
  margin-bottom 0.46rem
  margin-left 0.14rem
.btn
  background rgb(196, 196, 196)
  width 6.41rem
  height .8rem 
  line-height 0.8rem
  text-align center
  border-radius 0.8rem
  font-size 0.32rem
  color #ffffff
  margin auto
  &.active
    background #3ababb
.avatar
  width 1.2rem
  height 1.2rem
  margin-left 0.14rem
  img
    width 100%
    height 100%
    margin-bottom 0.54rem
    border-radius 50%
    object-fit cover
.inputs
  .item
    position relative
    display flex
    align-items center
    border-bottom 1px solid #efefef
    padding 0 0.14rem    
    height 1rem
    color #090909
    font-size 0.28rem
    line-height 1rem
    .item-title
      color #090909
      font-size 0.3rem
      width 1.24rem 
    input
      border none
      height 1rem
      line-height 1rem
    .more
      position absolute
      right 0.15rem
      width 0.12rem
      height 0.21rem
    .address
      color #c4c4c4    
.man
  margin-right 0.83rem 
.man,.woman
  display flex
  align-items center
  div
    margin-right 0.12rem
    width 0.28rem
    height 0.28rem
    background-image url('../../../static/img/login/checked1.png')
    background-size 100% 100%
    &.active
      background-image url('../../../static/img/login/checked.png')
#input
  display none      
</style>


