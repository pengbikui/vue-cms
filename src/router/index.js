import Vue from 'vue'
import Router from 'vue-router'
//对应的路由组件
import homeComponent from '../pages/home'
import memberComponent from '../pages/member'
import shopcarComponent from '../pages/shopcar'
import searchComponent from '../pages/search'
import newsListComponent from '../pages/newsList'

Vue.use(Router)
//创建路由对象
export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path: '/home',component: homeComponent},
    {path: '/member',component: memberComponent},
    {path: '/shopcar',component: shopcarComponent},
    {path: '/search',component: searchComponent},
    {path: '/home/newsList',component: newsListComponent}
  ],
  linkActiveClass:'mui-active'
})

