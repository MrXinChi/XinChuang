<template>
  <div class="container_">
    <div class="mine_wrapper">
      <img class="set_up" src="@/assets/personalCenter/icon_set_up.png" @click="handleToSetting" />
      <div class="user">
        <img :src="userInfo.avatar" class="avatar" @click="handleToPersonalCenterInfo" />
        <div class="username">{{userInfo.userName}}</div>
      </div>
      <div class="list">
        <div class="item" @click="toDetails('classHour')">
          <div class="count">0</div>
          <div class="item_title">已上课时</div>
        </div>
        <div class="item" @click="toDetails('scores')">
          <div class="count">{{userInfo.scores}}</div>
          <div class="item_title">我的评分</div>
        </div>
      </div>
    </div>
    <div class="nav_list">
      <nav-item
        v-for="(item,index) in navList"
        :key="index"
        :navItem="item"
        :index="index"
        @toDetails="toDetails"
      ></nav-item>
    </div>
  </div>
</template>


<script>
import navItem from "./components/navItem";
export default {
  components: {
    navItem
  },
  data() {
    return {
      userInfo: {
        avatar: require("@/assets/personalCenter/avatar.png"), // 用户头像
        userName: "", // 用户名
        scores: 0 // 用户评分
      },
      navList: [
        {
          img: require("@/assets/personalCenter/icon_list_1.png"),
          title: "设备检测",
          isBorder: false
        },
        {
          img: require("@/assets/personalCenter/icon_list_2.png"),
          title: "简历",
          isBorder: false
        },
        {
          img: require("@/assets/personalCenter/icon_list_3.png"),
          title: "分享邀约",
          isBorder: true
        },
        {
          img: require("@/assets/personalCenter/icon_list_4.png"),
          title: "我的课程",
          isBorder: false
        },
        {
          img: require("@/assets/personalCenter/icon_list_5.png"),
          title: "财务",
          isBorder: false
        },
        {
          img: require("@/assets/personalCenter/icon_list_9.png"),
          title: "上课时间",
          isBorder: false
        },
        {
          img: require("@/assets/personalCenter/icon_list_10.png"),
          title: "我的学生",
          isBorder: false
        },
        {
          img: require("@/assets/personalCenter/icon_list_6.png"),
          title: "帮助中心",
          isBorder: false
        },
        {
          img: require("@/assets/personalCenter/icon_list_8.png"),
          title: "设置",
          isBorder: true
        }
      ]
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let userInfoData = await this.service.personalCenter.getUserInfo(
        getUserData()
      );
      this.userInfo.avatar = userInfoData.data.images;
      this.userInfo.userName = userInfoData.data.name;
    },
    // 跳转个人信息
    handleToPersonalCenterInfo() {
      this.$router.push("/userInfo");
    },
    toDetails(inx) {
      switch (inx) {
        case 0:
          globalWebView("equipmentTesting");
          break;
        case 1:
          this.$router.push("/userInfo");
          break;
        case 2:
          this.$router.push("/shareIndex");
          break;
        case 3:
          this.$router.push("/myCourse");
          break;
        case 4:
          this.$router.push("/finance");
          break;
        case 5:
          this.$router.push("/schoolTime");
          break;
        case 6:
          this.$router.push("/myStudent");
          break;
        case 7:
          this.$router.push("/helpCenter");
          break;
        case 8:
          this.$router.push("/securitySetting");
          break;
        case "classHour":
          this.$router.push("/myClassHour");
          break;
        case "scores":
          this.$router.push("/myScores");
          break;
      }
    },
    handleToSetting() {
      this.$router.push("/securitySetting");
    }
  }
};
</script>

<style scoped lang="scss">
.container_ {
  width: 100%;
  height: 100%;
  background-color: #f3f4f5;
  .mine_wrapper {
    position: relative;
    height: 44vw;
    background-image: url("../../../assets/personalCenter/back_img.png");
    background-size: 100% 100%;
    .set_up {
      margin: 0 15px 0 auto;
      padding-top: 15px;
      width: 20px;
      height: 20px;
    }
    .user {
      @include flex();
      .avatar {
        margin-left: 16px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      .username {
        @include word(16, #ffffff);
        margin: 10px 0 0 15px;
      }
    }
    .list {
      @include flex-center();
      position: absolute;
      bottom: -50px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 80vw;
      height: 78px;
      background: #ffffff;
      border-radius: 4px;
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.13);
      .item {
        @include flex-center(column);
        width: 40%;
        height: 50px;
        .count {
          margin-top: 10px;
          @include word(16, #23252f);
        }
        .item_title {
          margin-top: 10px;
          @include word(14, #5e5e5e);
        }
      }
      .item:first-child {
        border-right: 1px solid #c2c2c2;
      }
    }
  }
  .nav_list {
    margin-top: 70px;
    padding-bottom: 35px;
  }
}
</style>