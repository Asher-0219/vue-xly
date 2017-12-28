<template>
  <div id="withdrawalTo">
    <nav>
      <img id="back" src="../../../static/img/community/detail/back.png" @click="back">
      <span>{{title}}</span>
    </nav>
    <ul>
      <li>
        <p>户名</p>
        <input type="text">
      </li>
      <li>
        <p>账户</p>
        <input type="number">
      </li>
      <li>
        <p>银行</p>
        <input type="text">
        <p>为保证账户安全，若银行卡号与姓名不符我们将不予提现 </p>
      </li>
      <li>
        <p>金额(元)</p>
        <input type="number">
        <p>最多可提现: 500元</p>
      </li>
    </ul>
    <p>亲，提现遇到问题请及时联系客服哦</p>
    <div>
      <p>马上提现</p>
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
      this.$emit('close')
    }
  },
  props: {
    title: {
      type: String
    }
  }
}
</script>
<style scoped>
#withdrawalTo{
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
</style>
