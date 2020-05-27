<template>
  <div class="container_">
    <header-nav title="学生详细"></header-nav>

    <van-tabs @click="onClick">
			<van-tab title="学生列表"></van-tab>
			<van-tab title="课程列表"></van-tab>
      <van-tab title="申请绑定"></van-tab>
		</van-tabs>
    <!-- 学生列表 -->
    <div class="content"  v-for="(i,index) in studentList" :key="index" @click="studentDetails(index,i.id)" v-if="type==1">
      <div class="item_list">
        <div class="item_left">
          <img :src="i.images" class="avatar" />
        </div>
        <div class="item_right">
          <div class="item_title">
            昵称：{{i.name}}
            <p>
              {{i.mobile}}
              <van-icon class="right_icon" size="30" name="arrow" />
            </p> 
          </div>
        </div>
      </div>
    </div>

    <!-- 课程列表 -->
     <div class="content"  v-for="(i,index) in taskList" :key="index" @click="toDetails(i.id)" v-if="type==2">
      <div class="item_list">
        <div class="item_right">
          <div class="item_content">
            <div class="item">
              <div class="item_lefts">所报课程</div>
              <div class="item_rights">{{i.music}}课</div>
              <div class="item_rights"><span>{{i.hour}}分钟</span></div>
            </div>
            <div class="item_time">{{i.time}}</div>
            <div class="item" style="padding-top:0px;">
              <div class="item_lefts">作用状态</div>
              <div class="item_rights"> 
                <van-button type="danger" v-if="i.status==1" class="submit1" >待上课</van-button>
                <van-button type="primary" v-else-if="i.status==2" class="submit1" >已上课</van-button>
                <van-button type="info" v-else-if="i.status==3" class="submit1">未批改</van-button>
                <van-button type="primary" v-else-if="i.status==4" class="submit1">已批改</van-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 申请绑定列表 -->
    <div class="content"  v-for="(i,index) in shenqingList" :key="index"  v-if="type==3">
      <div class="item_list">
        <div class="item_right">
          <div class="item_content">
            <div class="item">
              <div class="item_rights">{{i.user_id}}</div>
              <div class="item_rights"><span>{{i.addtime}}</span></div>
            </div>
            <div class="item_time">{{i.time}}</div>
            <div class="item flex flex" style="padding-top:0px;">
              <div class="item_lefts">状态</div>
              <div class="item_rights"> 
                <div  @click="examineBtn(i.id)" v-if="i.type==0" class="submit1">未处理</div>
                <div v-else-if="i.type==1" class="submit1">同意</div>
                <div v-else-if="i.type==2" class="submit1">不同意</div>
                <div v-else-if="i.type==3" class="submit1">已取消</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 

    <van-popup v-model="van_dialog">
			<div class="van-dialogs">
				<div class="van-dialog__header">提示</div>
				<div class="van-dialog__content">
					<div class="van-dialog__message van-dialog__message--has-title">
              是否同意绑定
					</div>
				</div>
				<div class="van-hairline--top van-dialog__footer van-dialog__footer--buttons">
					<button class="van-button van-button--default van-button--large van-dialog__cancel" @click="qxbackSubmit">
						<span class="van-button__text" >取消</span>
					</button>
          <button class="van-button van-button--default van-button--large van-dialog__cancel" @click="jujuebackSubmit">
						<span class="van-button__text" >拒绝</span>
					</button>
					<button class="van-button van-button--default van-button--large van-dialog__confirm van-hairline--left" @click="qdbackSubmit">
						<span class="van-button__text" >确认</span>
					</button>
				</div>
			</div>
		</van-popup>
  </div>
</template>


