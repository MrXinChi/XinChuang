<template>
  <div class="container_">
    <header-nav title="意见反馈">
      <div slot="right" class="header_right" @click="handleToOrderOfExchange">反馈列表</div>
    </header-nav>
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入反馈列表" />
    </van-cell-group>
    <div class="textframe">
      <div class="textframe-title">您的宝贵意见，将是我们成功的基础，每句话都是 我们进步的最大动力</div>
      <div class="textframe-textarea">
        <textarea
          maxlength="500"
          @input="changeConent"
          placeholder="请简要描述你的问题和意见"
          v-model="feedbackContent"
        ></textarea>
      </div>
      <div class="footer-title">{{contentCount}}/500</div>
    </div>
    <div class="btn_wrapper">
      <button @click="footerBtn" class="btn">提交</button>
    </div>
  </div>
</template>


<script>
	
	import toast from "@/utils/toast";
export default {
  data() {
    return {
      contentCount: 500,
      feedbackContent: "",  //反馈内容
      value:"" ,    //反馈标题
    };
  },
  methods: {
    handleToOrderOfExchange(){    //跳转反馈列表
      this.$router.push('/feedbackListStu')
    },
  	async setFeedback(text,title) {
      let Feedback = await this.service.personalCenter.setFeedback({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token"),
        text:text,
        title:title
      });
      if(Feedback.state == 200){
      	toast({
						text: '反馈成功',
						time: 1000
          });
      	// this.$router.push('/dashboard/personalCenterstu')
      }else{
      	toast({
						text: '反馈失败',
						time: 1000
          });
      }
      this.feedbackContent = ""
      this.value = ""
    },
    footerBtn(){
    	if(this.feedbackContent <= 0){
    		toast({
						text: '反馈内容不能为空',
						time: 1000
					});
    		return
      }
      if(this.value <= 0){
    		toast({
						text: '反馈标题不能为空',
						time: 1000
					});
    		return
      }
    	this.setFeedback(this.feedbackContent,this.value)
    },
    changeConent() {
      this.contentCount = 500 - this.feedbackContent.length;
    }
  },
  created(){
//	this.
  }
};
</script>

<style scoped lang="scss">
/deep/.van-cell-group{
  margin:10px 0 0 0;
}
.container_ {
  width: 100%;
  min-height: 100%;
  height: auto;
  background: #f3f4f5;
  .textframe {
    background: #fff;
    margin-top: 10px;
    padding: 15px;
    .textframe-title {
      line-height: 23px;
      @include word(15, #23252f);
    }
    .textframe-textarea {
      margin-top: 20px;
      width: 100%;
      height: 210px;
      textarea {
        font-size: 14px;
        line-height: 20px;
        width: 100%;
        height: 100%;
      }
    }
    .footer-title {
      @include word(12, #838486);
      @include flex-center(row, flex-end);
      margin-top: 5px;
    }
  }
  .btn_wrapper {
    margin-top: 100px;
    padding: 0 15px;
    box-sizing: border-box;
    .btn {
      @include btn();
    }
  }
}
</style>