<template>
	<div class="container">
		<header-nav title="最近课程"></header-nav>

		<div class="kecheng">
			<div class="kecheng-list" v-if="taskShow">
				<div @click="couresBtn(i.id,i.state,i.image)" class="kecheng-item" v-for="(i,index) in couresArray" :key="index">
					<div class="kecheng_top flex flex_x_bten">
						<div class="kecheng_top_l fs15 fw_b">{{i.music}}课</div>
						<div class="kecheng_top_r fs15 fw_400">{{i.time}}</div>
					</div>
					<div class="kecheng_bottom flex flex_x_bten">
						<div class="kecheng_bottom_l fs14">{{i.hour}}分钟</div>
						<div v-if="i.state == 1" class="kecheng_bottom_r fs14">进入课堂</div>
						<div v-else-if="i.state == 2" class="kecheng_bottom_r fs14"></div>
					</div>
				</div>
			</div>
			<div v-else class="empty">
				<div class="empty-img flex flex_x_center"><img src="@/assets/student/about/empty.png" /></div>
				<div class="empty-title fs13 flex flex_x_center">暂时没有最近课程</div>
				<div class="empty-btn flex flex_x_center">
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
			async setLately() {
				let Lately = await this.service.personalCenter.setLately({
					user_id: localStorage.getItem("user_id"),
					token: localStorage.getItem("token")
				});
//				console.log("最近课程", Lately);
				this.couresArray = Lately.data
				console.log(this.couresArray)
				if(this.couresArray.length == 0){
					this.taskShow = false
				}else{
					this.taskShow = true
				}
			},
			makeBtn() {
				
				
			},
			couresBtn(id,state,img){
				if(state == 1){
					console.log(id,state,img)
					globalWebView(
			          "initRoom",
			          VJsonStringify({
			            ...getPersonalData(),
			            image: img,
			            id: id
			          })
			        );
				}else{
					console.log('不可以')
				}
			}
		},
		created() {
			this.setLately()
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


















<!--<template>
	<div>
		<header-nav title="最近课程"></header-nav>
	</div>
</template>

<script>
	export default{
		methods:{
			async setLately() {
				let Lately = await this.service.personalCenter.setLately({
					user_id: localStorage.getItem("user_id"),
					token: localStorage.getItem("token")
				});
				console.log("最近课程", Lately);
			}
		},
		created(){
			this.setLately()
		}
	}
</script>

<style>
</style>-->