<template>
	<div class="container">
		<header-nav border title="提交作业"></header-nav>
       
		<div class="teacherlist">
			<ul>
				<li class="teacherlist_li flex flex_y_center" v-for="(item,index) in taskArray" :key="index" >
					<div class="teacherlist_li_left">
						<ol>
                            <li>{{item.music}}课</li>
                            <li>{{item.hour}}</li>
                        </ol>    
					</div>
					<div class="teacherlist_li_center">
						<ol>
							<li class="flex">{{item.time}}</li>
                            <li class="flex " @click="operationDetailsBtn(index)">
                                <button>提交</button>
                            </li>
						</ol>
					</div>
					
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				taskArray:[]
			}
		},
		methods: {
            makeBtn(){      //提交作业
                this.$router.push('/submitJob')
            },
            operationDetailsBtn(index){  //作业详情
                let status = index
                this.$router.push({path:'/operationDetails',query:{status:status}})
			},
			async taskBtn(){
				let init = await this.service.task.getEndculum({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token'),
					type:2,
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
			this.tac_id = this.$route.query.id
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
					width:60%;
					ol{
						padding: 5px 0 0 0;
						li:nth-of-type(1){
							font-size: 14px;
                            justify-content: space-between;
						}
						li:nth-of-type(2){
                            box-sizing: border-box;
                            flex-direction: row-reverse;
                            margin: 10px 0 0  0;
                            button{
                                font-size:14px;
                                color:#fff;
                                font-weight: 500;
                                padding:10px 25px;
                                background:#1989fa;
                                border-radius: 5px;
                            }
                            
						}
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