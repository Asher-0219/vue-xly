<template>
  <div id="revise-bank">
    <div>
      <div id="operation">
        <div id="close" @click="close">取消</div>
        <div id="ok" @click="ok">确定</div>
      </div>
      <mt-picker :slots="slots" valueKey="regionName" :visibleItemCount="5" @change="change" :itemHeight="30"></mt-picker>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slots: [
        {
          flex: 1,
          values: ['中国银行', '工商银行', '建设银行', '农业银行', '交通银行', '招商银行', '中信银行', '民生银行', '邮政储蓄银行', '平安银行'],
          textAlign: 'center'
        }
      ],
      bank: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    ok () {
      this.$emit('ok', this.bank)
    },
    change (picker, values) {
      this.bank = values
    }
  }
}
</script>
<style scoped>
#revise-bank{
  width:100%;
  height:100%;
  background:rgba(0,0,0,.3);
  overflow: hidden;
  position: fixed;
  bottom:0;
  z-index: 999;
}
#revise-bank>div{
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
