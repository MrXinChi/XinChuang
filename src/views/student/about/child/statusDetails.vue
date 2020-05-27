<template>
	<div class="container">
		<header-nav @handleBack="handleBack" border title="课程详情"></header-nav>
		<div class="course">
			<div class="course-title fs16 fw_b">上课内容</div>
			<div class="flex flex_x_bten flex_y_center"> 
				<div class="course_content fs15 flex_center" v-if="culinfoArray">{{culinfoArray[0].music}}</div>
				<div v-if="aboutClass==1">
					<button v-if="status == 4" class="button">已上完</button>
					<button v-else-if="status == 2" class="button">约课成功</button>
					<button v-else-if="status == 1" class="button1">约课失败</button>
					<button v-else-if="status == 0" class="button2">待审核</button>
				</div>
				<div v-if="aboutClass==2" >
					<button v-if="status == 2" class="button">已上课</button>
					<button v-else-if="status == 1" class="button1">未上课</button>
				</div>
			</div>
			<div class="course-title fs16 fw_b">上课时间</div>
			<div class="course_time fs15 flex_center">{{culinfoArray[0].time}}</div>
			<div class="course-title fs16 fw_b">上课学生</div>
			<div class="course_times fs15 flex_center">{{culinfoArray[0].userName}}</div>
			<div class="course-title fs16 fw_b">曲谱图片</div>
			<div v-for="(i,b) in culinfoArray[0].file" :key="b">
				<van-cell-group>
					<van-field  v-model="i.title_image" label="图片标题" readonly  />
				</van-cell-group>
				<img class="course-images" :src="i.image" />
			</div>
			<div class="course-title fs16 fw_b">课程截图</div>
			<div>
				<div class="flex flex_warp">
					<div class="container_div flex " v-for="(item,index) in device.imgs" :key="index">
						<img :src="item.text" @click="sceneImg(device.imgs,index,item.id)"/>
						<van-checkbox v-model="item.show"  @click="changeBtn(item.id)"></van-checkbox>
						<!--  -->
					</div> 
				</div>
				<div class="container_div2 flex">
					<van-button type="primary" size="large" @click="editBtn">编辑</van-button>
					<van-button type="primary" size="large" @click="removeBtn">删除</van-button>
				</div>
				<van-popup v-model="show">
					<div class="img-lile">
						<van-uploader :after-read="afterRead"  v-model="fileList" multiple :max-count="1" />
					</div>
				</van-popup>
			</div>
			<div class="course-title fs16 fw_b">课程评价</div>
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
		
		<!-- <curriculum-evaluation></curriculum-evaluation> -->
		
	</div>
</template>

