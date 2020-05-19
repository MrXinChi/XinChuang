<template>
	<div>
		<header-nav title="提交视频作业"></header-nav>
		<skeleton :height="15" background="#FAFAFA"></skeleton>
		<div class="subtask">
			<div class="subtask-choice fs16 fw_b">选择课程</div>
			<div class="subtask-input flex flex_y_center flex_x_bten">
				<input readonly="readonly" class="fs15" type="text" placeholder="点击选择课程" :value="values" />
				<van-icon name="arrow" />
			</div>
			<div class="subtask-choice2 fs16 fw_b">上传作业</div>
			<!--视频上传-->
			<ol class="flex ol_li">
				<li  v-for="(i,b) in fileArray" :key="b" @click="fileArrayBtn(i.id)" :class="[fileArrayNum==i.id?'fileClass':'']">
					{{i.name}}
				</li>
			</ol>
			<div class="item_bock flex">
				<label v-if="videoShow">
					<div class="jia flex_center">
						<img src="@/assets/task/jia.png" alt="" />
					</div>
					<input v-if="audioShow" type="file" accept="video/*" @input="input" @change="handleFile1" class="hiddenInput" />
		    		<input v-else type="file" accept="audio/*" @input="input" @change="handleFile2" class="hiddenInput" />
				</label>
				<div class="video" v-else>
					<video id="videos" accept="video/*" loop="loop" style="z-index: 999;" v-bind:style="{position:position,left:left+'px',top:top+'px'}" :width="width" @click="loopBtn" :src="userInfo.avatar">
						<source :src="userInfo.avatar" type="video/mp4" />
					</video>
					<audio id="audios" accept="audio/*" loop="loop" style="z-index: 999;" v-bind:style="{position:position,left:left+'px',top:top+'px'}" :width="width" @click="loopBtn" :src="userInfo.avatar1">
						<source :src="userInfo.avatar1" type="audio/mp4" />
					</audio>
					<div @click="loopBtn" class="loop">
						<img v-if="loopimg != true" src="@/assets/student/task/loop1.png" />
					</div>
					<van-loading v-if="loadings" vertical>加载中...</van-loading>
					<div v-if="jisuanShow" class="loading_time fs15">{{reversedMessage}}</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<button @click="footerBtn" class="fs15 c_fff">提交</button>
		</div>
		<transition name="fade">
			<div v-if="show" class="video-header flex">
				<div class="header-left flex_1 flex flex_y_center">
					<img @click="videoBtn" src="@/assets/student/components/return.png" />
				</div>
				<div class="header-center flex_1 fs14 flex_center">1/1</div>
				<div class="header-right flex_1 flex flex_y_center flex_x_right">
					<img @click="dltBtn" src="@/assets/student/task/delete.png" />
				</div>
			</div>
		</transition>
		<!-- <div v-if="choiceShow" class="choice">
			<div class="flex choice_header">
				<div class="flex_1 hoice_header_left  flex flex_y_center">
					<img @click="returnShow" src="@/assets/student/components/return.png" />
				</div>
				<div class="title fs18 fw_b flex_2 flex flex_center">演奏水平</div>
				<div class="flex_1"></div>
			</div>
			<skeleton :height="10" background="#FAFAFA"></skeleton>
			<div class="choice-center">
				<div v-for="(i,index) in choiceArray" :key="index" @click="returnBtn(index)" class="choice-item flex flex_y_center">
					<div class="item-left fs15">{{i.music}}</div>
				</div>
			</div>
		</div> -->
		<frame2 :frameShow="frameShow" @returnBtn1="returnBtn1" :title1="title1" :color="color" ref="refs"></frame2>
	</div>
</template>

