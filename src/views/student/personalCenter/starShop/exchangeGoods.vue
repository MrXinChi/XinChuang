<template>
  <div class="container_">
    <header-nav title="我的兑换"></header-nav>
    <goods-item @handleGoods="handleGoods" :goodsItem="goodsItem">
      <div slot="goods_control" class="goods_control">
        <button class="btn" :class="btnIndex == 1 ? 'active' : ''" @click="handleGeTGoods(1)">线下提货</button>
        <button class="btn" :class="btnIndex == 2 ? 'active' : ''" @click="handleGeTGoods(2)">快递邮寄</button>
      </div>
    </goods-item>
    <div class="address_wrapper" @click="addressBtn">
      <div v-if="addressshop">
        <span>选择收货地址</span>
      </div>
      <div class="address_info" v-else>
        <div class="address_info_top">
          <div class="username">{{addressList.name}}</div>
          <div class="phone">{{addressList.tel}}</div>
        </div>
        <div class="address_detail">收货地址：{{addressList.city}}{{addressList.countyarea}}{{addressList.desc}}</div>
      </div>
      <div class="change_address" v-if="addressshops" @click="switchBtn">切换</div>
    </div>
    <div class="btn_wrapper">
      <button class="btn">确认提交</button>
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
      goodsItem: {},
      btnIndex: 1,
      addressshop: true,
      addressshops:false,
      addressList:{}
    };
  },
  created() {
    this.id = this.$route.params.id
    this.getGoodsDetail(this.$route.params.id);
    this.addressBTN()
  },
  methods: {
    //初始化
    async addressBTN(){
      let params = this.getUserData()
      let address = await this.service.personalCenter.getDefaultAddress(params)
      if(address.state == 200){
          this.addressList = address.data[0]
          this.addressshop = false
          this.addressshops = true
      }else if(address.state == -1){
          this.addressshop = true
          this.addressshops = false
      }
    },
    switchBtn(){        //切换
       this.$router.push({path:'/deliveryAddress',query:{id:this.id}})
    },
    async addressBtn(){ //选择收货地址
      let params = this.getUserData()
      let address = await this.service.personalCenter.getDefaultAddress(params)
      if(address.state == 200){
          this.addressList = address.data[0]
          this.addressshop = false
          this.addressshops = true
      }else if(address.state == -1){
        alert("未添加地址")
        this.$router.push({path:'/deliveryAddress',query:{id:this.id}})
      }
      console.log(address)
    },
    async getGoodsDetail(id) {
      let result = await this.service.personalCenter.getGoodsDetail({
        ...getUserData(),
        goods_id: id
      });
      this.goodsItem = {
        name: result.data.name,
        price: result.data.price,
        images: result.data.images
      };
    },
    handleGeTGoods(inx) {
      this.btnIndex = inx;
    },
    handleGoods() {
      console.log(3333);
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
  .goods_control {
    @include flex-center(row, space-between);
    margin-top: 8px;
    .btn {
      @include word(14px, #ffffff);
      width: 90px;
      height: 25px;
      text-align: center;
      border: 1px solid #aeaeae;
      border-radius: 1px;
      background: #aeaeae;
      &.active {
        @include word(14px, #f29417);
        border: 1px solid #f29417;
        background: #ffffff;
      }
    }
  }
  .address_wrapper {
    padding: 15px 0 15px 15px;
    background: #ffffff;
    @include border-1px(#dddee3, top);
    @include flex-center();
    .address_info {
      @include flex-center(column, flex-start, flex-start);
      padding-right: 15px;
      border-right: 1px solid #dddee3;
      .address_info_top {
        @include flex-center();
        @include word(15, #23252f);
        .phone {
          margin-left: 15px;
        }
      }
      .address_detail {
        @include word(14, #5e5e5e);
        line-height: 25px;
      }
    }
    .change_address {
      @include word(14, #f29417);
      margin: auto;
      width: 120px;
      text-align: center;
    }
  }
  .btn_wrapper {
    margin-top: 100px;
    padding: 0 15px;
    box-sizing: border-box;
    width: 100%;
    .btn {
      @include btn(44, #f29417);
    }
  }
}
</style>