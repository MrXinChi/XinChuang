 <template>
	<div class="container">
		<header-nav border title="老师详情"></header-nav>
		<div class="course flex " >
            <div class="course_top flex flex_x_center" >
                <img  src="../../../../assets/about/empty.png" alt="">
                <button v-if="show">已经绑定</button>
            </div>
            <div class="course_center">
                <span>张涵予</span>
                <span>男</span>
            </div>
            <div class="course_bottom"> 
                <span>4587912356</span>
                <button>钢琴</button>
            </div>
        </div>
        <div class="button" @click="bindingBtn" v-if="!show">
            <button >
                申请绑定
            </button>
        </div>
        <van-popup v-model="van_dialog">
			<div class="van-dialogs">
				<div class="van-dialog__header">提示</div>
				<div class="van-dialog__content">
					<div class="van-dialog__message van-dialog__message--has-title">
					</div>
				</div>
				<div class="van-hairline--top van-dialog__footer van-dialog__footer--buttons">
					<button class="van-button van-button--default van-button--large van-dialog__cancel" @click="qxbackSubmit">
						<span class="van-button__text" >取消</span>
					</button>
					<button class="van-button van-button--default van-button--large van-dialog__confirm van-hairline--left" @click="qdbackSubmit">
						<span class="van-button__text" >确认绑定</span>
					</button>
				</div>
			</div>
		</van-popup>
	</div>
</template>

<script>
	export default {
		data() {
			return {
               teacherList:[],
                van_dialog:false,
                idStatus:"",
                show:false
			}
		},
		methods: {
            bindingBtn(){       //绑定提示
                this.van_dialog = true
            },
            qxbackSubmit(){     //取消绑定
                this.van_dialog = false
            },
            qdbackSubmit(){     //确认绑定
                this.$router.push({path:'/bindTeacher',query:{id:this.idStatus}})
            }
		},
		created() {
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
	.container{
		width:100%;
		height:100%;
        background: #f6f6f6;
        .course{
            background: #fff;
            margin: 10px 15px;
            flex-direction:column ;
            padding: 20px;
           .course_top{
               img{
                    width:100px;
                    height:100px;
                    border-radius: 50%;
               }
               button{
                   height:40px;
                   font-size:14px;
                    color:#fff;
                    font-weight: 500;
                    padding:10px 15px;
                    background:#1989fa;
                    border-radius: 5px;
                    margin-left:30px ;
               }
              
           }
           .course_center{
               padding-left:60px;
               span{
                   display:inline-block;
                   font-size: 16px;
                   font-weight: bold;
                   margin: 15px 5px 10px 0;
               }
           }
           .course_bottom{
               padding-left:60px;
               span{
                   display:inline-block;
                   font-size: 16px;
                   margin: 0 10px 0 0;
               }
               button{
                    font-size:14px;
                    color:#fff;
                    font-weight: 500;
                    padding:10px 15px;
                    background:#1989fa;
                    border-radius: 5px;
               }
           }
        } 
        .button{
            width:100%;
            text-align: center;
            margin-top:50px ;
            button{
                font-size:16px;
                color:#fff;
                font-weight: 500;
                padding:25px 80px;
                background:#1989fa;
                border-radius: 5px; 
            }
        } 
	}
</style>