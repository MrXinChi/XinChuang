<template>
  <div class="container">
    <header-nav :returnShow="false" :returnShop="false" title="辛创陪练一站通"></header-nav>
    <!--header-->
    <div class="swiper">
      <swiper-banner :bannerArray="bannerArray"></swiper-banner>
    </div>

    <div class="swiper-nav">
      <swiper-nav :navArray="navArray"></swiper-nav>
    </div>
    <skeleton :height="10" background="#FAFAFA"></skeleton>
    <!--<div class="remen flex flex_y_center">
      <img src="../../assets/home/remen.png" />
      <div class="remen-name fs16 c_000">热门课程</div>
    </div>
    <div class="tab">
      <tab></tab>
    </div>-->

    <!--热门课程-->
    <div v-if="currShow" class="curriculumbpadding">
      <div v-for="(i,index) in homeculummArray" :key="index" class="curriculum">
        <div class="fs17 c_666 fw_b">{{i.time}}</div>
        <div class="curriculum-content flex">
          <div class="content-left">
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3271928043,1151506304&fm=26&gp=0.jpg"
            />
          </div>
          <div class="content-center flex_1">
            <div class="content-center-tit1 fs16 fw_b over_1">{{i.music}}</div>
            <div class="content-center-tit2 fs13 fw_b">正在为您安排老师</div>
            <div
              @click="enterClassroomBtn(i.images,i.id)"
              class="content-center-tit3 fs15 flex flex_y_center"
            >
              进入教室
              <van-icon name="arrow" />
            </div>
          </div>
          <div class="content-right">
            <button class="c_fff fs14">上传乐谱</button>
          </div>
        </div>
      </div>
    </div>
    <skeleton :height="10" background="#FAFAFA"></skeleton>
    <div class="Consultation">
      <div>
        <div class="flex Consultation-header flex_y_center">
          <img class="header-left" src="../../../assets/student/home/gonggao.png" />
          <div class="header-center fs17 fw_b c_666">最新咨询</div>
          <div class="header-right flex_1 flex flex_x_right fs12 c_666">
          	
          	<router-link to='/allConsultation'>更多<van-icon name="arrow" /></router-link>
          </div>
        </div>
        <div
          v-for="(i,index) in rmationArray"
          :key="index"
          @click="rmation(index)"
          class="Consultation-content flex"
        >
          <div class="Consultation-content-left">
            <div class="Consultation-content-left-t fs15">
              <span class="over_2">{{i.title}}</span>
            </div>
            <div class="Consultation-content-left-b flex flex_x_right fs12">{{i.addtime}}</div>
          </div>
          <div class="Consultation-content-right">
            <img :src="i.images" />
          </div>
        </div>
      </div>
    </div>
    <skeleton :height="10" background="#FAFAFA"></skeleton>
    <div class="Promise">
      <div class="Promise-header fs17 c_666 fw_b">我们的承诺</div>
      <div v-for="(i,index) in promiseArray" :key="index" class="Promise-item flex">
        <div class="Promise-item-img">
          <img :src="i.img" />
        </div>
        <div class="Promise-item-title">
          <div class="title-1">{{i.name}}</div>
          <div class="title-2">{{i.name2}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerNav from "@/components/headerNav";
import swiperNav from "./components/swiperNav";
import skeleton from "@/components/skeleton";
import swiperBanner from "./components/swiperBanner";
import tab from "./components/tab";

export default {
  components: {
    headerNav,
    swiperNav,
    skeleton,
    swiperBanner,
    tab
  },
  data() {
    return {
    	currShow:null,
      bannerArray: [],
      navArray: [],
      homeculummArray: [],
      rmationArray: [],
      promiseArray: [
        {
          img: require("../../../assets/student/home/biaoqian.png"),
          name: "承诺退款",
          name2: "对课程不满意，随时提出退款要求"
        },
        {
          img: require("../../../assets/student/home/faxian.png"),
          name: "服务承诺",
          name2: "因材施教，根据孩子的特点与进度，匹配"
        },
        {
          img: require("../../../assets/student/home/wode.png"),
          name: "师资承诺",
          name2: "VIP陪练老师"
        }
      ]
    };
  },
  methods: {
    //轮播图
    async getBanner() {
      let Banner = await this.service.home.getBanner({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token")
      });
      console.log("轮播图", Banner.data);
      this.bannerArray = Banner.data;
    },
    //乐器列表
    async getHappy() {
      let Happy = await this.service.home.getHappy({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token"),
        name: localStorage.getItem("name")
      });
      console.log("乐器列表", Happy.data);
      this.navArray = Happy.data;
    },
    //首页课程
    async getHomeculum() {
      let Homeculum = await this.service.home.getHomeculum({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token")
      });
      console.log("首页课程", Homeculum.data);
      this.homeculummArray = Homeculum.data;
      console.log(Homeculum.state)
      if(Homeculum.state == 200){
      	this.currShow = true
      }else{
      	this.currShow = false
      }
      
    },
    //作业列表
    async getEndculum() {
      let Endculum = await this.service.home.getEndculum({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token")
      });
      console.log("作业列表", Endculum);
    },
    async getRmation() {
      let Rmation = await this.service.home.getRmation({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token")
      });
//    console.log(" 获取资讯", Rmation.data);
      this.rmationArray = Rmation.data.slice(0,2);
      
    },

    btn() {
      this.$router.push("/homestu/home1");
    },
    returnBtn() {
      alert("1");
    },
    rmation(index) {
      console.log(index);
      this.$router.push(`/rmationDetails/${index}`);
      //  	/article/${id}
    },
    enterClassroomBtn(img, id) {
    	console.log(img,id)
       globalWebView(
          "initRoom",
          VJsonStringify({
            ...getPersonalData(),
            image: img,
            id: id
          })
        );
    }
  },
  mounted() {
    console.log(localStorage.getItem("user_id"));
  },
  created() {
    this.getBanner();
    this.getHappy();
    this.getHomeculum();
    this.getRmation();
    //  this.getEndculum();
  }
};
</script>

<style scoped="scoped" lang="scss">
.Promise {
  padding-bottom: 70px;
  margin-top: 10px;
  background: #fff;
  padding-left: 15px;
  .Promise-header {
    padding-top: 20px;
  }
  .Promise-item {
    margin-top: 20px;
    .Promise-item-img {
      img {
        width: 32px;
        height: 32px;
      }
    }
    .Promise-item-title {
      margin-left: 20px;
      .title-1 {
        color: #23252f;
        font-size: 15px;
      }
      .title-2 {
        color: #666666;
        font-size: 12px;
        margin-top: 7px;
      }
    }
  }
}
.Consultation {
  background: #fff;
  margin-top: 10px;
  padding: 0 15px;
  .Consultation-header {
    padding-top: 20px;
    .header-left {
      width: 18px;
      height: 18px;
    }
    .header-center {
      margin-left: 10px;
    }
    .header-right {
      /deep/ .van-icon {
        font-size: 12px;
      }
    }
  }
  .Consultation-content {
    width: 100%;
    height: 90px;
    margin-top: 10px;
    .Consultation-content-left {
      width: calc(100% - 130px);
      height: 90px;
      word-wrap: break-word;
      padding-right: 15px;
      box-sizing: border-box;
      .Consultation-content-left-t {
        width: 100%;
        height: 60px;
        color: #23252f;
        line-height: 18px;
        margin-top: 10px;
      }
      .Consultation-content-left-b {
        width: 100%;
        height: 30px;
        color: #c2c2c2;
      }
    }
    .Consultation-content-right {
      width: 130px;
      height: 90px;
      border-radius: 5px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.container {
  width: 100%;
  .swiper {
    width: 100%;
    height: 229px;
  }
  .swiper-nav {
    width: 100%;
    height: 160px;
  }
  .remen {
    padding: 0 15px;
    box-sizing: border-box;
    margin: 15px 0;
    img {
      width: 20px;
      height: 20px;
    }
    .remen-name {
      margin-left: 3px;
    }
  }
  .curriculumbpadding {
  }
  .curriculum {
    padding-top: 15px;
    padding-left: 15px;
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 30px;
    .curriculum-content {
      margin-top: 10px;
      padding-top: 5px;
      .content-left {
        margin-right: 15px;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      .content-center {
      	padding-top: 3px;
        .content-center-tit1 {
          color: rgba(35, 37, 47, 1);
        }
        .content-center-tit2 {
          color: #5e5e5e;
          margin-top: 15px;
        }
        .content-center-tit3 {
          color: #3e7093;
          margin-top: 15px;
        }
      }
      .content-right {
        margin-top: 8px;
        button {
          width: 92px;
          height: 30px;
          background: rgba(62, 112, 147, 1);
          border-radius: 1px;
          margin-right: 30px;
        }
      }
    }
  }
}
</style>