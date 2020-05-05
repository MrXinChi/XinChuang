<template>
	<div>
		<header-nav border title="评价详情"></header-nav>
		<div>
			<div class="detail">
				<div class="age-name fs16 fw_b">请选择孩子年龄</div>
				<div class="age-list flex flex_x_bten flex_warp">
					<button  class="age-item flex_center fs14">111</button>
				</div>
			</div>
			<div class="detail">
				<div class="age-name fs16 fw_b">上课时间</div>
				<div class="data-list flex flex_x_bten flex_warp">
					<button class="data-item flex_center fs14">222</button>
				</div>
			</div>
			<div class="detail">
				<div class="age-name fs16 fw_b">上课学生</div>
				<div class="data-list flex flex_x_bten flex_warp">
					<button class="data-item flex_center fs14">小明</button>
				</div>
			</div>
			<div class="detail">
				<div class="age-name fs16 fw_b">曲谱图片</div>
				<div class="music-score">
					<img src="http://e.hiphotos.baidu.com/image/h%3D300/sign=a9e671b9a551f3dedcb2bf64a4eff0ec/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg" />
				</div>
			</div>
			<div class="detail">
				<div class="age-name fs16 fw_b">评分</div>
				<div class="score flex flex_y_center">
					<van-rate color="#FF7F40" void-color="#eee" v-model="value" />
				</div>
			</div>
			<div class="detail">
				<div class="age-name fs16 fw_b">评价</div>
				<div class="evaluate">
					<textarea class="fs15" placeholder="请进行评价"></textarea>
				</div>
			</div>
			<div class="detail">
				<div class="age-name fs16 fw_b">我的作业</div>
				<div class="music-score">
					<img src="http://e.hiphotos.baidu.com/image/h%3D300/sign=a9e671b9a551f3dedcb2bf64a4eff0ec/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: 0
			}
		},
		methods: {

		}
	}
</script>

<style scoped="scoped" lang="scss">
	.detail {
		padding: 0 15px;
		.age-name {
			color: #23252F;
			margin-top: 20px;
		}
		.score {
			margin-top: 10px;
			width: 150px;
			height: 40px;
			background: rgba(255, 255, 255, 1);
			border: 1px solid rgba(194, 194, 194, 1);
			border-radius: 5px;
			padding-left: 5px;
			box-sizing: border-box;
		}
		.music-score {
			img {
				width: 90px;
				height: 90px;
				border-radius: 5px;
				margin-top: 10px;
			}
		}
		.age-list {
			.age-item {
				width: 30%;
				height: 40px;
				background: #AEAEAE;
				
				border-radius: 3px;
				color: #5E5E5E;
				margin-top: 15px;
				box-sizing: border-box;
				color:#fff;
			}
		}
		.data-list {
			.data-item {
				width: 47%;
				height: 40px;
				background: #AEAEAE;
				
				box-sizing: border-box;
				border-radius: 3px;
				color: #5E5E5E;
				margin-top: 15px;
				color:#fff;
			}
		}
		.evaluate {
			margin-top: 10px;
			textarea {
				width: 310px;
				height: 100px;
				background: rgba(255, 255, 255, 1);
				border: 1px solid rgba(194, 194, 194, 1);
				border-radius: 5px;
				padding: 2px;
				box-sizing: border-box;
				text-indent: 15px;
				line-height: 20px;
			}
		}
	}
	
	.footer {
		padding: 0 15px;
		margin-top: 50px;
		padding-bottom: 30px;
		button {
			width: 100%;
			height: 40px;
			background: rgba(62, 112, 147, 1);
			border-radius: 5px;
		}
	}
	
	.select {
		background: #3E7093 !important;
		border: none !important;
		color: #FFFFFF !important;
	}
</style>