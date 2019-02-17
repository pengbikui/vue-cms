<template>
  <div>
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <a :href="item.url">
          <img :src="item.img" alt>
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  // 如果没有传入 应该是undefined
  props: ['lunbotuList', 'isfull']
}
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    text-align: center;

    img {
      // width: 100%;
      height: 100%;
    }
  }
}

.full {
  width: 100%;
}
</style>
