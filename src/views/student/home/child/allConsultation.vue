<template>
	<div>
		<header-nav border title="全部咨询"></header-nav>
		<div class="content">
			<div v-for="(i,index) in rmationArray" :key="index" @click="rmation(index)" class="Consultation-content flex">
				<div class="Consultation-content-left">
					<div class="Consultation-content-left-t fs15">
						<span class="over_2">{{i.title}}</span>
					</div>
					<div class="Consultation-content-left-b flex flex_x_right fs12">{{i.addtime}}</div>
				</div>
				<div class="Consultation-content-right">
					<img :src="i.images" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				rmationArray: []
			}
		},
		methods: {
			async getRmation() {
				let Rmation = await this.service.home.getRmation({
					user_id: localStorage.getItem("user_id"),
					token: localStorage.getItem("token")
				});
				console.log(" 获取资讯", Rmation.data);
				this.rmationArray = Rmation.data;
			},
			 rmation(index) {
      console.log(index);
      this.$router.push(`/rmationDetails/${index}`);
      //  	/article/${id}
    },
		},
		created() {
			this.getRmation()
		}
	}
</script>

<style scoped="scoped" lang="scss">
.content{
	padding: 0 10px;
}
 .Consultation-content {
    width: 100%;
    height: 90px;
    margin-top: 10px;
    .Consultation-content-left {
      width: calc(100% - 130px);
      height: 90px;
      word-wrap: break-word;
      padding-right: 15px;
      box-sizing: border-box;
      .Consultation-content-left-t {
        width: 100%;
        height: 60px;
        color: #23252f;
        line-height: 18px;
        margin-top: 10px;
      }
      .Consultation-content-left-b {
        width: 100%;
        height: 30px;
        color: #c2c2c2;
      }
    }
    .Consultation-content-right {
      width: 130px;
      height: 90px;
      border-radius: 5px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>