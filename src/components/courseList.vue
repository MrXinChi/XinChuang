<template>
	<div class="course-item">
		<div @click="courseBtn(i.id)" v-for="(i,index) in dataInfo" :key="index" class="course-padding">
			<div class="flex course-top">
				<div class="course-top-left flex_1 fs15 fw_b">{{i.name}}</div>
				<div class="course-top-right fs15">{{i.time}}</div>
			</div>
			<!-- <div class="course-center fs14 fw_b">帕格尼尼主题狂想</div> -->
			<div class="flex course-bottom flex">
				<!-- <div class="course-bottom-left fs14 fw_400 flex_1">课堂分数：分</div> -->
				<div :style="{color:color}" class="course-bottom-right fs15">{{details}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				dataInfo:[
				{
					time:'',
					hour:'',
					name:'',
				}]
			}
		},
		props:{
			details:String,
			color:String
		},
		methods:{
			courseBtn(index){
				this.$emit('courseBtn',index)
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.course-item{
		padding-bottom: 50px;
		.course-padding{
			padding:20px;
			width: 100%;
			box-sizing: border-box;
			background: #fff;
			border-top: 10px solid #F3F4F5;
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
					/*color: #3E7093;*/
				}
			}
		}
	}
	
</style>