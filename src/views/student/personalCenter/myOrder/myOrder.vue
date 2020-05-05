<template>
  <div class="container_">
    <header-nav title="我的订单"></header-nav>
    <ul class="order_list">
      <li>
        <div class="order_item_top">
          <div class="item_title">50分钟钢琴课</div>
          <div class="item_money">￥3500.00</div>
        </div>
        <div class="order_item_middle">
          <div class="item_time">2019-09-09 10:28:56</div>
          <div class="item_type">微信</div>
        </div>
        <div class="order_item_bottom">
          <div class="item_desc">50分钟钢琴课14节</div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.container_ {
  width: 100%;
  min-height: 100%;
  height: auto;
  background: #f3f4f5;
  .order_list {
    li {
      margin-top: 15px;
      padding: 18px 20px 20px 30px;
      background: #ffffff;
      .order_item_top {
        @include flex-center(row, space-between);
        .item_title {
          @include word(15, #23252f, bold);
        }
        .item_money {
          @include word(20, #f29417);
        }
      }
      .order_item_middle {
        @include flex-center(row, space-between);
        margin-top: 20px;
        .item_time {
          @include word(15, #6b6b6b);
        }
        .item_type {
          @include word(12, #6b6b6b);
        }
      }
      .order_item_bottom {
        @include flex-center(row, space-between);
        margin-top: 20px;
        .item_desc {
          @include word(15, #6b6b6b);
        }
      }
    }
  }
}
</style>