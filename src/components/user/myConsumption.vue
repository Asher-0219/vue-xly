<template>
  <div id="myConsumption">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back">
      <span>消费详情</span>
      <p id="edit" @click="edit">{{text}}</p>
    </nav>
    <ul id="list">
      <li v-for="(x,i) in 10" @click="Select(i)">
        <table id="table">
          <tr>
            <td>消费时间</td>
            <td>2017-10-20      <span>18:20</span></td>
          </tr>
          <tr>
            <td>消费项目</td>
            <td>语音咨询</td>
          </tr>
          <tr>
            <td>获得者</td>
            <td>方劲爆</td>
          </tr>
          <tr>
            <td>消费金额</td>
            <td>200.00</td>
          </tr>
        </table>
        <div v-show="select" :class="[selectList.indexOf(i)>=0?'selectY':'','select']"></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text: '编辑',
      select: false,
      selectList: []
    }
  },
  methods: {
    Select (i) {
      if (this.select) {
        if (this.selectList.indexOf(i) >= 0) {
          this.selectList.splice(this.selectList.indexOf(i), 1)
        } else {
          this.selectList.push(i)
        }
      }
    },
    edit () {
      if (this.select) {
        console.log(this.selectList)
        this.selectList = []
        this.select = false
        this.text = '编辑'
      } else {
        this.select = true
        this.text = '删除'
      }
    },
    back () {
      this.$emit('close', 1)
    }
  }
}
</script>
<style scoped>
#myConsumption{
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
#edit{
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
#list{
  width:100%;
  overflow-x: hidden;
  overflow-y: auto;
}
#list>li{
  width:100%;
  height:2.4rem;
  box-sizing:border-box;
  border-bottom:.01rem solid #f5f5f7;
  float: left;
  background:#fff;
  padding:.4rem .24rem;
  position: relative;
}
#table{
  width:100%;
  height:100%;
  overflow: hidden;
}
#table>tr{
  width:100%;
  height:.39rem;
  overflow: hidden;
}
#table>tr>td{
  line-height:.39rem;
}
#table>tr>td:first-child{
  width:1.5rem;
  font-size:.24rem;
  color:#c4c4c4;
}
#table>tr>td:last-child{
  font-size:.19rem;
  color:#090909;
}
.select{
  width:.4rem;
  height:.4rem;
  border:.02rem solid #dfdfdf;
  border-radius:50%;
  box-sizing:border-box;
  position: absolute;
  top:0;
  bottom:0;
  right:.24rem;
  margin:auto;
}
.selectY{
  border:none !important;
  background:url(../../../static/img/advisory/consent-round.png) no-repeat;
  background-size:100% 100%;
}
</style>
