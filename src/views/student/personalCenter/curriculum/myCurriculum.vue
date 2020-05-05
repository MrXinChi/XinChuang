<template>
	<div class="container">
		<header-nav title="我的课程">
			<div @click="makeBtn" style="color: #23252F;" class="fs14" slot="right">提交作业</div>
		</header-nav>

		<div class="kecheng">
			<course-list @detailsBtn="detailsBtn" v-if="taskShow" :couresArray="couresArray" details="提交作业"></course-list>
			<div v-else class="empty">
				<div class="empty-img flex flex_x_center"><img src="../../../../assets/student/about/empty.png" /></div>
				<div class="empty-title fs13 flex flex_x_center">没有作业，先来提交作业吧</div>
				<div class="empty-btn flex flex_x_center">
					<button class="fs15 c_fff">提交作业</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				taskShow: null,
				couresArray: []
			}
		},
		methods: {
			async getEndculum() {
				let Endculum = await this.service.task.getEndculum({
					user_id: localStorage.getItem("user_id"),
					token: localStorage.getItem("token")
				});
				console.log("作业列表", Endculum.data);
				this.couresArray = Endculum.data
				if(this.couresArray.length == 0){
					this.taskShow = false
				}else{
					this.taskShow = true
				}
			},
			makeBtn() {
				this.$router.push('/student/submitHomework')
				
			},
			detailsBtn(){
				this.$router.push('/student/submitHomeworks')
			}
		},
		created() {
			this.getEndculum()
		},
		mounted() {

		}
	}
</script>

<style scoped="scoped" lang="scss">
	.container {
		width: 100%;
		height: 100%;
		.empty {
			width: 100%;
			height: calc(100% - 50px);
			background: #FAFAFA;
			padding-top: 120px;
			box-sizing: border-box;
			.empty-img {
				img {
					width: 125px;
					height: 111px;
				}
			}
			.empty-title {
				color: #5E5E5E;
				margin-top: 20px;
			}
			.empty-btn {
				margin-top: 20px;
				button {
					width: 92px;
					height: 30px;
					background: rgba(62, 112, 147, 1);
					border-radius: 1px;
				}
			}
		}
		.kecheng {
			width: 100%;
			height: calc(100% - 50px);
			background: #FAFAFA;
			box-sizing: border-box;
		}
	}
</style>