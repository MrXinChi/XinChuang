<template>
    <div class="container" >
        <!-- <header-nav title="添加常用语">
            <div @click="makeBtn" style="color: #23252F;padding-right:10px;" class="fs15 fw_600" slot="right">完成</div>
            <div @click="removeBtn" style="color: #23252F;" class="fs15 fw_600" slot="right">删除</div>
        </header-nav> -->
        <van-field
            v-model="message"
            rows="10"
            autosize
            type="textarea"
            maxlength="200"
            placeholder="请输入您的常用语回复"
            show-word-limit
            />
        <div class="container_div2 flex">
            <button class="button" @click="makeBtn">完成</button>
            <button class="button" @click="removeBtn">删除</button>
        </div>
    </div>
</template>
<script>
import toast from "@/utils/toast";
export default {
    data(){
        return{
            message:"",
            cellArray:[],
            editId:"",
            type:0
        }
    },
    methods:{
       makeBtn(){  //保存
        if(this.message==""){
            toast({
                text: '常用语不能为空',
                time: 1000
            });	
            return
        }
        this.type = 2
        this.commonBtn()
       },
       removeBtn(){  //删除
         this.type = 3
          this.commonBtn()
       },
       async commonBtn(){
           if(this.type==0){
               let init = await this.service.personalCenter.common({
                    ...getUserData(),
                    type:this.type,
                })
                let cellArrays = init.data
                cellArrays.map(i=>{
                    if(i.id==this.editId){
                    this.message = i.title
                    }
                })
           }else{
                let init = await this.service.personalCenter.common({
                    ...getUserData(),
                    type:this.type,
                    title:this.message,
                    id:this.editId
                })
                toast({
                    text: init.msg,
                    time: 1000
                });	
                this.$router.push('/managementPhrases') 
           }
        }
    },
    created(){
        this.commonBtn()
        this.editId = this.$route.query.id
    }
}
</script>
<style scoped="scoped" lang="scss">
.container_div2{
        position: fixed;
        bottom:0; 
        height:60px;
        width:100%;
       .button{
           width:45%;
           height:50px;
           margin:5px 5%;
           font-size: 16px;
           font-weight: 600;
           color: #fff;
           background: #07c160;
       }
    }
    
</style>