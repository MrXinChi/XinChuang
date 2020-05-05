<template>
	<div>
		<header-nav title="提交视频作业"></header-nav>
		<skeleton :height="15" background="#FAFAFA"></skeleton>
		<div class="subtask">
			<div class="subtask-choice fs16 fw_b">选择课程</div>
			<div class="subtask-input flex flex_y_center flex_x_bten">
				<input class="fs15" type="text" value="历史课程" />
				<van-icon name="arrow" />
			</div>
			<div class="subtask-choice2 fs16 fw_b">上传作业</div>
			<!--视频上传-->
			<div class="item_bock flex">
				<label>
				<div v-if="videoShow" class="jia flex_center">
					<img src="@/assets/task/jia.png" alt="" />
				</div>
		   		<video v-else autoplay="autoplay"  loop="loop" :src="userInfo.avatar"></video>
		    	<input type="file" @change="handleFile" class="hiddenInput" />
	    </label>
			</div>
		</div>
		<div class="footer">
			<button class="fs15 c_fff">提交</button>
		</div>
	</div>
</template>

<script>
	import skeleton from "@/components/skeleton";
	export default {
		components: {
			skeleton
		},
		data() {
			return {
				userInfo: {
					avatar: '',
				},
				videoShow: true
			}
		},
		methods: {
			// 将头像显示
			handleFile: function(e) {
				this.videoShow = false

				let $target = e.target || e.srcElement
				let file = $target.files[0]
				var reader = new FileReader()
				reader.onload = (data) => {
					let res = data.target || data.srcElement
					this.userInfo.avatar = res.result
				}
				reader.readAsDataURL(file)
			},
		}
	}
</script>

<style scoped="scoped" lang="scss">
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
			}
			video {
				width: 150px;
			}
			.hiddenInput {
				display: none;
			}
		}
	}
	
	.footer {
		padding: 0 15px;
		margin-top: 90px;
		button {
			width: 100%;
			height: 44px;
			background: rgba(62, 112, 147, 1);
			border-radius: 4px;
		}
	}
</style>