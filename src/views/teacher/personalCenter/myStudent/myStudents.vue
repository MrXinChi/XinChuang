<template>
  <div class="container_">
    <header-nav title="学生详细"></header-nav>
    <div class="container_div">
        <img src="../../../../assets/personalCenter/图层 2.png" alt="">
        <div class="content" >
            <div class="item_list flex_y_center">
                <div class="item_left">
                <img :src="tacCulinfo.images" class="avatar" />
                </div>
                <div class="item_right">
                <div class="item_title">
                    昵称：{{tacCulinfo.name}}
                    <p>
                    {{tacCulinfo.mobile}}
                    </p> 
                </div> 
                </div>
            </div>
        </div>
        <div style="height:10px;width:100%;background:#F3F4F5"></div>
        <div class="contents">
            <div class="fs15 fw_500 contents_div">学生介绍</div>
            <p class="fs14 fw_400 contents_div1">{{tacCulinfo.text}}</p>
        </div>
        <div style="height:10px;width:100%;background:#F3F4F5"></div>
        <div class="contents1">
            <div class="fs15 fw_500 contents_div">学习阶段介绍</div>
            <p class="fs14 fw_400 contents_div1">{{tacCulinfo.music}}</p>
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
      van_dialog:false,
      msg:'',
      tacCulinfo:{}
    };
  },
  methods: {
    qxbackSubmit(){

    },
    qdbackSubmit(){

    },
    
  },
  created() {
      let tacCulinfos = localStorage.getItem('studentDetails')
      this.tacCulinfo = JSON.parse(tacCulinfos )
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
.container_{
    width:100%;
    height:100%;
    .container_div{
        img{
            width:100%;
            display: block;
        }
        .content{
            background: #FFFFFF;
            margin:5px 10px;
            .item_list{
            @include flex();
            .item_left{
                padding:20px 0 10px 0;
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
            padding: 0 0 20px 0;
            .contents_div{
                padding:20px 0 30px 20px;
            }
            .contents_div1{
                padding-left: 18px;
            }
        }
        .contents1{
            padding: 0 0 20px 0;
            .contents_div{
                padding:20px 0 30px 20px;
            }
            .contents_div1{
                padding-left: 18px;
            }
        }
    }
}
</style>