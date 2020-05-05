<template>
	<div class="container">
		<header-nav :returnShow='false' :returnShop="false" title="作业">
			<div @click="makeBtn" style="color: #23252F;" class="fs14" slot="right">提交作业</div>
		</header-nav>

		<div class="kecheng">
			<course-list v-if="taskShow" :couresArray="couresArray" details="提交作业"></course-list>
			<div v-else class="empty">
				<div class="empty-img flex flex_x_center"><img src="../../../assets/about/empty.png" /></div>
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
			},
			makeBtn() {
				this.$router.push('/submitHomework')
			}
		},
		created() {
			this.getEndculum()
			if(this.couresArray.length == 0){
				this.taskShow = false
			}else{
				this.taskShow = true
			}
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