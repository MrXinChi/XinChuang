<template>
  <div class="container_">
    <header-nav title="安全设置"></header-nav>
    <nav-item
      v-for="(item,index) in navList"
      :key="index"
      :navItem="item"
      :index="index"
      @toDetails="toDetails"
    ></nav-item>

    <div v-if="dialogShow" class="dialog">
      <div class="tips">
        <div class="tips_title flex_center fs16">退出登陆</div>
        <div class="flex tips_state">
          <div @click="cancelBtn" class="cancel flex_1 flex_center fs15">确定</div>
          <div @click="DetermineBtn" class="Determine flex_1 flex_center fs15">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import navItem from "../components/navItem";
export default {
  components: {
    navItem
  },
  data() {
    return {
      navList: [
        {
          title: "修改密码",
          isBorder: false
        },
        {
          title: "收货地址",
          isBorder: false
        },
        {
          title: "退出登录",
          isBorder: false
        },
      
      ],
      dialogShow: false
    };
  },
  methods: {
    toDetails(inx) {
      switch (inx) {
        case 0:
          this.$router.push("/changePassword");
          break;
        case 1:
          this.$router.push("/deliveryAddress");
          break;
        case 2:
          this.dialogShow = true;
          break;
      }
    },
    cancelBtn() {
      window.localStorage.clear();
      this.$router.push("/loginstuter");
    },
    DetermineBtn() {
      this.dialogShow = false;
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
}
.dialog {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  position: fixed;
  .tips {
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    width: 250px;
    .tips_title {
      height: 80px;
      color: #23252f;
      border-bottom: 1px solid #dddee3;
    }
    .tips_state {
      height: 44px;
      .cancel {
        color: #0a60ff;
        border-right: 1px solid #dddee3;
      }
      .Determine {
        color: #0a60ff;
      }
    }
  }
}
</style>