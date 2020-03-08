<template>
	<div>
		<router-view></router-view>
		<router-link to="/Shouye">
			<img id="fanhuis" src="../assets/icons/返回.png" />
		</router-link>
		<swiper :swiperArr='swiperArr' type='top5neirong'></swiper>
		<!-- <div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in swiperArr">
					<img :src="item.url" :alt="item.name" />
				</div>
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div> -->
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
				<span>{{kechengitem.pro_price}}</span><span>.0</span>元
			</div>
		</div>
		<div class="hui"></div>
		<div class="yuyue">
			<div class="yuyue-1">
				<div>可预约场馆</div>
				<span>{{lengths}}</span>
			</div>
			<div class="yuyues">
				<div v-if="lengths == 0" class="zanwu">暂无健身房</div>
				<div class="yuyue-2" v-for="(item,index) in kechengitem.pro_gym_list" :key="index">
					<img :src="item.gym_headimg[0].url">
					<div class="titles2-2-1">
						<div class="titles2-2-1-1">{{item.gym_name}}</div>
						<div class="titles2-2-1-2">{{item.gym_address}}</div>
						<div class="titles2-2-1-3">
							<div>{{item.gym_distance}}</div>
							<div class="titles2-2-1-3-2">导航</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="hui"></div>
		<div class="yuejiaolian">
			<div class="yuejiaolian-0">可预约教练</div>
			<el-tabs value="third"  @tab-click="handleClick" class="zigedaohang">
				<el-tab-pane label="二星" name="first" class="jiaolians">
					<div v-for="(item,index) in jiaolians" :key="index">
						<div v-if="item.coach_grade == 2" class="jiaolian">
							<img class="jiaolian-0" :src="item.coach_headImg[0].url" />
							<div class="jiaolian-1">{{item.coach_name}}</div>
							<div class="jiaolian-2">
								<span>
									<span>好评率</span>
									<span>{{item.coach_rate}}</span>%
								</span>
								<span>
									<span>已上课</span>
									<span>{{item.coach_lesson_total}}</span>节
								</span>
							</div>
							<div class="jiaolian-3">
								<span>
									<span>差点：</span>
									<span>{{item.coach_verge}}</span>
								</span>
							</div>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="三星" name="second">
					<div v-for="(item,index) in jiaolians" :key="index">
						<div v-if="item.coach_grade == 3" class="jiaolian">
							<img class="jiaolian-0" :src="item.coach_headImg[0].url" />
							<div class="jiaolian-1">{{item.coach_name}}</div>
							<div class="jiaolian-2">
								<span>
									<span>好评率</span>
									<span>{{item.coach_rate}}</span>%
								</span>
								<span>
									<span>已上课</span>
									<span>{{item.coach_lesson_total}}</span>节
								</span>
							</div>
							<div class="jiaolian-3">
								<span>
									<span>差点：</span>
									<span>{{item.coach_verge}}</span>
								</span>
							</div>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="四星" name="third">
					<div v-for="(item,index) in jiaolians" :key="index">
						<div v-if="item.coach_grade == 4" class="jiaolian">
							<img class="jiaolian-0" :src="item.coach_headImg[0].url" />
							<div class="jiaolian-1">{{item.coach_name}}</div>
							<div class="jiaolian-2">
								<span>
									<span>好评率</span>
									<span>{{item.coach_rate}}</span>%
								</span>
								<span>
									<span>已上课</span>
									<span>{{item.coach_lesson_total}}</span>节
								</span>
							</div>
							<div class="jiaolian-3">
								<span>
									<span>差点：</span>
									<span>{{item.coach_verge}}</span>
								</span>
							</div>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="五星" name="fourth">
					<div v-for="(item,index) in jiaolians" :key="index">
						<div v-if="item.coach_grade == 5" class="jiaolian">
							<img class="jiaolian-0" :src="item.coach_headImg[0].url" />
							<div class="jiaolian-1">{{item.coach_name}}</div>
							<div class="jiaolian-2">
								<span>
									<span>好评率</span>
									<span>{{item.coach_rate}}</span>%
								</span>
								<span>
									<span>已上课</span>
									<span>{{item.coach_lesson_total}}</span>节
								</span>
							</div>
							<div class="jiaolian-3">
								<span>
									<span>差点：</span>
									<span>{{item.coach_verge}}</span>
								</span>
							</div>
						</div>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
		<div class="hui" style="margin-top: 20px;"></div>
		<div class="kecheng">
			<h2 style="margin: 10px 0px 20px 5px;">课程内容</h2>
			<div v-html="myhtml" class="myhtml"></div>
		</div>
		<div class="hui" style="margin-top: 20px;"></div>
		<div class="huiyuan">
			<div class="yuejiaolian-0">会员评价</div>
		</div>
		<div class="hui" style="margin-top: 20px;"></div>
		<div class="yueke">
			<div class="yuejiaolian-0">约课流程</div>
			<div class="yuekes">
				<div class="yueke-0">1.购买</div>
				<div class="yueke-0">2.约课</div>
				<div class="yueke-0">3.签到</div>
				<div class="yueke-0">4.评价</div>
				<div class="yueke-1">规则详细</div>
			</div>
		</div>
		
		<div class="di"></div>
		<div class="dibu">
			<div>联系客服</div>
			<div>立即购买</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import swiper from '../components/Swiper';
	export default {
		name: 'Myneirong',
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
			console.log(this.$route.params);
			var pid = parseInt(this.$route.params.pro_id);
			//7.获取数据，将数据保存到变量中
			let params = new URLSearchParams(); //创建新的查询传参对象
			//接口定义了一些实用的方法来处理 URL 的查询字符串
			params.append('pro_id', pid);
			params.append('fid', '');
			axios.post("https://www.jvhv.com/siteindex.php/Lesson/Detail.html", params).then((res) => {
				// console.log(res);
				this.kechengitem = res.data.data;
				// console.log(this.kechengitem.pro_coach_list);
				this.lengths = this.kechengitem.pro_gym_list.length;
				// console.log(this.lengths)
				this.swiperArr = res.data.data.pro_imglist;
				this.jiaolians = res.data.data.pro_coach_list;
				// console.log(this.kechengitem)
				this.myhtml =  res.data.data.pro_descr;
				// console.log(this.swiperArr);
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
	#fanhuis{
		position: absolute;
		width: 30px;
		height: 30px;
		color: white;
		float: right;
		margin: 5px;
		position: fixed;
		z-index: 2;
	}
	.swiper-container {
		width: 100%;
		height: 233px;
		z-index: 1;
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

	.hui {
		width: 100%;
		height: 8px;
		background: whitesmoke;
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

	.titles2-2-1:-webkit-scrollbar {
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
		// height: 266px;
		background: whitesmoke;
		border-radius: 12px;
		margin-left: 10px;
	}

	.yuyues::-webkit-scrollbar {
		display: none;
	}

	.yuyue-2 img {
		width: 175px;
		height: 120px;
	}

	.titles2-2-1 {
		padding: 10px;
		width: 155px;
		height: 146px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.titles2-2-1-1 {
		width: 155px;
		font-size: 14px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

	}

	.titles2-2-1-2 {
		width: 155px;
		padding-top: 10px;
		font-size: 14px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

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

	.di {
		width: 100%;
		height: 50px;
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

	.yuejiaolian-0 {
		font-size: 19px;
		margin: 20px 0px 10px 10px;
	}
	.jiaolian{
		width: 175px;
		height: 211px;
		margin: 5px;
		background: whitesmoke;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.jiaolian-0{
		width: 70px;
		height: 70px;
		border-radius: 50%;
		object-fit:cover
	}
	.jiaolian-2{
		font-size: 12px;
		color: silver;
	}
	.jiaolian-3{
		font-size: 12px;
	}
	.jiaolians{
		display: flex;
		// justify-content: space-around;
		flex-wrap: wrap;
	}
	.myhtml{
		font-size: 14px;
		margin: 5px;
	}
	.yuekes{
		width: 90%;
		height: 40px;
		margin: 5%;
		border: 1px solid whitesmoke;
		border-radius: 5px;
		background: whitesmoke;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.yueke-0{
		font-size: 14px;
	}
	.yueke-1{
		font-size: 14px;
		color: red;
	}
</style>
