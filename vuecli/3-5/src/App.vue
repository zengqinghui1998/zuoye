<template>
	<div id="app">
		<div id="nav">
			<router-link to="/Shouye">
				<img src="https://www.jvhv.com/wap/static/images/footer_1_red.png" />
				<div>首页</div>
			</router-link>
			<router-link to="/Faxian">
				<img src="https://www.jvhv.com/wap/static/images/footer_6_red.png" />
				<div>发现</div>
			</router-link>
			<router-link to="/Xiaoxi">
				<img src="https://www.jvhv.com/wap/static/images/footer_8_red.png" />
				<div>消息</div>
			</router-link>
			<router-link to="/Wode">
				<img src="https://www.jvhv.com/wap/static/images/footer_5_red.png" />
				<div>我的</div>
			</router-link>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
	body,
	* {
		margin: 0;
		padding: 0;
	}

	#nav {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 50px;
		background: whitesmoke;
		display: flex;
		justify-content: space-around;
		align-items: center;
		z-index: 2;
	}
	#nav img{
		position: absolute;
		width: 27px;
		height: 27px;
		margin-top: -20px;
	}
	#nav div{
		position: absolute;
		font-size: 14px;
		margin-top: 5px;
	}
	#nav a {
		color: black;
		text-decoration: none;
		margin-right: 20px;
	}
</style>
