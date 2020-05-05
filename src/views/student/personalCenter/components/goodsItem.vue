<template>
  <div class="goods" @click="handleGoods">
    <img :src="goodsItem.images" />
    <div class="goods_details">
      <div class="goods_top">
        <div class="goods_title">{{goodsItem.name}}</div>
        <div class="goods_count">X1</div>
      </div>
      <div class="goods_star_count">{{goodsItem.price}}星星</div>
      <slot name="goods_control"></slot>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  methods: {
    handleGoods() {
      this.$emit("handleGoods");
    }
  }
};
</script>

<style scoped lang="scss">
.goods {
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
      @include flex-center(row);
      margin-top: 10px;
      .goods_title {
        @include flex-center();
        @include text-overflow();
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
</style>