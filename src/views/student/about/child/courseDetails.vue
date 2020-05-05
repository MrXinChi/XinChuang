<template>
	<div class="container">
		<header-nav border title="课程详情"></header-nav>
		<div class="course">
			<div class="course-title fs16 fw_b">上课内容</div>
			<div class="course_content fs15 flex_center">{{culinfoArray.music}}</div>
			<div class="course-title fs16 fw_b">上课时间</div>
			<div class="course_time fs15 flex_center">{{culinfoArray.time}}</div>
			<div class="course-title fs16 fw_b">上课学生</div>
			<div class="course_time fs15 flex_center">{{culinfoArray.userName}}</div>
			<div class="course-title fs16 fw_b">曲谱图片</div>
			<img class="course-images" :src="culinfoArray.image" />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				culinfoArray: []
			}
		},
		methods: {
			async getCulinfo(id) {
				let Culinfo = await this.service.about.getCulinfo({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token'),
					bout_id: id
				})
				console.log('我的课程详情', Culinfo.data)
				this.culinfoArray = Culinfo.data
			},
		},
		created() {
			console.log(this.$route.params.id)
			var id = this.$route.params.id
			this.getCulinfo(id)
		}
	}
</script>

<style scoped="scoped" lang="scss">
.container{
	width: 100%;
	height: 100%;
}
	.course {
		padding: 15px;
		.course-title {
			color: #23252F;
		}
		.course_content{
			border: 1px solid #C2C2C2;
			width: 30%;
			height:40px;
			color: #23252F;
			border-radius: 3px;
			box-sizing: border-box;
			margin: 7.5px 0;
		}
		.course_time{
			border: 1px solid #C2C2C2;
			width: 45%;
			height:40px;
			color: #23252F;
			border-radius: 3px;
			box-sizing: border-box;
			margin: 7.5px 0;
		}
	}
	.course-images{
		width: 90px;
		height: 90px;
		margin: 7.5px 0;
	}
	.course-viewo{
		width: 200px;
		margin: 7.5px 0;
	}
</style>