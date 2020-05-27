<template >
  <div class="container">
    <header-nav title="反馈问题详情"></header-nav>
    <div class="initList" >
        <p>描述的问题：{{initList[0].text}}</p>
        <p>描述的时间：{{initList[0].addtime}}</p>
        <!-- <p>描述人：{{initList.user_name}}</p> -->
    </div>  
    <div style="float:right;background-color:#FFFFFF;padding:20px 50px">
      <p>回复 ：{{initList[0].desc}}</p>
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
    async myQuestion(id) {
      let myQuestion = await this.service.personalCenter.feedback_info({
        ...getUserData(),
        id:id
      });
      if (myQuestion.state == 200) {
          this.initList = myQuestion.data
      }
    }
  },
  created() {
    this.myQuestion(this.$route.query.id)
  }
};
</script>

<style scoped="scoped" lang="scss">
.container {
  background: #f6f6f6;
  padding-top: 5px;
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