<template>
	<div class="container">
		<header-nav border title="我的老师"></header-nav>
		<div class="course " >
			<van-swipe :loop="false" :show-indicators="false" :stop-propagation="false" :width="83">
				<van-swipe-item v-for="(i,index) in kcArray" :key="index" @click="swiperBtn(i.id,index)" :class="[SwiperactiveNum==index ? 'Swiperactive' : 'Swiperactive1']" >
				{{i.name}}
				<div style="width:30px;height:2px;background:rgba(68,136,99,1);margin:0 auto;" v-if="SwiperactiveNum==i.id"></div>
				</van-swipe-item>
			</van-swipe>
		</div>	
		<div class="teacherlist">
			<ul>
				<li class="teacherlist_li flex flex_y_center" v-for="(item,index) in teacherList" :key="index" @click="teacherBtn(item.id)">
					<div class="teacherlist_li_left">
						<img :src="item.images" alt="">
					</div>
					<div class="teacherlist_li_center">
						<ol>
							<li class="flex">
								<span>{{item.name}}</span>   
								<span>{{item.music}}</span>
							</li>
							<li>绑定中</li>
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
				kcArray:[],
				teacherList:[],
				SwiperactiveNum:0,
			}
		},
		methods: {
			onSwipeLeft(){
				
			},
			onSwipeRight(){

			},
          	swiperBtn(id,index){ 
				this.SwiperactiveNum = index
				 this.initBtn( id)
			},
			teacherBtn(id){
				this.teacherList.map(i=>{
					if(i.id==id){
               			this.$router.push({path:'/teacherDetails',query:{id:id,teacherList:JSON.stringify(i)}})
					}
				})
				
			},
			async getHappyBtn(){  //乐器
                let init = await this.service.home.getHappy({})
                if(init.state==200){
                    this.kcArray = init.data
                    this.initBtn( init.data[0].id)
                }
			},
			async initBtn(id){
                let init = await this.service.about.userTac({
                    user_id: localStorage.getItem('user_id'),
                    token: localStorage.getItem('token'),
                    music:id
                })
                if(init.state == 200){
                    this.teacherList =  init.data 
                }
            }
		},
		created() {
			
			this.getHappyBtn()
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
		font-size:15px;font-family:PingFang SC;font-weight:bold;color:#448863;border-bottom:1px solid #448863;
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
						width:60px;
						height:60px;
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
							justify-content: space-around;
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