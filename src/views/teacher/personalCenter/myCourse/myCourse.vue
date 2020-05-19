<template>
  <div class="container">
    <header-nav title="课程列表"></header-nav>
    <div class="container_div">
        <ul class="flex">
          <li v-for="(i,b) in taskArray" :key="b" @click="taskBtn(i.id)" :class="[taskNum==i.id?'container_divLi':'container_divLi1']">{{i.name}}</li>
        </ul>
    </div>
    <div class="flex flex_y_center container_text" @click="screenBtn">
      <img src="../../../../assets/student/personalCenter/shaixuan.png" alt="">
      筛选
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" >
        <ol class="ol flex">
          <li v-for="(i,b) in taskList" :key="b" @click="taskBtn1(i.id)" :class="[taskNum1==i.id?'container_divLi':'container_divLi1']">{{i.name}}</li>
        </ol>
    </van-popup>
    <div class="orderList" v-if="taskNum == 1">
      <ul class="flex flex_x_bten" v-for="(i,b) in myCourseArray" :key="b">
        <li>
          <span class="fs16 fw_b">{{i.music}}课</span>
          <span class="fs14 fw_500">{{i.hour}}分钟</span>
        </li>
        <li>
          <span class="fs14 fw_500">{{i.time}}</span>
          <span class="fs16 fw_b" v-if="i.status==1">已抢单：待选择</span>
          <span class="fs16 fw_b" v-if="i.status==2"> 已抢单：已拒绝</span>
          <span class="fs16 fw_b" v-if="i.status==3">已抢单：待上课</span>
          <span class="fs16 fw_b" v-if="i.status==4"> 已抢单：已完成</span>
        </li>
      </ul>
    </div>
    <div class="orderList" v-if="taskNum == 2">
      <div class="orderListS_div" v-for="(i,b) in myCourseArray" :key="b">
        <ul class="flex flex_x_bten">
          <li>
            <span class="fs16 fw_b">{{i.music}}课</span>
            <span class="fs14 fw_500">{{i.hour}}分钟</span>
          </li>
          <li>
            <span class="fs14 fw_500">{{i.time}}</span>
            <span class="fs16 fw_b" v-if="i.state==1">已抢单：待上课</span>
            <span class="fs16 fw_b" v-if="i.state==2"> 已抢单：已完成</span>
          </li>
        </ul>
        <div class="flex flex_x_bten orderList_div">
          <p class="fs16 fw_b">授课时间</p>
          <span class="fs14 fw_500">{{i.time_two}}</span>
        </div>
        <div class="flex flex_x_right orderList_divs" >
          <van-button @click="newTime" icon="plus" type="info" >新增时间段</van-button>
        </div>
      </div>
    </div>
    <div class="orderLists" v-if="taskNum == 3">
      <div class="kecheng"  v-for="(i,b) in myCourseArray" :key="b">
        <div class="share_wrapper">
          <div class="share_title">   
            <img :src="i.images" class="avatar" />
            <div>
              <div class="username">{{i.uName}}</div>
            </div>
          </div> 
          <div class="share_list">
            <div class="share_item">
              <div class="item_left">{{i.music}}<p>{{i.hour}}分钟</p></div>
              <div class="item_right">{{i.time}}
                <p v-if="i.status==1" class="status">待上课</p>
                <p v-if="i.status==2" class="status">已完成</p>
              </div>
            </div>
            <div class="share_item">
              <div class="item_left">授课时间</div>
              <div class="item_right">{{i.time_two}}</div>
            </div>
            <div class="share_item">
              <div class="item_left">提示</div>
              <div class="item_right">上课时间为：{{i.time}}<p>请您在上课时间提前五分钟进入课堂</p></div>
            </div>
          </div>
          <div class="submit">
            <van-button type="info">进入课堂</van-button>
          </div>
        
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
 
  data() {
    return {
      taskArray:[
        {name:"抢单课程",id:1},
        {name:"学生课程",id:2},
        {name:"进入课堂",id:3}
      ],
      taskNum:1,
      taskNum1:1,
      show:false,
      taskList:[],
      myCourseArray:[],
      orderArray:[
        {name:"待选择",id:1},
        {name:"已拒绝",id:2},
        {name:"待上课",id:3},
        {name:"已上完",id:4},
      ],
      orderArray1:[
        {name:"待上课",id:1},
        {name:"已完成",id:2},
      ],
      type:1,
      type_two:1
    };
  },
  methods: {
    newTime(){     //新增时间段
      this.$router.push('/detailsPageTeacher')
    },
    taskBtn(id){   //切换列表
      this.taskNum = id
      this.type = id
      this.myTask()
    },
    taskBtn1(id){
      this.taskNum1 = id
      this.type_two=  this.taskNum1
      this.show = false
      this.myTask()
    },
    screenBtn(){  //筛选
      this.taskList=[]
      switch(this.taskNum){
        case 1:
          this.taskList = this.orderArray
          this.show = true
          break;
        case 2:
          this.taskList = this.orderArray1
          this.show = true
          break;
        case 3:
          this.taskList = this.orderArray1
          this.show = true
          break;
      }
    },
    async myTask(){
      let init = await this.service.personalCenter.getMyCourseList({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token"),
        type:this.type,
        type_two:this.type_two
      })
      if(init.state==200){
        this.myCourseArray = init.data
      }
    }
  },
  created() {
    this.myTask();
  }
};
</script>

