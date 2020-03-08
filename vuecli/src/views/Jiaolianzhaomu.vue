<template>
	<div>
		<router-link to="/Shouye">
			<img id="fanhuis" src="../assets/icons/返回.png" />
		</router-link>
		<!-- <div id="fanhui">
			<div id="wenzi">私教加盟</div>
		</div> -->
		<img class="tu1" src="https://img.jvhv.com/images/201903/5c83808abb75e.jpg"/>
		<h3>健身教练月入不过万？因为没遇上加减号！</h3>
		<div class="p1">
			<p>被单一健身馆所束缚，收入水平与场馆运营挂钩</p>
			<p>自身价值得不到最大发挥？</p>
			<p>背负卖卡冲业绩的营销压力中</p>
			<p>无暇提升业务，精进自身水平？</p>
			<p>除了上课，还是上课</p>
			<p>运动财富的转化是否还有更多可能？</p>
		</div>
		<div class="p1">
			<p>在加减号，打破场馆束缚</p>
			<p>健身场馆，自由共享</p>
			<p>提高课程效率，让工作更饱和</p>
		</div>
		<div class="p1">
			<p>在加减号，收入无上限</p>
			<p>课程自定义开发，价格自己定</p>
			<p>自定义课程安排，时间自由</p>
			<p>收益实时提现，财务自由</p>
		</div>
		<div class="p1">
			<p>在加减号，专注做明星教练</p>
			<p>专业督导，业务培训</p>
			<p>社区互动，做全场最亮的星</p>
		</div>
		<div class="p1">
			<p>在加减号，流量变现不是梦</p>
			<p>专属的拓客二唯码，终身享受５％的引流抽成</p>
			<p>更多商户支持，更多流量王法</p>
			<p>人红就有钱！</p>
		</div>
		<div class="p1">
			<p>你的线上工作室</p>
			<p>你的健身财富聚宝盆</p>
			<p>加减号，等你一起来！</p>
		</div>
		<div class="zucexijiao">
			<p>注册成为私教</p>
		</div>
		<div id="bidu"></div>
	</div>
</template>

<script>
	// export default {
	// 	//挂载的函数
	// 	mounted: function() {
	// 			window.addEventListener('scroll', this.handleScroll, false)
	// 	},
	// 	methods: {
	// 		handleScroll: function() {
	// 	      	// console.log(document.documentElement.scrollTop || document.body.scrollTop)
	// 			if(document.documentElement.scrollTop || document.body.scrollTop > 100){
	// 				document.getElementById('fanhui').style.display = 'block';
	// 			}else{
	// 				document.getElementById('fanhui').style.display = 'none';
	// 			}
	// 	    }
	// 	}
	// }
</script>

<style scoped="scoped">
	#bidu{
		width: 100%;
		height: 45px;
	}
	.p1{
		margin-bottom: 20px;
	}
	p{
		padding-left: 10px;
		font-size: 13px;
		margin-top: 10px;
	}
	#fanhuis{
		/* position: fixed; */
		position: absolute;
		width: 30px;
		height: 30px;
		color: white;
		float: right;
		margin: 5px;
		position: fixed;
		z-index: 2;
	}
	#fanhui{
		width: 100%;
		height: 40px;
		display: none;
		position: fixed;
		background: white;
		z-index: 1;
	}
	#wenzi{
		width: 100%;
		height: 40%;
		text-align: center;
		line-height: 40px;
	}
	
	.tu1{
		width: 100%;
		height: 254px;
	}
	h3{
		width: 100%;
		text-align: center;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.zucexijiao{
		display: flex;
		justify-content: center;
	}
	.zucexijiao p{
		position: fixed;
		bottom: 5px;
		width: 90%;
		height: 40px;
		background: #007AFF;
		font-size: 18px;
		color: white;
		text-align: center;
		line-height: 40px;
		border-radius: 10px;
	}
</style>