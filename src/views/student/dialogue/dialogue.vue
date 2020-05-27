<template>
    <div class="container" @click="removeShow">
        <!-- <header-nav :returnShow="false"  @handleBacks="handleBacks" title="聊天"></header-nav> -->
        <van-cell v-for="(i,b) in remarksArray" :key="b" :title="i.text">
            <van-button type="primary" size="mini" @click="remarksRemove(i.id)">删除</van-button>
            <van-button type="primary" size="mini" @click="remarksEdit(i.id)">编辑</van-button>
        </van-cell>
        <van-popup v-model="van_dialog">
			<div class="van-dialogs">
				<div class="van-dialog__content">
					<van-field class="van-dialog__message van-dialog__message--has-title" v-model="remarksValue"  placeholder="请输入要修改的备注" />
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
       
        <div :class="[show==true?'container_dialogues':'container_dialogue' ]">
            <div class="container_dialogue_div  flex flex_y_center">
                <div class="container_dialogue_left" >
                    <van-button type="primary" size="small" @click.stop="commonBtns" v-if="commonShowremove">常用语</van-button>
                    <van-button icon="chat-o" size="small" type="primary" @click.stop="keyboardBtn(1)" v-if="commonShow"/>
                    <van-button icon="star-o" size="small" type="primary" @click.stop="keyboardBtn(2)" v-if="keyboardShow"/>
                </div>
                <div class="container_dialogue_center">
                    <input type="text" placeholder="新消息" v-model="newsValue"  @click.stop="newsValueBtn" >
                </div>
                <div class="container_dialogue_right flex">
                    <!-- <van-icon name="smile-o" /> -->
                    <!-- <van-icon name="plus"  /> -->
                    <van-button type="primary" size="mini" @click="preservation">保存</van-button>
                </div>
            </div>
            <div class="container_dialogue_div2" v-if="show">
                <div class="container_dialogue_div2_top">
                    <van-cell v-for="(i,b) in cellArray" :key="b" :value="i.title" v-if="newsValueShow"  @click.stop="chooseCommonWords(i.title)"/>
                </div>
                <div class="container_dialogue_div2_bottom flex flex_y_center flex_x_spa">
                    <div class="container_dialogue_div2_bottom-left flex flex_y_center" @click.stop="addtoBtn">
                        <van-icon name="goods-collect-o" />
                        <p>添加</p>
                    </div>
                    <div class="container_dialogue_div2_bottom-right"></div>
                    <div class='container_dialogue_div2_bottom-left flex flex_y_center' @click.stop="administration">
                        <van-icon name="goods-collect-o" />
                        <p>管理</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import toast from "@/utils/toast";
