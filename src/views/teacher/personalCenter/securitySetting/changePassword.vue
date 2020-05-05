<template>
	<div>
		<header-nav border title="修改密码"></header-nav>
		<div class="reg-input">
			<div class="input-item flex flex_y_center">
				<img class="input-icon" src="@/assets/login/anquan.png" />
				<input v-model="code" placeholder="请输入验证码" class="fs14" type="text" />
				<button @click="yzmBtn" :disabled="disabled">{{yzm}}</button>
			</div>
			<div class="input-item flex flex_y_center">
				<img class="input-icon" src="@/assets/login/mima.png" />
				<input v-model="pasword" placeholder="请输入密码" class="fs14" :type="typeShop" />
				<img @click="glassesBtn" class="glasses" :src="glasses_img" />
			</div>
			<div class="input-item flex flex_y_center">
				<img class="input-icon" src="@/assets/login/mima.png" />
				<input v-model="paswordagain" placeholder="再次输入密码" class="fs14" :type="typeagainShop" />
				<img @click="glassesagainBtn" class="glasses" :src="glasses_imgs" />
			</div>
		</div>
		<div class="footerbtn">
			<button @click="DetermineBtn" class="fs15 c_fff">确认修改</button>
		</div>
	</div>
</template>

<script>
	import glasses_true from '@/assets/login/glasses_true.png'
	import glasses_false from '@/assets/login/glasses_false.png'
	
	import toast from "@/utils/toast";
	export default {
		components: {

		},
		data() {
			return {
				glasses_img: glasses_false, //眼睛的图片
				glasses_imgs:glasses_false,
				glasses: false, //眼睛的开关
				typeShop: 'password', //input的类型
				typeagainShop:'password', //input的类型
				yzm: '发送验证码',
				disabled: false,
				phone: '',
				code: '',
				pasword: '',
				paswordagain:''
			}
		},
		methods: {
			
			
			//验证码
			async getYzm() {
				let Yzm = await this.service.login.getYzm({
					mobile: localStorage.getItem('mobile')
				})
				console.log(Yzm)
			},
			yzmBtn() {
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
				this.getYzm()
			},
			
			
			//验证码
			async getModify() {
				let Modify = await this.service.login.getModify({
					user_id:localStorage.getItem('user_id'),
					token:localStorage.getItem('token'),
					pass:this.pasword,
					yzm:this.code
				})
				console.log(Modify.msg)
				toast({
						text: Modify.msg,
						time: 1000
					})
			},
			
			
			glassesBtn() {
				this.glasses = !this.glasses;
				console.log(this.glasses)
				if(this.glasses == true) {
					this.glasses_img = glasses_true;
					this.typeShop = "text";
				} else {
					this.glasses_img = glasses_false;
					this.typeShop = "password";
				}
			},
			glassesagainBtn(){
				this.glasses = !this.glasses;
				console.log(this.glasses)
				if(this.glasses == true) {
					this.glasses_imgs = glasses_true;
					this.typeagainShop = "text";
				} else {
					this.glasses_imgs = glasses_false;
					this.typeagainShop = "password";
				}
			},
			DetermineBtn(){
				
				if(!this.code) {
					toast({
						text: '验证码不能为空',
						time: 1000
					})
					return false;
				}
				
				
				
				if(this.pasword == '') {
					toast({
						text: '请输入密码',
						time: 1000
					})
					return false;
				}

				if(!(/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{8,12}$/.test(this.pasword))) {
					toast({
						text: '密码格式有误',
						time: 1000
					})
					return false;
				}

				if(this.pasword != this.paswordagain) {
					toast({
						text: '两次密码不一致',
						time: 1000
					})
					return false;
				}
				
				
				
				this.getModify()
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.reg-input {
		padding-left: 15px;
		box-sizing: border-box;
		margin-top: 5px;
		.input-item {
			width: 100%;
			height: 50px;
			border-bottom: 1px solid #DDDEE3;
			.input-icon {
				width: 22px;
				height: 22px;
			}
			input {
				width: 100%;
				height: 100%;
				text-indent: 10px;
			}
			button {
				width: 100px;
				height: 22px;
				background: rgba(255, 255, 255, 1);
				border: 1px solid #3E7093;
				border-radius: 1px;
				margin-right: 15px;
				color: #3E7093;
			}
			.glasses {
				width: 24px;
				margin-right: 15px;
			}
		}
	}
	
	.footerbtn {
		width: 100%;
		padding: 0 15px;
		box-sizing: border-box;
		margin-top: 100px;
		button {
			width: 100%;
			height: 44px;
			background: rgba(62, 112, 147, 1);
			border-radius: 4px;
		}
	}
</style>