<template>
	<div class="container">
		<header-nav border title="老师列表"></header-nav>
		<div class="course">
            <ol>
                <li class="flex flex_y_center li_ol" v-for="(i,b) in 5" :key="b" @click="teacherBtn()">
                    <div class="li_left">
                        <img src="../../../../assets/about/empty.png" alt="">
                    </div>
                    <div class="li_center">
                        <ul>
                            <li>张涵予  男   钢琴</li>
                            <li>12235656879</li>
                            <li>大提琴柯老师</li>
                        </ul>
                    </div>
                    <div class="li_right">
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
				status:""
			}
		},
		methods: {
            teacherBtn(){  //查看老师评价
                this.$router.push('/evaluate')
            },
			async getCulinfo(id) {
				let Culinfo = await this.service.about.getCulinfo({
					user_id: localStorage.getItem('user_id'),
					token: localStorage.getItem('token'),
					bout_id: id
				})
				this.culinfoArray = Culinfo.data
			},
		},
		created() {
			var id = this.$route.params.id
			this.status = this.$route.params.status
			console.log(this.status)
			// this.getCulinfo(id)
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