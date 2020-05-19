<template>
	<div class="container">
		<header-nav border title="老师列表"></header-nav>
		<div class="course">
            <ol>
                <li class="flex flex_y_center li_ol" v-for="(i,b) in culinfoArray" :key="b" >
                    <div class="li_left">
                        <img :src="i.images" alt="">
                    </div>
                    <div class="li_center">
                        <ul>
                            <li>{{i.name}}   {{i.music}}</li>
                            <li>{{i.mobile}}</li>
                            <li>{{i.music}}{{i.name}}</li>
                        </ul>
                    </div>
                    <div class="li_right" @click="teacherBtn(i.id)">
                        <button>
                            查看评价
                        </button>
                    </div>
                </li>
            </ol>
		</div>	
	</div>
</template>

<script>
	export default {
		data() {
			return {
				culinfoArray: [],
                status:"",
                bout_id:0
			}
		},
		methods: {
            teacherBtn(id){  //查看老师评价
                this.$router.push({path:'/evaluate',query:{bout_id:this.bout_id,tac_id:id}})
            },
		},
		created() {
            this.bout_id = this.$route.query.id
            this.culinfoArray = JSON.parse(this.$route.query.tac)
		}
	}
</script>

<style scoped="scoped" lang="scss">
.container{
	width: 100%;
    height: 100%;
    background:#f6f6f6;
}
	.course {
		ol{
            .li_ol{
                box-sizing: border-box;
                margin: 15px;
                padding: 15px;
                background: #fff;
                .li_left{
                    width:25%;
                    img{
                        width:100%;
                        border-radius: 50%;
                    }
                }
                .li_center{
                    width:50%;
                    padding: 10px 0px 0 10px;
                    ul{
                        li{
                            padding:5px 0 ;
                        }
                    }
                }
                .li_right{
                    width:25%;
                    button{
                        font-size: 14px;
                        font-weight: 500;
                        padding:5px 10px;
                        background:#1989fa;
                        color:#fff;
                        border-radius: 5px;
                    }
                }
            }
        }
		
		
}	
</style>