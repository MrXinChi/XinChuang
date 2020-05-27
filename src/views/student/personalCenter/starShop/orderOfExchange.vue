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
        <van-tab title="待收货"></van-tab>
        <van-tab title="待发货"></van-tab>
        <van-tab title="已完成"></van-tab>
      </van-tabs>
    </div>
    <div class="order_list">
      <div class="goods flex flex_warp"  >
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
          <div slot="goods_control" class="goods_control">
            <div class="goods_type" v-if="i.state==1">待收货</div>
            <div class="goods_type" v-if="i.state==2">待发货</div>
            <div class="goods_type" v-if="i.state==3">已完成</div>
            <button class="goods_btn" @click.stop="comeAgain">再来一单</button>
          </div>
        </div>
      </div>
      <!-- <goods-item @handleGoods="handleGoods" :goodsItem="goodsItem" :goodsItemshow="goodsItemshow"> -->
        <!-- <div slot="goods_control" class="goods_control">
          <div class="goods_type" v-if="status==1">待收货</div>
          <div class="goods_type" v-if="status==2">待发货</div>
          <div class="goods_type" v-if="status==3">已完成</div>
          <button class="goods_btn" @click.stop>再来一单</button>
        </div> -->
      <!-- </goods-item> -->
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
    return {
      goodsItem:[],
      goodsItemshow:true,
      type:0
    };
  },
  methods: {
    handleTab(index, name) {
      this.type = index
      this.user_exchangeBtn()
    },
    // 跳转订单详情
    handleGoods() {
      this.$router.push("/orderOfExchangeDetail");
    },
    async user_exchangeBtn(){
      let init = await this.service.personalCenter.user_exchange({ ...getUserData(),type:this.type})
      if(init.state == 200){
        this.goodsItem = init.data
      }
    },
    comeAgain(){
      this.$router.push('/shopIndex')
    }
  },
  created(){
    this.user_exchangeBtn()
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
    // height: 90px;
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
      @include flex-center(row, space-around, flex-end);
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