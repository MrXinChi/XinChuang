<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<!-- slides -->
		<swiper-slide v-for="(i,index) in navArray" :key="index" >
			<div class="slide" @click="navBtn(i.id,i.name,index)">
				<div class="slide-img flex flex_x_center">
					<img :src="i.images" />
				</div>
				<div class="c_20 fs14 flex flex_x_center">{{i.name}}</div>
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
		methods:{
			navBtn(id,name,index){
				this.$emit('navBtn',{id:id,name:name,index:index})
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