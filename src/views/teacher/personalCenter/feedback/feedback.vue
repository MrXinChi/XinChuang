<template>
  <div class="container_">
    <header-nav title="意见反馈"></header-nav>
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
      <button class="btn">提交</button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      contentCount: 500,
      feedbackContent: ""
    };
  },
  methods: {
    changeConent() {
      this.contentCount = 500 - this.feedbackContent.length;
    }
  }
};
</script>

<style scoped lang="scss">
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