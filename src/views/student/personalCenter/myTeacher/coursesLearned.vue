 <template>
	<div class="container">
		<header-nav border title="所学课程"></header-nav>
		<div class="course " >
			<ol class="flex" v-for="(i,b) in 3" :key="b">
                <li class="course_left">
                    <p>小提琴课</p>
                    <p>上课时间 2020-4-15（周三）</p>
                    <p>状态  已经上课</p>
                </li>
                <li class="course_right flex" >
                    <button>
                        我要约克
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
              
			}
		},
		methods: {
          
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