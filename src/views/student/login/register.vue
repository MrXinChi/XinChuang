<template>
	<div>
		<header-nav border title="注册"></header-nav>
		<div class="reg-input">
			<div class="input-item flex flex_y_center">
				<img class="input-icon" src="../../../assets/student/login/anquan.png" />
				<input v-model="phone" placeholder="请输入手机号" class="fs14" type="number" />
			</div>
			<div class="input-item flex flex_y_center">
				<img class="input-icon" src="../../../assets/student/login/mima.png" />
				<input v-model="Code" placeholder="请输入验证码" class="fs14" type="text" />
				<button @click="yzmBtn" :disabled="disabled">{{yzm}}</button>
			</div>
			<div class="input-item flex flex_y_center">
				<img class="input-icon" src="../../../assets/student/login/mima.png" />
				<input v-model="Password" placeholder="请输入密码" class="fs14" :type="typeShop" />
				<img @click="glassesBtn" class="glasses" :src="glasses_img" />
			</div>
		</div>
		<div class="footerbtn">
			<button @click="DetermineBtn" class="fs15 c_fff">确定</button>
		</div>
	</div>
</template>

<script>
	import glasses_true from '@/assets/student/login/glasses_true.png'
	import glasses_false from '@/assets/student/login/glasses_false.png'

	import toast from "@/utils/toast";
	export default {
		components: {

		},
		data() {
			return {
				glasses_img: glasses_false, //眼睛的图片
				glasses: false, //眼睛的开关
				typeShop: 'password', //input的类型
				yzm: '发送验证码',
				disabled: false,
				phone: '',
				Code: '',
				Password: ''
			}
		},
		methods: {

			//验证码
			async getYzm() {
				let Yzm = await this.service.login.getYzm({
					mobile: this.phone
				})
				console.log(Yzm)
			},
			yzmBtn() {
				if(!(/^[1][3456789]\d{9}$/.test(this.phone))) {
					toast({
						text: '手机号有误',
						time: 1000
					})
					return false;
				}

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
			//注册
			async getRegister() {
				let Register = await this.service.login.getRegister({
					mobile: this.phone,
					password: this.Password,
					yzm: this.Code,
					state: '1'
				})
				toast({
					text: Register.msg,
					time: 1000
				})
				this.$router.push("/student/login");
			},

			DetermineBtn() {
				if(!(/^[1][3456789]\d{9}$/.test(this.phone))) {
					toast({
						text: '手机号有误',
						time: 1000
					})
					return false;
				}

				if(!this.Code) {
					this.frametitle = '验证码不能为空'
					toast({
						text: '验证码不能为空',
						time: 1000
					})
					return false;
				}

				if(!(/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{8,12}$/.test(this.Password))) {
					toast({
						text: '密码格式须以字母与数字结合',
						time: 1500
					})
					return false;
				}

				this.getRegister()
			},

			glassesBtn() {
				this.glasses = !this.glasses;
				if(this.glasses == true) {
					this.glasses_img = glasses_true;
					this.typeShop = "text";
				} else {
					this.glasses_img = glasses_false;
					this.typeShop = "password";
				}
			}
		},
		created() {

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