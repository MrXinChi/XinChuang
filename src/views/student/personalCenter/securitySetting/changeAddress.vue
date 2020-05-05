<template>
  <div class="container_">
    <header-nav :title="navTitle">
      <div slot="right" class="header_right" @click="handleSaveAddress">保存</div>
    </header-nav>
    <div class="info_list">
      <div class="info_item">
        <div class="info_item_title">收货人</div>
        <input type="text" placeholder="请输入收货人" maxlength="10" v-model="userInfo.name" />
      </div>
      <div class="info_item">
        <div class="info_item_title">手机号码</div>
        <input type="text" placeholder="请输入手机号码" maxlength="11" v-model="userInfo.phone" />
      </div>
      <div class="info_item">
        <div class="info_item_title">所在地区</div>
        <input
          type="text"
          placeholder="请选择所在地区"
          readonly
          @click="selectArea"
          v-model="userInfo.address"
        />
      </div>
    </div>
    <div class="address_detail">
      <div class="address_detail_title">详细地址</div>
      <textarea placeholder="请输入详细地址" v-model="userInfo.detail"></textarea>
    </div>
    <area-list ref="areaList" @onAddressConfirm="onAddressConfirm"></area-list>
  </div>
</template>


<script>
import areaList from "@/components/student/areaList";
export default {
  components: {
    areaList
  },
  data() {
    return {
      navTitle: "", // 导航栏
      id: 0,
      userInfo: {
        type: 1,
        name: "", // 收货人
        phone: "", // 手机号
        province: "", // 省
        city: "", // 市
        area: "", // 区
        detail: "", // 详细地址
        address: "" // 省+市+区
      }
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.navTitle = this.id == 0 ? "添加收货地址" : "编辑收货地址";
    if (this.id != 0) {
      this.editAddress("init");
    }
  },
  methods: {
    // 保存地址
    handleSaveAddress() {
      if (!this.validateData()) {
        return;
      }
      if (this.id == 0) {
        this.addAddress();
      } else {
        this.editAddress("submit");
      }
    },
    // 新增地址
    async addAddress() {
      let result = await this.service.personalCenter.addAddress({
        ...getUserData(),
        name: this.userInfo.name,
        tel: this.userInfo.phone,
        province: this.userInfo.province,
        city: this.userInfo.city,
        countyarea: this.userInfo.area,
        desc: this.userInfo.detail,
        type: 0
      });
      if (result.state == 200) {
        this.$router.go(-1);
        return;
      }
      alert(result.msg);
    },
    // 修改地址
    async editAddress(str) {
      let params = {};
      if (str == "init") {
        params = {
          ...getUserData(),
          address_id: this.id
        };
      } else {
        params = {
          ...getUserData(),
          id: this.id,
          name: this.userInfo.name,
          tel: this.userInfo.phone,
          province: this.userInfo.province,
          city: this.userInfo.city,
          countyarea: this.userInfo.area,
          desc: this.userInfo.detail,
          type: this.userInfo.type
        };
      }

      let result = await this.service.personalCenter.editAddress(params);
      if (str == "init") {
        this.userInfo.type = result.data.type;
        this.userInfo.name = result.data.name;
        this.userInfo.phone = result.data.tel;
        this.userInfo.province = result.data.province;
        this.userInfo.city = result.data.city;
        this.userInfo.area = result.data.countyarea;
        this.userInfo.detail = result.data.desc;
        this.userInfo.address =
          result.data.province + result.data.city + result.data.countyarea;
      } else {
        if (result.state != 200) {
          alert("修改失败");
          return;
        }
        this.$router.go(-1);
      }
    },
    // 选择所在地区
    selectArea() {
      this.$refs.areaList.show = true;
    },
    // 确认选择地区
    onAddressConfirm(area) {
      this.userInfo.province = area.province;
      this.userInfo.city = area.city;
      this.userInfo.area = area.area;
      this.userInfo.address = area.province + area.city + area.area;
    },
    // 验证数据
    validateData() {
      if (isEmpty(this.userInfo.name)) {
        alert("请填写收货人");
        return false;
      }
      if (isEmpty(this.userInfo.phone)) {
        alert("请填写手机号");
        return false;
      }
      if (!/^[1]([3-9])[0-9]{9}$/.test(this.userInfo.phone)) {
        alert("手机号码格式错误");
        return false;
      }
      if (isEmpty(this.userInfo.address)) {
        alert("请选择选在地区");
        return false;
      }
      if (isEmpty(this.userInfo.detail)) {
        alert("请填写详细地址");
        return false;
      }
      return true;
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
  .info_list {
    margin-top: 10px;
    background-color: #ffffff;
    .info_item {
      @include flex-center(row, space-between);
      @include border-1px();
      padding-left: 15px;
      height: 50px;
      .info_item_title {
        @include word(15, #23252f);
      }
      input {
        @include flex-center();
        @include word(15, #838486);
        padding: 0 15px 0 25px;
        text-align: right;
      }
    }
  }
  .address_detail {
    @include flex-center(row, space-between, flex-start);
    padding: 20px 0 0 15px;
    background: #ffffff;
    height: 80px;
    .address_detail_title {
      @include word(15, #23252f);
    }
    textarea {
      @include flex-center();
      @include word(15, #838486);
      padding: 0 15px 0 25px;
      height: 100%;
      text-align: right;
    }
  }
}
</style>