<template>
  <div id="test-item">
    <ul id="list">
      <li @click="goTestDetail(index+1)" v-for="(item, index) in 3">
        <img src="../../static/img/test.png">
        <p class="title">爱情测试：你的落单指数有多高？</p>
        <p class="text">面对爱情，每个人都有不同的表现，有的人全身心...</p>
        <div v-if="type=='regular'" class="regular-test">
          <p class="count">测试过：240<span>评论：0</span></p>
        </div>
        <div v-if="type=='mine'" class="my-test">
          <div class="my-test-wrapper">
            <p class="count">测试过:&nbsp;240<span>评论:&nbsp;0</span></p>
            <p class="delete">删除</p>
            <p class="result" @click.stop="toTestResult">查看测试结果</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  /*
  *  测试列表 适用页面：测试列表页，个人中心我的测试
  *  传参 list:[
      {
        imgPath: '图片路径',
        title: '文章标题',
        text: '文章内容',
        testCount: '测试人数',
        commentCount: '评论人数',
        toPath: '跳转链接'
      },
      ...
    ]
    @params ｛String｝ type 测试显示类型
  *  没有返回值
  * */
  export default {
    data () {
      return {
      }
    },
    methods: {
      goTestDetail (id) {
        this.$router.push({name: 'testDetail', params: {Id: id}})
      },
      toTestResult () {
        this.$router.push({name: 'myTestResult'})
      }
    },
    watch: {
      '$route': ['goTestDetail']
    },
    created () {
    },
    mounted () {
    },
    props: {
      list: {
        type: []
      },
      type: {
        default: 'regular'
      }
    }
  }
</script>
<style scoped>
  #test-item{
    width:100%;
    overflow: hidden;
  }
  #list{
    width:100%;
    overflow: hidden;
  }
  #list>li{
    width:100%;
    height:1.74rem;
    float: left;
    background:#f8f8f8;
    position: relative;
  }
  #list>li:nth-of-type(2n){
    background:#fff !important;
  }
  #list>li>img{
    width:1.74rem;
    height:1.74rem;
    float: left;
  }
  .title{
    font-size:.24rem;
    color:#4c4c4c;
    float: left;
    margin:.3rem 0 0 .18rem;
  }
  .text{
    font-size:.2rem;
    color:#7f7f7f;
    float: left;
    margin:.1rem 0 0 .18rem;
  }
  #list>li>.regular-test{
    position: absolute;
    bottom:.2rem;
    right:.25rem;
  }
  .count{
    font-size:.2rem;
    color:#7f7f7f;
  }
  .count>span{
    margin-left:.21rem;
  }
  .my-test {
    position: absolute;
    bottom: .25rem;
    left: 1.92rem;
    width: 5.58rem;
    font-size:.2rem;
    color:#7f7f7f;
    -webkit-text-size-adjust: none;
  }
  .my-test-wrapper {
    display: flex;
    width: 100%;
  }
  .delete:before {
    display: inline-block;
    content: '';
    width: .16rem;
    height: .19rem;
    margin: 0 .09rem -.03rem .23rem;
    background: url('../../static/img/delete.png') no-repeat;
    background-position: cover;
    background-size: 100%;
  }
  .result {
    margin-left: auto;
    margin-right: .24rem;
    color: #38b9ba;
  }
</style>

