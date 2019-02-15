<template>
  <div class="newsInfo-container">
    <!-- 标题 -->
    <h3 class="title">{{newsInfo.title}}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间:{{newsInfo.add_time | dataFormat}}</span>
      <span>点击:{{newsInfo.click}}次</span>
    </p>
    <hr>
    <!--内容 -->
    <div class="content" v-html="newsInfo.content"></div>
    <!-- 评论 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template> 

<script>
//1.导入评论子组件
import subComponent from '../subComponent'


import {Toast} from "mint-ui";

export default {
  data(){
    return {
      id:this.$route.params.id,
      newsInfo:{}
    };
  },
  created(){
    this.getNewsInfo();
  },
  methods:{
    getNewsInfo(){//获取新闻详情
      this.$http.get("api/getnew/"+this.id).then(result => {
        if (result.body.status === 0){
          this.newsInfo=result.body.message[0];
        }else{
          Toast('获取新闻详情失败')
        }
      })
    }
  },
  components:{
    //注册子组件
    'comment-box':subComponent
  }
}
</script>

<style lang='less'>
   .newsInfo-container{
     padding:0 5px;
     .title{
       font-size: 16px;
       text-align: center;
       margin: 15px 0;
       color: red;
     }
     .subtitle{
       font-size: 14px;
       color: blue;
       display: flex;
       justify-content:space-between;
     }
     .content{
       img{
         width: 100%;
       }
     }
   }
</style>
