<template>
	<div>
		<header-nav title="领取试听课"></header-nav>
		<div class="audit-bgc">
			<img src="../../../assets/student/audition/audition-bgc.png"/>
			<div class="audit-po">
				<div class="audit-poimg">
					<img class="img1" src="../../../assets/student/audition/audition-po1.png"/>
					<img class="img2" src="../../../assets/student/audition/audition-po2.png"/>
				</div>
				<div class="audit-header fs15 fw_b flex flex_y_center">填写体验者信息及选择课程</div>
				<div class="audit-input flex flex_y_center">
					<div class="audit-input-name fs15">姓名</div>
					<input class="fs15" type="text" placeholder="请输入姓名" />
				</div>
				<div class="audit-input flex flex_y_center">
					<div class="audit-input-name fs15">选择年龄</div>
					<input class="fs15" type="text" placeholder="请输入姓名" />
				</div>
				<div class="audit-input flex flex_y_center">
					<div class="audit-input-name fs15">选择课时</div>
					<input class="fs15" type="text" placeholder="请输入课时" />
				</div>
				<div @click="timeBtn" class="audit-input flex flex_y_center">
					<div class="audit-input-name fs15">选择学习时间</div>
					<input readonly="true" class="fs15 flex_1" type="text" placeholder="点击选择学习时间" />
					<van-icon name="arrow" />
				</div>
				<div @click="levelBtn" class="audit-input flex flex_y_center">
					<div class="audit-input-name fs15">当前演奏水平</div>
					<input readonly="true" class="fs15 flex_1" type="text" placeholder="点击选择演奏水平" />
					<van-icon name="arrow" />
				</div>
				<div class="audit-input flex flex_y_center">
					<div class="audit-input-name fs15">其他</div>
					<input class="fs15" type="text" placeholder="请输入姓名" />
				</div>
				<div class="audit-btn flex flex_x_center">
					<button class="fs15 c_fff">提交</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import headerNav from "@/components/student/headerNav";
	export default{
		methods:{
			timeBtn(){
				this.$router.push('/choice')
			},
			levelBtn(){
				this.$router.push('/level')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.audit-bgc{
		width: 100%;
		height: 290px;
		position: relative;
		img{
			width: 100%;
		}
		.audit-po{
			position: absolute;
			left: 5%;
			top: 65px;
			width:90%;
			height:485px;
			background:rgba(255,255,255,1);
			box-shadow:0px 0px 16px 0px rgba(50,138,198,0.34);
			border-radius:15px;
			padding-left: 15px;
			box-sizing: border-box;
			.audit-poimg{
				.img1{
					width: 90px;
					height: 53px;
					position: absolute;
					left: -7px;
					top: -30px;
				}
				.img2{
					width: 139px;
					height: 135px;
					position: absolute;
					right: -15px;
					top: -50px;
				}
			}
			.audit-header{
				color: #23252F;
				margin-top: 35px;
				border-bottom: 1px solid #DDDEE3;
				height: 50px;
				text-indent: 5px;
			}
			.audit-input{
				width: 100%;
				height: 50px;
				border-bottom: 1px solid #DDDEE3;
				padding-left: 15px;
				box-sizing: border-box;
				.audit-input-name{
					color: #23252F;
				}
				input{
					margin-left: 10px;
				}
				.van-icon{
					color: #838486;
					font-size: 18px;
					margin-right: 10px;
				}
			}
			.audit-btn{
				margin-top: 30px;
				button{
					width:125px;
					height:43px;
					background:rgba(62,112,147,1);
					border-radius:5px;
				}
			}
		}
	}
</style>