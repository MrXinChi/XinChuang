<template>
  <div class="container_">
    <header-nav title="课程详细"></header-nav>

    <div class="content" v-if="tacCulinfo.state==1">
      <div class="item_list flex_y_center">
         <div class="item_left">
          <img :src="tacCulinfo.images" class="avatar" />
        </div>
        <div class="item_right">
          <div class="item_title">
            昵称：{{tacCulinfo.userName}}
            <p>
              {{tacCulinfo.mobile}}
            </p> 
          </div> 
        </div>
      </div>
    </div>

<!-- 已上课-start -->
  <div class="contents"  >
      <div class="item_left">
        <div class="item">
          <div class="item_lefts">所报课程：</div>
          <div class="item_rights">{{tacCulinfo.music}}课  {{tacCulinfo.hour}}分钟</div>
        </div>
        <div class="item_time">{{tacCulinfo.time}}</div>
      </div>
      <div class="item_right" v-if="tacCulinfo.state==2">
        <img src="@/assets/personalCenter/u69.png" class="avatar" />
        <span >已上课</span>
      </div>
      <div class="item_right" v-if="tacCulinfo.state==4">
        <img src="@/assets/personalCenter/u69.png" class="avatar" />
        <span >已批改</span>
      </div>
      <div class="item_right" v-if="tacCulinfo.state==1">
        <img src="@/assets/personalCenter/u93.png" class="avatar" />
        <span >未上课</span>
      </div>
      <div class="item_right" v-if="tacCulinfo.state==3">
        <img src="@/assets/personalCenter/u93.png" class="avatar" />
        <span >未批改</span>
      </div>
  </div>
  <div class="detail_list"  v-if="tacCulinfo.state!=1">
    <label>作业详情</label>
    <div class="detail_item">
      <video controls class="course-viewo" v-for="(i,b) in tacCulinfo.task" :key="b" :src="i" v-if="tacCulinfo.task_type==1">
				<source src="myvideo.mp4" type="video/mp4"></source>
				<source src="myvideo.ogv" type="video/ogg"></source>
				<source src="myvideo.webm" type="video/webm"></source>
				<object width="" height="" type="application/x-shockwave-flash" data="myvideo.swf">
					<param name="movie" value="myvideo.swf" />
					<param name="flashvars" value="autostart=true&amp;file=myvideo.swf" />
				</object>
				当前浏览器不支持 video直接播放，点击这里下载视频： <a href="myvideo.webm">下载视频</a>
			</video>
			<audio controls class="course-viewo" v-for="(i,b) in tacCulinfo.task" :key="b" :src="i" v-if="tacCulinfo.task_type==2">
				<source src="myaudio.MP3" type="myaudio/mp4"></source>
				<source src="myaudio.Ogg" type="myaudio/ogg"></source>
				<source src="myaudio.Wav" type="myaudio/webm"></source>
				<object width="" height="" type="application/x-shockwave-flash" data="myaudio.swf">
					<param name="movie" value="myaudio.swf" />
					<param name="flashvars" value="autostart=true&amp;file=myaudio.swf" />
				</object>
			</audio>
      
    </div>
    <div class="item_bottom">
      <label>批改作业</label>
      <van-field
        v-model="message"
        rows="3"
        autosize
        type="textarea"
        placeholder="请输入内容"
      />
       <van-button v-if="tacCulinfo.state !=4" @click="submitBtn(tacCulinfo.id)" class="submit" color="rgba(22, 155, 213, 1)">提交</van-button>
    </div>
   
  </div>
<!-- 已上课-end -->
  </div>
</template>


<script>
import toast from "@/utils/toast";
export default {
  data() {
    return {
      message:'',
      status:'',
      id:"",
      tacCulinfo:{},
      timer: '',
    };
  },
  methods: {
    async taskDetails(id){
      let init = await this.service.personalCenter.tac_culinfo({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token"),
        id:id
      })
      if(init.state == 200){
        this.tacCulinfo = init.data
        this.message = this.tacCulinfo.text
      }
    },
    async submitBtn(){  //批改作业
      if(this.message==""){
        toast({
          text:"请填写作业内容",
          time: 1000
        });
        return
      }
      let init = await this.service.personalCenter.tac_correction({
        user_id: localStorage.getItem("user_id"),
        token: localStorage.getItem("token"),
        text:this.message,
        task_id:this.id
      })
      if(init.state == 200){
        toast({
          text:init.msg,
          time: 1000
        });
        this.timer = setTimeout(this.$router.push('/myStudent'), 2000);
      }
    },
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  created(){
    this.id=this.$route.params.id;
    this.status=this.$route.params.status;
    this.taskDetails(this.id)
  }
};
</script>

<style scoped lang="scss">
.course-viewo{
		width: 200px;
		margin: 7.5px 0;
	}
.container_ {
  width: 100%;
  min-height: 100%;
  height: auto;
  background: #f3f4f5;
  .content{
    background: #FFFFFF;
    margin:15px 10px;
    .item_list{
      @include flex();
      .item_left{
        padding:30px 0 20px 0;
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
            margin-left: 20px;
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
      }
    }
  }
  .contents{
    background: #FFFFFF;
    margin:15px 10px;
    height: 90px;
     @include flex-center(row,space-between);
    .item_left{
      margin-top:-35px;
      .item{
        @include flex-center(row,space-between);
          padding: 0 15px;
          height: 80px;
          .item_lefts {
            @include word(15, #23252f, bold);
            p{
              @include word(15, #23252f);
            }
          }
      }
      .item_time{
        margin:-15px 0 0 15px;
      }
    }
    .item_right{
      margin: 15px 15px 0 0;  
      span{
        position: relative;
        top:-37px;
        left: 30px;
        @include word(15, #23252f, bold);
      }
    }
  }
  .detail_list{
   margin:0 15px;
    label{
       @include word(15, #23252f, bold);
    }
    .detail_item{
      margin:0 5px;
      img{
        margin-top:10px;
        width: 100%;
      }
    }
    .item_bottom{
      margin-top:20px;
      /deep/ .van-cell{
        margin-top:10px;
      }
      .submit{
        width: 100%;
        border-radius:5px;
        margin-top:20px;
        margin-bottom:50px;
        /deep/ .van-button__text{
          @include word(18,#FFFFFF,bold);
        }
      }
    }
  }
}
</style>