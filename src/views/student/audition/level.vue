<template>
	<div class="container">
		<header-nav title="演奏水平"></header-nav>
		<skeleton :height="10" background="#FAFAFA"></skeleton>
		<div class="choice">
			<div v-for="i in choiceArray" class="choice-item flex flex_y_center">
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
					{name:'初级'},
					{name:'中级'},
					{name:'高级'}
				]
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