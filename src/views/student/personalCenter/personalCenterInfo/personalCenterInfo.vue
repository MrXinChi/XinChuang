@
<template>
	<div class="container_">
		<header-nav title="个人中心"></header-nav>
		<div class="nav_list">
			<label>
      	<div class="avatar_item">
        <div class="avatar_item_title">头像</div>
        
<div class="item_bock flex flex_x_center">
    <label>
	    <img :src="userInfo.avatar" />
	    <input type="file" accept="image/*" @change="handleFile" class="hiddenInput" />
    </label>
		</div>

	</div>
	</label>
	<nav-item v-for="(item,index) in navList" :key="index" :navItem="item" :index="index" @toDetails="toDetails"></nav-item>
	</div>
	<!--修改昵称-->
	<transition name="slide-fade">
		<div v-if="name_poshop" class="name_po">
			<div class="name_po_header flex flex_y_center">
				<div @click="name_poshop = false" class="flex_1 fs13 fw_500">取消</div>
				<div class="flex_2 flex flex_x_center fs15 fw_500">设置昵称</div>
				<div class="flex_1 flex flex_x_right">
					<van-button @click="nichengBtn" type="primary">完成</van-button>
				</div>
			</div>
			<div class="name_input">
				<input v-focus maxlength="8" v-model="names" @input="change" class="fw_500 fs15" type="text" />
				<!--v-focus-->
				<img @click="cuoBtn" src="../../../../assets/student/personalCenter/cuo.png" />
			</div>
		</div>
	</transition>
	<!--修改手机号-->
	<transition name="slide-fade">
		<div v-if="mobileShow" class="mobile">
			<div class="mobile_header flex">
				<div class="mobile_header_left flex_1 flex flex_y_center">
					<img @click="mobilereturnBtn" src="../../../../assets/components/return.png" />
				</div>
				<div class="mobile_header_center flex_1 flex_center fs17 fw_b">修改手机号</div>
				<div class="flex_1"></div>
			</div>
			<div class="mobile_input">
				<div class="mobile_input_item">
					<input class="fs15" readonly :value=" '当前手机号：' + mobileValue" type="text" />
				</div>
				<div class="mobile_input_item flex flex_y_center">
					<input v-model="yanzhengma" class="fs15" placeholder="输入验证码" type="text" />
					<button @click="yzmBtn" :disabled="disabled" class="flex_center">{{yzm}}</button>
				</div>
				<div class="mobile_input_item">
					<input v-model="shouji" class="fs15" placeholder="输入新手机号" type="text" />
				</div>
				<div class="mobile_input_item">
					<input v-model="shoujis" class="fs15" placeholder="再次输入新手机号" type="text" />
				</div>
			</div>
			<div class="mobile_btn">
				<button @click="xiugaiBtn" class="fs15 c_fff">确认修改</button>
			</div>
		</div>
	</transition>
	</div>
</template>

<script>
	import navItem from "../components/navItem";
	import toast from "@/utils/toast";

	export default {
		components: {
			navItem,
		},
		data() {
			return {
				navList: [{
						title: "昵称",
						name: '',
						isBorder: false
					},
					{
						title: "更换手机号",
						name: '',
						isBorder: false
					}
				],
				name_poshop: false,
				names: '',
				userInfo: {
					avatar: ''
				},
				Imgsubm: '',
				mobileShow: false,
				mobileValue: '',
				yzm: '发送验证码',
				disabled: false,
				mobile: '',
				yanzhengma:'',
				shouji:'',
				shoujis:''
			};
		},
		methods: {
			async userInfoData() {
				let userInfoData = await this.service.personalCenter.getUserInfo(
					getUserData()
				);
				//				console.log(userInfoData.data)
				this.userInfo.avatar = userInfoData.data.images
				console.log(userInfoData.data.mobile)
				this.mobile = userInfoData.data.mobile
				this.navList[0].name = userInfoData.data.name
				this.names = userInfoData.data.name

				var tel = userInfoData.data.mobile;
				this.mobileValue = tel
				tel = "" + tel;
				var tel1 = tel.substr(0, 3) + "****" + tel.substr(7)
				console.log(tel1);

				this.navList[1].name = tel1
			},

			async getYzm() {
				let Edit = await this.service.login.getYzm({
					mobile: this.mobile
				})
				let time = 60;
				let timer = setInterval(() => {
					if(time == 0) {
						clearInterval(timer);
						this.yzm = "获取验证码";
						this.disabled = false;
					} else {
						this.yzm = time + 's';
						time--;
						this.disabled = true;
					}
				}, 1000)

				console.log(Edit.state)
			},
			
			
			async setUpmobile(yzm,mobile) {
				let Upmobile = await this.service.personalCenter.setUpmobile({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token'),
					yzm:yzm,
					mobile:mobile
				})
				console.log('修改手机号', Upmobile)
				if(Upmobile == 200){
					toast({
						text: '修改成功',
						time: 1000
					})
				}else{
					toast({
						text: '验证码不一致',
						time: 1000
					})
				}
			},
			
			async getUserEdit(file) {
				let UserEdit = await this.service.personalCenter.getUserEdit({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token'),
					file: file
				})
				console.log('修改头像', UserEdit.data)
			},
			async getUserEdittit(title) {
				let UserEdit = await this.service.personalCenter.getUserEdit({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token'),
					title: title
				})
				console.log('修改名字', UserEdit.data)
			},

			async getImgsubm(params) {
				let Imgsubm = await this.service.about.getImgsubm(params)
				//				console.log('图片上传', Imgsubm.data)
				this.Imgsubm = Imgsubm.data
				console.log(this.Imgsubm)

				this.getUserEdit(this.Imgsubm)
			},
			toDetails(inx) {
				switch(inx) {
					case 0:
						this.name_poshop = true

						break;
					case 1:
						this.mobileShow = true
						break;
				}
			},
			cuoBtn() {
				this.names = ''
			},
			nichengBtn() {
				if(this.names.length <= 0) {
					toast({
						text: '密码不能为空',
						time: 1000
					})
					console.log('1')
				} else {
					this.name_poshop = false
					this.navList[0].name = this.names
				}
				this.getUserEdittit(this.navList[0].name)
			},
			change() {

			},
			uploadHeadImg: function() {
				this.$el.querySelector('.hiddenInput').click()
			},
			// 将头像显示
			handleFile: function(e) {

				let $target = e.target || e.srcElement
				let file = $target.files[0]
				console.log(file)
				let param = new FormData()
				param.append('file', file)
				param.append("user_id", localStorage.getItem('user_id'))
				param.append('token', localStorage.getItem('token'))
				this.getImgsubm(param)

				var reader = new FileReader()
				reader.onload = (data) => {
					let res = data.target || data.srcElement
					this.userInfo.avatar = res.result
				}
				reader.readAsDataURL(file)

			},
			mobilereturnBtn() {
				this.mobileShow = false
			},
			yzmBtn() {
				this.getYzm()
					
			},
			xiugaiBtn(){
				if(!this.yanzhengma) {
					toast({
						text: '验证码不能为空',
						time: 1000
					})
					return false;
				}
				
				
				if(!(/^[1][3456789]\d{9}$/.test(this.shouji))) {
					toast({
						text: '手机号有误',
						time: 1000
					})
					return false;
				}
				
				
				if(this.shouji != this.shoujis) {
					toast({
						text: '手机号不一致',
						time: 1000
					})
					return false;
				}
				
				
				if(this.mobile == this.shouji){
					toast({
						text: '不能用当前手机号',
						time: 1000
					})
					return false;
				}
				this.setUpmobile(this.yanzhengma,this.shouji)
				
			}
		},
		created() {
			console.log(this.navList[0].name)
			this.names = this.navList[0].name
			this.userInfoData()

			//			console.log(localStorage.getItem('user_id'))

		}
	};

	//	 this.information.userName = 
	//  this.information.avatar =
