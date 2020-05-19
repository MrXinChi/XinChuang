<template>
	<div class="container">
		<header-nav border title="作业详情"></header-nav>
		<div class="course">
			<div class="course-title fs16 fw_b">上课内容</div>
			<div class="flex flex_x_bten flex_y_center"> 
				<div class="course_content fs15 flex_center" v-if="culinfoArray">{{culinfoArray.music}}</div>
				<div>
					<button v-if="culinfoArray.satus == 0" class="button1">未阅读</button>
					<button v-else-if="culinfoArray.satus == 1" class="button2">已阅读</button>
				</div>
			</div>
			<div class="course-title fs16 fw_b">上课时间</div>
			<div class="course_time fs15 flex_center">{{culinfoArray.addtime}}</div>
			<div class="course-title fs16 fw_b">上课老师</div>
			<div class="course_time fs15 flex_center">{{culinfoArray.tac_id}}</div>
			<div class="course-title fs16 fw_b">作业</div>
			<video controls class="course-viewo" v-for="(i,b) in culinfoArray.info" :key="b" :src="i" v-if="culinfoArray.type==1">
				<source src="myvideo.mp4" type="video/mp4"></source>
				<source src="myvideo.ogv" type="video/ogg"></source>
				<source src="myvideo.webm" type="video/webm"></source>
				<object width="" height="" type="application/x-shockwave-flash" data="myvideo.swf">
					<param name="movie" value="myvideo.swf" />
					<param name="flashvars" value="autostart=true&amp;file=myvideo.swf" />
				</object>
				当前浏览器不支持 video直接播放，点击这里下载视频： <a href="myvideo.webm">下载视频</a>
			</video>
			<audio controls class="course-viewo" v-for="(i,b) in culinfoArray.info" :key="b" :src="i" v-if="culinfoArray.type==2">
				<source src="myaudio.MP3" type="myaudio/mp4"></source>
				<source src="myaudio.Ogg" type="myaudio/ogg"></source>
				<source src="myaudio.Wav" type="myaudio/webm"></source>
				<object width="" height="" type="application/x-shockwave-flash" data="myaudio.swf">
					<param name="movie" value="myaudio.swf" />
					<param name="flashvars" value="autostart=true&amp;file=myaudio.swf" />
				</object>
			</audio>
		</div>
		<button class="button" @click="evaluateBtn(culinfoArray.bout_id)">评价</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				culinfoArray:""
			}
		},
		methods: {
			async getCulinfo(type,id) {
				let Culinfo = await this.service.task.taskinfo({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token'),
					type:type,
					id:id
				})
				this.culinfoArray = Culinfo.data
			},
			evaluateBtn(id){
				this.$router.push(`/curriculumEvaluation/${id}`)
			},
		},
		created() {
			var type = this.$route.params.status
			var id = this.$route.params.id
			this.getCulinfo(type,id)
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.button{
		width:90%;
		margin: 0 5%;
		color:#fff;
		height:40px;
		background: #3E7093;
	}
	.button1{
		border-radius: 5px;
		color:#fff;
		height:40px;
		font-size: 16px;
		padding: 0 10px;
		background: #3E7093;
	}
	.button2{
		border-radius: 5px;
		color:#fff;
		height:40px;
		font-size: 16px;
		padding: 0 10px;
		background: #07c160;
	}
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