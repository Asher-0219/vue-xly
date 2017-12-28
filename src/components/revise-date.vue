<template>
  <div id="revise-date">
    <div>
      <div id="operation">
        <div id="close" @click="close">取消</div>
        <div id="ok" @click="ok">确定</div>
      </div>
      <mt-picker :slots="slots" :visibleItemCount="5" @change="change" :itemHeight="30"></mt-picker>
    </div>
  </div>
</template>
<script>
  /*
  *  选择日期 适用页面：个人信息修改 登入信息输入
  *  没有传参
  *  返回 @dateClose:{data:null} @areaOk:{data:{age:'年龄'}}
  * */
  export default {
    data () {
      return {
        slots: [
          {
            flex: 1,
            values: '',
            className: 'slot1',
            textAlign: 'center'
          }, {
            flex: 1,
            values: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            className: 'slot2',
            textAlign: 'center'
          }, {
            flex: 1,
            values: '',
            className: 'slot3',
            textAlign: 'center'
          }
        ],
        yearList: [], // 年列表
        dayList: [], // 日列表
        date: { // 获取用户选择的日期数据
          year: '',
          month: '',
          day: ''
        },
        age: null
      }
    },
    methods: {
      close () {
        this.$emit('dateClose')
      },
      ok () {
        let the = this
        the.age = the.year - the.date.year
        if (the.date.month > the.month) {
          the.age -= 1
        } else if (the.date.month === the.month && the.date.day > the.day) {
          the.age -= 1
        }
        the.$emit('dateOk', the.age)
      },
      getDay (year, month) { // 获取日数
        let date = new Date(year, month, 1)
        return new Date(date.getTime() - 864e5).getDate()
      },
      getString (text) {
        let regExp = /\d+/
        text = text + ''
        text = text.match(regExp)[0]
        return parseInt(text)
      },
      change (picker, values) {
        if (values[0] && values[2]) {
          let the = this
          let year = the.getString(values[0])
          let month = the.getString(values[1])
          the.date.year = year
          the.date.month = month
          the.date.day = the.getString(values[2])
          for (let i = 1; i <= the.getDay(year, month); i++) {
            the.dayList[i - 1] = i + '日'
          }
          picker.setSlotValues(2, the.dayList)
        }
      }
    },
    created () {

    },
    mounted () {
      let the = this
      let nowData = new Date()
      the.year = nowData.getFullYear()
      the.month = nowData.getMonth() + 1
      the.day = nowData.getDate()
      for (let i = 1950; i < the.year; i++) {
        the.yearList[i - 1950] = i + '年'
      }
      for (let i = 1; i <= 31; i++) {
        the.dayList[i - 1] = i + '日'
      }
      the.slots[0].values = the.yearList
      the.slots[0].defaultIndex = 40
      the.slots[2].values = the.dayList
    },
    props: {

    },
    components: {
    }
  }
</script>
<style scoped>
  #revise-date{
    width:100%;
    height:100%;
    background:rgba(0,0,0,.3);
    overflow: hidden;
    position: fixed;
    bottom:0;
    z-index:999;
  }
  #revise-date>div{
    width:100%;
    overflow: hidden;
    position: absolute;
    bottom:0;
  }
  #operation{
    width:100%;
    height:.88rem;
    border-bottom:.01rem solid #dfdfdf;
    position: relative;
    background: #fff;
  }
  #operation>div{
    font-size:.24rem;
    color:#00b9b9;
    font-weight:bold;
    display: table;
    position: absolute;
    top:0;
    bottom:0;
    margin:auto;
  }
  #close{
    left:.24rem;
  }
  #ok{
    right:.24rem;
  }
  .picker{
    background: #fff;
    padding:.7rem 1.4rem;
  }
</style>
