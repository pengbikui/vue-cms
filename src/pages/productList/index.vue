<template>
  <div class="productList-container">
    <router-link class="product-item" v-for="item in productList" :key="item.id" :to="'/home/productInfo/'+item.id" tag="div">
      <img :src="item.img_url" alt>
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥{{item.sell_price}}</span>
          <span class="old">¥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link>

    <mt-button type="danger" size="large" plain @click='getMore'>加载更多</mt-button>
  </div>
</template>

<style lang="less" scoped>
  .productList-container{
    padding:7px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    .product-item{
      width: 49%;
      border: 1px solid #ccc;
      box-shadow:0 0 8px #ccc;
      margin:3px 0;
      padding: 2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 293px;
      img{
        width: 100%;
      }
      .title{
        font-size: 14px;
      }
      .info{
        background-color: #eee;
        p{
          margin: 0;
          padding: 5px;
        }
        .price{
          .now{
            color: red;
            font-weight: bold;
            font-size: 16px;
          }
          .old{
            font-size: 13px;
            text-decoration: line-through;
            margin-left: 10px;
          }
        }
        .sell{
          display: flex;
          justify-content:space-between;
          font-size: 12px;
        }
      }
    }
  }
</style>

<script>
export default {
  data(){
    //data是往自己组件内部挂在私有数据
    return {
      pageindex:1, //分页的页数
      productList:[]
    }
  },
  created () {
    this.getProductList()
  },
  methods:{
    //获取商品列表
    getProductList(){
      this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result => {
        if (result.body.status === 0){
          this.productList=this.productList.concat(result.body.message);
        }
      })
    },
    getMore(){
      this.pageIndex++;
      this.getProductList()
    }
  }
}
</script>

