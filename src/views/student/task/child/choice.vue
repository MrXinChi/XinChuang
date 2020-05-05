<template>
	<div class="container">
		<header-nav title="选择课程"></header-nav>
		<skeleton :height="10" background="#FAFAFA"></skeleton>
		<div class="choice">
			<div v-for="(i,index) in choiceArray" :key="index" @click="returnBtn(index)" class="choice-item flex flex_y_center">
				<div class="item-left fs15">{{i.name}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import headerNav from "@/components/student/headerNav";
	import skeleton from "@/components/student/skeleton";
	export default{
		components:{
			skeleton
		},
		data(){
			return{
				choiceArray:[
					{name:'语文'},
					{name:'数学'},
					{name:'英语'},
					{name:'历史'}
				]
			}
		},
		methods:{
			returnBtn(index){
				console.log(this.choiceArray[index].name)
				var a = this.choiceArray[index].name
				this.$router.push('/submitHomework')
				
//				this.$router.push({name:'/submitHomework')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
.container{
	width: 100%;
	height: 100%;
	background: #F3F4F5;
}
	.choice{
		padding-left: 15px;
		background: #fff;
		.choice-item{
			width: 100%;
			height: 50px;
			border-bottom: 1px solid #DDDEE3;
			.item-left{
				color: #23252F;
			}
			.item-right{
				margin-left: 30px;
			}
		}
		.choice-item:last-child{
			border-bottom: none;
		}
	}
</style>