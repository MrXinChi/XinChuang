<template>
    <div>
        <!-- <header-nav :returnShow="false" title="图片集锦">
            <div @click="removeBtn"  style="color: #23252F;" class="fs15 fw_600" slot="right"></div>
        </header-nav> -->
        <div class="flex flex_warp">
             <div class="container_div" v-for="(item,index) in device.imgs" :key="index">
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
</template>
<script>
import { ImagePreview } from "vant"; // 引入Vant图片预览组件
import { Checkbox, CheckboxGroup } from 'vant';
import toast from "@/utils/toast";
export default {
    data(){
        return{
            device:{
                imgs:[],
            },
            type:0,
            culum_id:'',    //课程id
            checkedId:[],    //图片id
            images:[],
            fileList:[],
            file:'',
            show:false
        }
    },
    methods:{
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
    created(){
        this.culum_id = this.$route.query.culum_id
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
        padding:15px;
        text-align:center;
        img{
            width:100%;
        }
        /deep/.van-checkbox__icon{
            margin:10px auto;
        }
    }
    .container_div2{
        position: fixed;
        bottom:0; 
        height:60px;
        width:100%;
        /deep/.van-button {
            width:50%;
            margin: 5px 5%;
           
        }
    }
</style>