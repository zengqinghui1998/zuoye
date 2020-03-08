<template>
	<div>
		<div style="width: 100%;height: 1px;background: black;margin-top: -5px;position: fixed;"></div>
		<div class="tupians">
			<div class="tupian" v-for="(item,index) in list" :key="index">
					<img v-if="item.tre_img" :src="item.tre_img[0].url" />
					<p>{{item.tre_descr}}</p>
					<div class="tupian-1">
						<div class="tupian-1" v-if="item.user.name">
							<img style="width: 35px;height: 35px;border-radius: 50%;" :src="item.user.headimgurl[0].url" />
							<span style="margin-left: 3px;font-size: 13px;">{{item.user.name}}</span>
						</div>
						<div>
							<img style="width: 16px;height: 16px;" src="../assets/icons/点赞.png" />
							<span style="color:silver;">{{item.goodCnt}}</span>
						</div>
					</div>
			</div>
		</div>
		<div class="tishi">
			<p>暂无更多数据</p>
		</div>
		<div style="width: 100%;height: 100px;"></div>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		name: 'faxian',
		data: function() {
			return {
				list:[]
			}
		},
		//挂载的函数
		mounted: function() {
				// console.log(this.$route.params.pro_id);
			var pid = parseInt(this.$route.params.pro_id);
			//7.获取数据，将数据保存到变量中
			let params = new URLSearchParams(); //创建新的查询传参对象
			//接口定义了一些实用的方法来处理 URL 的查询字符串
			params.append('pro_id', pid);
			params.append('fid', '');
			axios.post("https://www.jvhv.com/siteindex.php/Trends/Index.html", params).then((res) => {
				// console.log(res.data.data.list);
				this.list = res.data.data.list;
				// console.log(this.list)
			})
		}
	}
</script>
<style>
	.tupian{
		width: 45%;
		height: 320px;
		margin: 5px;
		margin-bottom: 20px;
	}
	.tupian img{
		width: 100%;
		height: 240px;
		border-radius: 5px;
		object-fit:cover
	}
	.tupian p{
		width: 170px;
		height: 40px;
		line-height: 40px;
		overflow: hidden;
		margin-top: 5px;
		margin-bottom: 5px;
	}
	.tupian-1{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.tupians{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.tishi{
		margin-top: 20px;
		display: flex;
		justify-content: center;
	}
</style>