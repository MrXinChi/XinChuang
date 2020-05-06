<template>
	<div class="container">
		<header-nav :returnShow='false' :returnShop="false" title="作业">
			<div @click="makeBtn" style="color: #23252F;" class="fs14" slot="right">提交作业</div>
		</header-nav>
 		<van-tabs @click="onClick">
			<van-tab title="课程列表">

			</van-tab>
			<van-tab title="提交作业">
				
			</van-tab>
		</van-tabs>
		<div class="kecheng">
			<div class="kecheng-list" v-if="taskShow">
				<div @click="couresBtn(i.status,i.id,index)" class="kecheng-item" v-for="(i,index) in couresArray" :key="index">
					<div class="kecheng_top flex flex_x_bten">
						<div class="kecheng_top_l fs15 fw_b">{{i.music}}课</div>
						<div class="kecheng_top_r fs15 fw_400">{{i.time}}</div>
					</div>
					<div class="kecheng_bottom flex flex_x_bten">
						<div class="kecheng_bottom_l fs14">{{i.hour}}</div>
						<div v-if="i.status == 1" class="kecheng_bottom_r fs14">详情</div>
						<div v-else-if="i.status == 2" class="kecheng_bottom_r fs14">提交作业</div>
					</div>
				</div>
			</div>
			<div v-else class="empty">
				<div class="empty-img flex flex_x_center"><img src="../../../assets/student/about/empty.png" /></div>
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
			onClick(name, title) {
				console.log(name)
			},
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
			couresBtn(status,id,index){
				if(status == 1){
					this.$router.push(`/courseDetails2/${id}`);
				}else if(status == 2){
					this.$router.push(`/student/submitHomeworks/${index}`)
				}
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
.kecheng {
			width: 100%;
			background: #FAFAFA;
			box-sizing: border-box;
			padding-top: 15px;
			box-sizing: border-box;
		}
.kecheng-list{
		padding-bottom: 60px;
	.kecheng-item{
		width: 100%;
		background: #fff;
		margin-top: 15px;
		padding: 15px 20px;
		box-sizing: border-box;
		.kecheng_top{
			.kecheng_top_l{
				color: #23252F;
			}
			.kecheng_top_r{
				color: #838486;
			}
		}
		.kecheng_bottom{
			margin-top: 15px;
			.kecheng_bottom_l{
				color: #6B6B6B;
			}
			.kecheng_bottom_r{
				color: #F29417;
			}
		}
	}
	.kecheng-item:nth-child(1){
		margin: 0;
	}
}
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