<template>
  <div class="container_">
    <header-nav title="我的课时"></header-nav>
    <my-banner @handleToRuleDetail="handleToRuleDetail">
      <div slot="detail">
        <div class="count">12</div>
        <div class="remaining_time">剩余课时(分钟）</div>
      </div>
    </my-banner>
    <div class="classList">
      <div class="classItem">
        <div class="item_left">
          <div class="left_top">
            <div class="item_title">50分钟钢琴课</div>
            <div class="item_label">赠送</div>
          </div>
          <div class="item_time">2019-12-02 11:14:00</div>
        </div>
        <div class="count active">+12</div>
      </div>
    </div>
  </div>
</template>


<script>
import myBanner from "../components/myBanner";
export default {
  components: {
    myBanner
  },
  data() {
    return {};
  },
  methods: {
    handleToRuleDetail() {
      this.$router.push("/classHourRulestu");
    }
  }
};
</script>

<style scoped lang="scss">
.container_ {
  width: 100%;
  min-height: 100%;
  height: auto;
  .count {
    @include word(24, #ffffff);
  }
  .remaining_time {
    margin-top: 10px;
    text-shadow: 0px 2px 3px rgba(84, 146, 147, 0.67);
    @include word(14, #ffffff);
  }
  .classList {
    padding: 0 15px;
    .classItem {
      @include flex-center(row, space-between);
      margin-top: 20px;
      padding: 20px 10px;
      background-color: #f3f4f5;
      .item_left {
        .left_top {
          @include flex-center();
          .item_title {
            @include word(15, #23252f);
          }
          .item_label {
            @include word(10, #ffffff);
            margin-left: 10px;
            padding: 2px;
            background-color: #f29417;
          }
        }
        .item_time {
          @include word(13, #666666);
          margin-top: 10px;
        }
      }
    }
    .count {
      @include word(15, #23252f);
      &.active {
        color: #f29417;
      }
    }
  }
}
</style>