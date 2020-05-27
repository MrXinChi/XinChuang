<template>
	<div>
		<header-nav title="财务报表"></header-nav>
		<div class="fina-header flex flex_y_center">
			<button class="fs12 c_fff" @click="financialDetails">本月财务明细</button>
			<button class="fs12 c_fff" v-if="star==''" @click="starBtn">请选择时间</button>
			<button class="fs12 c_fff" v-else @click="starBtn">{{star}}</button>
			<span class="fs12">~</span>
			<button class="fs12 c_fff" v-if="end==''" @click="endBtn">请选择时间</button>
			<button class="fs12 c_fff" v-else @click="endBtn">{{end}}</button>
			<button class="fs14 fw_500 flex_1 flex flex_x_right" @click="searchBtn">搜索</button>
		</div>
		<div class="fina-content">
			<div class="content-header fs16 fw_b">财务明细</div>
			<div class="classhour">
				<div>
					<div v-for="(i,index) in financialReport" :key="index" class="hour-item flex flex_x_bten">
						<div class="item-left">
							<div class="item-left-t fs15">{{i.music}}</div>
							<div class="item-left-b fs12">{{i.time}}</div>
						</div>
						<div class="item-right flex flex_y_center fs15">+{{i.hour}}</div>
					</div>
				</div>
			</div>
		</div>
		<van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
			<van-datetime-picker
				v-model="currentDate"
				type="year-month"
				title="选择年月"
				:min-date="minDate"
				:max-date="maxDate"
				@confirm="onconfirm"
			/>
		</van-popup>
		
	</div>
</template>

<script>
import toast from "@/utils/toast";
export default {
	data(){
		return{
			financialReport:[],
			show:false,
			book:1,//本月
			star:"",//开始
			end:"",	//结束
			minDate: new Date(2020, 0, 1),
			maxDate: new Date(2025, 10, 1),
			currentDate: new Date(),
			type:0,
		}
	},
	methods:{
		onconfirm(value){
			var year = value.getFullYear();
			var month = value.getMonth() + 1;//js从0开始取
			if(month<10){
				month = "0"+ month
			}
			if(this.type==1){
				 this.star = year+'-'+month
			}else{
				this.end = year+'-'+month
			}
			 this.show = false
		},
		starBtn(){	//开始时间
			this.show = true
			this.type = 1
		},	
		endBtn(){	//结束时间
			this.show = true
			this.type = 2
		},
		financialDetails(){		//本月
			this.book = 1
			this.ReportBtn()
		},
		searchBtn(){		//搜索
			if(this.star=="" || this.end==""){
				toast({
					text: '请选择时间',
					time: 1000
				});
				return
			}
			this.book = 0		
			this.ReportBtn()
		},
		async ReportBtn(){
			let init = await this.service.personalCenter.Finance({
				user_id: localStorage.getItem("user_id"),
				token: localStorage.getItem("token"),
				book:this.book,
				star:this.star,
				end:this.end
			})
			if(init.state == 200){
				this.financialReport = init.data
			}
		}
	},
	created() {
		this.ReportBtn()
	},
}
</script>

<style scoped="scoped" lang="scss">
.fina-content{
	padding-left: 15px;
	.content-header{
		color: #23252F;
		margin-top: 20px;
	}
}
	.fina-header {
		width: 100%;
		height: 60px;
		background: rgb(250,250,250);
		button:nth-child(1) {
			width: 90px;
			height: 30px;
			background: rgba(174, 174, 174, 1);
			border-radius: 3px;
			margin-left: 20px;
		}
		button:nth-child(2) {
			width: 70px;
			height: 30px;
			background: rgba(174, 174, 174, 1);
			border-radius: 3px;
			margin-left: 50px;
		}
		span{
			color: #3E7093;
			margin: 0 5px;
		}
		button:nth-child(4) {
			width: 70px;
			height: 30px;
			background: rgba(174, 174, 174, 1);
			border-radius: 3px;
		}
		button:nth-child(5) {
			color: rgba(62, 112, 147, 1);
			margin-right: 15px;
		}
		
		
	}
	.classhour {
			padding-left: 15px;
			
		}
	.hour-item {
		width: 100%;
		height: 70px;
		border-bottom: 1px solid #DDDEE3;
		.item-left {
			.item-left-t {
				color: #23252F;
				margin-top: 18px;
			}
			.item-left-b {
				color: #838486;
				margin-top: 7px;
			}
		}
		.item-right {
			margin-right: 20px;
			color: #F29417;
		}
	}
</style>