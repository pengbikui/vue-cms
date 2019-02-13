// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求跟路径
Vue.http.options.root='http://www.lovegf.cn:8899';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './libs/mui/css/mui.min.css'
import './libs/mui/css/icons-extra.css'


Vue.use(MintUI)
Vue.router
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
