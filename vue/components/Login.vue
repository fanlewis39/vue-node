<template>
    <div class="banner">
      <div class="sign-top">
        <label>User:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</label><input type="text" id="user">
      </div>
      <div class="sign-bottom">
        <label>Password:&nbsp&nbsp</label><input type="text" id="password" @keyup.enter="signin">
      </div>
      <div class="sign-button">
        <button class="btn btn-info" @click="signin()">Sign in</button>
        <button class="btn btn-link">Sign up</button> 
      </div> 
    </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login:[]
    };
  },
  methods:{
    signin:function() {
      this.axios
        .post(this.$root.URL + "/login", {
          user: document.getElementById('user').value,
          pwd: document.getElementById('password').value
        })
        .then(function(response) {
          console.log(response);
          location.href="http://192.168.0.134:8081/home"
        })
        .catch(function(error) {
          console.log(error);
          alert("账号密码错误");
        });
    }     
    }
};
</script>

<style scoped>
  .banner{
    margin-left: 42%;
    margin-top: 20%;
  }
  .sign-bottom{
    margin-top: 1%;
  }
  .sign-button{
    margin-left: 5%;
    margin-top: 2%;
  }
</style>