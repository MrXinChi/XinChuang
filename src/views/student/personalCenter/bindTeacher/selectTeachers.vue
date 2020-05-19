 <template>
	<div class="container">
		<header-nav border title="筛选老师"></header-nav>
		<div class="course flex">
			<div class="course_left">
                <ol>
                    <p>课程种类</p>
                    <li v-for="(i,b) in curriculumList" :key="b" @click="curriculumBtn(i.id,b)" :class="[active==b?'active':'']">
                        {{i.name}}
                    </li>
                </ol>
            </div>
            <div class="course_right">
                <ul>
                    <li class="course_li flex flex_y_center" v-for="(i,b) in teacherList" :key="b" @click="courseBtn(i.id)">    
                        <div class="course_li_left">
                            <img :src="i.images" alt="">
                        </div>
                        <div class="course_li_center">
                            <span>{{i.name}}</span>
                        </div>
                        <div class="course_li_right ">
                            <span>{{i.music}}</span>
                        </div>   
                    </li>
                </ul>
            </div>
		</div>	
	</div>
</template>

<script>
	export default {
		data() {
			return {
                curriculumList:[ ],
                teacherList:[],
                active:0,
                

			}
		},
		methods: {
            curriculumBtn(id,index){
                this.active = index
                this.initBtn(id)
            },
            courseBtn(id){  // 详情
                this.teacherList.map(i=>{
					if(i.id==id){
               			this.$router.push({path:'/bindTeacherDetails',query:{id:id,teacherList:JSON.stringify(i)}})
					}
				})
            },
            async getHappyBtn(){  //乐器
                let init = await this.service.home.getHappy({})
                if(init.state==200){
                    this.curriculumList = init.data
                    this.initBtn( init.data[0].id)
                }
            },
            async initBtn(id){
                let init = await this.service.about.user_canbinding({
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
    .active{
        background:#1989fa!important;
        color: #fff!important;
    }
	.container{
		width:100%;
		height:100%;
        background: #f6f6f6;
       
        .course{
            .course_left{
                width:30%;
                ol{
                    text-align: center;
                    p{
                        font-size: 20px;
                        font-weight: bold;
                        background: #fff;
                        padding:15px 10px;
                        margin: 10px 0;
                    }
                    li{
                        font-size: 14px;
                        line-height: 50px;
                        background: #fff;
                        margin: 5px 0;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                    }
                }
            }   
            .course_right{
                width:70%;
                margin-top: 70px;
                 ul{
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
	}
</style>