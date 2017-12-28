<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import test from './components/head-tab'

export default {
  name: 'app',
  data () {
    return {
      selected: 'home'
    }
  },
  components: {
  }
}
</script>

<style lang="stylus">
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  max-width: 8rem;
  margin: 0 auto;
}

// img{
//   border:none;
//   vertical-align:top;
//   object-fit: cover;
// }

.swiper-pagination{
  bottom:0 !important;
}
.swiper-pagination-bullet{
  width:.12rem !important;
  height:.12rem !important;
  background:#fff !important;
  opacity:1 !important;
}
.swiper-pagination-bullet-active{
  background:#ff2828 !important;
}
</style>
