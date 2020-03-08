<template>
	<div>
		jsdfkja
	</div>
</template>
<script>
	import axios from 'axios';
	import swiper from '../components/Swiper';
	export default {
		name: 'Fenleidaohang',
		data: function() {
			return {
				kechengitem: {},
				swiperArr: [],
				lengths: "",
				activeName: 'second',
				jiaolians:[],
				myhtml:""
			}
		},
		//挂载的函数
		mounted: function() {
			console.log(typeof this.$route.params.data);
			var pid = this.$route.params.data;
			// var str = "https://www.jvhv.com/wap";
			// var str1 = str + pid;
			//7.获取数据，将数据保存到变量中
			let params = new URLSearchParams(); //创建新的查询传参对象
			//接口定义了一些实用的方法来处理 URL 的查询字符串
			// params.append('title', pid);
			params.append('pid', '');
			axios.post("https://www.jvhv.com/wap"+params).then((res) => {
				console.log(res);
				// this.kechengitem = res.data.data;
				// // console.log(this.kechengitem.pro_coach_list);
				// this.lengths = this.kechengitem.pro_gym_list.length;
				// // console.log(this.lengths)
				// this.swiperArr = res.data.data.pro_imglist;
				// this.jiaolians = res.data.data.pro_coach_list;
				// console.log(this.kechengitem)
				// this.myhtml =  res.data.data.pro_descr;
				// // console.log(this.swiperArr);
			})
		},
		methods: {
			handleClick(tab, event) {
				// console.log(tab, event);
			}
		},
		components: {
			swiper
		}
	}

</script>
<style scoped="scoped">
	body{
		background: #000000;
	}
</style>