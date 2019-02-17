import Vue from 'vue'
import Router from 'vue-router'
//对应的路由组件
import homeComponent from '../pages/home'
import memberComponent from '../pages/member'
import shopcarComponent from '../pages/shopcar'
import searchComponent from '../pages/search'
import newsListComponent from '../pages/newsList'
import newsInfoComponent from '../pages/newsInfo'
import photoListComponent from '../pages/photoList'
import photoInfoComponent from '../pages/photoInfo'
import productListComponent from '../pages/productList'
import productInfoComponent from '../pages/productInfo'
import goodsDescComponent from '../pages/goodsDesc'
import goodsCommentComponent from '../pages/goodsComment'



Vue.use(Router)
//创建路由对象
export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path: '/home',component: homeComponent},
    {path: '/member',component: memberComponent},
    {path: '/shopcar',component: shopcarComponent},
    {path: '/search',component: searchComponent},
    {path: '/home/newsList',component: newsListComponent},
    {path:'/home/newsInfo/:id',component: newsInfoComponent},
    {path: '/home/photoList',component: photoListComponent},
    {path:'/home/photoInfo/:id',component:photoInfoComponent},
    {path:'/home/productList',component:productListComponent},
    {path:'/home/productInfo/:id',component:productInfoComponent},
    {path:'/home/goodsDesc/:id',component:goodsDescComponent},
    {path: '/home/goodsComment/:id', component: goodsCommentComponent }
  ],
  linkActiveClass:'mui-active'
})

