// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import qs from 'qs'
import xys from './common/js/config'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.min.css'
import $ from 'jquery'

import '@/common/styl/base.styl'
import '@/common/styl/mint-ui.styl'

Vue.use(MintUI)
Vue.config.productionTip = false
axios.defaults.baseURL = 'https://wtf-api.xys.ren/1/267/interface' // 正式
// axios.defaults.baseURL = 'http://120.27.194.197/1/206/interface' // 测试
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.interceptors.request.use(function (config) {
  // 请求前对post数据进行处理
  if (config.method === 'post') {
    if (config.data.xysPostFormData) {
      config.data = config.data.xysPostFormData
    } else {
      config.data = qs.stringify(config.data)
    }
  }
  return config
}, function (error) {
  // 请求出错x
  return Promise.reject(error)
})

Vue.prototype.$http = axios
Vue.prototype.$xys = xys
Vue.prototype.$eventBus = new Vue()
Vue.prototype.$j = $
Vue.prototype.$mint = MintUI
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
