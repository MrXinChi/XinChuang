<template>
  <div class="container_">
    <header-nav title="我的星星"></header-nav>
    <my-banner @handleToRuleDetail="handleToRuleDetail">
      <div slot="detail">
        <div class="count">{{stars}}颗</div>
        <button class="sign_in" @click="handleSignIn">{{signInInfo == 2 ? '签到领星' :'已签到'}}</button>
      </div>
    </my-banner>
    <div class="sign_in_wrapper">
      <div class="title">星星明细</div>
      <div class="sign_in_list">
        <div class="sign_in_item" v-for="(item,index) in starList" :key="index">
          <div class="item_left">
            <div class="item_name">{{item.desc}}</div>
            <div class="item_time">{{item.time}}</div>
          </div>
          <div
            class="item_count"
            :class="item.status == 1 ? 'active' :''"
          >{{item.status == 1?'+':'-'}}{{item.bean}}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import myBanner from "../components/myBanner";
export default {
  components: {
    myBanner
  },
  data() {
    return {
      signInInfo: 2, // 1 已签到 2 未签到
      stars: 0, // 星星数量
      starList: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let userStarsData = await this.service.personalCenter.getUserStars(
        getUserData()
      );
      if (userStarsData.data == " ") {
        this.stars = 0;
      } else {
        this.stars = userStarsData.data.stars;
      }
      let signInInfoData = await this.service.personalCenter.getSignInInfo(
        getUserData()
      );
      this.signInInfo = signInInfoData.state;
      let starList = await this.service.personalCenter.getStarList(
        getUserData()
      );
      if (starList.data == " ") {
        return;
      }
      this.starList = starList.data;
    },
    async handleSignIn() {
      if (this.signInInfo == 1) {
        console.log("已签到");
        return;
      }
      let singIn = await this.service.personalCenter.signIn(getUserData());
      this.getData();
    },
    handleToRuleDetail() {
      this.$router.push("/starRulestu");
    }
  }
};
</script>

<style scoped lang="scss">
.container_ {
  width: 100%;
  min-height: 100%;
  height: auto;
  .count {
    @include word(24, #ffffff);
  }
  .sign_in {
    @include word(12, #ffffff);
    margin-top: 10px;
    width: 90px;
    height: 22px;
    background: linear-gradient(
      0deg,
      rgba(62, 112, 147, 1),
      rgba(84, 163, 152, 1),
      rgba(118, 185, 176, 1)
    );
    box-shadow: 0px 2px 0px 0px rgba(62, 147, 112, 0.35);
    border-radius: 10px;
  }
  .sign_in_wrapper {
    .title {
      @include word(16, #23252f, bold);
      margin: 20px 0 0 15px;
    }
    .sign_in_list {
      padding-left: 15px;
      .sign_in_item {
        @include border-1px();
        @include flex-center(row, space-between);
        padding: 20px 20px 20px 0;
        .item_left {
          .item_name {
            @include word(15, #23252f);
          }
          .item_time {
            margin-top: 6px;
            @include word(12, #838486);
          }
        }
        .item_count {
          @include word(15, #23252f);
          &.active {
            color: #f29417;
          }
        }
      }
    }
  }
}
</style>