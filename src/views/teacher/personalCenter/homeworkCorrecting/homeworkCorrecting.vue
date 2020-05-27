<template>
  <div class="container_">
    <header-nav title="批改作业"></header-nav>
      <div class="kecheng-list" v-if="taskShow">
				<div  class="kecheng-item" v-for="(i,index) in couresArray" :key="index" @click="couresBtn(i.satus,i.id,index,i.music)">
					<div class="kecheng_top flex flex_x_bten">
						<div class="kecheng_top_l ">
              <span class="fs15 fw_b">{{i.tac_id}}</span>：
              <small class="fs12 fw_b">{{i.music}}课</small>
            </div>
						<div class="kecheng_top_r fs15 fw_400">{{i.addtime}}</div>
					</div>
					<div class="kecheng_bottom flex flex_x_bten">
						<div class="kecheng_bottom_l fs14">{{i.minute}}</div>
						<div v-if="i.satus == 0" class="kecheng_bottom_r fs14">未阅</div>
						<div v-else-if="i.satus == 1" class="kecheng_bottom_r fs14">已阅</div>
				
					</div>
				</div>
			</div>
      <div v-else class="empty">
				<div class="empty-img flex flex_x_center"><img src="../../../../assets/student/about/empty.png" /></div>
				<div class="empty-title fs13 flex flex_x_center">没有可批改的作业</div>
				<!-- <div class="empty-btn flex flex_x_center">
					<button class="fs15 c_fff">提交作业</button>
				</div> -->
			</div>
  </div>
</template>


<script> 
import toast from "@/utils/toast";
export default {
  data() {
    return { 
      taskShow: null,
      couresArray:[],
      type:""
    };
  },
  methods: {
    async user_taskBtn(){
      let init = await this.service.personalCenter.user_taskTearch({
        ...getUserData()
      })
      if(init.state == 200){
        if(init.data.length>0){
          this. couresArray = init.data
          this.taskShow = true
        }else{
          this.taskShow = false
        }
      }else{
         this.taskShow = false
      }
    },
    couresBtn(status,id,index,music){  //详情
      if(status == '0'){
        this.$router.push(`/courseDetails2/${id}/${status}`);
      }else if(status == '1'){
        this.$router.push(`/student/submitHomeworks/${index}/${music}/${id}`)
      }
    }
  },
  created() {
    this.user_taskBtn()
  }
};
</script>

<style scoped lang="scss">
.container_{
  width:100%;
  height:100%;
  background:#f6f6f6;
}
.kecheng-list{
		padding-bottom: 60px;
	.kecheng-item{
		width: 100%;
		background: #fff;
		margin-top: 15px;
		padding: 15px 20px;
		box-sizing: border-box;
		.kecheng_top{
			.kecheng_top_l{
				color: #23252F;
			}
			.kecheng_top_r{
				color: #838486;
			}
		}
		.kecheng_bottom{
			margin-top: 15px;
			.kecheng_bottom_l{
				color: #6B6B6B;
			}
			.kecheng_bottom_r{
				color: #F29417;
			}
		}
	}
	.kecheng-item:nth-child(1){
		margin: 15px 0 0 0;
	}
}
</style>