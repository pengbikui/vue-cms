<template>
  <div class="photoInfo-container">
    <h3>{{photoInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{photoInfo.add_time | dataFormat}}</span>
      <span>点击:{{photoInfo.click}}次</span>
    </p>
    <hr>

    <!-- 缩小图 -->
    <div class="thumbs">
      <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
    </div>
    <!-- 图文详情 -->
    <div class="content" v-html="photoInfo.content"></div>
    <!-- 评论子组件 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
//导入评论子组件
import subComponent from '../subComponent'

export default {
  data(){
    return{
      id:this.$route.params.id,
      photoInfo:{ },
      //缩约图素组
      list: []
    }
  },
  created(){
    this. getPhotoInfo();
    this. getThumbs()
  },
  methods:{
    //获取图片详情
    getPhotoInfo(){
      this.$http.get("api/getimageInfo/"+this.id).then(result => {
        if (result.body.status === 0){
          this.photoInfo=result.body.message[0];
        }
      })
    },
    getThumbs(){
      this.$http.get('api/getthumimages/'+this.id).then(result => {
         if (result.body.status === 0){
           //循环每个图片数据
           result.body.message.forEach(item => {
             item.w=600;
             item.h=400;
           });
           this.list=result.body.message
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

<style lang="less">
  .photoInfo-container{
    padding: 5px;
    h3{
      color: skyblue;
      font-size: 15px;
      text-align: center;
      margin: 15px 0;
    }
    .subtitle{
       font-size: 13px;
       color: rgb(94, 94, 95);
       display: flex;
       justify-content:space-between;
     }
     .content{
       font-size: 13px;
       line-height: 25px;
     }
     .thumbs{
       img{
         margin: 2px;
         box-shadow: 0 0 8px #999;
       }
     }
  }
</style>