<script> 
import toast from "@/utils/toast";
export default {
  data() {
    return { 
      type:1,
      studentList:[],
      taskList:[],
      shenqingList:[],
      van_dialog:false,
      msg:'',
      id:""
    };
  },
  methods: {
    studentDetails(index,id){   //学生详情
    this.studentList.map(i=>{
      if(i.id == id){
        localStorage.setItem("studentDetails",JSON.stringify(i))
      }
    })
      let status = 1
      this.$router.push(`/myStudents/${index}/${status}`)
      
    },
    toDetails(id) { //老师详情
      let status = 2
      this.$router.push(`/myStudentDetail/${id}/${status}`)
    },
    onClick(name, title) {
      this.type=name+1
      if(this.type==2){
        this.taskBtn()
      }else if(this.type==3){
        this.applyBtn()
      }else if(this.type==1){
        this.studentBtn()
      }
    },
    async studentBtn(){   //学生列表
      let init = await this.service.personalCenter.tac_student({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token"),
      })
      if(init.state==200){
        this.studentList = init.data
      }else{
        toast({
          text:'暂无学生列表',
          time: 1000
        });
      }
    },
    async taskBtn(){   //课程列表
      let init = await this.service.personalCenter.getMyCourseList({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token"),
      })
      if(init.state==200){
        this.taskList = init.data
      }else{
        toast({
          text:'暂无课程列表',
          time: 1000
        });
      }
    },
    async applyBtn(){   //申请绑定列表
      let init = await this.service.personalCenter.apply({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token"),
      })
      if(init.state==200){
        this.shenqingList = init.data
      }else{
        toast({
          text:'暂无课程列表',
          time: 1000
        });
      }
    },
    examineBtn(id){       //是否确认绑定
      this.id = id
      this.van_dialog = true
    },
    qxbackSubmit(){     //取消绑定
      this.van_dialog = false
    },
    jujuebackSubmit(){
      this.van_dialog = false
      this.type = 2
      this.examineBtns()
    },
    qdbackSubmit(){     //确认绑定
      this.van_dialog = false
      this.type = 1
      this.examineBtns()
    },
    async examineBtns(){    //申请审核
      let init = await this.service.personalCenter.examine({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token"),
        id:this.id,
        type: this.type
      })
      if(init.state == 200){
        toast({
          text:init.msg,
          time: 1000
        });
      }else{
        toast({
          text:init.msg,
          time: 1000
        });
      }
    }
  },
  created() {
    this.studentBtn()
  }
};
</script>

<style scoped lang="scss">
 .van-dialogs{width:320px;overflow:hidden;font-size:16px;background-color:#fff;border-radius:16px;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:.3s;transition:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}@media (max-width:321px){
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
  min-height: 100%;
  height: auto;
  background: #f9f9f9;
  .content{
    background: #FFFFFF;
    margin:15px 10px;
    .item_list{
      @include flex();
      .item_left{ 
        padding:10px 0;
        .avatar {
          margin-left: 16px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      .item_right{
        width: 100%;
        .item_title {
          @include word(15, #23252f, bold);
          margin: 17px 0 0 15px;
          span{
            margin-left: 40px;
          }
           p{@include flex();
            margin-top:10px;
             .right_icon{
              @include flex-center(row,flex-end);
              position: relative;
              top:-10px;
            }
          }
        }
        .item_time{
          margin:-15px 0 0 15px;
        }
        .item_content{
          margin-top:-20px;
          .item{
            @include flex-center(row,space-between);
              padding: 20px 15px 0 15px;
              height: 60px;
              .item_lefts {
                @include word(15, #23252f, bold);
                p{
                  margin-top:10px;
                  @include word(15, #23252f);
                }
              }
              .item_rights {
                .submit1{
                  height: 30px;
                  width: 100px;
                  line-height:30px;
                  font-size: 16px;
                  font-weight: bold;
                  /deep/ .van-button__text{
                    @include word(12,#23252f,bold);
                    position: relative;
                  }
                }
                .submit2{
                  height: 30px;
                  width: 100px;
                  /deep/ .van-button__text{
                    @include word(12,#FFFFFF);
                    position: relative;
                  }
                }
              }
          }
         }
      }
    }
  }
}
</style>