<template>
  <div class="container_">
    <header-nav title="分享邀约">
      <div slot="right" class="header_right" @click="handleToShareDetail"></div>
    </header-nav>
    <div class="top_wrapper">
      <div class="score_wrapper">
        <button class="score_btn">3000积分</button>
        <div class="score_title">我获得的积分</div>
      </div>
    </div>
    <div class="share_wrapper">
      <div class="share_title">我邀请的</div>
      <div class="share_list">
        <div class="share_item" v-for="(item,index) in 6" :key="index">
          <div class="item_left">1 外星人</div>
          <div class="item_right">2019-09-09</div>
        </div>
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
  background: #f3f4f5;
  .header_right {
    @include icon(30, "../../../../assets/personalCenter/icon_three_points.png");
  }
  .top_wrapper {
    width: 100vw;
    height: 59vw;
    background-image: url("../../../../assets/personalCenter/back_img2.png");
    background-size: 100% 100%;
    .score_wrapper {
      padding: 65px 0 0 75px;
      .score_btn {
        @include word(14, #3e7093);
        width: 128px;
        height: 24px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px 0px 0px rgba(148, 209, 207, 1);
        border-radius: 11px;
      }
      .score_title {
        @include word(13, #ffffff);
        margin: 15px 0 0 25px;
      }
    }
  }
  .share_wrapper {
    .share_title {
      @include word(15, #23252f, bold);
      margin: 30px 0 20px 15px;
    }
    .share_list {
      .share_item {
        @include flex-center(row, space-between);
        padding: 0 15px;
        height: 60px;
        .item_left {
          @include word(15, #23252f);
        }
        .item_right {
          @include word(15, #6b6b6b);
        }
      }
      .share_item:nth-child(2n-1) {
        background-color: #ffffff;
      }
    }
  }
}
</style>