export default {
    
    data(){
        return{
            show:false,  //输入框或消息  状态
            commonShowremove:true,
            commonShow:false,   //常用语的 状态
            keyboardShow:false, //键盘的 状态
            newsValue:"",       //文本框的内容
            cellArray:[         //常用语
                ],
            remarksArray:[],    //备注列表
            valueShow:true,
            newsValueShow:false,
            van_dialog:false,
            remarksId:"",
            remarksValue:""
        }
    },
    methods:{
        async remarksRemove(id){      //备注删除
            let init = await this.service.personalCenter.remarks({
                ...getUserData(),
                culum_id:this.culum_id,
                type:1,
                id:id
            })
            if(init.state==200){
                toast({
                    text: init.msg,
                    time: 1000
                })
                this.remarksBtn()
            }
        },
        remarksEdit(id){        //备注编辑
            this.remarksId = id
            this.van_dialog = true
        },
        qxbackSubmit(){         //取消编辑
            this.van_dialog = false
        },
        async qdbackSubmit(){          //确认编辑
            let init = await this.service.personalCenter.remarks({
                ...getUserData(),
                culum_id:this.culum_id,
                type:2,
                id:this.remarksId,
                text:this.remarksValue
            })
             if(init.state==200){
                toast({
                    text: init.msg,
                    time: 1000
                })
                this.van_dialog = false
                this.remarksBtn()
            }
        },
        handleBacks(){      //头部返回
            this.$router.push('/dashboard/homestu')
        },
        removeShow(){      //关闭
            this.show = false
            this.commonShow = false
            this.keyboardShow = false
            this.commonShowremove = true
        },
        commonBtns(){        //常用语事件
            this.show = true
            this.commonShowremove=false
            this.commonShow = !this.commonShow
        },
        keyboardBtn(index){      //键盘
            switch(index){
                case 1:
                    this.keyboardShow = !this.keyboardShow
                    this.commonShow = !this.commonShow
                    this.newsValueShow = true
                    break;
                case 2:
                    this.keyboardShow = !this.keyboardShow
                    this.commonShow = !this.commonShow
                    this.newsValueShow =false
                    this.newsValueBtn()
                    break;
            }
        },
        newsValueBtn(){     //文本框触角
            this.commonShowremove=false
            this.show = true
            this.commonShow = true
            this.keyboardShow = false
            this.newsValueShow =false
        },
        chooseCommonWords(name){  //选择常用语
            this.newsValue = name
        },
        addtoBtn(){  //添加常用语
            this.$router.push('/addCommonWords')
        },
        administration(){       //管理常用语
            this.$router.push('/managementPhrases')
            localStorage.setItem('cellArray',JSON.stringify(this.cellArray))
        },
        async commonBtn(){
            let init = await this.service.personalCenter.common({
                ...getUserData(),
                type:0
            })
            this.cellArray = init.data
        },
        async preservation(){   //保存标注
            if(this.newsValue==""){
                 toast({
                    text: '标注不能为空',
                    time: 1000
                })
                return
            }
            let init = await this.service.personalCenter.courseware_remarks({
                culum_id:this.culum_id,
                text:this.newsValue,
            }) 
            if(init.state==200){
                toast({
                    text: init.msg,
                    time: 1000
                })
                this.remarksBtn()
            }  
        },
        async remarksBtn(){  //查看课程备注
            let init = await this.service.personalCenter.remarks({
                ...getUserData(),
                culum_id:this.culum_id,
                type:0,
            }) 
            if(init.state==200){
                this.remarksArray = init.data
            }
        }
    },
    created(){
        this.culum_id = this.$route.query.id
        this.commonBtn()
        this.remarksBtn()
    }
}
</script>
<style scoped="scoped" lang="scss">
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
.container{
    width:100%;
    height:100%;
    background: #f6f6f6;
}
    .container_dialogues{
        width:100%;
        height:50px;
        background: #fff;
        position: fixed;
        bottom:40%;
        .container_dialogue_div{
            height:100%;
            width:100%;
            .container_dialogue_left{
                width:20%;
                text-align: center;
                .van-button{
                    /deep/.van-icon{
                        font-size: 20px;
                    } 
                }
            }
            .container_dialogue_center{
                width:65%;
                input{
                    width:100%;
                    height:40px;
                    font-size: 16px;
                }
            }
            .container_dialogue_right{
                width:15%;
                /deep/.van-icon{
                    font-size:20px;
                    margin: 0 5px ;
                }
            }
        }
        .container_dialogue_div2{
            .container_dialogue_div2_top{
                height:220px;
                overflow-y: scroll;

                .van-cell{
                    border-top:1px solid #ccc;
                    line-height: 33px;
                }
            }
            .container_dialogue_div2_top::-webkit-scrollbar {
                display: none; /* Chrome Safari */
            }
            .container_dialogue_div2_bottom{
                position: fixed;
                bottom: 0;
                width:100%;
                height:30px;
                background:#fff;
                border-top:1px solid #ccc;
                padding: 10px 0;
                .container_dialogue_div2_bottom-left{
                    /deep/.van-icon{
                        font-size: 30px;
                        font-weight: bold;
                        color:#07c160;
                    }
                    p{
                        font-size: 16px;
                        font-weight: bold;
                    }
                }
                .container_dialogue_div2_bottom-right{
                    width:1px;
                    height:100%;
                    background: #ccc;
                }
            }
        }
    }
    .container_dialogue{
        width:100%;
        height:50px;
        background: #fff;
        position: fixed;
        bottom:0;
        .container_dialogue_div{
            height:100%;
            width:100%;
            .container_dialogue_left{
                width:20%;
                text-align: center;
            }
            .container_dialogue_center{
                width:65%;
                input{
                    width:100%;
                    height:40px;
                }
            }
            .container_dialogue_right{
                width:15%;
                /deep/.van-icon{
                    font-size:20px;
                    margin: 0 5px ;
                }
            }
        }
        
    }
</style>