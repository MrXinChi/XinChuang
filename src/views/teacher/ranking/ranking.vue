<template>
	<div class="container">
		<header-nav title="排名榜"></header-nav>
		<div class="rank">
			<div class="rank-title fs14">拨弦古钢琴——哈普西科德（Harpsichord）在音源与演奏形式这两大特征上，都与击弦古钢琴有着完全相同的特征。就是外型上也基本一致，乃至如今我们仅从外型上难以分辨它们是哪一种琴。</div>
			<div @click="paihangBtn" class="paihang">
				<img src="../../../assets/home/paohang.png" />
				<div class="paihang-name flex flex_x_center fs12">活动时间：2019年09月26日-2019年9月28日</div>
				<div class="time flex_center">已结束</div>
			</div>
			<div class="paihang">
				<img src="../../../assets/home/paohang.png" />
				<div class="paihang-name flex flex_x_center fs12">活动时间：2019年09月26日-2019年9月28日</div>
				<!--<div class="time flex_center">已结束</div>-->
				<div class="times">
					<div class="times-t flex flex_x_center">进行中</div>
					<div class="times-b flex flex_x_center">3天20:52</div>
				</div>
			</div>
			<div class="paihang">
				<img src="../../../assets/home/paohang.png" />
				<div class="paihang-name flex flex_x_center fs12">活动时间：2019年09月26日-2019年9月28日</div>
				<div class="time flex_center">已结束</div>
			</div>
		</div>
		<div v-if="poShow" class="po1 flex_center flex_warp">
			<div class="centent">
				<div class="cuo">
					<img @click="cuoBtn" src="../../../assets/home/cuo.png"/>
				</div>
				<div class="sub">
					<div class="sub-header flex_center"><span>—</span>练琴时长排名<span>—</span></div>
					<div class="flex flex sub-nav">
						<div class="flex_1 flex_center fs15 c_fff">排名</div>
						<div class="flex_1 flex_center fs15 c_fff">名称</div>
						<div class="flex_1 flex_center fs15 c_fff">练琴总时长</div>
					</div>
					<div v-for="i in 10" class="flex flex sub-list">
						<div class="flex_1 flex_center"><span>No.1</span></div>
						<div class="flex_1 flex_center"><span>九月</span></div>
						<div class="flex_1 flex_center"><span>01:36:25</span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				poShow:false
			}
		},
		methods:{
			paihangBtn(){
				this.poShow = true
				
			},
			cuoBtn(){
				this.poShow = false
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	
	.po1{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.5);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
		.centent{
			width:307px;
			height:571px;
			background:rgba(255,255,255,1);
			border-radius:5px;
			position: relative;
			.sub{
				.sub-header{
					width: 100%;
					height: 50px;
					font-size:18px;
					font-family:JHuaLi;
					font-weight:400;
					color:rgba(73,131,166,1);
					span{
						margin: 0 10px;
						font-weight: bold;
						color: #80C5FE;
					}
				}
				.sub-nav{
					height: 38px;
					width: 100%;
					background: #80C5FE;
				}
				.sub-list{
					width: 100%;
					height: 44px;
					background: #FFFCF3;
					color: #23252F;
					font-size: 15px;
				}
				.sub-list:nth-child(2n-1){
					width: 100%;
					height: 44px;
					background: #FDEFE9;
				}
				.sub-list:nth-child(3){
					div:nth-child(1) span{
						background-color: #FEBFBF;
						padding: 5px 15px;
						border-radius: 10px;
						color: #fff;
						background-image: url(../../../assets/home/no1.png);
						background-position: 5px 0;
						background-repeat: no-repeat;
						background-size: 18px 20px;
						text-indent: 10px;
						box-sizing: border-box;
					}
					div:nth-child(2) span{
						color: #C44489;
					}
					div:nth-child(3) span{
						color: #C44489;
					}
				}
				.sub-list:nth-child(4){
					div:nth-child(1) span{
						background-color: #FEBFBF;
						padding: 5px 15px;
						border-radius: 10px;
						color: #fff;
						background-image: url(../../../assets/home/no2.png);
						background-position: 5px 0;
						background-repeat: no-repeat;
						background-size: 18px 20px;
						text-indent: 10px;
						box-sizing: border-box;
					}
					div:nth-child(2) span{
						color: #8644C4;
					}
					div:nth-child(3) span{
						color: #8644C4;
					}
				}
				.sub-list:nth-child(5){
					div:nth-child(1) span{
						background-color: #FEBFBF;
						padding: 5px 15px;
						border-radius: 10px;
						color: #fff;
						background-image: url(../../../assets/home/no3.png);
						background-position: 5px 0;
						background-repeat: no-repeat;
						background-size: 18px 20px;
						text-indent: 10px;
						box-sizing: border-box;
					}
					div:nth-child(2) span{
						color: #4495C4;
					}
					div:nth-child(3) span{
						color: #4495C4;
					}
				}
			}
		}
		.cuo{
			img{
				width: 30px;
				height: 30px;
			}
			position: absolute;
			bottom: -40px;
			left: 50%;
			margin-left: -15px;
		}
	}

	
	.container {
		width: 100%;
		min-height: 100%;
		background: #F2F3F6;
		.rank {
			width: 100%;
			height: auto;
			background: #fff;
			margin-top: 10px;
			padding: 0 15px;
			box-sizing: border-box;
			padding-bottom:20px;
			.rank-title {
				color: #282A34;
				line-height: 18px;
				padding-top: 20px;
			}
			.paihang {
				position: relative;
				img {
					width: 100%;
					height: auto;
					margin-top: 15px;
				}
				.paihang-name{
					color: #3E7093;
					margin-top: 15px;
				}
				.time{
					position: absolute;
					left: 0;
					bottom: 50px;
					width: 55px;
					height: 20px;
					background: #fff;
					color:#3E7093;
					font-size: 12px;
					border-radius: 0 10px 10px 0;
				}
				.times{
					position: absolute;
					left: 0;
					bottom: 50px;
					width: 92px;
					height: 36px;
					background: #fff;
					font-size: 12px;
					border-radius: 0 20px 20px 0;
					.times-t{
						color: #3E7093;
						margin-top: 4px;
					}
					.times-b{
						color: #D95703;
						margin-top: 2px;
					}
				}
			}
		}
	}
</style>