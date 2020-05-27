<template>
	<div class="container">
		<header-nav :returnShow='false' :returnShop="false" title="作业">
			<div @click="makeBtn" style="color: #23252F;" class="fs14" slot="right">提交作业</div>
		</header-nav>
 		<van-tabs @click="onClick">
			<van-tab title="课程列表">

			</van-tab>
			<van-tab title="提交作业">
				
			</van-tab>
		</van-tabs>
		<div class="kecheng">
			<div class="kecheng-list" v-if="taskShow">
				<div  class="kecheng-item" v-for="(i,index) in couresArray" :key="index" @click="couresBtn(i.status,i.id,index,i.music)">
					<div class="kecheng_top flex flex_x_bten">
						<div class="kecheng_top_l fs15 fw_b">{{i.music}}课</div>
						<div class="kecheng_top_r fs15 fw_400">{{i.time}}</div>
					</div>
					<div class="kecheng_bottom flex flex_x_bten">
						<div class="kecheng_bottom_l fs14">{{i.hour}}</div>
						<div v-if="i.status == 1" class="kecheng_bottom_r fs14">详情</div>
						<div v-else-if="i.status == 2" class="kecheng_bottom_r fs14">提交作业</div>
						<div v-else-if="i.status == 3" class="kecheng_bottom_r fs14">未阅读</div>
						<div v-else-if="i.status == 4" class="kecheng_bottom_r fs14">已阅读</div>
					</div>
				</div>
			</div>
			<div v-else class="empty">
				<div class="empty-img flex flex_x_center"><img src="../../../assets/student/about/empty.png" /></div>
				<div class="empty-title fs13 flex flex_x_center">没有可提交课程的作业</div>
				<!-- <div class="empty-btn flex flex_x_center">
					<button class="fs15 c_fff">提交作业</button>
				</div> -->
			</div>
		</div>
		<van-popup v-model="vanPopup">
			<div class="van-dialogs">
			<div class="van-dialog__header">提示</div>
			<div class="van-dialog__content">
				<div class="van-dialog__message van-dialog__message--has-title">
					{{Msg}}
				</div>
			</div>
			<div class="van-hairline--top van-dialog__footer van-dialog__footer--buttons">
				<!-- <button class="van-button van-button--default van-button--large van-dialog__cancel" @click="qxbackSubmit">
					<span class="van-button__text" >取消</span>
				</button> -->
				<button class="van-button van-button--default van-button--large van-dialog__confirm van-hairline--left" @click="qdbackSubmit">
					<span class="van-button__text" >确定</span>
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
				taskShow: null,
				couresArray: [],
				type:1,
				vanPopup:false,
				Msg:"",
			}
		},
		methods: {
			qdbackSubmit(){  //确定并去登陆 
			this.$router.push('/loginstuter')
			},
			onClick(name, title) {
				this.type=name+1
				this.getEndculum()
			},
			async getEndculum() {
				let Endculum = await this.service.task.getEndculum({
					user_id: localStorage.getItem("user_id"),
					token: localStorage.getItem("token"),
					type:this.type
				});
				if(Endculum.state==200){
					this.couresArray = Endculum.data
					this.taskShow = true
				}else if(Endculum.state==10003){
					this.vanPopup = true
					this.Msg = '请先登录'
				}else{
					this.taskShow = false
				}
			},
			makeBtn() {
				this.$router.push('/student/submitHomework')
			},
			couresBtn(status,id,index,music){
				if(status == '1'){
					status = this.type
					this.$router.push(`/courseDetails2/${id}/${status}`);
				}else if(status == '2'){
					this.$router.push(`/student/submitHomeworks/${index}/${music}/${id}`)
				}else if(status == '3'){
					this.$router.push(`/courseDetails2/${id}/${status}`);
				}
			}
		},
		created() {
			this.getEndculum()
		},
		mounted() {
		}
	}
</script>

<style scoped="scoped" lang="scss">
.van-dialogs{
    width:320px;overflow:hidden;font-size:16px;background-color:#fff;border-radius:16px;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:.3s;transition:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}@media (max-width:321px){
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
.kecheng {
	width: 100%;
	background: #FAFAFA;
	box-sizing: border-box;
	padding-top: 15px;
	box-sizing: border-box;
}
.kecheng-list{
		padding-bottom: 60px;
	.kecheng-item{
		width: 100%;
		background: #fff;
		margin-top: 15px;
		padding: 15px 20px;
		box-sizing: border-box;
		.kecheng_top{
			.kecheng_top_l{
				color: #23252F;
			}
			.kecheng_top_r{
				color: #838486;
			}
		}
		.kecheng_bottom{
			margin-top: 15px;
			.kecheng_bottom_l{
				color: #6B6B6B;
			}
			.kecheng_bottom_r{
				color: #F29417;
			}
		}
	}
	.kecheng-item:nth-child(1){
		margin: 0;
	}
}
	.container {
		width: 100%;
		height: 100%;
		.empty {
			width: 100%;
			height: calc(100% - 50px);
			background: #FAFAFA;
			padding-top: 120px;
			box-sizing: border-box;
			.empty-img {
				img {
					width: 125px;
					height: 111px;
				}
			}
			.empty-title {
				color: #5E5E5E;
				margin-top: 20px;
			}
			.empty-btn {
				margin-top: 20px;
				button {
					width: 92px;
					height: 30px;
					background: rgba(62, 112, 147, 1);
					border-radius: 1px;
				}
			}
		}
		.kecheng {
			width: 100%;
			height: calc(100% - 50px);
			background: #FAFAFA;
			box-sizing: border-box;
		}
	}
</style>