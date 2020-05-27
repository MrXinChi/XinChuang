 <template>
	<div class="container">
		<header-nav border title="老师详情"></header-nav>
		<div class="course " >
			<ul class="flex flex_y_center">
                <li class="course_left">
                   <img :src="teacherDetails.images" alt="">
                </li>
                <li class="course_right">
                    <div>
                        <span>{{teacherDetails.name}}</span>
                        <span>{{teacherDetails.music}}</span>
                    </div>
                    <div>
                      {{teacherDetails.music}} 老师
                    </div>
                </li>
            </ul>
		</div>	
		<div class="teacherlist">
           <ol> 
               <li class="flex flex_y_center" v-for="(i,b) in teacherlist" :key="b" @click="teacherlistBtn(i.id)">
                   <button>{{i.name}}</button>
                   <van-icon name="arrow" />
               </li>
           </ol>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
                teacherlist:[
                    {name:"所有课程",id:1},
                    {name:"作业管理",id:2}
                ],
                teacherDetails:{}
			}
		},
		methods: {
          teacherlistBtn(id){
            switch(id){
                case 1:
                    this.$router.push({path:'/coursesLearned',query:{tac_id:this.idStatus}})
                    break;
                case 2:
                    this.$router.push({path:'/jobManagement',query:{tac_id:this.idStatus,tac_name: this.name}})
                    break;
            }
          }	
		},
		created() {
            this.teacherDetails = JSON.parse(this.$route.query.teacherList)
            this.idStatus =  this.teacherDetails.id
            this.name =  this.teacherDetails.name
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.container{
		width:100%;
		height:100%;
        background: #f6f6f6;
        .course{
            ul{
                border-bottom:1px solid #000;
                padding: 10px 0;
                margin: 10px 0 0 0 ;
                .course_left{
                    width:30%;
                    padding: 0 10px;
                    img{
                        width: 100%;
                        border-radius: 50%;
                    }
                }
                .course_right{
                    div{
                       padding: 10px 0;
                       span{
                           padding: 0 10px 0 0; 
                       }
                    }
                    div:nth-of-type(2){
                        font-size: 16px;
                        font-weight: 600;
                    }
                }
            }
        }
        .teacherlist{
            ol{
                li{
                    margin: 20px 0;
                    justify-content: space-between;
                    padding: 0 15px;
                    button{
                        font-size:14px;
                        color:#fff;
                        font-weight: 500;
                        padding:15px 20px;
                        background:#1989fa;
                        border-radius: 5px;
                    }
                    /deep/.van-icon{
                        font-size: 30px;
                        font-weight: 600;
                    }
                }
            }
        }
	}
</style>