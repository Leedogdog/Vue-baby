<template>
	<div>
		<div class="head">
			<div class="back">
				<router-link to='/login'><img src="/imgs/back.png" alt="" @click="goBack"></router-link>
			</div>
			<div class="title">注册</div>
		</div>
		<div class="wrap">
			<div class="item_phone">
				<i class="phone"></i>
				<input type="text" name="" placeholder="请输入手机号">
				<b></b>
			</div>
			<div class="item">
				<i class="pwd"></i>
				<input type="text" name="" placeholder="请输入密码">
				<b></b>
			</div>
			<div class="btn">
				<router-link to="/">注册</router-link>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
	methods:{
	  	goBack(){
	  		history.back();
	  	}
	  }
	}
</script>

<style scoped>
	.wrap{
		width: 3rem;
	 	margin: .4rem auto 0;
	 	font-size:.16rem;
	}
	.wrap .item{
		position: relative;
	}
	.wrap input{
	 	width: 84%;
	 	height:.4rem;
	 	border: 0;
	 	outline: none;
	 	font-size: .16rem;
	 	border-bottom: 1px solid #a0a0a0;
	 	margin-bottom: .1rem;
	 	margin-left: .5rem;
	 	color:#a0a0a0;
	 	text-indent:0.1rem;
	}
	.item_phone{
		position: relative;
	}
	.item_phone b{
		display: block;
		position: absolute;
		right: 0;
		top:10%;
		width: .3rem;
		height: .3rem;
		background: url('/imgs/close.png') no-repeat center;
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
	.item b{
		display: block;
		position: absolute;
		right: 0;
		top: 10%;
		width: .3rem;
		height: .3rem;
		background: url('/imgs/close.png') no-repeat center;

	}

	.btn{
		height: .4rem;
		line-height: .4rem;
		margin-top:.6rem;
		text-align: center;
	    border-radius: 0.08rem;
        background-color: #ff4965;
	}
	.btn a{
		color: #fff;
	}
	.head{
		display: flex;
		display: -webkit-flex;
		width: 100%;
		height: .5rem;
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
		height: 0.24rem;
    	width: 0.16rem;
		position: absolute;
		left: -0.4rem;
		right: 0;
		bottom: 0;
		top: 0;
		margin:auto;
	}
	.title{
		width: 60vw;
		height: 100%;
		line-height: .5rem;
		text-align: center;
		font-size: .2rem;
		color: #666;
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
</style>