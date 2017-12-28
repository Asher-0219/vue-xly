<template>
  <div class="creation">
    <nav>
      <img @click="back" class="back" src="../../../static/img/community/detail/back.png" alt="">
      <div class="send">发布</div>
    </nav>
    <div class="content">
      <!-- 音频 -->
      <div class="community-audio audio" v-if="audioList[0]">
        <audio id="audio" @canplay="audioCanplay" @pause="audioPlay=false" @playing="audioPlay=true" :src="audioList[0].filepath" ref="audioPic"></audio>
        <img class="community-audio-btn audio-play" @click="playAudio" v-if="!audioPlay" src="../../../static/img/community/audio-play.png" alt="">
        <img class="community-audio-btn audio-stop" @click="stopAudio" v-else src="../../../static/img/community/audio-stop.png" alt="">
        <div class="community-audio-line"></div>
        <div class="community-audio-time">{{audioTime}}”</div>
        <img class="close" @click="deleteAudio" src="../../../static/img/community/close.png" alt="">
      </div>
      <!-- 发表内容 -->
      <div class="text">
        <textarea name="" id="" @blur="inputBlur" @focus="inputFocus" v-model="text" maxlength="50" placeholder="这一刻，我想说...（50字以内）"></textarea>
        <div class="text-num" v-if="text!==''">{{text.length}}/50</div>
      </div>
      <div class="imgs">
        <div class="img" v-if="imgList.length!==0" v-for="(item, index) in imgList">
          <img :src="item.thumbfilepath" alt="">
          <div class="del" @click="deleteImg(index)"><img src="../../../static/img/community/delete.png" alt=""></div>
        </div>
        <img class="fail" @click="addPic" src="../../../static/img/community/fail.png" alt="">
        <input id="input" ref="inputfile1" accept="image/*" capture="camera" type="file" @change="postPic">
        <input id="input" ref="inputfile2" accept="video/*" capture="camcorder" type="file" @change="postPic">
        <input id="input" ref="inputfile3" accept="image/*" type="file" @change="postPic" multiple="true">
        <input id="input" ref="inputfile4" accept="video/*" type="file" @change="postPic" multiple="true">
        <input id="input" ref="inputfile5" accept="audio/*" capture="microphone" type="file" @change="postPic">        
      </div>
      <mt-actionsheet
        :actions="actions"
        v-model="sheetVisible">
      </mt-actionsheet>
      <mt-actionsheet
        :actions="actions1"
        v-model="sheetVisible1"
        cancelText="">
      </mt-actionsheet>
      <div class="comment">
        <div class="comment-title">允许评论</div>
        <mt-switch v-model="commentSwitch"></mt-switch>
      </div>
    </div>
    <div class="community-line"></div>
    <div class="lookStatus">
      <div class="lookStatus-title">谁能看见</div>      
    </div>
    <div class="community-line" v-for="item in 3"></div>
    <div class="input" v-if="audioBtn">
      <img @click="audioContent=true" src="../../../static/img/community/audio-icon.png" alt="">
      <div class="finish">完成</div>
    </div>
    <div class="audio-content">        
      <img @click="audioContent=false" class="audio-meau" src="../../../static/img/community/audio1.png" alt="">
      <img @click="startAudio" class="audio-btn" src="../../../static/img/community/audio2.png" alt="">
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    data () {
      return {
        audio: false, // 音频显示
        audioPlay: false, // 音频播放状态
        text: '', // 文字内容
        postImg: [], // 上传到服务器图片
        imgList: [], // 从服务器接收图片
        actions: [{name: '拍照上传', method: this.getCamera}, {name: '录制视频', method: this.getCamcorder}, {name: '从手机相册选择', method: this.getLibrary}],
        sheetVisible: false, // 选择上传方式 拍照、录制、从手机选择
        sheetVisible1: false, // 从手机选择  图片、视频
        actions1: [{name: '图片', method: this.getImg}, {name: '视频', method: this.getVideo}],
        commentSwitch: true, // 评论开关
        audioBtn: false, // 显示录音按钮
        audioContent: false, // 显示录音
        audioList: [], // 录音
        audioTime: null //
      }
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      playAudio () {
        // 播放音频
        let audio = this.$refs.audioPic
        audio.play()
      },
      stopAudio () {
        // 暂停音频
        let audio = this.$refs.audioPic
        audio.pause()
      },
      addPic () {
        // 添加图片
        this.sheetVisible = true
        // this.$refs.inputfile.click()
      },
      postPic (event) {
        // 添加图片
        let files = event.target.files
        let arr = []
        if (files) {
          let imgCount = 0
          for (let file of files) {
            this.postImg[imgCount] = new FormData()
            this.postImg[imgCount++].append('file', file)
            arr.push({type: file.type})
          }
        }
        let data = []
        let imgs = []
        let audio = []
        $.each(this.postImg, (i, v) => {
          this.postImg[i].append('action', 'xys_forum_post_uploadphoto')
          data[i] = this.postImg[i]
        })
        // 等待上传
        this.$mint.Indicator.open()
        let requests = data.map(this.makeRequest)
        this.$http.all(requests).then(res => {
          // 上传成功
          res.forEach((v, i) => {
            arr[i].filepath = v.data.filepath
            arr[i].thumbfilepath = v.data.thumbfilepath
          })
          arr.forEach((v, i) => {
            if (v.type.indexOf('image') > -1 || v.type.indexOf('video') > -1) {
              imgs.push(v)
            }
            if (v.type.indexOf('audio') > -1) {
              audio.push(v)
            }
          })
          this.imgList = this.imgList.concat(imgs)
          this.audioList = this.audioList.concat(audio)
          if (this.audioList.length !== 0) {
            this.audio = true
          }
          this.$mint.Indicator.close()
        })
      },
      makeRequest (data) { // 为并发请求返回提交方法
        return this.$http.post('/discuz.php?input=' + this.$xys.input, {
          xysPostFormData: data
        })
      },
      deleteImg (ind) {
        // 删除图片
        this.$mint.MessageBox({
          message: '确定要删除图片吗',
          showCancelButton: true
        })
        this.$mint.MessageBox.confirm('确定要删除图片吗').then(action => {
          this.imgList.splice(ind, 1)
        })
      },
      getCamera () {
        // 拍照
        this.sheetVisible = false
        this.$refs.inputfile1.click()
      },
      getCamcorder () {
        // 录像
        this.sheetVisible = false
        this.$refs.inputfile2.click()
      },
      getLibrary () {
        // 从相册中选择
        this.sheetVisible1 = true
      },
      getImg () {
        // 选择图片
        this.sheetVisible = false
        this.$refs.inputfile3.click()
      },
      getVideo () {
        // 选择视频
        this.sheetVisible = false
        this.$refs.inputfile4.click()
      },
      audioCanplay () {
        this.audioTime = parseInt(document.getElementById('audio').duration)
      },
      inputFocus () {
        this.audioBtn = true
      },
      inputBlur () {
        this.audioBtn = false
      },
      startAudio () {
        this.$refs.inputfile5.click()
      },
      deleteAudio () {
        this.$mint.MessageBox({
          message: '确定要删除吗',
          showCancelButton: true
        })
        this.$mint.MessageBox.confirm('确定要删除吗').then(action => {
          this.audioList = []
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import './community'
.creation
  background #eff6f6
  min-height 100vh
nav
  width 100%
  height 0.98rem
  line-height 0.98rem
  border-bottom 1px solid #e2e2e2
  text-align center
  position relative
  display flex
  align-items center
  font-weight bold
  box-sizing border-box
  padding 0 0.24rem
  background #ffffff
.back
  width 0.14rem
  height 0.24rem
.send
  margin-left auto
  width 1.01rem
  height .45rem
  border-radius .22rem
  border solid 1px #38b9ba
  line-height .45rem
  color #38b9ba
  font-size 0.22rem
  text-align center
.content
  width 100%
  padding 0 0.24rem
  box-sizing border-box
  background #ffffff
.content .audio
  background #ffffff
  img
    margin-left 0
.close
  width 0.24rem
  height 0.24rem
textarea
  height 2.15rem
  border none
  width 100%
  color #4c4c4c
  font-size 0.28rem
  line-height 0.5rem
  box-sizing border-box
  padding-top 0.18rem
.text-num
  color #c4c4c4
  font-size 0.22rem
  text-align right
  margin-bottom 0.3rem
.imgs
  display flex
  flex-wrap wrap
  img
    width 2.17rem
    height 2.16rem
    border-radius 0.1rem
  &>div
    margin-right 0.24rem
    margin-bottom 0.26rem
  &>div:nth-child(3n+0)
    margin-right 0
  .fail
    margin-bottom 0.26rem    
.img
  position relative
  .del
    position absolute
    top 0.09rem
    right 0.06rem
    width 0.31rem
    height 0.31rem
    img
      width 100%
      height 100%
#input
  display none
.comment,.lookStatus
  background #ffffff
  height 1rem
  display flex
  align-items center
  color #7f7f7f
  font-size .3rem
  .mint-switch
    margin-left auto
.lookStatus
  padding 0 0.24rem
.input
  height 1rem
  display flex
  align-items center
  padding 0 0.24rem
  background #ffffff
  position absolute
  bottom 0
  width 100%
  box-sizing border-box
  img
    width 0.66rem
    height 0.66rem
  div
    margin-left auto
    color #4bbebe
    font-size 0.24rem
.audio-content
  width 100%
  height 4.25rem
  background #ffffff
.audio-content
  padding  0 0.24rem
  width 100%
  box-sizing border-box
  overflow hidden 
  .audio-meau
    width 0.66rem
    height 0.66rem
    margin-bottom 0.54rem
    margin-top 0.3rem
  .audio-btn
    width 1.3rem
    height 1.3rem
    margin auto    
</style>