<script>
	import skeleton from "@/components/student/skeleton";
	import toast from "@/utils/toast";
	import frame2 from "@/components/student/frame2"
	export default {
		components: {
			skeleton,
			frame2
		},
		data() {
			return {
				fileArray:[{name:"上传视频",id:1},{name:"上传音频",id:2}],
				userInfo: {
					avatar: '',
					avatar1:''
				},
				fileArrayNum:1,
				audioShow:true,
				videoShow: true,
				Whether: true,
				width: '150px',
				position: '',
				left: '',
				top: '',
				show: false,
				choiceArray: [],
				choiceShow: false,
				values: '',
				valuesid: '',
				loopimg: true,
				kecheng: '',
				shipin: '',
				frameShow: true,
				title1: '',
				color: null,
				videoProgress: 10,
				timer: null, // 定时器
				loadings: true,
				timeDuration:'',
				timemane: '',
				jisuanShow:false,
				EndculumArray:[],
				typeID:1  //提交，区分图片 音频或视频
			}
		},
		computed: {
			// 计算属性的 getter
			reversedMessage: function() {
				return '视频共' + this.timeDuration +'分钟' + "共" + this.timemane +'元'
			}
		},
		methods: {
			returnBtn1(){  //提交作业成功后
				this.$refs.refs.show = false
				this.values = ""
				this.userInfo.avatar=""
				this.userInfo.avatar1=""
				this.jisuanShow = false
				this.videoShow = true
			},
			removeImage(){	//删除图片
				this.userInfo.img=""
				this.videoShow = true
			},
			fileArrayBtn(id){ 	//选择上传视频或者音频
				this.fileArrayNum = id
				this.typeID = id
				this.userInfo.avatar = ''
				this.userInfo.avatar1 = ''
				this.jisuanShow = false
				this.videoShow = true
				switch(id){
					case 1:
						this.audioShow = true
						break;
					case 2:
						this.audioShow = false
						break;
				}
			},
			// async getEndculum() {  //提交的列表
			// 	let Endculum = await this.service.task.getEndculum({
			// 		user_id: localStorage.getItem("user_id"),
			// 		token: localStorage.getItem("token")
			// 	});
			// 	this.EndculumArray = Endculum.data
			// 	let index = this.$route.params.index
			// 	this.values = this.EndculumArray[index].music
			// 	this.valuesid = this.EndculumArray[index].id
			// },
			
			
			//提交视频  到 后台
			async getVidsubm1(params) {
				let Vidsubm = await this.service.about.video(params)
				this.shipin = Vidsubm.tup
				const that = this
				that.timer = setInterval(function() {
					if(document.readyState === 'complete') {
						that.loadings = false
						that.loopimg = false
						toast({
							text: '上传成功',
							time: 1000
						});
						window.clearInterval(that.timer)
					}
				}, 1000)
				var videos = document.getElementById('videos')
				var split_vd = videos.duration
				var split_vd_str = split_vd.toString();
  				var split_vd_num = parseInt(split_vd_str.substring(0,split_vd_str.indexOf('.')));
				var fenzhong = Math.ceil(split_vd_num/60)
				this.timeDuration = fenzhong
				this.timemane = fenzhong * 10
				this.jisuanShow = true
				
			},
			//提交音频  到 后台
			async getVidsubm2(params) {
				let Vidsubm = await this.service.about.audio(params)
				this.shipin = Vidsubm.tup
				const that = this
				that.timer = setInterval(function() {
					if(document.readyState === 'complete') {
						that.loadings = false
						that.loopimg = false
						toast({
							text: '上传成功',
							time: 1000
						});
						window.clearInterval(that.timer)
					}
				}, 1000)
				var videos = document.getElementById('audios')
				var split_vd = videos.duration
				var split_vd_str = split_vd.toString();
				var split_vd_num = parseInt(split_vd_str.substring(0,split_vd_str.indexOf('.')));
				var fenzhong = Math.ceil(split_vd_num/60)
				this.timeDuration = fenzhong
				this.timemane = fenzhong * 10
				this.jisuanShow = true
				
			},
			async getTask() {   //上传作业
				let Task = await this.service.about.getTask({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token'),
					bout_id: this.valuesid,
					file: this.shipin,
					task:1,
					type:this.typeID,
				})
				if(Task.state==200){
					this.$refs.refs.show = true
					this.title1 = Task.msg
					this.color = '#F29417'
				}
			},
			// 上传视频
			handleFile1: function(e) {
				this.videoShow = false
				this.loadings = true
				this.jisuanShow = false
				let $target = e.target || e.srcElement
				let file = $target.files[0]
				var reader = new FileReader()
				reader.onload = (data) => {
					let res = data.target || data.srcElement
					this.userInfo.avatar = res.result
				}
				reader.readAsDataURL(file)
				let files = e.target.files[0]
				let param = new FormData()
				param.append('file', files)
				param.append("user_id", localStorage.getItem('user_id'))
				param.append('token', localStorage.getItem('token'))
				this.getVidsubm1(param)
			},
			// 上传音频
			handleFile2: function(e) {
				this.videoShow = false
				this.loadings = true
				this.jisuanShow = false
				let $target = e.target || e.srcElement
				let file = $target.files[0]
				var reader = new FileReader()
				reader.onload = (data) => {
					let res = data.target || data.srcElement
					this.userInfo.avatar1 = res.result
				}
				reader.readAsDataURL(file)
				let files = e.target.files[0]
				console.log(files)
				let param = new FormData()
				param.append('file', files)
				param.append("user_id", localStorage.getItem('user_id'))
				param.append('token', localStorage.getItem('token'))
				this.getVidsubm2(param)
			},
			input() {

			},
			loopBtn() {
				this.Whether = !this.Whether
				var video = document.querySelector('video')
				var audio = document.querySelector('audio')
				if(this.Whether == true) {
					this.show = !this.show
				} else if(this.Whether == false) {
					video.play()
					audio.play()
					this.width = '100%'
					this.position = 'fixed'
					this.left = '0'
					this.top = '0'
				}
			},
			videoBtn() {
				var video = document.querySelector('video')
				var audio = document.querySelector('audio')
				video.play()
				audio.play()
				this.width = '150'
				this.position = ''
				this.left = ''
				this.top = ''
				this.show = !this.show
			},
			dltBtn() {
				this.videoShow = true
				this.userInfo.avatar = ''
				this.show = !this.show
				var video = document.querySelector('video')
				var audio = document.querySelector('audio')
				video.play()
				audio.play()
				this.width = '150'
				this.position = ''
				this.left = ''
				this.top = ''
			},
			xuanzeBtn() {
				this.choiceShow = true
			},
			// returnBtn(index) {
			// 	this.values = this.choiceArray[index].music
			// 	this.valuesid = this.choiceArray[index].id
			// 	this.choiceShow = false
			// },
			returnShow() {
				this.choiceShow = false
			},
			footerBtn() { //提交
				if(this.shipin == '') {
					toast({
						text: '请上传视频或音频',
						time: 1000
					});
					return
				}
				this.getTask()
			}
		},
		created() {
			this.values = this.$route.params.music
			this.valuesid = this.$route.params.id
		}
	}
