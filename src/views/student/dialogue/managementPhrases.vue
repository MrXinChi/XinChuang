<template>
    <div class="container" >
        <!-- <header-nav :returnShow="false" :returnShop="true" @handleBacks="handleBacks" title="管理常用语"></header-nav> -->
        <div class="container_dialogue">
            <div class="container_dialogue_div" v-for="(i,b) in cellArray" :key="b"  >
                <span class="container_dialogue_span">{{i.title}}</span>
                <div  class="flex container_dialogue_div2 ">
                    <div class="flex flex_y_center" @click="editBtn(i.id)">
                        <van-icon name="add-o" />
                        <p>编辑</p>
                    </div>
                </div>
            </div>
            <div class="button flex flex_y_center" @click="addtoBtn">
                <div class="button_div">
                    <span>添加常用语</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cellArray:[]
        }
    },
    methods:{
        addtoBtn(){  //添加常用语
            this.$router.push('/addCommonWords')
        },
        editBtn(id){   //编辑
            this.cellArray.map(i=>{
                if(i.id==id){
                    this.$router.push({path:'/editCommonWords',query:{id:id}})
                }
            })
        },
        async commonBtn(){
            let init = await this.service.personalCenter.common({
                ...getUserData(),
                type:0
            })
            this.cellArray = init.data
        },
        // handleBacks(){
        //     this.$router.push('/dialogue')
        // }
    },
    created(){
        this.commonBtn()
    }
}
</script>
<style scoped="scoped" lang="scss">
    .container{
        width:100%;
        height:100%;
       .container_dialogue{
            width:95%;
            padding: 0 2.5%;
            border-top: 1px solid #ccc;
            margin-bottom:60px;
           .container_dialogue_div{
               border-bottom:1px solid #ccc;
               padding:15px;
               .container_dialogue_span{
                   line-height: 20px;
                   font-size: 16px;
                   font-weight: bold;
               }
               .container_dialogue_div2{
                    text-align: right;
                    flex-direction: row-reverse;
                    padding-top: 10px;
                    /deep/.van-icon{
                        font-size: 20px;
                        font-weight: bold;
                    }
                    p{
                        font-size: 14px;
                        padding-left:5px ;
                    }
               }
           }
       } 
       .button{
            width:95%;
            height:60px;
            background: #fff;
            position: fixed;
            bottom:0; 
           .button_div{
                width:100%;
                height:50px;
                text-align: center;
                line-height: 50px;
                background: #07c160;
                
                span{
                    font-size: 16px;
                    font-weight: 600;
                    color:#fff;
                } 
           }
           
       }
    }
    
</style>