</script>

<style scoped lang="scss">
	.mobile {
		width: 100%;
		height: 100%;
		background: #FAFAFA;
		z-index: 9;
		position: fixed;
		left: 0;
		top: 0;
		.mobile_header {
			width: 100%;
			height: 50px;
			background: #fff;
			.mobile_header_left {
				padding-left: 10px;
				box-sizing: border-box;
				img {
					width: 20px;
					height: 20px;
				}
			}
			.mobile_header_center {
				color: #3E7093;
			}
		}
		.mobile_input {
			padding-left: 15px;
			margin-top: 10px;
			.mobile_input_item {
				width: 100%;
				height: 50px;
				border-bottom: 1px solid #DDDEE3;
				input {
					width: 100%;
					height: 100%;
					background: none;
				}
				button {
					width: 82px;
					height: 22px;
					background: rgba(255, 255, 255, 1);
					border: 1px solid rgba(62, 112, 147, 1);
					border-radius: 1px;
					font-size: 12px;
					font-weight: 500;
					color: rgba(62, 112, 147, 1);
					margin-right: 15px;
				}
			}
		}
		.mobile_btn {
			width: 100%;
			height: 44px;
			padding: 0 15px;
			box-sizing: border-box;
			margin-top: 100px;
			button {
				width: 100%;
				height: 100%;
				background: #3E7093;
				border-radius: 4px;
			}
		}
	}
	
	.container_ {
		width: 100%;
		min-height: 100%;
		height: auto;
		background: #f3f4f5;
		.nav_list {
			margin-top: 15px;
			.avatar_item {
				@include flex-center(row, space-between);
				@include border-1px();
				padding-left: 15px;
				height: 60px;
				background-color: #ffffff;
				padding-right: 15px;
				.avatar_item_title {
					@include word(15, #23252f);
				}
			}
		}
	}
	
	.item_bock {
		label {
			width: 48px;
			height: 48px;
			img {
				width: 48px;
				height: 48px;
				border-radius: 50px
			}
			.hiddenInput {
				display: none;
			}
		}
	}
	
	.name_po {
		width: 100%;
		height: 100%;
		background: rgb(237, 237, 237);
		z-index: 9;
		position: fixed;
		left: 0;
		top: 0;
		.name_po_header {
			width: 100%;
			height: 44px;
			padding: 0 15px;
			box-sizing: border-box;
			.van-button--normal {
				padding: 0 !important;
			}
			.van-button--primary {
				border: none !important;
			}
			.van-button {
				width: 50px;
				height: 30px;
				line-height: 30px !important;
			}
		}
		.name_input {
			width: 100%;
			height: 50px;
			position: relative;
			background: #fff;
			margin-top: 5px;
			input {
				width: 100%;
				height: 100%;
				padding-left: 10px;
				box-sizing: border-box;
			}
			img {
				position: absolute;
				width: 15px;
				height: 15px;
				right: 15px;
				top: 50%;
				margin-top: -10px;
			}
		}
	}
	
	.slide-fade-leave-active,
	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	
	.slide-fade-enter,
	.slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */
	
	{
		transform: translateY(100%);
		opacity: 0;
	}
</style>