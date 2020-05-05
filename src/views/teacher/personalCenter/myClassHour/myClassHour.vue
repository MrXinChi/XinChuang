<template>
	<div class="container_">
		<header-nav title="已上课时"></header-nav>
		<div>
			<van-tabs line-height="1px" color="#3E7093" title-active-color="#3E7093" title-inactive-color="#23252F" v-model="active">
				<van-tab :key="index" v-for="(i,index) in 2" title="本月已上课时">
					<div class="classList">
						<div class="classList-header flex flex_y_center">
							<div class="header-l fs16 fw_b flex flex_y_center">课时明细</div>
							<div class="header-r fs14 fw_400 flex flex_y_center">共计100课时</div>
						</div>
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
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0
			};
		},
		methods: {}
	};
</script>

<style scoped lang="scss">
	.container_ {
		width: 100%;
		min-height: 100%;
		height: auto;
		background: #fff;
		.classList {
			.classList-header {
				padding: 0 20px;
				padding-top: 20px;
				.header-l {
					color: #23252F;
				}
				.header-r {
					color: #23252F;
					margin-left: 30px;
				}
			}
		}
		.classhour {
			padding-left: 15px;
		}
	}
	
	/deep/ [class*=van-hairline]::after {
		border: none !important;
	}
	
	/deep/ .van-ellipsis {
		font-weight: bold !important;
	}
	
	/deep/ .van-tabs--line .van-tabs__wrap {
		height: 40px;
		padding: 0 30px;
		background: #fff;
		padding-bottom: 10px;
		border-top: 15px solid #F3F4F5;
		border-bottom: 10px solid #F3F4F5;
	}
	
	/deep/ .van-tabs__content {
		background: #fff;
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