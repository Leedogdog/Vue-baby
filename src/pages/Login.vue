<template>
	<div class="login">
		<div class="head">
			<div class="back">
				<Back></Back>
			</div>
			<div class="title">登录</div>
			<GoHome></GoHome>
		</div>
		<div class="loginPage">
			<div class="item">
				<i class="phone"></i>
				<input type="text" name="" placeholder="请输入手机号码" @keyup="changePhone" id="phone">
				<b v-show="phoneNotNull" @click="clearPhone"></b>
			</div>
			<div class="item">
				<i class="pwd"></i>
				<input type="password" name="" placeholder="请输入密码" @keyup="changePwd" id="pwd">
				<b v-show="pwdNotNull" @click="clearPwd"></b>
			</div>
			<div class="forget">
				<router-link to="/findpwd">忘记密码</router-link>
			</div>
			<div class="btn">
				<router-link to="/">登录</router-link>
			</div>
			<div class="quick_nav">
				<router-link to="/register">新用户注册</router-link>
				<router-link to="/mobile">手机验证码登录</router-link>
			</div>
		</div>

	</div>
</template>

<script type="text/javascript">
	import Back from '../components/Back.vue';
	import GoHome from '../components/GoHome.vue';

	export default{
		components:{
			Back,
			GoHome
		},
		data(){
			return {
				phoneNotNull:false,
				pwdNotNull:false
			}
		},
		methods:{
			changePhone(e){
				if(e.target.value != "")
					this.phoneNotNull = true;
				else
					this.phoneNotNull = false;
			},
			changePwd(e){
				if(e.target.value != "")
					this.pwdNotNull = true;
				else
					this.pwdNotNull = false;
			},
			clearPhone(){
				document.getElementById("phone").value = "";
				this.phoneNotNull = false;
			},
			clearPwd(){
				document.getElementById("pwd").value = "";
				this.pwdNotNull = false;
			}
		}
	}

</script>

<style scoped>

	.head{
		display: flex;
		display: -webkit-flex;
		width: 100%;
		height: .5rem;
		background:#ff4965;
	}
	.head .goHome{
		line-height:0;
	}
	 .back{
		width: 20vw;
		height: 100%;
		position: relative;
	}
	.back a{
		display: block;
		width: 100%;
		height: 100%
	}
	.back a img{
		display: block;
		width: .2rem;
		height: .2rem;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		margin:auto;
	}
	.title{
		width: 67vw;
		height: 100%;
		line-height: .5rem;
		text-align: center;
		font-size: .2rem;
		color:#fff;
	}
	.index{
		width: 20vw;
		height: 100%;
	}
	.index span{
		display: block;
		width: 100%;
		height: .8rem;
		line-height: .8rem;
		text-align: center;
		font-size: .3rem

	}
	.loginPage{
	 	width: 3rem;
	 	margin: .4rem auto 0;
	 	font-size:.16rem;
	}
	.item{
	 	position: relative;
	}
	.item b{
		display: block;
		position: absolute;
		right: 0;
		top: 20%;
		width: .3rem;
		height: .3rem;
		background: url('/imgs/close.png') no-repeat center;
	}
	.item input{
	 	width: 84%;
	 	height:.5rem;
	 	border: 0;
	 	outline: none;
	 	font-size: .16rem;
	 	border-bottom: 1px solid #a0a0a0;
	 	margin-bottom: .1rem;
	 	margin-left: .5rem;
	 	color:#a0a0a0;
	 	padding-left:0.2rem;
	 	box-sizing:border-box;
	}
	.phone{
		display: block;
		width: .5rem;
		height: .5rem;
		position: absolute;
		left: 0;
		top: 0;
		background: url('/imgs/phone.png') no-repeat center;
	}
	.pwd{
		display: block;
		width: .5rem;
		height: .5rem;
		position: absolute;
		left: 0;
		top: 0;
		background: url('/imgs/pwd.png') no-repeat center;
	}
	.forget{
		width: 100%;
		height: .6rem;
		text-align: right

	}
	.forget a{
		display: inline-block;
		height: .6rem;
		line-height: .6rem;
		font-size: .16rem;
		color: #ff4965;
	}
	.btn{
		height: .4rem;
		line-height: .4rem;
		text-align: center;
	    border-radius: 1rem;
        background-color: #ff4965;

	}
	.btn a{
		display: inline-block;
		color: #fff;
	}
	.quick_nav{
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		height: .4rem;
		line-height: .4rem;
	}
	.quick_nav a{
		color: #ff4965;
	}
</style>