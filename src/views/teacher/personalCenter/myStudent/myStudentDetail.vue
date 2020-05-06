<template>
  <div class="container_">
    <header-nav title="学生信息"></header-nav>

    <div class="content">
      <div class="item_list">
         <div class="item_left">
          <img src="@/assets/student/tabber/about.png" class="avatar" />
        </div>
        <div class="item_right">
          <div class="item_title">
            昵称
            <span>女</span>
            <span>22</span>
            <p>
              1555484854
            </p> 
          </div> 
        </div>
      </div>
    </div>
<!-- 待上课-start -->
 <div class="contents"  v-if="status==1">
      <div class="item_left">
        <div class="item">
          <div class="item_lefts">所报课程</div>
          <div class="item_rights">钢琴课</div>
          <div class="item_rights"><span>20分钟</span></div>
        </div>
        <div class="item_time">2020-04-18  20：00--21:00</div>
      </div>
      <div class="item_right">
        <img src="@/assets/personalCenter/u93.png" class="avatar" />
        <span>待上课</span>
      </div>
  </div>
<!-- 待上课-end -->


<!-- 已上课-start -->
  <div class="contents"  v-if="status!=1">
      <div class="item_left">
        <div class="item">
          <div class="item_lefts">所报课程</div>
          <div class="item_rights">钢琴课</div>
          <div class="item_rights"><span>20分钟</span></div>
        </div>
        <div class="item_time">2020-04-18  20：00--21:00</div>
      </div>
      <div class="item_right">
        <img src="@/assets/personalCenter/u69.png" class="avatar" />
        <span>已上课</span>
      </div>
  </div>
  <div class="detail_list" v-if="status!=1">
    <label>作业详情</label>
    <div class="detail_item">
      <img src="@/assets/personalCenter/u71.png" class="avatar" />
      <img src="@/assets/personalCenter/u71.png" class="avatar" />
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
       <van-button class="submit" color="rgba(22, 155, 213, 1)">提交</van-button>
    </div>
   
  </div>
<!-- 已上课-end -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      message:'',
      status:''
    };
  },
  methods: {},
  created(){
    this.status=this.$route.params.id;
  }
};
</script>

<style scoped lang="scss">
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
        left: 25px;
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