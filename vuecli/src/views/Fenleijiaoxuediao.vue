<template>
	<div>
		jiaoxuedian
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
<style>
	
</style>