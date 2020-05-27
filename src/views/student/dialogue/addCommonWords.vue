<template>
    <div class="container" >
        <!-- <header-nav title="添加常用语">
            <div @click="makeBtn" style="color: #23252F;" class="fs15 fw_600" slot="right">完成</div>
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
        <div class="container_div2">
            <van-button type="primary" size="large" @click="makeBtn">完成</van-button>
        </div>
    </div>
</template>
<script>
import toast from "@/utils/toast";
export default {
    data(){
        return{
            message:"",
            cellArray:[]
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
        this.commonBtn()
       },
       async commonBtn(){
            let init = await this.service.personalCenter.common({
                ...getUserData(),
                type:1,
                title:this.message
            })
            toast({
                text: init.msg,
                time: 1000
            });
            this.$router.go(-1)
        }
    },
    created(){

    }
}
</script>
<style scoped="scoped" lang="scss">
 .container_div2{
        position: fixed;
        bottom:0; 
        height:60px;
        width:95%;
        /deep/.van-button {
            width:100%;
            margin: 5px 2.5%;
           
        }
    }
    
</style>