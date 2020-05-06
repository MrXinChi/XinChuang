<template>
<div class="share_wrapper">
	<div class="header_title">
		<div class="dropdown">

			<img src="@/assets/personalCenter/icon-search.png" class="dropbtn" @click="menuItem=true">
			<div class="dropdown-content" v-if="menuItem">
				<a href="#" @click="menuItem=false">待上课</a>
				<a href="#" @click="menuItem=false">已完成</a>
			</div>
		</div>
	</div>
	<div class="share_list"  @click="courseBtn(i.id)" v-for="(i,index) in dataInfo" :key="index">
					<div class="share_item">
						<div class="item_left">{{i.music}}<p>{{i.hour}}分钟</p></div>
						<div class="item_right">2019-09-09<p class="status">已抢单：待上课</p></div>
					</div>
					<div class="share_item">
						<div class="item_left">授课时间</div>
						<div class="item_right">2019-09-09(周四上午)</div>
					</div>
					<div class="share_item">
						<div class="item_left"></div>
						<div class="item_right">
							<div class="submit">
								<van-button color="#1798FA" @click="onTime"><van-icon name="plus" />新增时间段</van-button>
							</div>
						</div>
					</div>
				</div>
</div>



				
	<!-- <div class="course-item">
		<div @click="courseBtn(i.id)" v-for="(i,index) in dataInfo" :key="index" class="course-padding">
			<div class="flex course-top">
				<div class="course-top-left flex_1 fs15 fw_b">{{i.music}}</div>
				<div class="course-top-right fs15">{{i.time}}</div>
			</div>
			<div class="flex course-bottom flex">
				<div :style="{color:color}" class="course-bottom-right fs15">{{details}}</div>
			</div>
		</div>
	</div> -->
</template>

<script>
	export default{
		data(){
			return{
				menuItem:false,
				dataInfo:[
				{
					time:'',
					hour:'',
					name:'',
				}]
			}
		},
		props:{
			details:String,
			color:String
		},
		methods:{
			courseBtn(index){
				this.$emit('courseBtn',index)
			},
			onTime(){
				this.$router.push("/detailsPageTeacher");
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	// .course-item{
	// 	padding-bottom: 50px;
	// 	.course-padding{
	// 		padding:20px;
	// 		width: 100%;
	// 		box-sizing: border-box;
	// 		background: #fff;
	// 		border-top: 10px solid #F3F4F5;
	// 		.course-top{
	// 			.course-top-left{
	// 				color: #23252F;
	// 			}
	// 			.course-top-right{
	// 				color: #838486;
	// 			}
	// 		}
	// 		.course-center{
	// 			color:rgba(131,132,134,1);
	// 			margin-top: 15px;
	// 		}
	// 		.course-bottom{
	// 			margin-top: 15px;
	// 			.course-bottom-left{
	// 				color: #6B6B6B;
	// 			}
	// 			.course-bottom-right{
	// 				/*color: #3E7093;*/
	// 			}
	// 		}
	// 	}
	// }
	.share_wrapper {
		background: #F3F4F5;
		.header_title {
			@include word(15, #23252f, bold);
			margin: 20px 15px;
			padding-bottom: 20px;
			img{
				width:30px;
				height: 30px;
				float: right;
				position: relative;
				top: -5px;
			}
			/* 下拉按钮样式 */
			/* 下拉内容 (默认隐藏) */
			.dropdown-content {
				display: none;
				position: absolute;
				right: 10px;
				top:95px;
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
	.share_list {
		background: #FFFFFF;
		margin:10px 10px;
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
							.submit{
								@include flex-center(column);
								padding: 20px 0;
								button{
									border-radius: 5px;
									/deep/ .van-icon{
										position: relative;
										top:3px;
									}
								}
							}
						}
					}
					.share_item:nth-child(2n-1) {
						background-color: #ffffff;
					}
				}
	}
</style>