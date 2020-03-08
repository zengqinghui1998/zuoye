<template>
	
</template>
<script>
	import axios from 'axios';
	import swiper from '../components/Swiper';
	export default {
		name: 'Fenleiye',
		data: function() {
			return {
				kechengitem: {},
				swiperArr: [],
				lengths: 0
			}
		},
		//挂载的函数
		mounted: function() {
				console.log(this.$route.params.pro_id);
			var pid = parseInt(this.$route.params.pro_id);
			//7.获取数据，将数据保存到变量中
			let params = new URLSearchParams(); //创建新的查询传参对象
			//接口定义了一些实用的方法来处理 URL 的查询字符串
			params.append('pro_id', pid);
			params.append('fid', '');
			axios.post("https://www.jvhv.com/siteindex.php/Lesson/Index2", params).then((res) => {
				console.log(res);
				this.kechengitem = res.data.data;
				console.log(this.kechengitem);
				this.lengths = this.kechengitem.pro_gym_list.length;
				this.swiperArr = res.data.data.pro_imglist;
				console.log(this.swiperArr);
			})
		},
		components:{
			swiper
		}
	
	}
</script>
<style>
	
</style>