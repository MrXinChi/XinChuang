<template>
	<div class="container">
		<header-nav border title="课程评价"></header-nav>
		<div class="curr_text flex_center">
			<textarea v-model="text" class="fs15" placeholder="填写评论内容不少于15字"></textarea>
		</div>
		<div class="curr_rate flex flex_y_center">
			<div class="curr_rate_title fs14">打分</div>
			<van-rate v-model="value" />
		</div>
		<div class="footer">
			<button @click="currBtn" class="fs15 c_fff">提交</button>
		</div>
	</div>
</template>

<script>
    import toast from "@/utils/toast";
	export default{
		data(){
			return{
				value: 0,
				text:''
			}
		},
		methods:{
			async getEvaluate(culu_id) {
				let Evaluate = await this.service.about.getEvaluate({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token'),
					culu_id:culu_id,
					branch:this.value,
					text:this.text
				})
				if(Evaluate.state==200){
				    toast({
						text: Evaluate.msg,
						time: 1000
					});	
					this.text=""
					this.value=0			
				}
			},
			currBtn(){
				if(this.text.length < 10){
					toast({
						text: '字数不够',
						time: 1000
					});				
					return
				}
				if(this.value  == 0){
					toast({
						text: '没评分',
						time: 1000
					});				
					return
				}
				var culu_id = this.$route.params.id
				this.getEvaluate(culu_id)
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
.curr_text{
	width: 100%;
	margin-top: 15px;
	textarea{
		width: 346px;
		height: 149px;
		padding: 10px;
		box-sizing: border-box;
	}
}
.curr_rate{
	width: 100%;
	padding-left: 15px;
	box-sizing: border-box;
	margin-top: 20px;
	.curr_rate_title{
		margin-right: 10px;
		color: #23252F;
	}
}
.footer{
	width: 100%;
	height: 44px;
	box-sizing: border-box;
	padding: 0 15px;
	margin-top: 100px;
	button{
		width: 100%;
		height:44px;
		background:rgba(62,112,147,1);
		border-radius:4px;
	}
}
</style>