<!-- 模板：html结构 -->
<template>
  <div id="home">
      <vheader></vheader>
      <user></user>
  </div>
</template>

<!-- 行为：处理逻辑 -->
<script>

//局部注册组件
import Users from './Users'
import Header from './Header'

export default {
  name: 'home',
  data(){
    return {
      title:'my first vue projuct' 
    }
  },
  components:{
    "user":Users,
    "vheader":Header
  }
}
</script>

<!-- 样式：解决样式 -->
<style scoped>
    
</style>
