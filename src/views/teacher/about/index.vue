<template>
	<div class="container">
		<header-nav :returnShow='false' :returnShop="false" title="抢单大厅"></header-nav>
		
		<div class="kecheng">
			<div  @click="kechengBtn(i.id)" v-for="i in CourseListArray" class="kecheng-item">
				<div class="kecheng-item-t flex flex_x_bten">
					<div class="kecheng-item-t-l fs15 fw_b">{{i.name}}</div>
					<div class="kecheng-item-t-r fs15">{{i.time}}</div>
				</div>
				<div class="kecheng-item-c fs14 fw_b">帕格尼尼主题狂想</div>
				<div class="kecheng-item-b flex flex_x_bten">
					<div class="kecheng-item-b-l fs14">课堂分数：30分</div>
					<div class="kecheng-item-b-r fs15">抢单</div>
				</div>
			</div>
			<div v-if='false' class="empty">
				<div class="empty-img flex flex_x_center"><img src="../../../assets/about/empty.png" /></div>
				<div class="empty-title fs13 flex flex_x_center">暂无课程单</div>
			</div>
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
				CourseListArray:[]
			}
		},
		methods:{
			makeBtn(){
				
			},
			//抢单大厅
			async getCourseList() {
				let CourseList = await this.service.personalCenter.getCourseList({
					user_id: localStorage.getItem("user_id"),
					token: localStorage.getItem("token")
				});
				console.log("抢单大厅", CourseList.data);
				this.CourseListArray = CourseList.data
			},
			//抢单
			async setMyCourse(id) {
				let MyCourse = await this.service.personalCenter.setMyCourse({
					user_id: localStorage.getItem("user_id"),
					token: localStorage.getItem("token"),
					bout_id:id
				});
				console.log("抢单", MyCourse);
				console.log(MyCourse.state)
				if(MyCourse.state == 200){
					toast({
						text: '抢单成功',
						time: 1000
					});
				}else{
					toast({
						text: MyCourse.msg,
						time: 1000
					});
				}
			},
			kechengBtn(id){
				console.log(id)
				this.setMyCourse(id)
				this.getCourseList()
				console.log(this.CourseListArray)
			}
		},
		created(){
			this.getCourseList()
		}
	}

</script>

<style scoped="scoped" lang="scss">
	.container {
		width: 100%;
		height: 100%;
		background: #F3F4F5;
		.empty {
			width: 100%;
			height: calc(100% - 50px);
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
		.kecheng-item{
			background: #fff;
			padding: 18px 20px 20px 30px;
			box-sizing: border-box;
			margin-top: 15px;
			.kecheng-item-t{
				.kecheng-item-t-l{
					color: #23252F;
				}
				.kecheng-item-t-r{
					color: #838486;
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