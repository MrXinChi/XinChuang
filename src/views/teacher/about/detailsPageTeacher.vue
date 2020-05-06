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
				shijianShow:false
			}
		},
		methods: {
			async getBout() {
				let Bout = await this.service.about.getBout({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token')
				})
				console.log('上课时间', Bout.data.time)
				this.timeArray = Bout.data.time
			},
		 
			dataBtn(index) {
				this.dataNum = index
				this.hour = this.timeArray[index].name
				this.hour = this.hour.split('(')[0]
				console.log(this.hour)
				this.fn()
				console.log(index)
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
				console.log(this.shijian)
				this.fn()
			},
			makeBtn() {
				this.$router.go(-1);
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