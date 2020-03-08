<template>
	<div>
		<div class="kechengxinxi">
			<div class="kechengxinxi-0">课程信息</div>
			<div class="kechengxinxi-1">
				<div v-if="kechengxinxi.length == 0" class="jingxuankecheng-0-0">
					<div class="wen">
						<img src="https://www.jvhv.com/wap/static/images/none.svg" />
					</div>
					<div class="wen">
						<p>暂无课程</p>
					</div>
				</div>
				<div v-for="(item,index) in kechengxinxi" :key="index">
					<div class="kechengxinxi-3">
						<img :src="item.pro_img[0].url" />
						<div class="kechengxinxi-2">
							<h4>{{item.pro_name}}</h4>
							<span>¥{{item.pro_price}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="hui"></div>
		<div class="jingxuankecheng">
			<div class="kechengxinxi-0">精选课程</div>
			<div class="jingxuankecheng-0">
				<div v-if="jingxuankecheng.length == 0" class="jingxuankecheng-0-0">
					<div class="wen">
						<img src="https://www.jvhv.com/wap/static/images/none.svg" />
					</div>
					<div class="wen">
						<p>暂无精选课程</p>
					</div>
				</div>
				<div v-for="(item,index) in jingxuankecheng" :key="index">
					<div class="jingxuankecheng-1">
						<div class="jingxuankecheng-2">
							<h4 style="font-size: 17px;">{{item.pro_name}}</h4>
							<div>有效期：
								<span>{{item.pro_active_date_text}}</span>
								<span v-if="item.pro_setprice_quantity">/{{item.pro_setprice_quantity}}<span>课时</span></span>
							</div>
							<div>时间：{{item.pro_timestr}}</div>
							<div>场地：{{item.pro_placestr}}</div>
							<div>价格：<span style="color: red;font-size: 17px;">{{item.pro_price}}</span><span style="font-size: 12px;color: red;">.0元</span></div>
						</div>
						<div class="jingxuankecheng-3">
							<img :src="item.pro_img[0].url" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-if="jingxuankecheng.length" class="chakankecheng">查看更多课程</div>
	</div>
</template>
<script>
	import axios from 'axios';
	import swiper from '../components/Swiper';
	export default {
		name: 'Fenleidaohang',
		data: function() {
			return {
				kechengxinxi: [],
				jingxuankecheng:[]
			}
		},
		//挂载的函数
		mounted: function() {
			console.log(this.$route.params)
			var myclass = parseInt(this.$route.params.id);
			this.myclass1 = myclass;
			//7.获取数据，将数据保存到变量中
			let params = new URLSearchParams(); //创建新的查询传参对象
			//接口定义了一些实用的方法来处理 URL 的查询字符串
			params.append('class', myclass);
			params.append('fid', '');

			// console.log(params);
			axios.post("https://www.jvhv.com/siteindex.php/Lesson/Index2", params).then((res) => {
				this.kechengxinxi = res.data.data.top_lesson;
				this.jingxuankecheng = res.data.data.lesson_list.list;
				console.log(this.jingxuankecheng);
			})
		},
		components: {
			swiper
		}
	}
</script>
<style lang="scss" scoped="scoped">
	body {
		background: black;
	}
	.wen{
		display: flex;
		justify-content: center;
		margin-top: 30px;
	}
	.wen img{
		width: 130px;
		height: 130px;
	}
	p{
		color: silver;
	}

	.kechengxinxi-0 {
		margin: 15px;
		font-size: 20px;
	}

	.kechengxinxi-1 {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
	}
	.kechengxinxi-3{
		width: 165px;
	}
	.kechengxinxi-1 img {
		width: 165px;
		height: 110px;
		border-radius: 5px;
	}

	.kechengxinxi-2 {
		display: flex;
		justify-content: space-between;
	}

	.kechengxinxi-2 span {
		font-size: 14px;
		color: red;
	}
	.hui{
		margin-top: 20px;
		width: 100%;
		height: 8px;
		background: whitesmoke;
	}
	.jingxuankecheng-3 img{
		width: 113px;
		height: 129px;
		object-fit:cover
	}
	.jingxuankecheng-2{
		height: 129px;
		font-size: 14px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.jingxuankecheng-1{
		width: 100%;
		height: 129px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-bottom: 10px;
		border-bottom: 1px solid whitesmoke;
		margin-bottom: 10px;
	}
	.chakankecheng{
		width: 100%;
		height: 40px;
		color: deepskyblue;
		text-align: center;
		line-height: 40px;
	}
</style>
