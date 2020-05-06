<template>
	<div class="container">
		<header-nav border title="老师评价"></header-nav>
		<div class="course flex flex_y_center" >
           <div class="course_left">
               <img src="../../../../assets/about/empty.png" alt="">
           </div>
           <div class="course_right">
               <p>张涵予  男  大提琴课老师</p>
               <p>讲课风格：风趣幽默，生动形象好评89%</p>
           </div>
		</div>	
        <button class="buttons" @click="determineBtn">
            确定
        </button>
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
						<span class="van-button__text" >确认</span>
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
				culinfoArray: [],
                status:"",
                van_dialog:false
			}
		},
		methods: {
            determineBtn(){  //确定
                this.van_dialog = true
            },
            qxbackSubmit(){
                this.van_dialog = false
            },
            qdbackSubmit(){
                this.van_dialog = false
            },
			async getCulinfo(id) {
				let Culinfo = await this.service.about.getCulinfo({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token'),
					bout_id: id
				})
				this.culinfoArray = Culinfo.data
			},
		},
		created() {
			var id = this.$route.params.id
			this.status = this.$route.params.status
			console.log(this.status)
			// this.getCulinfo(id)
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
        width: 100%;
        height: 100%;
        background:#f6f6f6;
    }
	.course {
        background: #fff;
        margin: 10px 0;
        padding: 5px;
		.course_left{
             width:30%;
             img{
                width:100%;
                border-radius: 50%;
             }   
        }
		.course_right{
            width:70%;
            font-size:14px;
            font-weight: 600;
            padding: 0 15px;
            line-height:30px;
        }
		
    }	
    .buttons{
        width:70%;
		margin:10% 15%;
		color:#fff;
		background: #1989fa;
		font-size: 16px;
		line-height: 50px;
		border-radius: 5px;
    }
</style>