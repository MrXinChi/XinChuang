<template>
	<div class="container">
		<header-nav border title="作业管理">
            <div @click="makeBtn"  class="fs14 button" slot="right">提交作业</div>
        </header-nav>
        <!-- <div class="flex flex_y_center container_text">
            <img src="../../../../../assets/student/personalCenter/shaixuan.png" alt="">
            筛选
        </div> -->
		<div class="teacherlist">
			<ul>
				<li class="teacherlist_li flex flex_y_center" v-for="(item,index) in taskArray" :key="index" @click="operationDetailsBtn(item.id)">
					<div class="teacherlist_li_left">
						<ol>
                            <li>{{item.music}}课</li>
                            <li>{{item.hour}}</li>
                        </ol>    
					</div>
					<div class="teacherlist_li_center">
						<ol>
							<li class="flex">{{item.time}}</li>
							<li>
								<div v-if="item.status == 1" class="kecheng_bottom_r fs14">详情</div>
								<div v-else-if="item.status == 2" class="kecheng_bottom_r fs14">提交作业</div>
								<div v-else-if="item.status == 3" class="kecheng_bottom_r fs14">未阅读</div>
								<div v-else-if="item.status == 4" class="kecheng_bottom_r fs14">已阅读</div>
							</li>
						</ol>
					</div>
					<div class="teacherlist_li_right">
						<van-icon name="arrow" />
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import toast from "@/utils/toast";

	export default {
		data() {
			return {
				tac_id:"",   //教师id
				tac_name:"",//教师姓名
				taskArray:[]
			}
		},
		methods: {
			makeBtn(){      //提交作业
                this.$router.push({path:'/student/submitHomework',query:{tac_id:this.tac_id,tac_name:this.tac_name}})
            },
			operationDetailsBtn(id){  //作业详情
				let status = 2
                this.$router.push(`/courseDetails2/${id}/${status}`)
			},
			async taskBtn(){
				let init = await this.service.task.getEndculum({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token'),
					type:0,
					tac_id:this.tac_id
				})
				if(init.state == 200){
					this.taskArray = init.data
				}else{
					toast({
						text: init.msg,
						time: 1000
					});
				}
			}
		},
		created() {
			this.tac_id = this.$route.query.tac_id
			this.tac_name = this.$route.query.tac_name
			this.taskBtn()
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.container{
		width:100%;
		height:100%;
        background: #f6f6f6;
        .container_text{
            flex-direction: row-reverse;
            font-size: 16px;
            font-weight: 600;
            padding: 10px 20px 0 0 ;
            img{
                width: 30px;
                vertical-align: middle;
            }
        }
	}
   .Swiperactive{
		font-size:15px;font-family:PingFang SC;font-weight:bold;color:#448863;
	}
	.Swiperactive1{
		font-size:15px;font-family:PingFang SC;font-weight:bold;
	}
	/deep/
	.van-swipe__track{
		border-bottom:1px solid #F6F6F6;
		background:#fff;
		.van-swipe-item{
			line-height: 40px;
			text-align: center;
			span{
			font-size: 0.4rem;
			font-weight: bold;
			position: fixed;
			}
		}
	}
	.teacherlist{
		ul{
			.teacherlist_li{
				box-sizing: border-box;
				background:#fff;
				padding:15px 5px;
				margin: 15px 10px;
				.teacherlist_li_left{
					width:30%;
                    ol{
                       li{
                           padding: 10px ;
                       }
                       li:nth-of-type(1){
                           font-size:16px;
                           font-weight: 600;
                       }

                    }
				}
				.teacherlist_li_center{
					width:50%;
					ol{
						li{
							padding: 8px 0;
						}
						li:nth-of-type(1){
							font-size: 14px;
							justify-content: space-between;
						}
						li:nth-of-type(2){
							font-size: 16px;
							font-weight: bold;
						}
					}
				}
				.teacherlist_li_right{
					width:20%;
					text-align: center;
					/deep/.van-icon{
						font-size: 30px;
						font-weight: 600;
					}
				}
			}
		}
    }
    .button{
        font-size:14px;
        color:#fff;
        font-weight: 500;
        padding:10px 15px;
        background:#1989fa;
        border-radius: 5px;
    }
</style>