<script>
import { ImagePreview } from "vant"; // 引入Vant图片预览组件
import { Checkbox, CheckboxGroup } from 'vant';
import toast from "@/utils/toast";
	export default {

		data() {
			return {
				device:{
					imgs:[],
				},
				type:0,
				culinfoArray: [],
				checkedId:[],    //图片id
				images:[],
				fileList:[],
				file:'',
				show:false,
				status:"",
				// tac:[],
				aboutClass:"",
				text:"",
				value:0,
				culum_id:""
			}
		},
		methods: {
            currBtn(){  //评分
				if(this.text.length < 10){
					toast({
						text: '字数不够',
						time: 1000
					});				
					return
				}
				if(this.value == 0){
					toast({
						text: '没评分',
						time: 1000
					});				
					return
				}
				var culu_id = this.$route.params.id
				this.getEvaluate(culu_id)
			},
			async getEvaluate(culu_id) {
				let Evaluate = await this.service.about.getEvaluate({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token'),
					culu_id:culu_id,
					// type:1,
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
			handleBack(){
				this.$router.push('/dashboard/aboutstu')
			},	
			async getCulinfo(id) {
				let Culinfo = await this.service.about.getCulinfo({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token'),
					bout_id: id,
					type:this.aboutClass 
				})
				if(Culinfo.state==200){
					if(Culinfo.data!=null){
						this.culinfoArray = Culinfo.data
						// this.tac = Culinfo.data[0].tac
					}
				}
			},
			 afterRead(file) {
				this.fileList.map(i=>{
					let param = new FormData()
					param.append('file',i.file)
					param.append("user_id",localStorage.getItem('user_id'))
					param.append('token',localStorage.getItem('token'))
					this.getImgsubm(param)
				})
			},
			async getImgsubm(params) {
					this.file = []
					let Imgsubm = await this.service.about.getImgsubm(params)
					this.file=Imgsubm.tup
					this.photnBtns()
				},
			sceneImg(images,index,id) {
				images.map(i=>{
				this.images.push(i.text)
				})
				ImagePreview({
					images:this.images, //需要预览的图片 URL 数组
					showIndex:false, //是否显示页码
					loop:false,
				})
			},
			removeBtn(){        //删除
				this.type = 1
				if(this.checkedId.length==0){
					toast({
						text: '请选择要删除的图片',
						time: 1000
					});	
					return
				}
				this.photnBtns()
			},
			editBtn(){       //编辑
				this.type = 2
				if(this.checkedId.length==0){
					toast({
						text: '请选择要编辑的图片',
						time: 1000
					});	
					return
				}
				this.show = true
				
			},
			changeBtn(id){
				this.checkedId.push(JSON.stringify(id))
			},
			async photnBtn(){  //全部列表
				this.type = 0
				let init = await this.service.personalCenter.courseware({
					...getUserData(),
					type:this.type,
					culum_id:this.culum_id,
				})
				this.device.imgs = init.data
			},
			async photnBtns(){
				if(this.type==1){
					let init = await this.service.personalCenter.courseware({
						...getUserData(),
						type:this.type,
						culum_id:this.culum_id,
						id:this.checkedId,
					})
					toast({
						text: init.msg,
						time: 1000
					});	
					this.photnBtn()
				}else if(this.type==2){
					let init = await this.service.personalCenter.courseware({
						...getUserData(),
						type:this.type,
						culum_id:this.culum_id,
						id:this.checkedId[0],
						file:this.file
					})
					toast({
						text: init.msg,
						time: 1000
					});	
					this.show = false
					this.photnBtn()
				}
				
			}
		},
		created() {
			this.culum_id = this.$route.query.id
			let id = this.$route.query.id
			this.type = this.$route.query.id
			this.status = Number(this.$route.params.status)
			this.aboutClass = Number(this.$route.params.aboutClass)
			this.getCulinfo(id)
			this.photnBtn()
		}
	}
</script>

<style scoped="scoped" lang="scss">
/deep/.van-uploader__upload{
        width:150px;
        height:150px;
        margin:0;
    }
    /deep/.van-uploader__preview-image{
        width:150px;
        height:150px;
        margin:0; 
    }
    .container_div{
        width:40%;
        margin: 0 15px;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
        img{
            width:100%;
        }
        /deep/.van-checkbox__icon{
            margin:10px auto;
        }
    }
    .container_div2{
        height:60px;
        width:100%;
        /deep/.van-button {
            width:50%;
            margin: 5px 5%;
           
        }
    }
.container{
	width: 100%;
	height: 100%;
}
	.course {
		padding: 15px;
		.course-title {
			color: #23252F;
		}
		.course_content{
			border: 1px solid #C2C2C2;
			width: 30%;
			height:40px;
			color: #23252F;
			border-radius: 3px;
			box-sizing: border-box;
			margin: 7.5px 0;
		}
		.course_time{
			border: 1px solid #C2C2C2;
			width: 70%;
			height:40px;
			color: #23252F;
			border-radius: 3px;
			box-sizing: border-box;
			margin: 7.5px 0;
		}
		.course_times{
			border: 1px solid #C2C2C2;
			width: 45%;
			height:40px;
			color: #23252F;
			border-radius: 3px;
			box-sizing: border-box;
			margin: 7.5px 0;
		}
		button{
			border-radius: 5px;
			color:#fff;
			height:40px;
			font-size: 16px;
			padding: 0 10px;
		}
		.button{
			background: #07c160;
		}
		.button1{
			background: red;
		}
		.button2{
			background: #3E7093;
		}
	}
	.course-images{
		width: 90px;
		height: 90px;
		margin: 7.5px 0;
	}
	.course-viewo{
		width: 200px;
		margin: 7.5px 0;
	}
	.buttons{
		width:90%;
		margin:0 5%;
		color:#fff;
		background: #3E7093;
		font-size: 16px;
		line-height: 50px;
		border-radius: 5px;
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