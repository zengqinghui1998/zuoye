<template>
	<div>
		<router-link to="/Shouye">
			<img id="fanhuis" src="../assets/icons/返回.png" />
		</router-link>
		<swiper :swiperArr='swiperArr' type="shouye"></swiper>
		<div class="ziluyou">
			<router-link :to="'/Fenleidaohang/'+myclass1+'/fenleikecheng'">课程</router-link>
			<router-link :to="'/Fenleidaohang/'+myclass1+'/fenleijiaoxuediao'">教学点</router-link>
			<router-link :to="'/Fenleidaohang/'+myclass1+'/fenleijiaolian'">教练</router-link>
		</div>
		<div class="hui"></div>
		<router-view></router-view>
	</div>
</template>
<script>
	import axios from 'axios';
	import swiper from '../components/Swiper';
	export default {
		name: 'Fenleidaohang',
		data: function() {
			return {
				kechengitem: [],
				swiperArr: [],
				myclass1: ''
			}
		},
		//挂载的函数
		mounted: function() {
			// console.log(this.$route.params)
			var myclass = parseInt(this.$route.params.id);
			this.myclass1 = myclass;
			//7.获取数据，将数据保存到变量中
			let params = new URLSearchParams(); //创建新的查询传参对象
			//接口定义了一些实用的方法来处理 URL 的查询字符串
			params.append('class', myclass);
			params.append('fid', '');

			console.log(params);
			axios.post("https://www.jvhv.com/siteindex.php/Lesson/Index2", params).then((res) => {
				console.log(res.data.data);
				this.swiperArr = res.data.data.top_ad.list;
			})
		},
		components: {
			swiper
		}
	}
</script>
<style scoped="scoped" lang="scss">
	body,
	* {
		padding: 0;
		margin: 0;
	}

	#fanhuis {
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

	.ziluyou {
		margin-top: 20px;
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: space-around;
		align-items: center;

		a {
			text-decoration: none;
			font-weight: bold;
			color: silver;
			height: 30px;
			&.router-link-exact-active {
				
				color: darkblue;
				border-bottom: 2px solid darkblue;
			}
		}
	}
	.hui{
		width: 100%;
		height: 8px;
		margin-top: -3px;
		background: whitesmoke;
	}
</style>
