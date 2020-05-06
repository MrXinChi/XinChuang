<template>
  <div class="container_">
    <header-nav title="意见反馈列表"></header-nav>
    <div v-for="(item,index) in record" class="record" :key="index" @click="deatilsBtn(item.id)">
      <div class>{{item.create_time}}</div>
      <div class>{{item.content}}</div>
      <div class>{{item.user_name}}</div>
    </div>  
  </div>
</template>

<script>
	
	import toast from "@/utils/toast";
export default {
  data() {
    return {
      record:"",   //反馈意见
    };
  },
  methods: {
  	deatilsBtn(id){  //意见详情
      this.$router.push({path:"/feedbackDetails",query:{id:id}})
    },
    
  },
  created(){

  }
};
</script>

<style scoped lang="scss">
.record {
    width: 345px;
    background-color: #ffffffff;
    display: flex;
    flex-direction: row;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
  }

</style>