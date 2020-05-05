<template>
	<div class="container">
		<header-nav border title="咨询详情"></header-nav>
		<div id="tech">
			<div v-html="rmationArray.text">
				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				rmationArray:[]
			}
		},
		methods: {
			async getRmation(index) {
				let Rmation = await this.service.home.getRmation({
					user_id: localStorage.getItem("user_id"),
					token: localStorage.getItem("token")
				});
				console.log(" 获取资讯", Rmation.data[index]);
				this.rmationArray = Rmation.data[index]
			},
		},
		created(){
			let index = this.$route.params.id;
			console.log(index)
			this.getRmation(index)
		},
		updated() {
    		document.querySelector('#tech img').style.width="100%"
    		document.querySelector('#tech p').style.fontSize="16px"
    		document.querySelector('#tech p').style.color="#23252F"
    		document.querySelector('#tech p').style.textIndent="16px"
    		document.querySelector('#tech p').style.lineHeight="20px"
    		
 		},
	}
</script>

<style scoped="scoped" lang="scss">
	.container{
		width: 100%;
		padding-top: 10px;
		#tech{
			padding: 0 10px;
		}
	}
</style>