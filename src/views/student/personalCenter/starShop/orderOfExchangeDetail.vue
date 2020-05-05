<template>
  <div class="container_">
    <header-nav title="我的兑换"></header-nav>
    <goods-item></goods-item>
    <div class="order_info">
      <div class="order_info_item">
        <div class="order_info_item_title">下单时间</div>
        <div class="order_info_item_desc">2019-08-08 13:40</div>
      </div>
      <div class="order_info_item">
        <div class="order_info_item_title">发货时间</div>
        <div class="order_info_item_desc">2019-08-08 13:40</div>
      </div>
      <div class="order_info_item">
        <div class="order_info_item_title">收货时间</div>
        <div class="order_info_item_desc">2019-08-08 13:40</div>
      </div>
      <div class="order_info_item">
        <div class="order_info_item_title">订单编号</div>
        <div class="order_info_item_desc">1234567890987654321</div>
      </div>
    </div>
  </div>
</template>


<script>
import goodsItem from "../components/goodsItem";
export default {
  components: {
    goodsItem
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.container_ {
  width: 100%;
  min-height: 100%;
  height: auto;
  background: #f3f4f5;
  .order_detail {
    @include flex-center();
    margin-top: 10px;
    padding: 15px;
    background: #ffffff;
    img {
      width: 130px;
      height: 90px;
    }
    .goods_details {
      margin-left: 10px;
      width: 100%;
      height: 90px;
      .goods_top {
        @include flex-center(row, space-between);
        margin-top: 10px;
        .goods_title {
          @include word(16, #23252f);
        }
        .goods_count {
          @include word(15, #23252f);
        }
      }
      .goods_star_count {
        @include word(15, #666666);
        margin-top: 16px;
      }
    }
  }
  .order_info {
    @include border-1px(#dddee3, top);
    padding: 0 0 20px 15px;
    background-color: #ffffff;
    .order_info_item {
      @include flex-center(row, space-between);
      padding: 20px 15px 0 0;
      .order_info_item_title {
        @include word(14, #23252f);
      }
      .order_info_item_desc {
        @include word(14, #666666);
      }
    }
  }
}
</style>