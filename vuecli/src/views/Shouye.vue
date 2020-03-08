<template>
	<div>
		<div class="tops">
			<span>厦门</span>
			<input type="text" placeholder="    输入搜索关键词" />
		</div>
		<swiper :swiperArr='swiperArr' type="shouye"></swiper>
		<div class="fenleiwenzis">
			<div class="fenleiwenzi" v-for="(item,index) in neirong.iconList" :key="index">
				<!-- <router-link to='/fenleidaohang'> -->
				<!-- <router-link :to="'/fenleidaohang/'+item.CategoryName+item.CategoryMemo"> -->
				<router-link :to="{name:'Fenleidaohang',params:{data:item.CategoryMemo+'&tileName='+item.CategoryName}}">
					<div>
						<img :src="require('../assets/icon/'+item.CategoryOrder+'.png')" />
					</div>
					<div class="wenzis">{{item.CategoryName}}</div>
				</router-link>
			</div>
		</div>
		<div class="hui"></div>
		<div>
			<div style="margin: 20px;">为你精选</div>
			<div class="jingxuans">
				<div class="jingxuan">
					<div v-for="(item,index) in neirong.CourseforYou" :key="index">
						<router-link :to="'/Myneirong/'+item.pro_id">
							<img :src="item.pro_img[0].url" />
							<h4>{{item.pro_name}}</h4>
							<div style="font-size: 12px;color: silver;">{{item.pro_Joiner}}人已参加</div>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="hui"></div>
		<div class="home">
			<div class="titles">本周最受欢迎Top5</div>
			<div class="neirong">
				<div class="neirongs" v-for="(item,index) in neirong.CourseTop5" :key="index">
					<router-link :to="'/Myneirong/'+item.pro_id">
						<img :src="item.pro_img[0].url">
						<div class="neirongs1">
							<div>{{item.pro_name}}</div>
							<p>{{item.pro_Joiner}}人已参加</p>
						</div>
					</router-link>
				</div>
			</div>
		</div>
		<div class="di"></div>
	</div>
</template>

<script>
	import axios from 'axios';
	import swiper from '../components/Swiper';
	export default {
		name: 'Shouye',
		data: function() {
			return {
				neirong: [],
				swiperArr: [],
			}
		},
		//挂载的函数
		mounted: function() {
				//获取数据
				axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((res) => {
					// console.log(res.data.data)
					this.neirong = res.data.data;
					this.swiperArr = res.data.data.top_ad.list;
				}),
				this.$router.afterEach((to,from)=>{
					window.scrollTo(0,0);
				})
		},
		components:{
			swiper
		},

	}
</script>

<style scoped="scoped" lang="scss">
	body,*{
		padding: 0;
		margin: 0;
	}
	.wenzis{
		width: 40px;
		text-align: center;
		font-size: 12px;
	}
	.tops {
		width: 100%;
		height: 50px;
		background: dodgerblue;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.tops span {
		position: relative;
		color: white;
		margin-left: 0px;
		margin-right: 35px;
	}

	.tops input {
		width: 70%;
		height: 35px;
		margin-right: 20px;
		border-radius: 5px;
		border: 0;
		font-size: 16px;
	}

	.fenleiwenzis {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.fenleiwenzi {
		margin-top: 15px;
		margin-left: 8%;
		width: 10%;
	}
	.fenleiwenzi a{
		text-decoration: none;
		color: black;
	}
	.fenleiwenzis-2 {
		font-size: 12px;
		// text-align: center;
		// line-height: 40px;
		color: white;
		// border-radius: 5px;
	}

	.hui {
		width: 100%;
		height: 5px;
		background: whitesmoke;
		margin-top: 15px;
	}

	.jingxuan {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.jingxuan a{
		color: black;
		text-decoration: none;
	}
	.jingxuan div {
		position: relative;
		margin-bottom: 10px;
	}

	.jingxuan img {
		width: 165px;
		height: 110px;
		border-radius: 10px;
		z-index: 1;
	}

	.di {
		width: 100%;
		height: 50px;
	}

	.home {
		/* position: absolute; */
		width: 90%;
		height: 517px;
		border-radius: 13px;
		margin: 5%;
		background: steelblue;
	}

	.titles {
		color: white;
		font-size: 18px;
		padding: 20px 0px 0px 20px;
	}

	.neirong {
		width: 90%;
		height: 440px;
		border-radius: 10px;
		background: white;
		margin: 5%;
	}

	.neirongs a {
		width: 100%;
		height: 110px;
		border-bottom: 1px solid silver;
		background: white;
		align-items: center;
		display: flex;
	}

	.neirongs img {
		width: 75px;
		height: 75px;
		margin: 17.5px;
		border-radius: 10px;
	}

	.neirongs1 p {
		font-size: 13px;
		color: #7E7E7E;
	}

	.neirongs1 div {
		color: #000000;
	}
</style>
