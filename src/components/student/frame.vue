<template>
	<van-popup :close-on-click-overlay='false' v-model="show">
		<div class="frame">
			<p class="flex flex_x_center fs14">{{title1}}</p>
			<p class="flex flex_x_center fs14">{{title2}}</p>
			<p class="flex flex_x_center fs14">{{title3}}</p>
			<div class="flex flex_x_center">
				<button @click="returnBtn" class="fs14">{{btn}}</button>
			</div>
			<img :src="imgs" />
		</div>
	</van-popup>
</template>

<script>
	export default {
		props:{
			title1:String,
			title2:String,
			title3:String,
			btn:String,
			imgs:String
		},
		data() {
			return {
				show: false
			}
		},
		methods:{
			returnBtn(){
				this.$emit('returnBtn')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	/deep/ .van-popup {
		border-radius: 5px;
	}
	
	.frame {
		width: 295px;
		height: 208px;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 4px 7px 1px rgba(238, 238, 238, 1);
		padding-top: 40px;
		box-sizing: border-box;
		p {
			width: 100%;
			color: #23252F;
			line-height: 23px;
		}
		button {
			width: 92px;
			height: 30px;
			background: rgba(255, 255, 255, 1);
			border: 1px solid rgba(194, 194, 194, 1);
			border-radius: 1px;
			color: #5E5E5E;
			margin-top: 30px;
		}
		img {
			position: absolute;
			width: 45px;
			height: 70px;
			top: 20px;
			right: 50px;
		}
	}
</style>