<template>
  <div class="container_">
    <header-nav title="分享邀约">
      <div slot="right" class="header_right" @click="handleToShareDetail"></div>
    </header-nav>
    <div class="top_wrapper"></div>
    <div class="bottom_wrapper">
      <img class="icon_img" src="@/assets/personalCenter/icon_img.png" />
      <img class="qr_code" src="@/assets/personalCenter/qr_code.png" />
      <div class="word">
        <h1>扫描二维码</h1>
        <h1>邀请好友一起</h1>
        <h1>听音乐会吧</h1>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    handleToShareDetail() {
      this.$router.push("/shareDetail");
    }
  }
};
</script>

<style scoped lang="scss">
.container_ {
  width: 100%;
  min-height: 100%;
  height: auto;
  .header_right {
    @include icon(20, "../../../../assets/personalCenter/icon_share.png");
  }
  .top_wrapper {
    width: 100vw;
    height: 135vw;
    background-image: url("../../../../assets/personalCenter/back_img3.png");
    background-size: 100% 100%;
  }
  .bottom_wrapper {
    @include flex-center();
    margin-top: 20px;
    .icon_img {
      margin-left: 75px;
      width: 65px;
      height: 45px;
    }
    .qr_code {
      margin-left: 10px;
      width: 65px;
      height: 65px;
    }
    .word {
      margin-left: 10px;
      h1{
        line-height: 20px;
      }
    }
  }
}
</style>