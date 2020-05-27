<template>
	<div class="container_">
		<header-nav title="分享邀约">
			<div slot="right" class="header_right" @click="handleToShareDetail"></div>
		</header-nav>
		<div class="top_wrapper"></div>
		<div class="bottom_wrapper flex flex_x_center flex_y_center">
			<img class="icon_img" src="@/assets/student/personalCenter/icon_img.png" />
			<img class="qr_code" :src="code" />
			<div class="word">
				<h1>扫描二维码</h1>
				<h1>邀请好友一起</h1>
				<h1>听音乐会吧</h1>
			</div>
		</div>
		<div @click="frameFalse" v-if="frameShow" class="frame_c">
			<div class="frame flex">
				<div v-for="i in frameArray"  class="frame_item flex_1">
					<div class="flex_center">
						<img :src="i.images"/>
					</div>
					<div class="flex_center fs16">{{i.name}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				code: '',
				frameShow: false,
				frameArray:[
					{name:"微信",images:require("../../../../assets/personalCenter/w_mine_wx.png")},
					{name:"QQ",images:require("../../../../assets/personalCenter/w_mine_qq.png")},
					{name:"朋友圈",images:require("../../../../assets/personalCenter/w_mine_pyq.png")}
				]
			};
		},
		created() {},
		methods: {
			async setQrcode() {
				let Qrcode = await this.service.personalCenter.setQrcode({
					user_id: localStorage.getItem("user_id"),
					token: localStorage.getItem("token")
				});
				this.code = Qrcode.data
			},
			handleToShareDetail() {
				this.frameShow = true
			},
			frameFalse(){
				this.frameShow = false
			}
		},
		created() {
			this.setQrcode()
		}
	};
</script>

<style scoped lang="scss">
	.container_ {
		width: 100%;
		min-height: 100%;
		height: auto;
		.header_right {
			@include icon(20, "../../../../assets/student/personalCenter/icon_share.png");
		}
		.top_wrapper {
			width: 100vw;
			height: 135vw;
			background-image: url("../../../../assets/student/personalCenter/back_img3.png");
			background-size: 100% 100%;
		}
		.bottom_wrapper {
			margin-top: 20px;
			.icon_img {
				margin-left: 75px;
				width: 65px;
				height: 45px;
			}
			.qr_code {
				margin-left: 10px;
				width: 65px;
				height: 65px;
			}
			.word {
				margin-left: 10px;
				h1 {
					line-height: 20px;
				}
			}
		}
	}
	.frame_c{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.5);
		z-index: 9;
	}
	.frame {
		width: 100%;
		height: 100px;
		background: #fff;
		position: absolute;
		bottom: 0;
	}
	.frame_item{
		
	}
	.frame_item div:nth-child(1){
		img{
			width: 50px;
			height: 50px;
			margin-top: 13px;
		}
	}
	.frame_item div:nth-child(2){
		margin-top: 5px;
	}
</style>