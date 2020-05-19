<template>
  <div class="container_">
    <header-nav :returnShow="false" :returnShop="false" title="辛创陪练一站通"></header-nav>
    <!--header-->
    <div class="swiper">
      <swiper-banner :bannerArray="bannerArray"></swiper-banner>
    </div>
    <!--热门课程-->
    <div class="curriculumbpadding">
      <div v-for="(i,index) in homeculummArray" :key="index" class="curriculum">
        <div class="fs17 c_666 fw_b">{{i.time}}</div>
        <div class="curriculum-content flex">
          <div class="content-left">
            <img :src="i.images" />
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
    <div class="kecheng">
      <div @click="kechengBtn" v-for="i in 3" class="kecheng-item">
        <div class="kecheng-item-t flex flex_x_bten">
          <div class="kecheng-item-t-l fs15 fw_b">111</div>
          <div class="kecheng-item-t-r fs15">222</div>
        </div>
        <div class="kecheng-item-c fs14 fw_b">帕格尼尼主题狂想</div>
        <div class="kecheng-item-b flex flex_x_bten">
          <div class="kecheng-item-b-l fs14">课堂分数：30分</div>
          <div class="kecheng-item-b-r fs15">抢单</div>
        </div>
      </div>
    </div>
    <!--<div class="Consultation">
			<div>
				<div class="flex Consultation-header flex_y_center">
					<img class="header-left" src="../../../assets/home/gonggao.png" />
					<div class="header-center fs17 fw_b c_666">最新咨询</div>
					<div class="header-right flex_1 flex flex_x_right fs12 c_666">更多
						<van-icon name="arrow" />
					</div>
				</div>
				<div v-for="(i,index) in 3" :key="index" class="Consultation-content flex">
					<div class="Consultation-content-left">
						<div class="Consultation-content-left-t fs15"><span class="over_2">AI赋能助力VIP陪练行业领军音乐教育，助力VIP助力VIP陪练行业领军陪练行业领军</span></div>
						<div class="Consultation-content-left-b flex flex_x_right fs12">中华网</div>
					</div>
					<div class="Consultation-content-right">
						<img src="http://b.hiphotos.baidu.com/image/h%3D300/sign=92afee66fd36afc3110c39658318eb85/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg" />
					</div>
				</div>
			</div>
    </div>-->
    <!--<div class="Promise">
			<div class="Promise-header fs17 c_666 fw_b">我们的承诺</div>
			<div v-for="(i,index) in 3" :key="index" class="Promise-item flex">
				<div class="Promise-item-img">
					<img src="../../../assets/home/biaoqian.png" />
				</div>
				<div class="Promise-item-title">
					<div class="title-1">承诺退款</div>
					<div class="title-2">对课程不满意，随时提出退款要求</div>
				</div>
			</div>
    </div>-->
  </div>
</template>

<!--
					<img src="../../assets/home/faxian.png"/>
					<img src="../../assets/home/wode.png"/>-->

<script>
import swiperBanner from "./components/swiperBanner";
import courseList from "@/components/courseList";
import swiperNav from "./components/swiperNav";

export default {
  components: {
    swiperBanner,
    courseList,
    swiperNav
  },
  data() {
    return {
      bannerArray: [],
      homeculummArray: []
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
    //首页课程
    async getHomeculumth() {
      let Homeculumth = await this.service.home.getHomeculumth({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token")
      });
      console.log("首页课程", Homeculumth.data);
      this.homeculummArray = Homeculumth.data;
    },

    btn() {
      this.$router.push("/home/home1");
    },
    returnBtn() {
      alert("1");
    },
    kechengBtn() {},
    enterClassroomBtn(img, id) {
      globalWebView(
        "initRoom",
        VJsonStringify({
          ...getPersonalData(),
          id: id,
          image: img
        })
      );
    }
  },
  mounted() {
    console.log(localStorage.getItem("user_id"));
  },
  created() {
    this.getBanner();
    this.getHomeculumth();
    //  this.getEndculum();
  }
};
</script>

<style scoped="scoped" lang="scss">
.kecheng {
  width: 100%;
  height: calc(100% - 50px);
  background: #fafafa;
  box-sizing: border-box;
}
.kecheng-item {
  background: #fff;
  padding: 18px 20px 20px 30px;
  box-sizing: border-box;
  margin-top: 15px;
  .kecheng-item-t {
    .kecheng-item-t-l {
      color: #23252f;
    }
    .kecheng-item-t-r {
      color: #838486;
    }
  }
  .kecheng-item-c {
    color: #838486;
    margin-top: 15px;
  }
  .kecheng-item-b {
    margin-top: 15px;
    .kecheng-item-b-l {
      color: #6b6b6b;
    }
    .kecheng-item-b-r {
      color: #3e7093;
    }
  }
}
/*.Promise {
		padding-bottom: 70px;
		margin-top: 10px;
		background: #fff;
		padding-left: 15px;
		.Promise-header {
			padding-top: 20px;
		}
		.Promise-item{
			margin-top: 20px;
			.Promise-item-img{
				img{
					width: 32px;
					height: 32px;
				}
			}
			.Promise-item-title{
				margin-left: 10px;
				.title-1{
					color: #23252F;
					font-size: 15px;
				}
				.title-2{
					color: #666666;
					font-size: 12px;
					margin-top: 3px;
				}
			}
		}
	}*/
/*11*/
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

.container_ {
  width: 100%;
  background: #fafafa;
  min-height: 100%;
  .swiper {
    width: 100%;
    height: 229px;
  }
  .swiper-nav {
    width: 100%;
    height: 160px;
    background: #fff;
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
    background: #fff;
    .curriculum-content {
      margin-top: 15px;
      .content-left {
        margin-right: 15px;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      .content-center {
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

.curriculumbpadding {
}
.curriculum {
  padding-top: 15px;
  padding-left: 15px;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 30px;
  .curriculum-content {
    margin-top: 15px;
    .content-left {
      margin-right: 15px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }
    .content-center {
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
</style>