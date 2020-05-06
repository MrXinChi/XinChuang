<template>
  <div class="container_">
    <header-nav title="学生列表"></header-nav>

    <div class="content"  v-for="index in 5" :key="index" @click="toDetails(index)">
      <div class="item_list">
        <div class="item_left">
          <img src="@/assets/student/tabber/about.png" class="avatar" />
        </div>
        <div class="item_right">
          <div class="item_title">
            昵称
            <span>女</span>
            <p>
              1555484854
              <van-icon class="right_icon" size="30" name="arrow" />
            </p> 
          </div>
          <div class="item_content">
            <div class="item">
              <div class="item_lefts">所报课程</div>
              <div class="item_rights">钢琴课</div>
              <div class="item_rights"><span>20分钟</span></div>
            </div>
            <div class="item_time">2020-04-18  20：00--21:00</div>
            <div class="item">
              <div class="item_lefts">作用状态</div>
              <div class="item_rights"> 
                <van-button v-if="index==1" class="submit1" color="rgba(153, 204, 255, 1)">待上课</van-button>
                <van-button v-if="index==2" class="submit2" color="rgba(22, 155, 213, 1)">已批改</van-button>
                <van-button v-if="index!=1&index!=2" class="submit2" color="rgba(255, 0, 0, 1)">未批改</van-button>
              </div>
            </div>
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
    };
  },
  methods: {
    toDetails(index) {
      this.$router.push(`/myStudentDetail/${index}`)
    }
  },
  created() {}
};
</script>

<style scoped lang="scss">
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
              padding: 0 15px;
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
                  /deep/ .van-button__text{
                    @include word(12,#23252f,bold);
                    position: relative;
                    top:-7px;
                  }
                }
                .submit2{
                  height: 30px;
                  width: 100px;
                  /deep/ .van-button__text{
                    @include word(12,#FFFFFF);
                    position: relative;
                    top:-7px;
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