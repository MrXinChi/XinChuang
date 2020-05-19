<template>
	<div @click="frameBtn" v-if="show" class="frame flex_center">
		<div v-if="frameShow" class="frame-center">
			<div class="frame-title">
				<p v-bind:style="{color:color}" class="fs15 fw_b">{{title1}}</p>
				<p v-bind:style="{color:color}" class="fs15 fw_b">{{title2}}</p>
			</div>
			<img class="img1" src="@/assets/components/res_m.png" />
			<img class="img2" src="@/assets/components/res.png" />
			<button @click="returnBtn1" class="fs14">确定</button>
		</div>
		
		<div v-else class="frame-center">
			<div class="frame-title">
				<p v-bind:style="{color:color}" class="fs15 fw_b">{{title1}}</p>
				<p v-bind:style="{color:color}" class="fs15 fw_b">{{title2}}</p>
			</div>
			<img class="img3" src="@/assets/components/req.png" />
			<img class="img2" src="@/assets/components/req_m.png" />
			<button @click="returnBtn1" class="fs14">确定</button>
		</div>
	</div>
	
	
</template>

<script>
	export default{
		props:{
			frameShow:Boolean,
			color:String,
			title1:String,
			title2:String
		},
		data(){
			return{
				show:false
			}
		},
		methods:{
			frameBtn(){
				this.$emit('frameBtn')
			},
			returnBtn1(){
				this.$emit('returnBtn1')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.frame{
			width: 100%;
			height: 100%;
			position: fixed;
			background: rgba(0,0,0,.5);
			z-index: 999;
			left: 0;
			top: 0;
			.frame-center{
				width:295px;
				height:208px;
				background:rgba(255,255,255,1);
				border-radius:5px;
				position:relative;
				.frame-title{
					text-align: center;
					p:nth-child(1){
						margin-top: 35px;
					}
					p:nth-child(2){
						margin-top: 10px;
					}
				}
				.img1{
					width: 50px;
					height: 90px;
					position: absolute;
					right: 17px;
					top: 52px;
				}
				.img2{
					width: 90px;
					height: 90px;
					position: absolute;
					left: 50%;
					margin-left: -45px;
				}
				button {
					width: 92px;
					height: 30px;
					background: rgba(255, 255, 255, 1);
					border: 1px solid rgba(194, 194, 194, 1);
					border-radius: 1px;
					color: #5E5E5E;
					margin-top: 30px;
					position: absolute;
					top: 125px;
					left: 50%;
					margin-left:-46px;
				}
				.img3{
					width: 50px;
					height: 90px;
					position: absolute;
					right: 17px;
					top: 52px;
				}
			}
		}
</style>