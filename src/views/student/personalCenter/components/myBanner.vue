<template>
  <div class="header_wrapper">
    <div class="rule" @click="handleToRuleDetail">
      <i class="icon"></i>
      <h1>规则</h1>
    </div>
    <div class="detail">
      <slot name="detail"></slot>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleToRuleDetail() {
      this.$emit("handleToRuleDetail");
    }
  }
};
</script>

<style scoped lang="scss">
.header_wrapper {
  position: relative;
  height: 53vw;
  background-image: url("../../../../assets/student/personalCenter/back_img1.png");
  background-size: 100% 100%;
  .rule {
    @include flex;
    @include flex-center();
    margin: 0 20px 0 auto;
    padding-top: 20px;
    width: 50px;
    .icon {
      @include icon(14, "../../../../assets/student/personalCenter/icon_tip.png");
    }
    h1 {
      @include word(14, #ffffff);
      margin-left: 3px;
    }
  }
  .detail {
    margin-top: 40px;
    text-align: center;
  }
}
</style>