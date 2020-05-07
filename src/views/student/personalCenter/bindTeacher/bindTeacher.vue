 <template>
	<div class="container">
		<header-nav border title="老师列表">
            <div @click="makeBtn"  class="fs14 button" slot="right">筛选<van-icon name="search" /></div>
        </header-nav>
		<div class="course " >
			<ol>
                <li class="course_li flex flex_y_center" v-for="(i,b) in teacherList" :key="b" @click="courseBtn(i.id)">    
                    <div class="course_li_left">
                        <img src="../../../../assets/about/empty.png" alt="">
                    </div>
                    <div class="course_li_center">
                        <span>{{i.name}}</span>
                        <span>{{i.sex}}</span>
                        <span>{{i.zhuanye}}</span>
                    </div>
                    <div class="course_li_right ">
                        {{i.status}}
                    </div>   
                </li>
            </ol>
		</div>	
	</div>
</template>

<script>
	export default {
		data() {
			return {
               teacherList:[
                   {name:"张涵予",sex:"男",zhuanye:"钢琴",status:"仓井绑定",id:1},
                   {name:"张涵予",sex:"男",zhuanye:"钢琴",status:"仓井绑定 ",id:2},
                   {name:"张涵予",sex:"男",zhuanye:"钢琴",status:"正在授课",id:3},
                   {name:"张涵予",sex:"男",zhuanye:"钢琴",status:"正在授课",id:4},
                ],
                idStatus:''
			}
		},
		methods: {
            makeBtn(){  //筛选
                this.$router.push('/selectTeachers')
            },
            courseBtn(id){  // 详情
                this.$router.push({path:'/bindTeacherDetails',query:{id:id}})
            }
		},
		created() {
            this.idStatus = this.$route.query.id
            if(this.idStatus!=undefined){
                this.teacherList.map(i=>{
                    if(i.id==this.idStatus){
                       i.status = "审核中" 
                    }
                }) 
            }
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.container{
		width:100%;
		height:100%;
        background: #f6f6f6;
        /deep/.van-icon{font-size: 30px;vertical-align: middle;}
        .button{line-height: 30px;font-weight: 600;}
        .course{
            ol{
                .course_li{
                    padding: 15px 10px;
                    background: #fff;
                    margin:10px 15px;
                    .course_li_left{
                        width:20%;
                        img{
                            width:100%;
                        }
                    }
                    .course_li_center{
                        width:50%;
                        span{
                            font-size: 16px;
                            font-weight: 600;
                            margin:0 5px;
                        }
                    }
                    .course_li_right{
                        width:30%;
                        font-size: 14px;
                        text-align: center;
                    }
                }
            }
        }  
	}
</style>