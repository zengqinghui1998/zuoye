<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item,index) in swiperArr" :key="index">
				<div v-if="type == 'shouye'">
					<img v-if="index == 0" :src="item.adlist_img" :alt="item.name" />
					<router-link v-if="index == 1" to="/Jiaolianzhaomu">
						<img :src="item.adlist_img" :alt="item.name" />
					</router-link>
					<router-link v-if="index == 2" to="/Myneirong/127">
						<img :src="item.adlist_img" :alt="item.name" />
					</router-link>
				</div>
				<img v-if="type == 'top5neirong'" :src="item.url" :alt="item.name" style="width: 100%;height: 233px;"/>
			</div>
		</div>
		<div class="swiper-pagination"></div>
		<div  v-if="type == 'top5neirong'" class="swiper-button-next"></div>
		<div  v-if="type == 'top5neirong'" class="swiper-button-prev"></div>
	</div>
</template>

<script>
	//引入swiper
	import Swiper from 'swiper';
	//引入swiper的css
	import 'swiper/dist/css/swiper.css';
		export default {
			props:['swiperArr','type'],
			name:"swiper",
			mounted:function(){
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
				})
			}
		}
</script>

<style lang="scss">
	.swiper-slide img {
		width: 100%;
		height: 170px;
	}
</style>