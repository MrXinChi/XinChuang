 <template>
	<div class="container">
		<header-nav border title="筛选老师"></header-nav>
		<div class="course flex">
			<div class="course_left">
                <ol>
                    <p>课程种类</p>
                    <li v-for="(i,b) in curriculumList" :key="b" @click="curriculumBtn(i.id)" :class="[active==i.id?'active':'']">
                        {{i.name}}
                    </li>
                </ol>
            </div>
            <div class="course_right">
                <ul>
                    <li class="course_li flex flex_y_center" v-for="(i,b) in teacherList" :key="b" @click="courseBtn()">    
                        <div class="course_li_left">
                            <img src="../../../../assets/about/empty.png" alt="">
                        </div>
                        <div class="course_li_center">
                            <span>{{i.name}}</span>
                        </div>
                        <div class="course_li_right ">
                            <span>{{i.sex}}</span>
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
               curriculumList:[
                   {name:"钢琴",id:1},
                   {name:"小提琴",id:2},
                   {name:"筝",id:3},
                   {name:"吉他",id:4},
                   {name:"长笛",id:5},
                   {name:"歌手",id:6},
                ],
                 teacherList:[
                   {name:"张涵予",sex:"男"},
                   {name:"张涵予",sex:"女"},
                   {name:"张涵予",sex:"男"},
                   {name:"张涵予",sex:"男"},
                ],
                active:1
			}
		},
		methods: {
            curriculumBtn(id){
                this.active = id
            }
		},
		created() {
		
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