<style scoped="scoped" lang="scss">
.ol{
  width:100%;
  margin: 50px 0;
  flex-wrap: wrap;
  li{
    width:45%;
    height:40px;
    text-align: center;
    line-height:40px;
    font-size:16px;
    font-weight: 600;
    border-radius: 5px;
    margin: 10px 2%;
  }
}
.container_divLi{
  background: #1989fa;
  color:#fff;
  border:1px solid #1989fa;
}
.container_divLi1{
  color:#000;
  border:1px solid #ccc;
}
.container {
  width: 100%;
  height: 100%;
  background: #f3f4f5;
  .container_div{
    width:100%;
    ul{
      margin-top:5px;
      background: #fff;
      li{
        width:33%;
        margin: 10px 2%;
        text-align: center;
        padding: 15px 0;
        font-size: 16px;
        font-weight: 600;
        border-radius: 5px;
      }
    }
  }
  .container_text{
    flex-direction: row-reverse;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 20px 0 0 ;
    img{
        width: 30px;
        vertical-align: middle;
    }
  }
  .orderList{
    margin:2.5%;
    padding: 5px 0px 15px 0;
    ul{
      width:100%;
      padding: 10px 0;
      margin-bottom: 10px;
      background:#fff;
      li{
        width:50%;
        span{
          display: block;
          padding: 10px 15px 5px 15px;
        }
      }
      li:nth-of-type(2){
        text-align: right;
      }
    }
    .orderList_div{
      padding: 20px 0px 0 15px;
      background: #fff;
    }
    /deep/.van-button{
      height:auto;
      line-height:2;
      font-size: 16px;
      padding: 0 8px;
      .van-icon{
        font-size: 12px;
      }
    }
    .orderList_divs{
      margin:10px 0;
    }
    .orderListS_div{
      background:#fff;
      box-sizing: border-box;
      padding: 0 10px 10px 0;
      margin:0 0 10px 0;
    }
  }
  .orderLists{
      margin:2.5%;
     .kecheng {
			// width: 100%;
			// height: calc(100% - 50px);
      // padding:10px 10px;
      margin-bottom:10px ;
			box-sizing: border-box;
			.share_wrapper {
				background: #FFFFFF;
				.share_title {
					padding:20px 0;
					@include flex();
					.avatar {
						margin-left: 16px;
						width: 60px;
						height: 60px;
						border-radius: 50%;
					}
					.username {
						@include word(15, #23252f, bold);
						margin: 10px 0 0 15px;
						span{
							margin-left: 40px;
						}
					} 
				}
				.share_list {
					.share_item {
						@include flex-center(row, space-between);
						padding: 0 15px;
						height: 60px;
						.item_left {
						@include word(15, #23252f, bold);
						p{
							margin-top:10px;
							@include word(15, #23252f);
						}
						}
						.item_right {
						@include word(15, #6b6b6b);
						.status{
							margin-top:10px;
							@include word(15, #23252f, bold);
            }
            p{margin-top:5px;}
						}
					}
					.share_item:nth-child(2n-1) {
						background-color: #ffffff;
					}
				}
				
				.submit{
					@include flex-center(column);
					padding: 20px 0;
						button{
						width: 80%;
						border-radius: 5px;
					}
				}
			}
		}
  }
}
</style>