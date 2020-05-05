<template>
	<div @click="bannerBtn" class="banner">
		<van-swipe :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(i,index) in bannerArray" :key="index">
				<img :src="i.img" />
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	export default{
		props:{
			bannerArray:Array
		},
		methods:{
			bannerBtn(){
				this.$router.push('/audition')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss" type="text/css">
	.banner {
		width: 100%;
		height: 229px;
		/deep/ .van-swipe {
			width: 100%;
			height: 100%;
			img {
				height: 100%;
				width: 100%;
			}
		}
		/deep/ .van-swipe__indicator {
			width: 14px;
			height: 2px;
			background: #fff;
			border-radius: 0 !important;
		}
		/deep/ .van-swipe__indicator--active {
			background: #E56866 !important;
		}
	}
	
	/deep/ .van-swipe__indicator {
		width: 14px;
		height: 2px;
		background: #fff;
	}
	
	/deep/ .van-swipe__indicator--active {
		background: #E56866 !important;
	}
</style>