<template>
	<div class="container">
		<header-nav border title="作业管理">
            <div @click="makeBtn"  class="fs14 button" slot="right">提交作业</div>
        </header-nav>
        <div class="flex flex_y_center container_text">
            <img src="../../../../../assets/student/personalCenter/shaixuan.png" alt="">
            筛选
        </div>
		<div class="teacherlist">
			<ul>
				<li class="teacherlist_li flex flex_y_center" v-for="(item,index) in 5" :key="index" @click="operationDetailsBtn()">
					<div class="teacherlist_li_left">
						<ol>
                            <li>大钢琴课</li>
                            <li>30分钟</li>
                        </ol>    
					</div>
					<div class="teacherlist_li_center">
						<ol>
							<li class="flex">20-04-18 19:00---20:00</li>
							<li>作业已提交</li>
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
	export default {
		data() {
			return {
			
			}
		},
		methods: {
            makeBtn(){      //提交作业
                this.$router.push('/submitJob')
            },
			operationDetailsBtn(){  //作业详情
                this.$router.push('/operationDetails')
			}
		},
		created() {
		
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