<template >
  <div class="container">
    <header-nav title="反馈问题详情"></header-nav>
    <div class="initList" >
        <p>描述的问题：{{initList.content}}</p>
        <p>描述的时间：{{initList.create_time}}</p>
        <p>描述人：{{initList.user_name}}</p>
    </div>  
    <div style="float:right;background-color:#FFFFFF;padding:20px 50px">
      <p>回复 ：</p>
      <p v-for="(i,b) in initList.reply" :key="b">

      </p>
    </div>
  </div>
</template>

<script> 
export default {
  data() {
    return {
        initList:[]
     
    };
  },
  methods: {
    // async myQuestion(id) {
    //   let myQuestion = await this.service.my.getFeekbackLogDetails({
    //     user_id: localStorage.getItem("user_id"),
    //     token: localStorage.getItem("token"),
    //     id:id
    //   });
    //   if (myQuestion.state == 10001) {
    //       this.initList = myQuestion.data
    //   }
    // }
  },
  created() {
    // this.myQuestion(this.$route.query.id)
  }
};
</script>

<style scoped="scoped" lang="scss">
.container {
  background: #f6f6f6;
  padding-top: 54px;
  box-sizing: border-box;
  width: 100%;
  .initList{
    background-color:#FFFFFF;padding:20px;
    p{
      padding:10px 0;
    }
  }
}
</style>