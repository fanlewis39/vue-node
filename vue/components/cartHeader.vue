<template>
    <div id="cartHeader">            
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
      name: 'cartHeader',
      data () {
        return { 
        }
    }
}
</script>

<style scoped>

</style>