<template>
  <div class="container_">
    <div class="mine_wrapper">
      <img class="set_up" src="@/assets/student/personalCenter/icon_set_up.png" @click="handleToSetting" />
      <div class="user">
        <img :src="information.avatar" class="avatar" @click="handleToPersonalCenterInfo" />
        <div @click="handleToPersonalCenterInfo" class="username">{{information.userName}}</div>
      </div>
      <div class="list">
        <div class="item" @click="toDetails('classHour')">
          <div class="count">0</div>
          <div class="item_title">剩余课时</div>
        </div>
        <div class="item" @click="toDetails('star')">
          <div class="count">{{userInfo.stars}}</div>
          <div class="item_title">我的星星</div>
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
        stars: 0, // 用户星星
      },
        information:{
        	avatar: "", // 用户头像
        	userName: "", // 用户名
        },
      navList: [
        {
          img: require("@/assets/student/personalCenter/icon_list_2.png"),
          title: "星星商城",
          isBorder: false
        },
        {
          img: require("@/assets/student/personalCenter/icon_list_3.png"),
          title: "分享邀约",
          isBorder: true
        },
        {
          img: require("@/assets/student/personalCenter/icon_list_4.png"),
          title: "我的课程",
          isBorder: false
        },
        {
          img: require("@/assets/student/personalCenter/icon_list_5.png"),
          title: "最近课程",
          isBorder: false
        },
        {
          img: require("@/assets/student/personalCenter/icon_list_6.png"),
          title: "帮助中心",
          isBorder: false
        },
        {
          img: require("@/assets/student/personalCenter/icon_list_7.png"),
          title: "意见反馈",
          isBorder: true
        },
        {
          img: require("@/assets/student/personalCenter/icon_list_8.png"),
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
      console.log(userInfoData.data)
      this.information.userName = userInfoData.data.name
      this.information.avatar = userInfoData.data.images
      let userStarsData = await this.service.personalCenter.getUserStars(
        getUserData()
      );
      if (userStarsData.data == " ") {
        this.userInfo.stars = 0;
        return;
      }
      this.userInfo.stars = userStarsData.data.stars;
    },
    // 跳转个人信息
    handleToPersonalCenterInfo() {
      this.$router.push("/personalCenterInfo");
    },
    toDetails(inx) {
      switch (inx) {
        case 0:
          this.$router.push("/shopIndex");
          break;
        case 1:
          this.$router.push("/shareIndexxs");
          break;
        case 2:
        this.$router.push("/myCurriculum");
          break;
        case 3:
        this.$router.push("/latelyCurriculum");
        
          break;
        case 4:
          this.$router.push("/helpCenter");
          break;
        case 5:
          this.$router.push("/feedbackxs");
          break;
        case 6:
          this.$router.push("/securitySettingstu");
          break;
        case "classHour":
          this.$router.push("/myClassHourstu");
          break;
        case "star":
          this.$router.push("/myStar");
          break;
      }
    },
    handleToSetting() {
      this.$router.push("/securitySettingstu");
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
    background-image: url("../../../assets/student/personalCenter/back_img.png");
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