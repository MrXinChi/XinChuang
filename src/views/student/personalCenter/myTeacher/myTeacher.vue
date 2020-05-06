<template>
	<div class="container">
		<header-nav border title="我的老师"></header-nav>
		<div class="course " >
			<van-swipe :loop="false" :show-indicators="false" :stop-propagation="false" :width="83">
				<van-swipe-item v-for="(i,index) in kcArray" :key="index" @click="swiperBtn(i.id)" :class="[SwiperactiveNum==i.id ? 'Swiperactive' : 'Swiperactive1']" >
				{{i.name}}
				<div style="width:30px;height:2px;background:rgba(68,136,99,1);margin:0 auto;" v-if="SwiperactiveNum==i.id"></div>
				</van-swipe-item>
			</van-swipe>
		</div>	
		<div class="teacherlist">
			<ul>
				<li class="teacherlist_li flex flex_y_center" v-for="(item,index) in 5" :key="index" @click="teacherBtn()">
					<div class="teacherlist_li_left">
						<img src="../../../../assets/about/empty.png" alt="">
					</div>
					<div class="teacherlist_li_center">
						<ol>
							<li class="flex">
								<span>张三</span>   
								<span>男</span>
								<span>毕业院校</span>
								<span>专业</span>
							</li>
							<li>等钱绑定</li>
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
				kcArray:[
					{name:"小提琴",id:1},
					{name:"钢琴",id:2},
					{name:"古琴",id:3},
					{name:"筝",id:4},
					{name:"笛子",id:5},
					{name:"大提琴",id:6},
				],
				SwiperactiveNum:1,
			}
		},
		methods: {
          	swiperBtn(id){ 
				this.SwiperactiveNum = id
			},
			teacherBtn(){
				this.$router.push('/teacherDetails')
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
					width:20%;
					img{
						width:100%;
						border-radius: 50%;
					}
				}
				.teacherlist_li_center{
					width:60%;
					text-align:center;
					ol{
						li{
							padding: 8px 0;
						}
						li:nth-of-type(1){
							font-size: 14px;
							justify-content: space-between;
						}
						li:nth-of-type(2){
							text-align: right;
							font-size: 16px;
							font-weight: bold;
						}
					}
				}
				.teacherlist_li_right{
					width:20%;
					text-align: center;
					/deep/.van-icon{
						font-size: 24px;
						font-weight: 500;
					}
				}
			}
		}
	}
</style>