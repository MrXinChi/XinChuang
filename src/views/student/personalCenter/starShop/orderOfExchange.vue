<template>
  <div class="container_">
    <header-nav title="星星商城"></header-nav>
    <div class="order_tab">
      <van-tabs
        color="#3E7093"
        title-inactive-color="#23252F"
        title-active-color="#3E7093"
        @click="handleTab"
      >
        <van-tab title="全部"></van-tab>
        <van-tab title="待发货"></van-tab>
        <van-tab title="待收货"></van-tab>
        <van-tab title="已完成"></van-tab>
      </van-tabs>
    </div>
    <div class="order_list">
      <goods-item @handleGoods="handleGoods">
        <div slot="goods_control" class="goods_control">
          <div class="goods_type">已完成</div>
          <button class="goods_btn" @click.stop>再来一单</button>
        </div>
      </goods-item>
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
  methods: {
    handleTab(index, name) {
      console.log(index, name);
    },
    // 跳转订单详情
    handleGoods() {
      this.$router.push("/orderOfExchangeDetail");
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
  .order_tab {
    position: fixed;
    top: 50px;
    width: 100%;
  }
  .order_list {
    padding-top: 45px;
    .goods_control {
      @include flex-center(row, space-between, flex-end);
      .goods_type {
        @include word(14, #f29417);
      }
      .goods_btn {
        @include word(14, #ffffff);
        width: 90px;
        height: 30px;
        background-color: #f29417;
        border-radius: 3px;
      }
    }
  }
}
</style>