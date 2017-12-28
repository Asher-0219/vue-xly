<template>
  <div id="revise-area">
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
  /*
  *  选择地址 适用页面：个人信息修改 登入信息输入
  *  没有传参
  *  返回 @areaClose:{data:null} @areaOk:{data:{province: '浙江',city: '杭州'}}
  * */
  export default {
    data () {
      return {
        slots: [
          {
            flex: 1,
            values: [],
            className: 'slot1',
            textAlign: 'center'
          }, {
            flex: 1,
            values: [],
            className: 'slot2',
            textAlign: 'center'
          }
        ],
        pData: null, // 省列表
        cData: null, // 市列表
        data: {
          province: null, // 省
          city: null // 市
        },
        id: null
      }
    },
    methods: {
      close () {
        this.$emit('areaClose')
      },
      ok () {
        this.$emit('areaOk', this.data)
      },
      change (picker, values) {
        if (values[0] && values[1]) {
          let the = this
          if (values[0] && the.id !== values[0].regionId) {
            the.id = values[0].regionId
            the.getCity()
          }
          the.data.province = values[0].regionName
          the.data.city = values[1].regionName
        }
      },
      getCity () { // 获取市
        let the = this
        the.$http.post('https://api.xys.ren/interface/html.php', {
          action: 'addressList',
          addressId: the.id,
          isList: 0
        }).then(res => {
          the.cData = res.data.data
          the.slots[1].values = []
          the.cData.forEach(function (v, i) {
            the.slots[1].values.push(v)
          })
        })
      },
      getProvince () { // 获取省
        let the = this
        the.$http.post('https://api.xys.ren/interface/html.php', {
          action: 'addressList',
          addressId: 0,
          isList: 0
        }).then(res => {
          the.pData = res.data.data
          the.pData.forEach(function (v, i) {
            the.slots[0].values.push(v)
          })
          the.id = the.slots[0].values[0].regionId
          the.getCity()
        })
      }
    },
    created () {

    },
    mounted () {
      let the = this
      the.getProvince()
    },
    props: {

    },
    components: {
    }
  }
</script>
<style scoped>
  #revise-area{
    width:100%;
    height:100%;
    background:rgba(0,0,0,.3);
    overflow: hidden;
    position: fixed;
    bottom:0;
    z-index: 999;
  }
  #revise-area>div{
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
