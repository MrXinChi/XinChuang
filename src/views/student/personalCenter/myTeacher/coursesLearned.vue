 <template>
	<div class="container">
		<header-nav border title="所学课程"></header-nav>
		<div class="course " >
			<ol class="flex" v-for="(i,b) in curriculumList" :key="b">
                <li class="course_left">
                    <p>{{i.music}}</p>
                    <p>{{i.time}}</p>
                    <p>状态  
                        <span v-if="i.type==2">已上课</span>
                        <span v-if="i.type==3">待上课</span>
                    </p>
                </li>
                <li class="course_right flex" v-if="i.type==2" @click="appointmentBtn">
                    <button>
                        我要约课
                    </button>
                </li>
            </ol>
		</div>	
	</div>
</template>

<script>
	export default {
		data() {
			return {
                curriculumList:[],
			}
		},
		methods: {
            async teachBtn(tac_id){
                let init = await this.service.about.tac_culum({
                    user_id: localStorage.getItem('user_id'),
                    token: localStorage.getItem('token'),
                    type:0,
                    tac_id:tac_id
                })
                if(init.state==200){
                    this.curriculumList = init.data
                }
            },
            appointmentBtn(){
                this.$router.push({path:'/detailsPage',query:{aboutClass:2,teacherId:this.$route.query.tac_id}})
            }
		},
		created() {
            let tac_id = this.$route.query.tac_id
            this.teachBtn(tac_id)
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.container{
		width:100%;
		height:100%;
        background: #f6f6f6;
        .course{
            ol{
                margin: 10px;
                background: #fff;
                padding: 15px;
                .course_left{
                    width:70%;
                    p{
                        padding: 0px 0 15px 0 ;
                    }
                    p:nth-of-type(1){
                        font-weight: 600;
                        font-size: 16px;
                    }
                    p:nth-of-type(2){
                        font-weight: 500;
                        font-size: 14px;
                    }
                    p:nth-of-type(3){
                        font-weight: 600;
                        font-size: 16px;
                    }
                }
                .course_right{
                    width:30%;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-end;
                    button{
                        font-size:14px;
                        color:#fff;
                        font-weight: 500;
                        padding:10px 15px;
                        background:#1989fa;
                        border-radius: 5px;
                    }
                }
            }
        }  
	}
</style>