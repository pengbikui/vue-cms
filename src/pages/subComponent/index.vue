<template>
  <div class="subComponent-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入吐槽内容(仅限120字内)" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表吐槽</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key='i'>
        <div class="cmt-title">
          第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | dataFormat}}
        </div>
        <div class="cmt-body">
          {{item.content === 'undefined' ? '此用户很懒' : item.content}}
        </div>
      </div>
    </div>


    <mt-button type="danger" size="large" plain @click='getMore'>加载更多</mt-button>
  </div>
</template>

<style lang='less'>
  .subComponent-container{
    h3{
      font-size: 16px;
    }
    textarea{
       font-size: 14px;
       height:85px;
       margin: 0;
    }
    .cmt-list{
      margin:5px 0;
      .cmt-item{
        font-size: 13px;
        .cmt-title{
          line-height: 35px;
          background-color: #ccc;
        }
        .cmt-body{
          line-height: 35px;
          text-indent: 2em;
        }
      }
    }
  }
</style>

<script>
import {Toast} from "mint-ui";

export default {
  data(){
    return {
      pageIndex:1,
      comments:[] //所有评论数据
    }
  },
  created(){
    this.getsubComponent()
  },
  methods: {
    getsubComponent(){
      this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(result => {
          if (result.body.status === 0){
            //this. comments=result.body.message
            //获取新列表时,不清空之前评论列表
            this.comments=this.comments.concat(result.body.message)
          }else{
             Toast('获取评论列表失败')
          }
      })
    },
    getMore(){
      this.pageIndex++;
      this.getsubComponent()
    }
  },
  props:['id']
}
</script>

