<template>
  <div class="container">
    <header-nav :returnShow="false" :returnShop="false" title="约课">
      <div v-if="shop!=null" @click="makeBtn" style="color: #23252F;" class="fs14" slot="right">我要约课</div>
    </header-nav>

    <div class="xzkecheng" v-if="shop==true">
      <ol>
        <li v-for="(i,b) in OlLi" :key="b" @click="OlLiBtn(i.id)"><span>{{i.name}}</span></li>
      </ol>
    </div>
    <div class="teacher" v-else-if="shop==null">    <!--  老师列表 -->
      <div class="teacher_div flex flex_y_center" v-for="(i,b) in teacherArray" :key="b" @click="teacheBtn(i.id)">
          <img :src="i.images" alt="">
          <span>{{i.music}}</span>
          <span>{{i.name}}</span>
      </div>
    </div>
    <div  v-else-if="shop==false">
      <div class="headerCss">
        <van-tabs @change="onTopLable1" v-model="active" v-if="aboutClass==1" swipeable>
          <van-tab v-for="(i,index) in topLabelList1" :title="i.title" :key="index"> 
          </van-tab>
        </van-tabs>
        <van-tabs @change="onTopLable2" v-model="active" v-if="aboutClass==2" swipeable>
          <van-tab v-for="(i,index) in topLabelList2" :title="i.title" :key="index"> 
          </van-tab>
        </van-tabs>
      </div>
      <div>
      <div class="data-list flex flex_x_bten flex_warp" v-if="timeShow">
        <button class="data-item flex_center fs14" v-for="(i,index) in timeArray" :key="index" @click="dataBtn(i.id,i.date)" :class="{select:dataNum==i.id}">{{i.name}}</button>
      </div>
      </div>
      <div class="kecheng">
        <div class="kecheng-list" v-if="show">
          <div
            @click="couresBtn(i.type,i.id,i.image)"
            class="kecheng-item"
            v-for="(i,index) in couresArray"
            :key="index"
          >
            <div class="kecheng_top flex flex_x_bten">
              <div class="kecheng_top_l fs15 fw_b">{{i.music}}课</div>
              <div class="kecheng_top_r fs15 fw_400">{{i.time}}</div>
            </div>
            <div class="kecheng_bottom flex flex_x_bten">
              <div class="kecheng_bottom_l fs14">时长：{{i.hour}}</div>
              <div v-if="aboutClass==1" class="kecheng_bottom_r fs14">
                <button v-if="i.type == 4" class="button">已上完</button>
                <button v-else-if="i.type == 3" class="button">待指定老师</button>
                <button v-else-if="i.type == 5" class="button">已指定，待上课</button>
                <button v-else-if="i.type == 2" class="button">约课成功</button>
                <button v-else-if="i.type == 1" class="button1">约课失败</button>
                <button v-else-if="i.type == 0" class="button2">待审核</button>
              </div>
              <div v-if="aboutClass==2" class="kecheng_bottom_r fs14">
                <button v-if="i.state == 2" class="button">已上课</button>
                <button v-else-if="i.state == 1" class="button1">未上课</button>
              </div>
            </div>
          </div>
        </div>
        <div class="empty" v-else>
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
	import elasticFrame from '@/components/student/frame'
