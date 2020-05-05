<template>
	<div>
		<header-nav border :returnShop="false" title="预约课程"></header-nav>
		<div class="content">
			<div class="detail">
				<div class="age-name fs16 fw_b">请选择孩子年龄</div>
				<div class="age-list flex flex_x_bten flex_warp">
					<!--:disabled="i.disabled == 1?false:true"-->
					<button class="age-item flex_center fs14" v-for="(i,index) in ageArray" :key="index" @click="ageBtn(index)" :class="{select:ageNum==index}">{{i.name}}</button>
				</div>
			</div>
			<div class="detail">
				<div class="age-name fs16 fw_b">请选择乐器种类</div>
				<div class="age-list flex flex_warp">
					<button class="style-item flex_center fs14" v-for="(i,index) in musicArray" :key="index" @click="styleBtn(index)" :class="{select:styleNum==index}">{{i.name}}</button>
				</div>
			</div>
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
			<div v-else></div>
			<div class="img fs16 fw_b">
				<div class="img-name">请上传曲谱图片</div>
				<div class="img-lile">
					<van-uploader :after-read="afterRead" v-model="fileList" multiple :max-count="1" />
				</div>
			</div>
			<div class="detail">
				<div class="age-name fs16 fw_b">选择时长</div>
				<div class="data-list flex flex_x_bten flex_warp">
					<button class="data-item flex_center fs14" v-for="(i,index) in hourArray" :key="index" @click="timeBtn(index)" :class="{select:timeNum==index}">{{getplus}}</button>
				</div>
			</div>
		</div>
		<div class="footer-btn">
			<button :disabled="disabled" @click="makeBtn">预约</button>
		</div>
		<elastic-frame ref="refs" @returnBtn="returnBtn" :title1="title1" :title2="title2" :title3="title3" :imgs='imgs' :btn="btn"></elastic-frame>
	</div>
</template>

<script>
	import elasticFrame from '@/components/student/frame'
	import toast from "@/utils/toast"
	import cg from '@/assets/student/components/fairy.png'
	import sb from '@/assets/student/components/fail.png'
	export default {
		components: {
			elasticFrame
		},
		data() {
			return {
				ageArray: [], //孩子年龄
				musicArray: [], //乐器
				hourArray: [], //课时
				timeArray: [], //上课时间
				fileList: [],
				ageNum: -1,
				styleNum: -1,
				dataNum: -1,
				timeNum: -1,
				shijianNum:-1,
				disabled: true,
				title1: '',
				title2: '',
				title3: '',
				btn: '',
				param:'',
				age:'',
				music:'',
				time:'',
				shijian:'',
				hour:'',
				file:''	,
				boutaddState:'',
				imgs:null,
				timeindex:1,
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
				console.log('孩子年龄', Bout.data.age)
				this.ageArray = Bout.data.age
				console.log('乐器', Bout.data.music)
				this.musicArray = Bout.data.music
				console.log('课时', Bout.data.hour)
				this.hourArray = Bout.data.hour
				console.log('上课时间', Bout.data.time)
				this.timeArray = Bout.data.time
			},
			async getImgsubm(params) {
				let Imgsubm = await this.service.about.getImgsubm(params)
				console.log('图片上传', Imgsubm.data)
				this.file = Imgsubm.data
			},
			async getBoutadd() {
				let Boutadd = await this.service.about.getBoutadd({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token'),
					age:this.age,
					music:this.music,
					time:this.hour+' '+this.shijian,
					file:this.file,
					hour:this.time
				})
				console.log('孩子年龄', Boutadd)
				console.log(Boutadd.state)
				this.boutaddState = Boutadd.state
				if(Boutadd.state=200){
					this.title1 = '恭喜您！'
					this.title2 = '购买成功'
					this.title3 = '请开课三分钟前进入教室'
					this.btn = '返回首页'
					this.imgs = cg
					this.$refs.refs.show = true
				}else{
					this.title1 = '很抱歉'
					this.title2 = '您的剩余时长不足'
					this.title3 = '请前往公众号购买'
					this.btn = '我知道了'
					this.imgs = sb
					this.$refs.refs.show = true
				}
			},
			
			
			
			
			afterRead(file) {
				let files  = this.fileList[0].file
				let param = new FormData()
				param.append('file',files)
				param.append("user_id",localStorage.getItem('user_id'))
				param.append('token',localStorage.getItem('token'))
				this.getImgsubm(param)
			},
			ageBtn(index) {
				this.ageNum = index
				this.age = this.ageArray[index].name
				console.log(this.age)
				this.fn()
			},
			styleBtn(index) {
				this.styleNum = index
				this.music = this.musicArray[index].name
				console.log(this.music)
				this.fn()
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
			timeBtn(index) {
				this.timeNum = index
				this.time = this.hourArray[index].name
				console.log(this.time)
				this.fn()
			},
			shijianBtn(index){
				this.shijianNum = index
				this.shijian = this.shijianArray[index].name
				console.log(this.shijian)
				this.fn()
			},
			makeBtn() {
				if(this.fileList == '') {
					toast({
						text: '请上传图片',
						time: 1000
					})
				} else {
					this.getBoutadd()
				}
			},
			fn() {
				if(this.ageNum >= 0 && this.styleNum >= 0 && this.dataNum >= 0 && this.timeNum >= 0 && this.shijianNum >= 0) {
					this.disabled = false
				}
			},

			returnBtn() {

				console.log(this.boutaddState)
				if(this.boutaddState == 200){
					console.log('111')
					sessionStorage.setItem('tabBarActiveIndex', 0);
					this.$router.push('/dashboard/homestu')
				}else{
					this.$refs.refs.show = false
				}
			}
		},
		computed: {
			getplus: function() {
				let result = null;
				for(var i = 0; i < this.hourArray.length; i++) {
					result = this.hourArray[i].name
				}
				return result + '分钟'
			}
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
		padding-bottom: 80px;
	}
	
	.detail {
		padding: 0 15px;
		.age-name {
			color: #23252F;
			margin-top: 20px;
		}
		.age-list {
			.age-item {
				width: 30%;
				height: 40px;
				background: rgba(255, 255, 255, 1);
				border: 1px solid rgba(153, 153, 153, 1);
				border-radius: 3px;
				color: #5E5E5E;
				margin-top: 15px;
				box-sizing: border-box;
			}
			button:disabled {
				background: #AEAEAE !important;
				border: none !important;
				color: #fff !important;
			}
		}
		.age-list {
			.style-item {
				width: 30%;
				height: 40px;
				background: rgba(255, 255, 255, 1);
				border: 1px solid rgba(153, 153, 153, 1);
				border-radius: 3px;
				color: #5E5E5E;
				margin-top: 15px;
				box-sizing: border-box;
				margin-left:3.3333%;
			}
			.style-item:nth-child(3n+1){
				margin-left: 0;
			}
			button:disabled {
				background: #AEAEAE !important;
				border: none !important;
				color: #fff !important;
			}
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
	
	.img {
		padding: 0 15px;
		.img-name {
			color: #23252F;
			margin-top: 20px;
		}
		.img-lile {
			margin-top: 15px;
		}
	}
	
	.select {
		background: #3E7093 !important;
		border: none !important;
		color: #FFFFFF !important;
	}
	
	.footer-btn {
		position: fixed;
		bottom: 0;
		width: 100%;
		button {
			width: 100%;
			height: 50px;
			background: #3E7093;
			color: #FFFFFF;
			font-size: 15px;
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