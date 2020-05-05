<template>
	<van-tabs>
		<van-tab v-for="(i,index) in 8" :title="'标签 ' + index" :key="index">
			<div class="tab-img flex flex_warp flex_x_spa">
				<img src="../../../../assets/student/delete/img1.png"/>
				<img src="../../../../assets/student/delete/img2.png"/>
				<img src="../../../../assets/student/delete/img3.png"/>
				<img src="../../../../assets/student/delete/img1.png"/>
				<img src="../../../../assets/student/delete/img2.png"/>
				<img src="../../../../assets/student/delete/img3.png"/>
			</div>
		</van-tab>
	</van-tabs>
</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped" lang="scss">
	.tab-img{
		img{
			width: 30%;
			margin-top: 15px;
		}
	}
</style>