export default {
  components: {
    elasticFrame
  },
  data() {
    return {
      vanPopup:false,
      Msg:"",
      topLabelList1: [
        {
          index: 0,
          title: "待审核"
        },
        {
          index: 1,
          title: "约课失败"
        },
        {
          index: 2,
          title: "预约成功"
        },
        {
          index: 3,
          title: "待选择老师"
        },
        {
          index: 4,
          title: "已经上完"
        }
      ],
      topLabelList2:[
        {
          index: 1,
          title: "全部"
        },
          {
          index: 2,
          title: "上课时间"
        },
        {
          index: 3,
          title: "已经上课"
        },
        {
          index: 4,
          title: "待上课"
        },
         
      ],
      active: 0,
      couresArray: [],
      teacherArray:[],
      show: null,
      status: "111",
      OlLi:[
        {name:"约课",id:1},
        {name:"我的老师",id:2}
      ],
      shop:true,
      aboutClass:1,  //约课的状态
      type:0,
      teacherId:0,   //老师id
      timeArray:"",   //时间列表
      dataNum:0,      //所选时间
      timeShow:false,
      timer:0,
    };
  },
  methods: {
    onTopLable1(index){   //学生筛选
      this.type = index
      this.getCulum()
    },
    onTopLable2(index){   //老师筛选
      this.type = index
      this.dataNum=0
      switch(index){
        case 0:
          this.teacherListBtn()
          this.timeShow = false
          break;
        case 1:
          this.timer=""
          this.couresArray=[]
          this.TeacherBtn()
          this.timeShow = true
          break;
        case 2:
          this.timer=""
          this.couresArray=[]
          this.timeShow = true
          break;
        case 3:
          this.timer=""
          this.couresArray=[]
          this.timeShow = true
          break;
      }
    },
    OlLiBtn(id) {
      switch(id){
        case 1:
          this.aboutClass = 1
          this.shop = false
          break;
        case 2:
          this.aboutClass = 2
          this.shop = null
          this.teacherBtn()
          break;
      }
    },
    makeBtn() {       //我要约课
    // this.$router.push({path:"/statusDetails",query:{id:2}})
      this.$router.push({path:"/detailsPage",query:{aboutClass:this.aboutClass,teacherId:this.teacherId}});
    },
    qdbackSubmit(){  //确定并去登陆 
      this.$router.push('/loginstuter')
    },
    //我的课程列表
    async getCulum() {
      this.couresArray=[]
      let Culum = await this.service.about.getCulum({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token"),
        type: this.type
      });
      this.boutaddState = Culum.state
      if(Culum.state==10003){
        this.Msg = '请先登录'
        this.vanPopup = true
        return
      }
      if (Culum.data == "") {
        this.show = false;
      } else {
        this.couresArray = Culum.data;
        this.show = true;
      }
    },
    //我的老师列表
    async teacherBtn() {
      let Culum = await this.service.about.userTac({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token"),
        
      });
      if(Culum.data.length!=0){
        this.teacherArray = Culum.data
        this.shop = null
      }
    },
    //老师的课程列表
    async teacherListBtn() {
      let Culum = await this.service.about.tac_culum({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token"),
        tac_id:this.teacherId,
        type: this.type,
        time:this.timer
      });
      if (Culum.state == 200) {
        this.couresArray = Culum.data;
        this.show = true

      } else {
        this.show = false;
      }
    },
    teacheBtn(id){    //选择老师
      this.teacherId = id
      this.shop = false
      this.teacherListBtn()
    },
    couresBtn(type,id, img) {  //进入详情
      let aboutClass = this.aboutClass
      this.$router.push(`/courseDetails/${id}/${type}/${aboutClass}`);
    },
    async TeacherBtn() {	//教师约课信息
      let Bout = await this.service.about.tac_bout({
        user_id:  localStorage.getItem("user_id"),
        tac_id:this.teacherId,
        token: localStorage.getItem("token")
      })
      this.timeArray = Bout.data.time
    },
    dataBtn(id,time) {    //上课时间筛选
      this.dataNum = id
      this.timer = time
      this.teacherListBtn()
    },
  },
  created() {
    this.getCulum();
   
  }
};
</script>

<style scoped="scoped" lang="scss">
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
.headerCss{
    position:fixed;
    width:100%;
    z-index: 98;
    /deep/ .van-ellipsis{
    flex-basis: 20% !important;
    }
}
.select {
		background: #3E7093 !important;
		border: none !important;
		color: #FFFFFF !important;
	}
.xzkecheng{
  margin: 100px auto;
  ol{
    width:100%;
    display: flex;
    li{
      background: #fff;
      margin:2%;
      width:46%;
      line-height: 185px;
      text-align: center;
      span{
        font-size: 15px;
        font-weight: bold;
      }
    }
  }
}
.data-list {
  padding-top: 35px;
    .data-item {
      width: 47%;
      height: 40px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(153, 153, 153, 1);
      box-sizing: border-box;
      border-radius: 3px;
      color: #5E5E5E;
      margin-top: 15px;
    }
  }
.teacher{
  .teacher_div{
    background: #fff;
    margin:10px;
    padding:0px 15px ;
    img{
      width:100px;
      height:100px;
      border-radius: 50%;
      vertical-align: middle;
    }
    span{
      font-size: 16px;
      font-weight: 600;
      padding:0 20px 0 10px;
    }
  }
}
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
    padding-top: 60px;
    box-sizing: border-box;
  }
}
</style>