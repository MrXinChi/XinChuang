<template>
  <div class="container_com" :class="{'border_gary':navItem.isBorder}" @click="toDetails(index)">
    <img class="icon_img" :src="navItem.img" v-if="navItem.img != undefined" />
    <div class="con_right" :class="{'border_bottom':!navItem.isBorder}">
      <div class="title">{{navItem.title}}</div>
      <div class="name">
        <h1>{{navItem.name}}</h1>
        <img src="../../../../assets/student/personalCenter/arrow_right.png" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    navItem: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    toDetails(inx) {
      this.$emit("toDetails", inx);
    }
  }
};
</script>

<style scoped lang="scss">
.container_com {
  @include flex-center;
  padding-left: 15px;
  background: #ffffff;
  &.border_gary {
    border-bottom: 15px solid #f3f4f5;
  }
  .icon_img {
    margin-right: 10px;
    width: 15px;
    height: 15px;
  }
  .con_right {
    @include flex-center(row, space-between);
    padding: 18px 0;
    padding-right: 14px;
    &.border_bottom {
      @include border-1px();
    }

    .title {
      @include word(15, #23252f);
    }
    .name {
      @include flex-center(row, flex-end);
      h1 {
        @include word(13, #23252f);
        margin-right: 10px;
      }
      img {
        width: 9px;
        height: 14px;
      }
    }
  }
}
</style>