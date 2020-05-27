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
          <div class="count">{{userInfo.hour}}</div>
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
    <van-popup v-model="vanPopup">
			<div class="van-dialogs">
			<div class="van-dialog__header">提示</div>
			<div class="van-dialog__content">
				<div class="van-dialog__message van-dialog__message--has-title">
					{{Msg}}
				</div>
			</div>
			<div class="van-hairline--top van-dialog__footer van-dialog__footer--buttons">
				<!-- <button class="van-button van-button--default van-button--large van-dialog__cancel" @click="qxbackSubmit">
					<span class="van-button__text" >取消</span>
				</button> -->
				<button class="van-button van-button--default van-button--large van-dialog__confirm van-hairline--left" @click="qdbackSubmit">
					<span class="van-button__text" >确定</span>
				</button>
			</div>
			</div>
		</van-popup>
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
      vanPopup:false,
      Msg:"",
      userInfo: {
        stars: 0, // 用户星星
        hour:0,   // 用户课时
      },
        information:{
        	avatar: "", // 用户头像
        	userName: "", // 用户名
        },
      navList: [
        {
          img: require("@/assets/student/personalCenter/icon_list_9.png"),
          title: "设备检测",
          isBorder: false
        },
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
          title: "我的老师",
          isBorder: false
        },
        {
          img: require("@/assets/student/personalCenter/icon_list_4.png"),
          title: "我的课程",
          isBorder: false
        },
        {
          img: require("@/assets/student/personalCenter/icon_list_4.png"),
          title: "绑定老师",
          isBorder: false
        },
         {
          img: require("@/assets/student/personalCenter/icon_list_4.png"),
          title: "我要约课",
          isBorder: false
        },
        {
          img: require("@/assets/student/personalCenter/icon_list_5.png"),
          title: "最近课程",
          isBorder: false
        },
         {
          img: require("@/assets/student/personalCenter/icon_list_5.png"),
          title: "我的作业",
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
    qdbackSubmit(){  //确定并去登陆 
      this.$router.push('/loginstuter')
    },
    async getData() {
      let userInfoData = await this.service.personalCenter.getUserInfo(
        getUserData()
      );
      if(userInfoData.state==10003){
        this.vanPopup=true
        this.Msg='请先登录'
        return
      }
      this.information.userName = userInfoData.data.name
      this.information.avatar = userInfoData.data.images
      let userStarsData = await this.service.personalCenter.getUserStars(
        getUserData()
      );
      if (userStarsData.data.hour == null || userStarsData.data.stars==null) {
        this.userInfo.stars = 0;
        this.userInfo.hour = 0;
      }else{
        this.userInfo.stars = userStarsData.data.stars;
        this.userInfo.hour = userStarsData.data.hour;
      }
    },
    // 跳转个人信息
    handleToPersonalCenterInfo() {
      this.$router.push("/personalCenterInfo");
    },
    toDetails(inx) {
      console.log(inx)
      switch (inx) {
        case 0:
          globalWebView("equipmentTesting");
          break;
        case 1:
          this.$router.push("/shopIndex");
          break;
        case 2:
          this.$router.push("/shareIndexxs");
          break;
        case 3:
          this.$router.push("/myTeacher");
          break;
        case 4:
          this.$router.push("/myCurriculum");
          break;
        case 5:
          this.$router.push("/bindTeacher");
          break;
        case 6:
					this.$router.push('/detailsPage')
          break;
        case 7:
          this.$router.push("/latelyCurriculum");
          break;
        case 8:
          this.$router.push("/homeworkCorrectingS");
          break;
        case 9:
          this.$router.push("/helpCenter");
          break;
        case 10:
          this.$router.push("/feedbackxs");
          break;
        case 11:
          this.$router.push("/securitySettingstu");
          break;
           
        case "classHour":
          this.$router.push({path:"/myClassHourstu",query:{hours:this.userInfo.hour}});
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
.van-dialogs{
    width:320px;overflow:hidden;font-size:16px;background-color:#fff;border-radius:16px;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:.3s;transition:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}@media (max-width:321px){
    .van-dialog{width:90%}}
    .van-dialog__header{padding-top:24px;font-weight:500;line-height:24px;text-align:center}
    .van-dialog__header--isolated{padding:24px 0}
    .van-dialog__message{max-height:60vh;padding:24px;overflow-y:auto;font-size:14px;line-height:20px;white-space:pre-wrap;text-align:center;word-wrap:break-word;-webkit-overflow-scrolling:touch}
    .van-dialog__message--has-title{padding-top:12px;color:#646566}
    .van-dialog__message--left{text-align:left}
    .van-dialog__message--right{text-align:right}
    .van-dialog__footer{overflow:hidden;-webkit-user-select:none;user-select:none}
    .van-dialog__footer--buttons{display:-webkit-box;display:-webkit-flex;display:flex}
    .van-dialog__footer--buttons .van-button{-webkit-box-flex:1;-webkit-flex:1;flex:1}
    .van-dialog .van-button{border:0}
    .van-dialog__confirm,.van-dialog__confirm:active{color:#1989fa}
    .van-dialog-bounce-enter{-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7);opacity:0}
    .van-dialog-bounce-leave-active{-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9);opacity:0}
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