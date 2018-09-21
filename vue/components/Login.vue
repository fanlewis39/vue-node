<template>
	<div class="login">
		<div class="outer">
			<div class="banner" >
				<!-- <img src="../book.jpg"> -->
				<div class="sign-up">
					<label>User:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</label>
					<input v-model="user" type="text" id="user"/>
				</div>
				<div class="sign-down">
					<label>Password:&nbsp&nbsp</label>
					<input v-model="password" type="password" id="password" @keyup.enter="signin"/>
				</div>
				<div class="sign-button">
					<button class="btn btn-info" @click="signin()">Sign in</button>
					<button class="btn btn-link">Sign up</button> 
				</div> 
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				login:[],
				user: '',
				password: ''
			};
		},
		methods:{
			signin: function() {
				console.log({user: this.user, pass: this.pass});
				this.axios.post(this.$root.URL + "/login", {
					user: this.user,
					pwd: this.password,
				}).then(function(response) {
					console.log(response);
					location.href="http://192.168.0.134:8081/home"
				}).catch(function(error) {
					console.log(error);
					alert("账号密码错误");
				});
			},
		}
	};
</script>

<style scoped>
.login,.outer,.sign-button{
	display: flex;
	justify-content: center;
	align-items: center;
}
.login{
	width: 100%;
	height: 100%;
	background-image: url(../book.jpg);
	background-size: 100% 100%;
}
.outer{
	position: absolute;
	width: 25%;
	height: 35%;
	background-color: #ffffff6e;
	border-radius: 2em;
}
.sign-up,.sign-down{
	margin-top: 10%;
}
.sign-button{
	margin-top: 18%;
}
</style>