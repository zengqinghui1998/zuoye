<template>
	<div>
		<router-link to="/Shouye">
			<div class="fanhui">返回</div>
		</router-link>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in swiperArr">
					<img :src="item.url" :alt="item.name" />
				</div>
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
		<div class="titless">
			<div class="titles2">
				<div class="titles2-0">{{kechengitem.pro_name}}</div>
				<div class="titles2-1">
					<div>按教练约定时间上课</div>
					<div class="titles2-2">0好评</div>
				</div>
			</div>
			<div class="titles3">
				<div>有效期:不限</div>
				<div>场地:学院自行选择预约</div>
			</div>
			<div class="titles4">
				<span>{{kechengitem.pro_price}}.0</span>元
			</div>
		</div>
		<div class="yuyue">
			<div class="yuyue-1">
				<div>可预约场馆</div>
				<span>{{lengths}}</span>
			</div>
			<div class="yuyues">
				<div v-if="lengths == 0" class="zanwu">暂无健身房</div>
				<div class="yuyue-2" v-for="(item,index) in kechengitem.pro_gym_list">
					<img :src="item.gym_headimg[0].url">
					<div class="titles2-2-1">
						<div>{{item.gym_name}}</div>
						<div class="titles2-2-1-2">{{item.gym_address}}</div>
						<div class="titles2-2-1-3">
							<div>{{item.gym_distance}}</div>
							<div class="titles2-2-1-3-2">导航</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="dibu">
			<div>联系客服</div>
			<div>立即购买</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import swipers from 'swiper/dist/css/swiper.min.css';
	import swiper from 'swiper/dist/js/swiper.min.js';
	export default {
		name: 'Myneirong',
		data: function() {
			return {
				kechengitem: {},
				swiperArr: [],
				lengths: 0
			}
		},
		//挂载的函数
		mounted: function() {
			new Swiper('.swiper-container', {
			    pagination: '.swiper-pagination',
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev',
			    paginationClickable: true,
				observer: true,
			    spaceBetween: 30,
			    centeredSlides: true,
			    autoplay: 2500,
			    autoplayDisableOnInteraction: false
			}),
				console.log(this.$route.params.pro_id);
			var pid = parseInt(this.$route.params.pro_id);
			//7.获取数据，将数据保存到变量中
			let params = new URLSearchParams(); //创建新的查询传参对象
			//接口定义了一些实用的方法来处理 URL 的查询字符串
			params.append('pro_id', pid);
			params.append('fid', '');
			axios.post("https://www.jvhv.com/siteindex.php/Lesson/Detail.html", params).then((res) => {
				console.log(res);
				this.kechengitem = res.data.data;
				console.log(this.kechengitem);
				this.lengths = this.kechengitem.pro_gym_list.length;
				this.swiperArr = res.data.data.pro_imglist;
				console.log(this.swiperArr);
			})
		},

	}
</script>

<style scoped="scoped" lang="scss">
	html,
	body {
		position: relative;
		height: 100%;
	}

	body {
		background: #eee;
		font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
		font-size: 14px;
		color: #000;
		margin: 0;
		padding: 0;
	}

	.swiper-container {
		width: 100%;
		height: 233px;

	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;

		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}

	.swiper-slide img {
		width: 100%;
		height: 233px;
	}

	.titless {
		margin-top: -10px;
		width: 100%;
		height: 156px;
		background: white;
		margin-bottom: 10px;
	}

	.titles {
		padding-top: 20px;
	}

	.titles div {
		width: 100%;
		height: 20px;
		position: relative;
		margin-top: 10px;
		font-size: 24px;
	}

	.titles2-0 {
		margin-top: 10px;
		margin-left: 20px;
		font-size: 24px;
		padding-top: 10px;
	}

	.titles2-1 {
		display: flex;
		justify-content: space-between;
		margin: 10px 20px 20px 20px;

	}

	.titles2-2 {
		width: 48px;
		height: 24px;
		background: #4CACFF;
		border-radius: 10px;
		text-align: center;
		line-height: 24px;
		color: white;
	}

	.titles3 {
		display: flex;
		margin: -10px 20px 20px 20px;
	}

	.titles4 {
		margin: -10px 20px 20px 20px;
	}

	.titles4 span {
		font-size: 23px;
		color: red;
	}

	.yuyue {
		width: 100%;
		height: 400px;
		background: white;
	}

	.yuyues {
		display: flex;
		overflow-x: auto;
	}

	.yuyues:-webkit-scrollbar {
		display: none;
	}

	.yuyue-1 {
		width: 90%;
		height: 45px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px 20px 10px;
	}

	.yuyue-1 div {
		font-size: 19px;
	}

	.yuyue-2 {
		width: 175px;
		height: 266px;
		background: whitesmoke;
		border-radius: 12px;
		margin-left: 10px;
	}

	.yuyue-2 img {
		width: 175px;
		height: 120px;
	}

	.titles2-2-1 {
		padding: 10px;
		width: 155px;
		height: 146px;
	}

	.titles2-2-1-2 {
		padding-top: 10px;
		font-size: 14px;
	}

	.titles2-2-1-3 {
		font-size: 12px;
		display: flex;
		justify-content: space-between;
		padding-top: 14px;
	}

	.titles2-2-1-3-2 {
		width: 44px;
		height: 24px;
		background: skyblue;
		color: white;
		text-align: center;
		line-height: 24px;
		border-radius: 10px;
		margin-top: -5px;
	}

	.dibu {
		width: 100%;
		height: 50px;
		background: whitesmoke;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.dibu div {
		width: 40%;
		height: 40px;
		background: skyblue;
		text-align: center;
		line-height: 40px;
		border-radius: 10px;
	}

	.dibu div:nth-of-type(1) {
		background: steelblue;
	}

	.dibu div:nth-of-type(2) {
		color: white;
	}

	.fanhui {
		background: darkgray;
		padding: 5px 10px 5px 10px;
		margin: 10px;
		border-radius: 5px;
		float: left;
	}

	.zanwu {
		width: 100%;
		font-size: 30px;
		text-align: center;
	}
</style>
