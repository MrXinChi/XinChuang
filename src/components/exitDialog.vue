<template>
	<div v-if="show" class="frame flex_center">
		<div class="frame-center">
			<div class="frame-title">
				<p style="color:#F22117" class="fs15 fw_b">请确认是否要退出？？</p>
			</div>
            <div class="exitbtn">
                <button @click="exitBtn(0)" class="c_fff fs14" style="background: rgba(62, 112, 147, 1)">返回</button>
                <button @click="exitBtn(1)" class="c_fff fs14" style="background: rgb(238, 146, 25)">退出</button>
            </div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				show:false
			}
		},
		methods:{
			exitBtn(index){
				this.$emit('exitBtn',index)
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
    .exitbtn {
		width: 100%;
		padding: 0 15px;
		box-sizing: border-box;
		margin-top: 100px;
		button {
			width: 50%;
			height: 44px;
			border-radius: 4px;
		}
	}
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
                left: 17px;
                top: 52px;
            }
            .img2{
                width: 90px;
                height: 90px;
                position: absolute;
                top: 85px;
                left: 50%;
                margin-left: -45px;
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