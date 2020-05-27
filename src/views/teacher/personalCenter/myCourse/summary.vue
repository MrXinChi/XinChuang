 <template>
    <div class="container">
        <header-nav title="课程总结"></header-nav>
        <div class="container_div">
            <div class="container_div-top">
                <van-uploader :after-read="afterRead" v-model="fileList" multiple :max-count="9" />
            </div>
            <div class="container_divcenter">
                <van-field
                    v-model="message"
                    rows="10"
                    autosize
                    type="textarea"
                    maxlength="50"
                    placeholder="请总结"
                    show-word-limit
                />
            </div>
            <van-button type="primary" size="large" @click="summaryBtn">提交</van-button>
        </div>
       
    </div>
</template>
<script>

import toast from "@/utils/toast";
export default {
    data(){
        return{
            culum_id:"",
            type:1,
            fileList: [],
            file:[],
            message:""
        }
    },
    methods:{
        afterRead(file) {
            if(typeof(file)=='object'){
                let files  = this.fileList[0].file
                let param = new FormData()
                param.append('file',files)
                param.append("user_id",localStorage.getItem('user_id'))
                param.append('token',localStorage.getItem('token'))
                this.getImgsubm(param)
                return
            }
            file.map(i=>{
                let param = new FormData()
                param.append('file',i.file)
                param.append("user_id",localStorage.getItem('user_id'))
                param.append('token',localStorage.getItem('token'))
                this.getImgsubm(param)
            })
        },
        async getImgsubm(params) {
            let Imgsubm = await this.service.about.getImgsubm(params)
            this.file.push(Imgsubm.tup) 
            console.log( this.file) 
        },
        async summaryBtn(){ 
            if(this.file.length==0){
                toast({
                    text: '图片不能为空',
                    time: 1000
                });	
                return
            }
            if(this.message==''){
                toast({
                    text: '总结语不能为空',
                    time: 1000
                });	
                return
            }
            let init = await this.service.personalCenter.summary({
                ...getUserData(),
                culum_id:this.culum_id,
                type:this.type,
                file:this.file,
                text:this.message
            })
            toast({
                text: init.msg,
                time: 1000
            });	
            this.$router.push('/myCourse')
        }
    },
    created(){
        this.culum_id = this.$route.query.id
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
               margin: 0 0 0 20px;
            }
            .container_div-center{

            }
        }
    }
</style>