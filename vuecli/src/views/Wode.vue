<template>
	<div>
		<div class="tops">
			<img class="tops-tu" src="https://www.jvhv.com/wap/static/images/touXiang.svg" />
			<div class="tops-denglu">
				<p>未登录</p>
				<div>加入加减号0天</div>
			</div>
			<div class="tops-shezhi">设置</div>
		</div>
		<div class="yonghu">
			<div class="yonghu1">
				<img style="width: 17px;height: 18px;" src="https://www.jvhv.com/wap/static/images/vip.svg" />
				<p>用户等级</p>
			</div>
			<div class="yonghu1">
				<img style="width: 17px;height: 18px;" src="../assets/icons/星星.png" />
				<p>我的收藏</p>
			</div>
			<div class="yonghu2">
				<p>个人资料修改></p>
			</div>
		</div>
		<div class="fuwu">
			<h3>我的服务</h3>
			<div class="fuwufenlei">
				<div class="fuwufenlei1">
					<img src="../assets/icons/xiaofeijilu.png" />
					<p>消费明细</p>
				</div>
				<div class="fuwufenlei1">
					<img src="../assets/icons/xiaofeijilu.png" />
					<p>我的课程</p>
				</div>
				<div class="fuwufenlei1">
					<img src="../assets/icons/tuandui.png" />
					<p>我的团课</p>
				</div>
				<div class="fuwufenlei1">
					<img src="../assets/icons/qiabao.png" />
					<p>卡包</p>
				</div>
				<div class="fuwufenlei1">
					<img src="../assets/icons/coupon.png" />
					<p>优惠劵</p>
				</div>
				<div class="fuwufenlei1">
					<img src="../assets/icons/kefu.png" />
					<p>联系客服</p>
				</div>
				<div class="fuwufenlei1">
					<img src="../assets/icons/shaozi.png" />
					<p>私教注册</p>
				</div>
				<div class="fuwufenlei1">
					<img src="../assets/icons/商户批量入驻.png" />
					<p>场馆入驻</p>
				</div>
				<div class="fuwufenlei1">
					<img src="../assets/icons/guanyu.png" />
					<p>关于我们</p>
				</div>
				<div class="fuwufenlei1">
					<img src="../assets/icons/app.png" />
					<p>APP下载</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

</script>
<style scoped="scoped">
	.tops {
		width: 100%;
		height: 200px;
		background: #007AFF;
		display: flex;
	}

	.tops-tu {
		width: 50px;
		height: 50px;
		background: white;
		border-radius: 50%;
		margin-top: 100px;
		margin-left: 20px;
	}

	.tops-denglu {
		margin-top: 100px;
		margin-left: 5px;
		color: white;
	}

	.tops-denglu p {
		font-size: 24px;
	}

	.tops-denglu div {
		font-size: 14px;
	}

	.tops-shezhi {
		margin-left: 160px;
		margin-top: 100px;
		color: white;
	}

	.yonghu {
		width: 90%;
		height: 40px;
		margin-top: -20px;
		margin-left: 5%;
		background: white;
		border: 1px solid silver;
		border-radius: 20px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.yonghu1 {
		display: flex;
		font-size: 14px;
	}

	.yonghu2 {
		font-size: 15px;
	}

	.fuwu h3 {
		margin-top: 10px;
		margin-left: 5%;
		margin-bottom: 20px;
	}

	.fuwufenlei {
		display: flex;
		/* justify-content: space-around; */
		flex-wrap: wrap;
		margin-left: 20px;
	}

	.fuwufenlei1 {
		width: 59px;
		height: 45px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 13px;
	}

	.fuwufenlei1 img {
		width: 24px;
		height: 24px;
		margin-bottom: 5px;
	}

	.fuwufenlei1 p {
		width: 59px;
		font-size: 14px;
		text-align: center;
	}
</style>
