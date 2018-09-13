<!-- 模板：html结构 -->
<template>
  <div id="app">
      <router-view></router-view>
      <ul>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/cart">购物车</router-link></li>
      </ul>
  </div>
</template>

<!-- 行为：处理逻辑 -->
<script>

//局部注册组件
import Users from './components/Users'
import Header from './components/Header'

export default {
  name: 'App'
}
</script>

<!-- 样式：解决样式 -->
<style scoped>
    
</style>
