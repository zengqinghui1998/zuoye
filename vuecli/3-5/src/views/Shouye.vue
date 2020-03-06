<template>
	<div>
		<div class="tops">
			<span>厦门</span>
			<input type="text" placeholder="    输入搜索关键词" />
		</div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in swiperArr">
					<img :src="item.adlist_img" :alt="item.name" />
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<div class="fenleiwenzis">
			<div class="fenleiwenzi" v-for="item in neirong.iconList">
				<div>{{item.CategoryName}}</div>
			</div>
		</div>
		<div class="hui"></div>
		<div>
			<div style="margin: 20px;">为你精选</div>
			<div class="jingxuans">
				<div class="jingxuan">
					<div v-for="(item,index) in neirong.CourseforYou">
						<img :src="item.pro_img[0].url" />
						<h4>{{item.pro_name}}</h4>
						<div style="font-size: 12px;color: silver;">{{item.pro_Joiner}}人已参加</div>
					</div>
				</div>
			</div>
		</div>
		<div class="hui"></div>
		<div class="home">
			<div class="titles">本周最受欢迎Top5</div>
			<div class="neirong">
				<div class="neirongs" v-for="(item,index) in neirong.CourseTop5">
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
	import swipers from 'swiper/dist/css/swiper.min.css';
	import swiper from 'swiper/dist/js/swiper.min.js';
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
				//获取数据
				axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((res) => {
					console.log(res.data.data.CourseforYou)
					this.neirong = res.data.data;
					this.swiperArr = res.data.data.top_ad.list;
				})
		}

	}
</script>

<style scoped="scoped" lang="scss">
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
		margin-left: -60px;
		margin-right: 35px;
	}

	.tops input {
		width: 200px;
		height: 25px;
		border-radius: 5px;
		border: 0;
	}

	.swiper-slide img {
		width: 100%;
		height: 170px;
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

	.fenleiwenzi div {
		font-size: 12px;
		text-align: center;
		line-height: 40px;
		color: white;
		height: 40px;
		background: saddlebrown;
		border-radius: 5px;
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
