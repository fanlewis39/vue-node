<!-- 模板：html结构 -->
<template>
  <div id="app">      
      <router-view></router-view>
  </div>

</template>

<!-- 行为：处理逻辑 -->
<script>

//局部注册组件
// import Users from './components/Users'
// import Header from './components/Header'

export default {
  name: 'App'
}
</script>

<!-- 样式：解决样式 -->
<style>
	html, body {
		height: 100%;
	}
	#app {
		height: 100%;/*找父元素body的高度*/
	}
</style>
