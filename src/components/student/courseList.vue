<template>
	<div class="course-item">
		<div @click="onClick" v-for="(i,index) in couresArray" :key="index" class="course-padding">
			<div class="flex course-top">
				<div class="course-top-left flex_1 fs15 fw_b">{{i.name}}</div>
				<div class="course-top-right fs15">{{i.time}}</div>
			</div>
			<div class="course-center fs14 fw_b">帕格尼尼主题狂想</div>
			<div class="flex course-bottom flex">
				<div class="course-bottom-left fs14 fw_400 flex_1">课堂分数：30分</div>
				<div @click="detailsBtn" class="course-bottom-right fs15">{{details}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			couresArray:Array,
			details:String
		},
		methods:{
			onClick(){
				this.$emit('detailsClick')
			},
			detailsBtn(){
				this.$emit('detailsBtn')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.course-item{
		padding-top: 20px;
		padding-bottom: 50px;
		.course-padding{
			padding:20px;
			width: 100%;
			box-sizing: border-box;
			background: #fff;
			margin-top: 20px;
			.course-top{
				.course-top-left{
					color: #23252F;
				}
				.course-top-right{
					color: #838486;
				}
			}
			.course-center{
				color:rgba(131,132,134,1);
				margin-top: 15px;
			}
			.course-bottom{
				margin-top: 15px;
				.course-bottom-left{
					color: #6B6B6B;
				}
				.course-bottom-right{
					color: #F29417;
				}
			}
		}
		.course-padding:nth-child(1){
			margin-top: 0;
		}
	}
</style>