</script>

<style scoped="scoped" lang="scss">
	/deep/.video_div{
		.van-icon{
			font-size: 26px;
		}
	}
	.fileClass{color: rgba(62, 112, 147, 1);}
	.ol_li{
		li{width:50%;line-height: 40px;text-align: center;font-size: 14px;font-weight: 500;}
	}
	.choice {
		width: 100%;
		height: 100%;
		background: #F3F4F5;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9999;
		overflow-y: scroll;
		.choice-center {
			background: #fff;
			padding-left: 15px;
		}
		.choice_header {
			height: 50px;
			.title {
				color: rgba(62, 112, 147, 1);
			}
			.hoice_header_left {
				img {
					width: 22px;
					height: 22px;
				}
			}
		}
		.choice-item {
			width: 100%;
			height: 50px;
			border-bottom: 1px solid #DDDEE3;
			.item-left {
				color: #23252F;
			}
			.item-right {
				margin-left: 30px;
			}
		}
		.choice-item:last-child {
			border-bottom: none;
		}
	}
	
	.video {
		position: relative;
		/deep/ .van-loading--vertical {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%);
			z-index: 9;
			/deep/ .van-loading__spinner {
				width: 50px !important;
				height: 50px !important;
			}
			/deep/ .van-loading__text {
				font-size: 16px;
			}
		}
	}
	
	.video-header {
		width: 100%;
		padding: 0 15px;
		box-sizing: border-box;
		height: 50px;
		background: #FFFFFF;
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		.header-left {
			img {
				width: 25px;
				height: 25px;
			}
		}
		.header-center {}
		.header-right {
			img {
				width: 25px;
				height: 25px;
			}
		}
	}
	
	.subtask {
		padding-left: 15px;
		.subtask-choice {
			color: #23252F;
			margin-top: 15px;
		}
		.subtask-input {
			width: 100%;
			height: 50px;
			border-bottom: 1px solid #DDDEE3;
			margin-top: 15px;
			input {
				color: #23252F;
			}
			/deep/ .van-icon {
				color: #838486;
				font-size: 18px;
				margin-right: 10px;
			}
		}
		.subtask-choice2 {
			color: #23252F;
			margin-top: 20px;
		}
	}
	
	.item_bock {
		margin-top: 15px;
		label {
			.jia {
				border: 1px dashed #838486;
				width: 100px;
				height: 100px;
				img {
					width: 40px;
					height: 40px;
				}
			}
			.hiddenInput {
				display: none;
			}
		}
		.video {
			position: relative;
			video {}
			.loop {
				position: absolute;
				top: 50%;
				left: 50%;
				margin-top: -20px;
				margin-left: -20px;
				img {
					width: 40px;
					height: 40px;
				}
			}
			.loading_time {
				color: #F22117;
				margin-top: 15px;
			}
		}
	}
	
	.footer {
		padding: 0 15px;
		margin-top: 50px;
		button {
			width: 100%;
			height: 44px;
			background: rgba(62, 112, 147, 1);
			border-radius: 4px;
		}
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: all .3s ease;
	}
	
	.fade-enter,
	.fade-leave-to {
		transform: translateY(-50px);
		opacity: 0
	}
</style>