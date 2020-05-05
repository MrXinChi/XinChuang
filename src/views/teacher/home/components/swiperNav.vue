<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<!-- slides -->
		<swiper-slide v-for="(i,index) in 6" :key="index">
			<div class="slide">
				<div class="slide-img flex flex_x_center">
					<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1048058136,3613031086&fm=26&gp=0.jpg" />
				</div>
				<div class="c_20 fs14 flex flex_x_center">1111</div>
			</div>
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	// require styles
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		props:{
			navArray:Array
		},
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperOption: {
					slidesPerView: 3,
					slidesPerGroup: 3,
					pagination: {
						el: '.swiper-pagination',
					}
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		mounted() {

		}
	}
</script>

<style scoped="scoped" lang="scss">
	.swiper-container {
		height: 100%;
		width: 100%;
	}
	
	.slide {
		width: 100%;
		height: 100%;
		.slide-img {
			margin-top:30px;
			img {
				width: 60px;
				height: 60px;
				border-radius: 50%;
			}
		}
		div {
			width: 100%;
			margin-top: 15px;
		}
	}
</style>