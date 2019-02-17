<template>
 <comment-box :id="$route.params.id"></comment-box>
</template>

<script>
import subComponent from '../subComponent'

export default {
  components:{
    //注册子组件
    'comment-box':subComponent
  }
}
</script>
