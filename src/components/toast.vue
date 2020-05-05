<template>
	<div @click="hideToast" v-show="isShow" class="toast">
		<div class="main">
			<div v-if="type" class="icon-box" flex="main:center cross:center">
				<i v-show="type==='succeed'" class="iconfont icon-ic_select_simple font30 orange2"></i>
			</div>
			<div class="title">
				提示
			</div>
			<div class="text">
				{{text}}
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			text: {
				type: String
			},
			time: {
				type: Number
			},
			type: {
				type: String
			},
		},
		mounted() {
			this.$nextTick(() => {
				this.isShow = true;
				this.timer = setTimeout(() => {
					this.hideToast();
				}, this.time)
			});
		},
		data() {
			return {
				isShow: false,
				timer: null,
			};
		},
		methods: {
			hideToast() {
				this.isShow = false;
				clearTimeout(this.timer);
				this.timer = null;
			},
			beforeLeave() {
				this.close();
			},
			afterLeave() {
				document.body.removeChild(this.$el);
			}
		}
	};
</script>
<style scoped lang="scss">
	.toast {
		position: fixed;
		text-align: center;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 99999999999999999999999999;
		.main {
			width: 130px;
			background: rgb(1, 1, 1);
			border-radius: 5px;
			color: #fff;
			padding: 15px 10px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			.icon-box {
				border-radius: 50%;
				overflow: hidden;
				background-color: #fff;
			}
			.title {
				font-size: 15px;
				color: #fff;
			}
			.text {
				font-size: 15px;
				color: #fff;
				margin-top: 10px;
			}
		}
	}
</style>