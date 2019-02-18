// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'vue-pic-preview'
import Vuex from 'vuex'



//引入插件Vue preview plugin
Vue.use(VueResource)
Vue.use(VuePreview)


//设置请求跟路径
Vue.http.options.root = 'http://www.lovegf.cn:8899';
Vue.http.options.emulateJSON = true;

//定义全局过滤器
Vue.filter('dataFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

//安装vuex
Vue.use(Vuex)
const store = new Vuex.Store({
  state: { //this.$store.state.
    car: [] //购物车商品数据,id,count,price,selected
  },
  mutations: { //this.$store.commit('方法名称','按需传递唯一的参数')
    addToCar(state, goodsinfo) {
      //点击加入购物车,把商品信息保存到store的car
      var flag = false
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      // 如果最终，循环完毕，得到的 flag 还是 false，则把商品数据直接 push 到 购物车中
      if (!flag) {
        state.car.push(goodsinfo)
      }
    }
  },
  getters: { ////this.$store.getters.
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count
      })
      return c
    },
  }
})

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
  store,
  render: h => h(App)
})
