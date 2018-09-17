<template>
	<div class="cartUsers">
		<table class="cart-table">
         <thead>
           <tr>
             <td colspan="3">购物车</td>
           </tr>
           <tr>
            <td>书名</td>
            <td>价格</td>
            <td>操作</td>
          </tr>
         </thead>
         <tbody>
           <tr v-for="(cart, index) in carts" >
             <td>{{cart.name}}</td>
             <td>{{cart.price}}</td>
             <td><button class="btn btn-danger" @click="cancarFromCart(cart, index)">删除</button></td>
           </tr>
           <tr>
             <td>总价:</td>
             <td>{{sum()}}</td>
             <td><button class="btn btn-warning">立即购买</button></td>
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
        carts:[],
        s:[]
    }
  },
  methods:{
    cancarFromCart:function(cart, index){
      this.axios.post(this.$root.URL+'/cancel',{
        id: cart.id
      })
      .then(function (response) {
      console.log(response);
      })
      .catch(function (error) {
      console.log(error);
      });
      this.carts.splice(index, 1);
    },
    sum:function(){
      var result = 0;
      for (var i=0;i<this.carts.length;i++){
        result += this.carts[i].price;
      };
      return result;
    }
  },
   created(){
    this.axios.get(this.$root.URL+'/cart').then((res)=>{this.carts = res.data;});
  }
}
</script>

<style scoped>
    .cartUsers{
      margin:3% 8% 2% 8%;
      box-shadow: 0px 10px 35px rgba( 0, 0, 0, 0.2);

    }
    .cart-table{
      border-radius: 5px;
      font-size: 18px;
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
</script>