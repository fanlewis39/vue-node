<template>
  <div class="Cart">
       <table class="cart-table">
         <thead>
           <tr>
             <td colspan="2">购物车</td>
           </tr>
           <tr>
            <td>书名</td>
            <td>价格</td>
          </tr>
         </thead>
         <tbody>
           <tr v-for="cart in carts">
             <td>{{cart.name}}</td>
             <td>{{cart.price}}</td>
           </tr>
         </tbody>
       </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
        carts:[]
    }
  },
   created(){
    this.axios.get('http://192.168.0.134:8082/cart').then((res)=>{this.carts = res.data;});
  }
}
</script>

<style scoped>
    .Cart{
      margin:3% 8% 2% 8%;
      box-shadow: 0px 10px 35px rgba( 0, 0, 0, 0.2);

    }
    .cart-table{
      border-radius: 5px;
      font-size: 20px;
      width: 100%;
      
    }
    .cart-table tr td{
      border-right: 1px solid #fff;
      border-bottom: 1px solid #fff;
      text-align: center;
      padding: 15px;
    }
    .cart-table thead td{
      background: #0394dea1;
    }
    .cart-table tbody td{
      background: #ebebeb;
    }

    @media(max-width: 768px){
      .cart-table{
        width: 100%;
      }
    }
</style>
