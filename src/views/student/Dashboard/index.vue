<template>
	<div class="container">
		<van-tabbar v-model="active" inactive-color="#202020" active-color="#3E7093">
			<van-tabbar-item replace to="/dashboard/homestu">
				<span>首页</span>
				<img slot="icon" slot-scope="props" :src="props.active ? home_icon.active : home_icon.normal">
			</van-tabbar-item>
			<van-tabbar-item replace to="/dashboard/aboutstu">
				<span>约课</span>
				<img slot="icon" slot-scope="props" :src="props.active ? shop_icon.active : shop_icon.normal">
			</van-tabbar-item>
			<van-tabbar-item replace to="/dashboard/taskstu">
				<span>作业</span>
				<img slot="icon" slot-scope="props" :src="props.active ? order_icon.active : order_icon.normal">
			</van-tabbar-item>
			<van-tabbar-item replace to="/dashboard/personalCenterstu">
				<span>我的</span>
				<img slot="icon" slot-scope="props" :src="props.active ? mine_icon.active : mine_icon.normal">
			</van-tabbar-item>
		</van-tabbar>
		<router-view />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: Number(sessionStorage.getItem('tabBarActiveIndex')) || 0,
				home_icon: {
					normal: require('@/assets/student/tabber/home.png'),
					active: require('@/assets/student/tabber/home.png')
				},
				shop_icon: {
					normal: require('@/assets/student/tabber/about.png'),
					active: require('@/assets/student/tabber/about.png')
				},
				order_icon: {
					normal: require('@/assets/student/tabber/stak.png'),
					active: require('@/assets/student/tabber/stak.png')
				},
				mine_icon: {
					normal: require('@/assets/student/tabber/main.png'),
					active: require('@/assets/student/tabber/main.png')
				},
			}
		},
		 watch: {
            active(value){
                // console.log(value);
                let tabBarActiveIndex = value > 0 ? value : 0;
                // 缓存到本地
                sessionStorage.setItem('tabBarActiveIndex', value);
            }
		},
		created(){
			this.active  = this.$route.query.active
		}
	}
</script>

<style scoped lang="scss">
	.container {
		width: 100%;
		height: 100%;
	}
	/deep/
	.van-hairline--top-bottom{
		z-index: 9;
	}
	/deep/
	.van-tabbar{
		height: 50px;
		.van-tabbar-item__icon{
			width: 20px;
			height: 20px;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.van-tabbar-item__text{
			font-size: 11px;
		}
	}
</style>