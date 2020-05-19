<template>
  <div class="container_">
    <header-nav title="我的课时"></header-nav>
    <my-banner @handleToRuleDetail="handleToRuleDetail">
      <div slot="detail">
        <div class="count">{{hours}}</div>
        <div class="remaining_time">剩余课时(分钟）</div>
      </div>
    </my-banner>
    <div class="classList">
      <div class="classItem" v-for="(i,b) in hourtrajectoryArray" :key="b" v-if="hourtrajectoryShow">
        <div class="item_left">
          <div class="left_top">
            <div class="item_title">{{i.desc}}</div>
          </div>
          <div class="item_time">{{i.time}}</div>
        </div>
        <div class="count active" v-if="i.status==1">+{{i.hour}}</div>
        <div class="count active" v-if="i.status==2">-{{i.hour}}</div>
      </div>
      <div v-else class="empty">
				<div class="empty-img flex flex_x_center"><img src="../../../../assets/student/about/empty.png" /></div>
				<div class="empty-title fs13 flex flex_x_center">暂无课程轨迹</div>
				<!-- <div class="empty-btn flex flex_x_center">
					<button class="fs15 c_fff">提交作业</button>
				</div> -->
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
       hourtrajectoryArray:[],
       hours:0,
       hourtrajectoryShow:true
    };
  },
  methods: {
    handleToRuleDetail() {
      this.$router.push("/classHourRulestu");
    },
    async hourtrajectoryBtn(){
      let init = await this.service.personalCenter.hourtrajectory({
        user_id: localStorage.getItem('user_id'),
				token: localStorage.getItem('token'),
      })
      if(init.state==200){
        this.hourtrajectoryArray = init.data
        this.hourtrajectoryShow = true
      }else{
        this.hourtrajectoryShow = false
      }
    }
  },
  created(){
    this.hourtrajectoryBtn()
    this.hours = this.$route.query.hours
  }
};
</script>

<style scoped lang="scss">
.empty {
			width: 100%;
			height: calc(100% - 50px);
			background: #FAFAFA;
			padding-top: 120px;
			box-sizing: border-box;
			.empty-img {
				img {
					width: 125px;
					height: 111px;
				}
			}
			.empty-title {
				color: #5E5E5E;
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
.container_ {
  width: 100%;
  min-height: 100%;
  height: auto;
  .count {
    @include word(24, #ffffff);
  }
  .remaining_time {
    margin-top: 10px;
    text-shadow: 0px 2px 3px rgba(84, 146, 147, 0.67);
    @include word(14, #ffffff);
  }
  .classList {
    padding: 0 15px;
    .classItem {
      @include flex-center(row, space-between);
      margin-top: 20px;
      padding: 20px 10px;
      background-color: #f3f4f5;
      .item_left {
        .left_top {
          @include flex-center();
          .item_title {
            @include word(15, #23252f);
          }
          .item_label {
            @include word(10, #ffffff);
            margin-left: 10px;
            padding: 2px;
            background-color: #f29417;
          }
        }
        .item_time {
          @include word(13, #666666);
          margin-top: 10px;
        }
      }
    }
    .count {
      @include word(15, #23252f);
      &.active {
        color: #f29417;
      }
    }
  }
}
</style>