<template>
  <div>
    <header class="flex" :class="{border:border}">
      <div class="left flex_1 flex flex_y_center">
        <img v-if="returnShow" @click="handleBack" src="../../assets/student/components/return.png" />
        <slot v-else name="left"></slot>
      </div>
      <div class="title fs17 fw_b flex_2 flex flex_center">{{title}}</div>
      <div class="flex_1 flex flex_y_center flex_x_right">
        <slot name="right"></slot>
      </div>
    </header>
    <div class="header-height"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    returnShow: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: false
    },
    routerTitle: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleBack() {
      // this.$emit('handleBack')
      if (this.routerTitle == "") {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push("/");
        return;
      }
      this.$router.push(this.routerTitle);
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
header {
  width: 100%;
  height: 50px;
  background: #ccc;
  padding: 0 15px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 9;
  background: #fff;
  .title {
    color: rgba(62, 112, 147, 1);
  }
  .left {
    img {
      width: 22px;
      height: 22px;
    }
  }
}
.border {
  border-bottom: 1px solid rgb(238, 238, 238);
}
.header-height {
  width: 100%;
  height: 50px;
}
</style>