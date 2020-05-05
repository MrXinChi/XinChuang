<template>
  <div class="container">
    <header-nav :returnShow="false" :returnShop="false" title="约课">
      <div @click="makeBtn" style="color: #23252F;" class="fs14" slot="right">我要约课</div>
    </header-nav>
    <div class="kecheng">
      <div class="kecheng-list" v-if="show">
        <div
          @click="couresBtn(i.status,i.id,i.image)"
          class="kecheng-item"
          v-for="(i,index) in couresArray"
          :key="index"
        >
          <div class="kecheng_top flex flex_x_bten">
            <div class="kecheng_top_l fs15 fw_b">{{i.music}}课</div>
            <div class="kecheng_top_r fs15 fw_400">{{i.time}}</div>
          </div>
          <div class="kecheng_bottom flex flex_x_bten">
            <div class="kecheng_bottom_l fs14">{{i.hour}}</div>
            <div v-if="i.status == 1" class="kecheng_bottom_r fs14">约课成功</div>
            <div v-else-if="i.status == 2" class="kecheng_bottom_r fs14">约课失败</div>
            <div v-else-if="i.status == 3" class="kecheng_bottom_r fs14">正在为您安排老师</div>
          </div>
        </div>
      </div>
      <div v-else class="empty">
        <div class="empty-img flex flex_x_center">
          <img src="../../../assets/student/about/empty.png" />
        </div>
        <div class="empty-title fs13 flex flex_x_center">没有购买课程，先来预约免费体验课吧</div>
        <div class="empty-btn flex flex_x_center">
          <button @click="makeBtn" class="fs15 c_fff">我要预约</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couresArray: [],
      show: null,
      status: "111"
    };
  },
  methods: {
    makeBtn() {
      this.$router.push("/detailsPage");
    },
    //我的课程列表
    async getCulum() {
      let Culum = await this.service.about.getCulum({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token")
      });
      console.log("我的课程列表", Culum.data);
      this.couresArray = Culum.data;
      if (this.couresArray.length == 0) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    detailsClick() {},
    couresBtn(status, id, img) {
      this.$router.push(`/courseDetails/${id}`);
    }
  },
  created() {
    console.log(this.$route);
    this.getCulum();
  }
};
</script>

<style scoped="scoped" lang="scss">
.kecheng-list {
  padding-bottom: 60px;
  .kecheng-item {
    width: 100%;
    background: #fff;
    margin-top: 15px;
    padding: 15px 20px;
    box-sizing: border-box;
    .kecheng_top {
      .kecheng_top_l {
        color: #23252f;
      }
      .kecheng_top_r {
        color: #838486;
      }
    }
    .kecheng_bottom {
      margin-top: 15px;
      .kecheng_bottom_l {
        color: #6b6b6b;
      }
      .kecheng_bottom_r {
        color: #f29417;
      }
    }
  }
  .kecheng-item:nth-child(1) {
    margin: 0;
  }
}
.container {
  background: #fafafa;
  width: 100%;
  height: 100%;
  .empty {
    width: 100%;
    height: calc(100% - 50px);
    background: #fafafa;
    padding-top: 120px;
    box-sizing: border-box;
    .empty-img {
      img {
        width: 125px;
        height: 111px;
      }
    }
    .empty-title {
      color: #5e5e5e;
      margin-top: 20px;
    }
    .empty-btn {
      margin-top: 20px;
      button {
        width: 92px;
        height: 30px;
        background: rgba(62, 112, 147, 1);
        border-radius: 1px;
      }
    }
  }
  .kecheng {
    width: 100%;
    background: #fafafa;
    box-sizing: border-box;
    padding-top: 15px;
    box-sizing: border-box;
  }
}
</style>