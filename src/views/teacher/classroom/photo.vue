 <template>
    <div class="container">
        <header-nav title="上传"></header-nav>
        
        <div class="container_div">
            <van-cell-group>
                <van-field v-if="type==1"  v-for="(i,b) in this.file" :key="b " v-model="i.title_image" label="图片标题" placeholder="请输入" />
                <van-field v-if="type==2"  v-for="(i,b) in this.file" :key="b " v-model="i.name" label="图片标题" placeholder="请输入" />
            </van-cell-group>
            <div class="container_div-top">
                <img v-if="type==1"  :src="fileimage" alt="">
                <van-uploader v-if="type==1"  :after-read="afterRead" :before-delete="beforeDelete" v-model="fileList" multiple :max-count="1" />
                <van-uploader v-if="type==2"  :after-read="afterRead" :before-delete="beforeDelete" v-model="fileList" multiple :max-count="9" />
            </div>
            <van-button v-if="type==1"  type="primary" size="large" @click="summaryBtn">修改</van-button>
            <van-button v-if="type==2" type="primary" size="large" @click="sbumitBtn">提交</van-button>
        </div>
       
    </div>
</template>
<script>

import toast from "@/utils/toast";
export default {
    data(){
        return{
            culum_id:"",
            type:0,
            fileList: [],
            file:[],
            messageShow:true,
            fileimage:"",
            index:""
        }
    },
    methods:{
         beforeDelete(file){
            this.fileList.map(i=>{
                if(i.file.lastModified == file.file.lastModified){
                    this.fileList.splice(i,1)
                }
            })
            if(this.fileList.length==0){
                this.file = []
            }else{
                this.fileList.map(i=>{
                    let param = new FormData()
                    param.append('file',i.file)
                    param.append("user_id",localStorage.getItem('user_id'))
                    param.append('token',localStorage.getItem('token'))
                    this.getImgsubm(param)
                })
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
            if(this.type==1){
                this.file.push({img:Imgsubm.tup})
            }else{
                this.file.push({img:Imgsubm.tup,name:""})
            }
        },
        async summaryBtn(){  //修改乐谱
            if(this.file[0].img==undefined){
                toast({
                    text: "图片不能为空",
                    time: 1000
                })
                return
            }
            if(this.file[0].title_image==undefined){
                toast({
                    text: "标题不能为空",
                    time: 1000
                })
                return
            }
            let init = await this.service.personalCenter.Music({
                ...getUserData(),
                culum_id:this.culum_id,
                file :this.file,
                index:this.index,
                type:1
            })
            if(init.state==200){
                toast({
                    text: init.msg,
                    time: 1000
                })
                this.$router.push('/dashboard/classroom')
                sessionStorage.setItem('tabBarActiveIndex',2)
                this.fileList=[]
                this.file=[]
            }
        },
        async sbumitBtn(){    //上传乐谱
            let init = await this.service.personalCenter.atlas_add({
                ...getUserData(),
                culum_id:this.culum_id,
                file :this.file
            })
            if(init.state==200){
                toast({
                    text: init.msg,
                    time: 1000
                })
                this.$router.push('/dashboard/classroom')
                sessionStorage.setItem('tabBarActiveIndex',2)
                this.fileList=[]
                this.file=[]
            }
        },
    },
    created(){
        this.culum_id = this.$route.query.id
        this.type = this.$route.query.type
        this.index = this.$route.query.index  //修改的下标
        if(this.type==1){
            let title_image = JSON.parse(this.$route.query.file)
            this.file.push(title_image) 
            let image = this.$route.query.file
            let images =typeof image=='string' ?JSON.parse(image):image;
            this.fileimage = images.image
        }
    }
    
}
</script>
<style scoped="scoped" lang="scss">
    .container{
        width:100%;
        height:100%;
        .container_div{
            padding-top:15px ;
            .container_div-top{
               margin: 20px;
               img{
                   width:100%;
                   display: block;
                   margin:10px 10px 10px 0;
               }
            }
            .container_div-center{

            }
        }
    }
</style>