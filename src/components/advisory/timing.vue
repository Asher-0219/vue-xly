<template>
  <div id="timing">
    <div>
      <div id="titleBox">
        <img src="../../../static/img/advisory/x.png" @click="close">
        <p>选择服务时间</p>
      </div>
      <div id="dateBox">
        <div id="dayBox">
          <headTab :list="dayList" @headTab="headTab" @close="close"></headTab>
        </div>
        <div id="calendar">
          <img src="../../../static/img/advisory/calendar.png">
          <p>30天</p>
        </div>
      </div>
      <div id="timeBox">
        <ul id="timeList">
          <li v-for="x in 48">
            <p :class="{no:x%3==0}"><span v-if="x<=20">0</span>{{Math.ceil(x/2)-1}}:<span v-if="x%2==0">30</span><span v-else>00</span><span v-if="x%3==0"><br>暂不可约</span></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import headTab from '../head-tab'
export default {
  data () {
    return {
      days: ['今天', '明天', '后天'],
      dayList: [] // 天列表
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    headTab (index) {
      console.log(index)
    },
    getDayList () { // 获取日列表
      let the = this
      let date = new Date()
      let days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() // 获取当前月天数
      let nowDay = date.getDate() // 获取当前日
      let nowMonth = date.getMonth() + 1 // 获取当前月
      let obj = {}
      for (let i = nowDay; i <= days; i++) {
        obj.index = the.dayList.length
        if (i <= nowDay + 2) {
          obj.name = the.days[i - nowDay] + ' ' + (date.getMonth() + 1) + '/' + i
        } else {
          obj.name = '周' + '日一二三四五六'.charAt(new Date(date.getFullYear(), date.getMonth(), i).getDay()) + ' ' + nowMonth + '/' + i
        }
        the.dayList.push(obj)
        obj = {}
      }
      let less = 30 - the.dayList.length
      if (nowMonth === 12) {
        nowMonth = 1
      } else {
        nowMonth += 1
      }
      for (let i = 1; i <= less; i++) {
        obj.index = the.dayList.length
        obj.name = '周' + '日一二三四五六'.charAt(new Date(date.getFullYear(), date.getMonth() + 1, i).getDay()) + ' ' + nowMonth + '/' + i
        the.dayList.push(obj)
        obj = {}
      }
    }
  },
  mounted () {
    this.getDayList()
  },
  components: {
    headTab
  }
}
</script>
<style scoped>
#timing{
  width:100%;
  height:100%;
  position: fixed;
  left:0;
  top:0;
  background:rgba(0,0,0,.7);
}
#timing>div{
  width:100%;
  height:5.77rem;
  position: absolute;
  bottom:0;
  overflow: hidden;
  background:#fff;
}
#titleBox{
  width:100%;
  height:.91rem;
  overflow: hidden;
}
#titleBox>img{
  width:.24rem;
  height:.24rem;
  margin:.35rem 0 0 .23rem;
  float: left;
}
#titleBox>p{
  font-size:.26rem;
  color:#090909;
  font-weight:bold;
  line-height:.91rem;
  text-align: center;
}
#dateBox{
  width:100%;
  height:.88rem;
  background:#f5f5f7;
  overflow: hidden;
}
#dayBox{
  width:6.38rem;
  height:100%;
  float: left;
}
#calendar{
  width:1.12rem;
  height:100%;
  box-sizing:border-box;
  border-left:.01rem solid #dfdfdf;
  float: left;
}
#calendar>img{
  width:.28rem;
  height:.32rem;
  display: block;
  margin:.13rem auto .03rem auto;
}
#calendar>p{
  font-size:.18rem;
  color:#090909;
  text-align: center;
}
#timeBox{
  width:100%;
  height: 3.8rem;
  box-sizing:border-box;
  padding:0 .08rem;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  bottom:0;
}
#timeList{
  width:100%;
  overflow: hidden;
}
#timeList>li{
  float: left;
  width:1.74rem;
  height:.7rem;
  border:.01rem solid #dfdfdf;
  background:#f5f5f7;
  margin-right:.1rem;
  overflow: hidden;
  margin-bottom:.1rem;
}
#timeList>li:nth-of-type(4n){
  margin-right:0 !important;
}
#timeList>li>p{
  font-size:.18rem;
  color:#959595;
  text-align: center;
  line-height:.7rem;
}
.no{
  line-height:.35rem !important;
  padding-top: .04rem;
}
</style>
