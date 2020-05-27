<template>
  <div class="container_">
    <header-nav title="意见反馈列表"></header-nav>
    <div v-for="(item,index) in record" class="record fs14" :key="index" @click="deatilsBtn(item.id)">
      <div class>{{item.addtime}}</div>
      <div class v-if="item.title!=''">{{item.title}}</div>
      <div class v-if="item.title==''">无标题</div>
      <!-- <div class>{{item.user_name}}</div> -->
    </div>  
  </div>
</template>

<script>
	
	import toast from "@/utils/toast";
export default {
  data() {
    return {
      record:[],   //反馈意见
    };
  },
  methods: {
  	deatilsBtn(id){  //意见详情
      this.$router.push({path:"/feedbackDetailsStu",query:{id:id}})
    },
    async feedback_listBtn(){
      let init = await this.service.personalCenter.feedback_list({...getUserData()})
      if(init.state == 200){
        this.record = init.data
      }
    }
  },
  created(){
    this.feedback_listBtn()
  }
};
</script>

<style scoped lang="scss">

.record {
    width:100%;
    background-color: #ffffffff;
    display: flex;
    flex-direction: row;
    height: 60px;
    align-items: center;
    justify-content: space-around;
  }

</style>