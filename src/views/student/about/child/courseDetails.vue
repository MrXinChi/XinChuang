<template>
	<div class="container">
		<header-nav border title="课程详情"></header-nav>
		<div class="course">
			<div class="course-title fs16 fw_b">上课内容</div>
			<div class="flex flex_x_bten flex_y_center"> 
				<div class="course_content fs15 flex_center">{{culinfoArray.music}}</div>
				<button v-if="status == 1" class="button">约课成功</button>
				<button v-else-if="status == 2" class="button1">约课失败</button>
				<button v-else-if="status == 3" class="button2">待审核</button>
			</div>
			<div class="course-title fs16 fw_b">上课时间</div>
			<div class="course_time fs15 flex_center">{{culinfoArray.time}}</div>
			<div class="course-title fs16 fw_b">上课学生</div>
			<div class="course_time fs15 flex_center">{{culinfoArray.userName}}</div>
			<div class="course-title fs16 fw_b">曲谱图片</div>
			<img class="course-images" :src="culinfoArray.image" />
		</div>
		<button class="buttons">
			<span v-if="status == 1" @click="teacherBtn">查看课程以及可选择老师的列表</span>
			<span v-else-if="status == 2" @click="failBtn">查看失败原因</span>
		</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				culinfoArray: [],
				status:""
			}
		},
		methods: {
			teacherBtn(){		//查看老师列表
				this.$router.push('/teacherList')
			},
			failBtn(){			//查看失败原因

			},
			async getCulinfo(id) {
				let Culinfo = await this.service.about.getCulinfo({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token'),
					bout_id: id
				})
				this.culinfoArray = Culinfo.data
			},
		},
		created() {
			var id = this.$route.params.id
			this.status = this.$route.params.status
			console.log(this.status)
			// this.getCulinfo(id)
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
		button{
			border-radius: 5px;
			color:#fff;
			height:40px;
			font-size: 16px;
			padding: 0 10px;
		}
		.button{
			background: #07c160;
		}
		.button1{
			background: red;
		}
		.button2{
			background: #3E7093;
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
	.buttons{
		width:90%;
		margin:0 5%;
		color:#fff;
		background: #3E7093;
		font-size: 16px;
		line-height: 50px;
		border-radius: 5px;
	}
</style>