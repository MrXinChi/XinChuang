<template>
	<div class="container">
		<header-nav :returnShow='false' :returnShop="false" title="进入课程"></header-nav>
		<div class="header_title">
			待上课列表
			<div class="dropdown">
				<img src="@/assets/personalCenter/icon-search.png" class="dropbtn" @click="menuItem=true">
				<div class="dropdown-content" v-if="menuItem">
					
					<a href="#" v-for="(i,b) in aArray" :key="b" @click="aBTN(i.id)">{{i.name}}</a>
				</div>
			</div>
		</div>
		 <div class="kecheng"  v-for="(i,b) in CourseListArray" :key="b">
			<div class="share_wrapper">
			<div class="share_title">   
				<img :src="i.images" class="avatar" />
				<div>
				<div class="username">{{i.uName}}</div>
				</div>
			</div> 
			<div class="share_list">
				<div class="share_item">
				<div class="item_left">{{i.music}}<p>{{i.hour}}分钟</p></div>
				<div class="item_right">{{i.time}}
					<p v-if="i.status==1" class="status">待上课</p>
					<p v-if="i.status==2" class="status">已完成</p>
				</div>
				</div>
				<div class="share_item">
				<div class="item_left">授课时间</div>
				<div class="item_right">{{i.time_two}}</div>
				</div>
				<div class="share_item">
				<div class="item_left">提示</div>
				<div class="item_right">上课时间为：{{i.time}}<p>请您在上课时间提前五分钟进入课堂</p></div>
				</div>
			</div>
			<div class="submit" @click="enterClassroomBtn(i.images,i.id)">
				<van-button type="info">进入课堂</van-button>
			</div>
        
        </div>
      </div>
	</div>
</template>

<script>
import courseList from "@/components/courseList";
import toast from "@/utils/toast";
	export default {
		data(){
			return{
				aArray:[
					{name:"待上课",id:1},
					{name:"已完成",id:2}
				],
				CourseListArray:[],
				menuItem:false,
				type:3,
				type_two:1
			}
		},
		methods:{
			aBTN(id){
				type_two = id
			},
			enterClassroomBtn(img, id) {  //进入课堂
				globalWebView(
					"initRoom",
					VJsonStringify({
					...getPersonalData(),
					id: id,
					image: img
					})
				);
			},
			//抢单大厅
			async myTask(){
				let init = await this.service.personalCenter.getMyCourseList({
					user_id: localStorage.getItem("user_id"),
					token: localStorage.getItem("token"),
					type:this.type,
					type_two:this.type_two
				})
				if(init.state==200){
					this.CourseListArray = init.data
				}
			},
			//抢单
			async setMyCourse(id) {
				let MyCourse = await this.service.personalCenter.setMyCourse({
					user_id: localStorage.getItem("user_id"),
					token: localStorage.getItem("token"),
					bout_id:id
				});
				
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
		},
		created(){
			this.myTask()
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
		.header_title {
			@include word(15, #23252f, bold);
			margin: 20px 15px;
			img{
				width:30px;
				height: 30px;
				float: right;
				position: relative;
				top: -25px;
			}
			/* 下拉按钮样式 */
			/* 下拉内容 (默认隐藏) */
			.dropdown-content {
				display: none;
				position: absolute;
				right: 10px;
				top:90px;
				background-color: #f9f9f9;
				box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
			}

			/* 下拉菜单的链接 */
			.dropdown-content a {
				color: black;
				padding: 12px 16px;
				text-decoration: none;
				display: block;
			}

			/* 鼠标移上去后修改下拉菜单链接颜色 */
			.dropdown-content a:hover {
				background-color: #f1f1f1;
			}

			/* 在鼠标移上去后显示下拉菜单 */
			.dropdown:hover .dropdown-content {
				display: block;
			} 
			/* 当下拉内容显示后修改下拉按钮的背景颜色 */
			.dropdown:hover .dropbtn {
				background-color: #1989FA;
			}
		}
		.kecheng {
			background: #F3F4F5;
			// width: 100%;
			// height: calc(100% - 50px);
			padding:10px 10px;
			box-sizing: border-box;
			.share_wrapper {
				background: #FFFFFF;
				.share_title {
					padding:20px 0;
					@include flex();
					.avatar {
						margin-left: 16px;
						width: 60px;
						height: 60px;
						border-radius: 50%;
					}
					.username {
						@include word(15, #23252f, bold);
						margin: 10px 0 0 15px;
						span{
							margin-left: 40px;
						}
					} 
				}
				.share_list {
					.share_item {
						@include flex-center(row, space-between);
						padding: 0 15px;
						height: 60px;
						.item_left {
						@include word(15, #23252f, bold);
						p{
							margin-top:10px;
							@include word(15, #23252f);
						}
						}
						.item_right {
						@include word(15, #6b6b6b);
						.status{
							margin-top:10px;
							@include word(15, #23252f, bold);
						}
						}
					}
					.share_item:nth-child(2n-1) {
						background-color: #ffffff;
					}
				}
				
				.submit{
					@include flex-center(column);
					padding: 20px 0;
						button{
						width: 80%;
						border-radius: 5px;
					}
				}
			}
		}
	}
</style>