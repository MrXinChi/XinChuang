<template>
	<div>
		<header-nav border :returnShop="false" title="添加时间段"></header-nav>
		<div class="content">
			  
			<div class="detail">
				<div class="age-name fs16 fw_b">请选择日期</div>
				<div class="data-list flex flex_x_bten flex_warp">
					<button :disabled="i.state == 1?false:true" class="data-item flex_center fs14" v-for="(i,index) in timeArray" :key="index" @click="dataBtn(index)" :class="{select:dataNum==index}">{{i.name}}</button>
				</div>
			</div>
			<div v-if="shijianShow" class="detail">
				<div class="age-name fs16 fw_b">请选择时间</div>
				<div class="time-list flex flex_x_bten flex_warp">
					<button :disabled="i.state == 1?false:true" class="time-item flex_center fs14" v-for="(i,index) in shijianArray" :key="index" @click="shijianBtn(index)" :class="{select:shijianNum==index}">{{i.name}}</button>
				</div>
			</div>
		</div>
		<div class="footer-btn">
			<button @click="makeBtn">确认</button>
			<!-- <button :disabled="disabled" @click="makeBtn">预约</button> -->
		</div>
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
</template>

<script>
	import toast from "@/utils/toast"
	export default {
		data() {
			return { 
				timeArray: [], //上课时间
				dataNum: -1, 
				shijianNum:-1,
				disabled: true, 
				time:'',
				shijian:'',
				hour:'',    
				shijianArray:[],
				shijianShow:false,
				van_dialog:false,
				msg:""
			}
		},
		methods: {
			async getBout() {
				let Bout = await this.service.about.getBout({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token')
				})
				this.timeArray = Bout.data.time
			},
		 
			dataBtn(index) {
				this.dataNum = index
				this.hour = this.timeArray[index].name
				this.hour = this.hour.split('(')[0]
				this.fn()
				this.shijianArray = this.timeArray[index].text
				if(this.shijianArray.length == 0){
				this.shijianShow = false
			}else{
				this.shijianShow = true
			}
			}, 
			shijianBtn(index){
				this.shijianNum = index
				this.shijian = this.shijianArray[index].name
				this.fn()
			},
			async makeBtn() {
				let time = (this.hour+' '+this.shijian)
				let init = await this.service.personalCenter.tactime_add({
					user_id: localStorage.getItem('user_id'),
					token:localStorage.getItem('token'),
					time:time
				})
				if(init.state==200){
					this.van_dialog= true
					this.msg = init.msg
				}else{
					toast({
						text:init.msg ,
						time: 1000
					})
				}
			},
			qxbackSubmit(){     //取消绑定
                this.van_dialog = false
            },
            qdbackSubmit(){     //确认绑定
                this.$router.go(-1)
            },
			fn() {
				if(this.dataNum >= 0 && this.shijianNum >= 0) {
					this.disabled = false
				}
			},
		},
		created() {
			this.getBout()
			console.log(this.shijianArray)
			if(this.shijianArray.length == 0){
				this.shijianShow = false
			}else{
				this.shijianShow = true
			}
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
	.content {
		padding-bottom: 60px;
	}
	
	.detail {
		padding: 0 15px;
		.age-name {
			color: #23252F;
			margin-top: 20px;
		}
		 
		.data-list {
			.data-item {
				width: 47%;
				height: 40px;
				background: rgba(255, 255, 255, 1);
				border: 1px solid rgba(153, 153, 153, 1);
				box-sizing: border-box;
				border-radius: 3px;
				color: #5E5E5E;
				margin-top: 15px;
			}
			button:disabled {
				background: #AEAEAE !important;
				border: none !important;
				color: #fff !important;
			}
		}
		.time-list{
			.time-item {
				width: 23%;
				height: 40px;
				background: rgba(255, 255, 255, 1);
				border: 1px solid rgba(153, 153, 153, 1);
				box-sizing: border-box;
				border-radius: 3px;
				color: #5E5E5E;
				margin-top: 15px;
			}
			button:disabled {
				background: #AEAEAE !important;
				border: none !important;
				color: #fff !important;
			}
		}
	} 
	
	.select {
		background: #3E7093 !important;
		border: none !important;
		color: #FFFFFF !important;
	}
	
	.footer-btn {
		width: 100%;
		@include flex-center(row,center);
		button {
			width: 70%;
			height: 50px;
			background: #1798FA;
			border-radius:5px;
			@include word(15,#FFFFFF,bold)
		}
		button:disabled {
			width: 100%;
			height: 50px;
			background: rgba(174, 174, 174, 1);
			color: #FFFFFF;
			font-size: 15px;
		}
	}
</style>