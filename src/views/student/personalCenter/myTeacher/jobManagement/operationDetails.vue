<template>
	<div class="container">
		<header-nav border title="作业详情"></header-nav>
		<div class="course">
			<div class="course-title fs16 fw_b">上课内容</div>
			<div class="course_content fs15 flex_center">{{culinfoArray.music}}</div>
			<div class="course-title fs16 fw_b">上课时间</div>
			<div class="course_time fs15 flex_center">{{culinfoArray.time}}</div>
			<div class="course-title fs16 fw_b">上课学生</div>
			<div class="course_time fs15 flex_center">{{culinfoArray.userName}}</div>
			<div class="course-title fs16 fw_b">曲谱图片</div>
			<img class="course-images" :src="culinfoArray.image" />
		</div>
        <div class='button' v-if="status!=undefined" @click="sunmitBtn">
            添加作业文件夹
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
						<span class="van-button__text" >确认提交</span>
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
                culinfoArray:{music:"754556",time:"789456",userName:"人口结构和今年发生",image:"../../../../../assets/student/personalCenter/shaixuan.png"},
                status:"",
                van_dialog:false
			}
		},
		methods: {
            sunmitBtn(){      //提交作业
                this.van_dialog = true
            },
            qxbackSubmit(){     //取消提交
                this.van_dialog = true
            },
            qdbackSubmit(){     //确认提交
                this.van_dialog = true
            },
			operationDetailsBtn(){  //作业详情
                this.$router.push('/operationDetails')
			}
		},
		created() {
            this.status = this.$route.query.status
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
    background:#f6f6f6;
}
	.course {
        padding: 15px;
        margin: 15px;
        background: #fff;
		.course-title {
			color: #23252F;
		}
		.course_content{
			border: 1px solid #C2C2C2;
			width: 30%;
			height:40px;
			color: #23252F;
			border-radius: 3px;
			box-sizing: border-box;
			margin: 10px 0 20px 0;
		}
		.course_time{
			border: 1px solid #C2C2C2;
			width: 45%;
			height:40px;
			color: #23252F;
			border-radius: 3px;
			box-sizing: border-box;
			margin: 10px 0 20px 0;
		}
		button{
			border-radius: 5px;
			color:#fff;
			height:40px;
			font-size: 16px;
			padding: 0 10px;
		}
		.button{
			background: #07c160;
		}
		.button1{
			background: red;
		}
		.button2{
			background: #3E7093;
		}
	}
	.course-images{
		width: 90px;
		height: 90px;
		margin: 7.5px 0;
	}
	.course-viewo{
		width: 200px;
		margin: 7.5px 0;
    }
    .button{
        width:80%;
        margin: 0 10%;
        font-size:14px;
        color:#fff;
        font-weight: 500;
        background:#1989fa;
        border-radius: 5px;
        text-align: center;
        line-height: 50px;
    }
</style>