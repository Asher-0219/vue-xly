<template>
  <div class="testStart">
    <nav>
      <img class="back" @click="back" src="../../../static/img/test/detail/back.png" alt="">
      <img class="share" @click="share" src="../../../static/img/test/detail/share.png" alt="">
      <span>{{title}}</span>
    </nav>
    <div class="content">
      <div class="title">爱情测试：你的落单指数有多高？</div>
        <div class="info">
          <span class="num">240人测试过</span>
          <span class="date">2017-10-31   10:00</span>
        </div>
        <div class="answer" v-if="!answerFinish">
          <div class="answer-speed">进度：{{answerIndex+1}}/{{answer.length}}</div>
          <div class="answer-title">{{answerIndex+1}}.{{answer[answerIndex].title}}</div>
          <div class="answer-item" :class="{'active':choose===index}" @click="pushAnswer(index)" v-for="(item, index) in answer[answerIndex].item">{{item}}</div>
        </div>
        <div class="btn" @click="postAnswer" v-if="btn">提交测试</div>
        <div class="answer-result" v-if="answerFinish">
          <div class="result-content">
            <div class="result-title">我的测试结果</div>
            <div class="result-text">你的落单指数90%你的落单指数90%你的落单指数90%你的 落单指数90%你的落单指数90%</div>
          </div>
          <div class="btn more-test" @click="more">更多测试</div>
          <div class="btn test-again" @click="again">重新测试</div>
        </div>
    </div>
  </div>  
</template>

<script>
  import testItem from '../../components/test-item'
  export default {
    data () {
      return {
        title: '测试详情',
        answer: [
          {'title': '看到最近最近一次拍摄的照片，觉得不称心？', item: ['是', '不确定', '否']},
          {'title': '看到最近最近一次拍摄的照片，觉得不称？', item: ['是', '不确定', '否']},
          {'title': '看到最近最近一次拍摄的照片，觉得不？', item: ['是', '不确定', '否']},
          {'title': '看到最近最近一次拍摄的照片，觉得？', item: ['是', '不确定', '否']},
          {'title': '看到最近最近一次拍摄的照片，觉？', item: ['是', '不确定', '否']},
          {'title': '看到最近最近一次拍摄的照片？', item: ['是', '不确定', '否']}
        ], // 问题
        answerIndex: 0, // 题目索引
        choose: null, // 当前题目选择答案
        btn: false, // 是否打完全部题目
        answerFinish: false // 是否完成答题
      }
    },
    methods: {
      back () {
        this.$router.go(-1)
      },
      share () {
        // 分享
      },
      pushAnswer (index) {
        // 选择答案
        this.choose = index
        setTimeout(() => {
          if ((this.answerIndex + 1) === this.answer.length) {
            this.btn = true
          } else {
            this.answerIndex++
            this.choose = null
          }
        }, 300)
      },
      postAnswer () {
        // 提交答案
        this.answerFinish = true
        this.btn = false
        this.answerIndex = 0
        this.choose = null
      },
      again () {
        this.answerFinish = false
      },
      more () {
        this.$router.push({name: 'test'})
      }
    },
    components: {
      testItem
    },
    watch: {
      answerFinish () {
        if (this.answerFinish) {
          this.title = '测试结果'
        } else {
          this.title = '测试详情'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
nav 
  height 0.98rem
  line-height 0.98rem
  color #4c4c4c
  font-size 0.34rem
  text-align center
  position relative
  font-weight bold
  border-bottom 1px solid #e2e2e2
  .back
    width 0.14rem
    height 0.24rem
    position absolute
    left 0.24rem
    top 0
    bottom 0
    margin auto 0
  .share
    width 0.3rem
    height 0.3rem
    position absolute
    right 0.24rem
    top 0
    bottom 0
    margin auto 0
.content
  position absolute
  top 0.98rem
  bottom 0
  width 100% 
  background #eff6f6
  .title
    color #4c4c4c
    font-size 0.3rem
    margin-bottom 0.28rem
    text-align center
    margin-top 0.48rem
  .info
    margin-bottom 0.5rem
    text-align center
    color #7f7f7f
    font-size 0.2rem
    .num
      margin-right 0.56rem
.answer
  padding 0.24rem
  background #ffffff
  margin-bottom 0.93rem
  .answer-speed
    color #7f7f7f
    font-size 0.2rem
  .answer-title
    color #4c4c4c
    font-size 0.24rem
    margin 0.21rem 0
  .answer-item
    color #7f7f7f
    font-size 0.24rem
    height 0.68rem
    line-height 0.68rem
    border-top 1px dashed #7f7f7f
    padding-left 0.21rem
    &.active
      background #eff6f6
      color #38b9ba
.answer-result
  font-size 0.24rem
  .result-title
    height 0.63rem
    background #38b9ba
    color #ffffff
    line-height 0.63rem
    padding-left 0.32rem
  .result-content
    padding 0 0.2rem
    color #4c4c4c
    .result-text
      background #ffffff
      padding 0.32rem      
.btn
  background-color rgb(56, 185, 186)
  width 2.88rem
  height 0.78rem
  border-radius 0.78rem 
  margin auto
  line-height 0.78rem
  color #ffffff
  font-size 0.32rem
  text-align center
.more-test
  margin-top 0.98rem
.test-again
  margin-top 0.7rem                    
</style>
