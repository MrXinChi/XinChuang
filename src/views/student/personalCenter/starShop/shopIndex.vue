<template>
  <div class="container_">
    <header-nav title="星星商城">
      <div slot="right" class="header_right" @click="handleToOrderOfExchange">我的兑换</div>
    </header-nav>
    <div class="shop_header">
      <button class="convertibility btn" @click="duihuan">我能兑换</button>
      <div class="search">
        <input
          type="text"
          class="btn"
          maxlength="4"
          v-model="inputMinCount"
          oninput="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}
          else{this.value=this.value.replace(/\D/g,'')}"
        />
        <div class="symbol">~</div>
        <input
          type="text"
          class="btn"
          maxlength="4"
          v-model="inputMaxCount"
          oninput="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}
          else{this.value=this.value.replace(/\D/g,'')}"
        />
        <div class="search_btn" @click="handleSearchGoods()">搜索</div>
      </div>
    </div>
    <div class="goods_list">
      <div class="goods_item" v-for="(item,index) in  goodsList" :key="index">
        <img :src="item.images" />
        <div class="goods_title">{{item.name}}</div>
        <div class="goods_content">
          <div class="star_count">{{item.price}}星星</div>
          <button class="exchange_btn" @click="handleExchangeGoods(item.id)">立即兑换</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      inputMinCount: 1,
      inputMaxCount: 999,
      minCount: 0,
      maxCount: 0,
      goodsList: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    async duihuan(){  //我能兑换
      let result = await this.service.personalCenter.getGoodsList({
        ...getUserData(),
        type: 1,
      })
       this.goodsList = result.data;
    },
    async getGoodsList() {
      let result = await this.service.personalCenter.getGoodsList({
        ...getUserData(),
        type: 1,
        small: this.minCount,
        large: this.maxCount
      });
      this.goodsList = result.data;
    },
    // 搜索商品
    handleSearchGoods() {
      if (parseInt(this.inputMinCount) > parseInt(this.inputMaxCount)) {
        return;
      }
      this.minCount = this.inputMinCount;
      this.maxCount = this.inputMaxCount;
      this.getGoodsList();
    },
    handleToOrderOfExchange() {
      this.$router.push("/orderOfExchange");
    },
    handleExchangeGoods(id) {
      this.$router.push(`/exchangeGoods/${id}`);
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
    @include word(15, #23252f);
  }
  .shop_header {
    @include flex();
    position: fixed;
    top: 50px;
    box-sizing: border-box;
    padding: 16px 16px 16px 25px;
    width: 100%;
    background: #f3f4f5;
    .convertibility {
      width: 70px;
    }
    .search {
      @include flex-center(row, flex-end, center);
      input {
        width: 40px;
        text-align: center;
      }
      .symbol {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
      }
      .search_btn {
        @include word(14, #3e7093);
        margin-left: 16px;
      }
    }
    .btn {
      @include word(12, #ffffff);
      height: 30px;
      line-height: 30px;
      border-radius: 3px;
      background-color: #aeaeae;
    }
  }
  .goods_list {
    padding: 60px 15px 0;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 165px);
    .goods_item {
      margin-bottom: 10px;
      padding: 15px 10px;
      background-color: #ffffff;
      img {
        width: 145px;
        height: 90px;
      }
      .goods_title {
        @include word(16, #23252f, bold);
        @include text-overflow(1, 145px);
        margin-top: 15px;
      }
      .goods_content {
        @include flex-center(row, space-between, flex-end);
        .star_count {
          @include word(12, #23252f);
          @include text-overflow(1, 80px);
        }
        .exchange_btn {
          @include word(11, #ffffff);
          width: 60px;
          height: 20px;
          text-align: center;
          background-color: #f29417;
          border-radius: 1px;
        }
      }
    }
  }
}
</style>