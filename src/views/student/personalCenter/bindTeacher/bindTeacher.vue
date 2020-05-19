 <template>
	<div class="container">
		<header-nav border title="老师列表">
            <!-- <div @click="makeBtn"  class="fs14 button" slot="right">筛选<van-icon name="search" /></div> -->
        </header-nav>
        <div class="course " >
			<van-swipe :loop="false" :show-indicators="false" :stop-propagation="false" :width="83">
				<van-swipe-item v-for="(i,index) in kcArray" :key="index" @click="swiperBtn(i.id,index)" :class="[SwiperactiveNum==index ? 'Swiperactive' : 'Swiperactive1']" >
				{{i.name}}
				<div style="width:30px;height:2px;background:rgba(68,136,99,1);margin:0 auto;" v-if="SwiperactiveNum==i.id"></div>
				</van-swipe-item>
			</van-swipe>
		</div>	
		<div class="courses " >
			<ol>
                <li class="course_li flex flex_y_center" v-for="(i,b) in teacherList" :key="b" >    
                    <div class="course_li_left">
                        <img :src="i.images" alt="">
                    </div>
                    <div class="course_li_center">
                        <span>{{i.name}}</span>
                    </div>
                    <div class="course_li_right" v-if="i.apply==null" @click="bindingBtn(i.id)" >申请绑定</div> 
                    <div class="course_li_right" v-if="i.apply==0"> 待处理</div>   
                    <div class="course_li_right" v-if="i.apply==1"> 同意 </div>
                    <div class="course_li_right" v-if="i.apply==2"> 不同意</div>
                    <div class="course_li_right" v-if="i.apply==3"> 已取消</div>
                </li>
            </ol>
            <van-popup v-model="van_dialog">
                <div class="van-dialogs">
                    <div class="van-dialog__header">提示</div>
                    <div class="van-dialog__content">
                        <div class="van-dialog__message van-dialog__message--has-title">
                            {{msg}}
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
	</div>
</template>

<script>
	export default {
		data() {
			return {
                kcArray:[],
               teacherList:[],
               idStatus:'',
               SwiperactiveNum:"",
               type:0,
               van_dialog:false,
               msg:""
			}
		},
		methods: {
            bindingBtn(id){       //绑定提示
                this.teacherList.map(i=>{
                    if(i.id==id){
                        this.initBtn(id)
                    }
                })
            },
            qxbackSubmit(){     //取消绑定
                this.van_dialog = false
            },
            qdbackSubmit(){     //确认绑定
                this.van_dialog = false
                this.initBtns()
            },
            async initBtn(id){  //绑定接口
                let init = await this.service.about.apply({
                    user_id: localStorage.getItem('user_id'),
                    token: localStorage.getItem('token'),
                    tac_id :id
                })
                if(init.state == 200){
                   this.van_dialog = true
                   this.msg = init.msg
                }else{
                   this.van_dialog = true
                   this.msg = init.msg
                }
            },
            swiperBtn(id,index){  //筛选
                this.SwiperactiveNum = index
                this.type=id
				this.initBtns( )
			},
            async getHappyBtn(){  //乐器
                let init = await this.service.home.getHappy({})
                if(init.state==200){
                    this.kcArray = init.data
                    this.kcArray.unshift({name:"全部"})
                }
			},
            async initBtns(){
                let init = await this.service.personalCenter.whole_tac({
                    user_id: localStorage.getItem('user_id'),
                    token: localStorage.getItem('token'),
                    type:this.type
                })
                if(init.state == 200){
                    this.teacherList =  init.data 
                }
            }
		},
		created() {
            this.getHappyBtn()
            this.initBtns()
            this.idStatus = this.$route.query.id
            
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
    .Swiperactive{
		font-size:15px;font-family:PingFang SC;font-weight:bold;color:#448863;border-bottom:1px solid #448863;
	}
	.Swiperactive1{
		font-size:15px;font-family:PingFang SC;font-weight:bold;
	}
    /deep/
	.van-swipe__track{
		border-bottom:1px solid #F6F6F6;
		background:#fff;
		.van-swipe-item{
			line-height: 40px;
			text-align: center;
			span{
			font-size: 0.4rem;
			font-weight: bold;
			position: fixed;
			}
		}
	}
	.container{
		width:100%;
		height:100%;
        background: #f6f6f6;
        /deep/.van-icon{font-size: 30px;vertical-align: middle;}
        .button{line-height: 30px;font-weight: 600;}
        .courses{
            ol{
                .course_li{
                    padding: 15px 10px;
                    background: #fff;
                    margin:10px 15px;
                    .course_li_left{
                        width:20%;
                        img{
                            width:100%;
                        }
                    }
                    .course_li_center{
                        width:50%;
                        span{
                            font-size: 16px;
                            font-weight: 600;
                            margin:0 5px;
                        }
                    }
                    .course_li_right{
                        width:30%;
                        font-size: 14px;
                        font-weight: 500;
                        text-align: center;
                    }
                }
            }
        }  
	}
</style>