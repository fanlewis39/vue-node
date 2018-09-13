<template>
    <div id="title">
        <p>{{title}}</p>
    </div>
</template>

<script>
export default {
  name: 'Tname',
  data () {
    return {
        title:"BOOKSTORE"
    }
  }
}
</script>

<style scoped>
    #title{
    	padding: 0;
    	height: 100px;
    	line-height: 100px;
    	background-color: #abcdef;
    	color: white;
    	text-align: center;
    	font-size: 35px;
    }
    p{
    	margin:0;
    }
</style>