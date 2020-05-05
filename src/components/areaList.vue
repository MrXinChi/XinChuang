<template>
  <div>
    <van-popup v-model="show">
      <van-area
        title="地区选择"
        :area-list="areaList"
        @confirm="onAddressConfirm"
        @cancel="onAddressCancel"
      />
    </van-popup>
  </div>
</template>

<script>
import areaList from "@/utils/area";
export default {
  data() {
    return {
      areaList: areaList,
      show: false
    };
  },
  methods: {
    onAddressConfirm(val) {
      this.show = false;
      // let area = val[0].name + val[1].name + val[2].name;
      this.$emit("onAddressConfirm", {
        province: val[0].name,
        city: val[1].name,
        area: val[2].name
      });
    },
    onAddressCancel() {
      this.show = false;
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
/deep/ .van-popup--center {
  transform: none;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 250px;
  top: inherit;
}

/deep/ .van-popup--center {
  top: none;
}

/deep/ .van-picker {
  height: 100%;
  overflow: hidden;
}

/deep/ .van-picker__toolbar {
  height: 50px;
  padding: 0 15px;
}

.van-picker__columns {
  height: 200;
}

/deep/ .van-picker-column__item {
  height: 50px;
  font-size: 15px;
}

/deep/.van-picker__cancel {
  padding: 0;
  @include word(16, #3e7093);
}

/deep/ .van-picker__confirm {
  padding: 0;
  @include word(16, #3e7093);
}
</style>