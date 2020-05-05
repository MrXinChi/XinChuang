<template>
	<div>
		<header-nav title="财务报表"></header-nav>
		<div class="fina-header flex flex_y_center">
			<button class="fs12 c_fff">本月财务明细</button>
			<button class="fs12 c_fff">2019/08</button>
			<span class="fs12">~</span>
			<button class="fs12 c_fff">2019/11</button>
			<button class="fs14 fw_500 flex_1 flex flex_x_right">搜索</button>
		</div>
		<div class="fina-content">
			<div class="content-header fs16 fw_b">星星明细</div>
			<div class="classhour">
							<div>
								<div v-for="(i,index) in 3" :key="index" class="hour-item flex flex_x_bten">
									<div class="item-left">
										<div class="item-left-t fs15">钢琴课程</div>
										<div class="item-left-b fs12">2019-09-08 </div>
									</div>
									<div class="item-right flex flex_y_center fs15">+100</div>
								</div>
							</div>
						</div>
		</div>
	</div>
</template>

<script>
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