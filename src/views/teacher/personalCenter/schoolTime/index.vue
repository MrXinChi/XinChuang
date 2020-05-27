<template>
	<div class="container">
		<header-nav :returnShow='true' :returnShop="false" title="上课时间表"></header-nav>
		
		<div class="submit">
			<van-button color="#1798FA" @click="onTime"><van-icon name="plus" />新增时间段</van-button>
		</div>
		<div class="kecheng">
			<div v-for="i in dataList" :key="i" class="kecheng-item">
				<div class="kecheng-item-t flex flex_x_bten">
					<div class="item_left flex flex_x_spa">
						<div class="kecheng-item-t-l fs15 fw_b">{{i.week}}</div>
						<div class="kecheng-item-t-r fs15">{{i.time}}</div>
					</div>
					<div class="item_right">
						<van-icon @click="deleteItem(i.id)" name="cross" color="red" size="30" />
					</div>
				</div>
				<!-- <div class="kecheng-item-c fs14 fw_b">帕格尼尼主题狂想</div>
				<div class="kecheng-item-b flex flex_x_bten">
					<div class="kecheng-item-b-l fs14">课堂分数：30分</div>
					<div class="kecheng-item-b-r fs15">抢单</div>
				</div> -->
			</div>
			<!-- <div v-if='false' class="empty"> -->
				<!-- <div class="empty-img flex flex_x_center"><img src="../../../assets/about/empty.png" /></div> -->
				<!-- <div class="empty-title fs13 flex flex_x_center">暂无课程单</div> -->
			<!-- </div> -->
		</div>
		<!--<frames @frameBtn="frameBtn" ref="refs" :frameShow="frameShow" :color="color" :title1="title1" :title2="title2"></frames>-->
	</div>
</template>

<script>
import courseList from "@/components/courseList";
import toast from "@/utils/toast";
	export default {
		data(){
			return{
				dataList:[],
				timer: '',
			}
		},
		methods:{
			onTime(){
				this.$router.push("/detailsPageTeacher");
			},
			async deleteItem(id){
				let init = await this.service.personalCenter.tactime_del({
					...getUserData(),
					id:id,
				})
				if(init.state==200){
					toast({
						text: init.msg,
						time: 1000
					});
					this.timer = setInterval(this.tactimeBtn(), 2000);
				}
			}, 
			async tactimeBtn(){
				let init = await this.service.personalCenter.tactime({
					user_id:localStorage.getItem('user_id'),
					token:localStorage.getItem('token'),
				})
				if(init.state==200){
					this.dataList = init.data
				}
			}  
		},
		beforeDestroy() {
			clearInterval(this.timer);
		},
		created(){ 
			this.tactimeBtn()
		}
	}

</script>

<style scoped="scoped" lang="scss">
	.container {
		width: 100%;
		height: 100%;
		background: #F3F4F5;
		.submit{
			@include flex-center(row,flex-end);
			// padding: 20px 0;
			padding-top:20px;
			margin-right: 20px;
			button{
				border-radius: 5px;
				/deep/ .van-icon{
					position: relative;
					top:3px;
				}
			}
		}
		// .empty {
		// 	width: 100%;
		// 	height: calc(100% - 50px);
		// 	padding-top: 120px;
		// 	box-sizing: border-box;
		// 	.empty-img {
		// 		img {
		// 			width: 125px;
		// 			height: 111px;
		// 		}
		// 	}
		// 	.empty-title {
		// 		color: #5E5E5E;
		// 		margin-top: 20px;
		// 	}
		// 	.empty-btn {
		// 		margin-top: 20px;
		// 		button {
		// 			width: 92px;
		// 			height: 30px;
		// 			background: rgba(62, 112, 147, 1);
		// 			border-radius: 1px;
		// 		}
		// 	}
		// }
		.kecheng {
			width: 100%;
			height: calc(100% - 50px);
			// background: #FAFAFA;
			box-sizing: border-box;
		}
		.kecheng-item{
			background: #fff;
			padding: 18px 10px 10px 10px;
			box-sizing: border-box;
			// margin-top: 15px;
			margin:15px 15px 0 15px;
			.kecheng-item-t{
				.item_left{
					width: 80%;
					.kecheng-item-t-l{
						color: #23252F;
					}
					.kecheng-item-t-r{
						color: #838486;
					}
				}
				.item_right{
					/deep/ .van-icon{
						margin-top:-5px;
					}
				}
			}
			.kecheng-item-c{
				color: #838486;
				margin-top: 15px;
			}
			.kecheng-item-b{
				margin-top: 15px;
				.kecheng-item-b-l{
					color: #6B6B6B;
				}
				.kecheng-item-b-r{
					color: #3E7093;
				}	
			}
		}
	}
</style>