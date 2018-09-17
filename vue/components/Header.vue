<template>
    <div id="title">
        <p>{{title}}</p>             
        <nav class="navbar navbar-default">
            <div class="menu">
                <ul class="nav navbar-nav">
                    <li><router-link to="/">home</router-link></li>
                    <li><router-link to="/cart">购物车</router-link></li>
                </ul>
            </div>
        </nav> 
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
}
p{
   margin:0;
   font-size: 35px;
}

</style>