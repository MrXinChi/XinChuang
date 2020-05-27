<template>
<div>
  <div class="goods flex flex_warp"  v-if="goodsItemshow">
    <div v-for="(i,b) in goodsItem" :key="b" @click="handleGoods" style="width:47%; background: #ffffff;margin:5px;padding:10px 0;"> 
      <img :src="i.image" />
      <div class="goods_details">
        <div class="goods_top">
          <div class="goods_title">{{i.name}}</div>
          <div class="goods_count">X1</div>
        </div>
        <div class="goods_star_count">{{i.price}}星星</div>
        <slot name="goods_control"></slot>
      </div>
    </div>
  </div>
  <div class="goods flex flex_warp"  v-else>
    <div  class="flex flex_warp" style=" background: #ffffff;margin:5px;padding:10px 0;"> 
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
  </div>
</div>
  
</template>


<script>
export default {
  props: {
    goodsItem: {
      type: Array,
      default: () => []
    },
    goodsItemshow:{
      type: Boolean,
    }
  },
  data() {
    return {};
  },
  methods: {
    handleGoods() {
      this.$emit("handleGoods");
    },
  }
};
</script>

<style scoped lang="scss">
.goods {
  margin-top: 10px;
  padding: 10px;
  img {
    width: 130px;
    height: 90px;
    margin:0 auto;
  }
  .goods_details {
    padding: 0 15px;
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