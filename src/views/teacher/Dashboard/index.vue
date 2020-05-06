<template>
	<div class="container">
		<div v-if="showBottom==0">
		<van-tabbar v-model="active" inactive-color="#202020" active-color="#3E7093">
			<van-tabbar-item replace to="/dashboard/home">
				<span>首页</span>
				<img slot="icon" slot-scope="props" :src="props.active ? home_icon.active : home_icon.normal">
			</van-tabbar-item>
			<van-tabbar-item replace to="/dashboard/about">
				<span>抢单大厅</span>
				<img slot="icon" slot-scope="props" :src="props.active ? shop_icon.active : shop_icon.normal">
			</van-tabbar-item>
<van-tabbar-item replace to="/dashboard/classroom">
	<span>进入课堂</span>
	<img slot="icon" slot-scope="props" :src="props.active ? shop_icon.active : shop_icon.normal">
</van-tabbar-item>

			
			<van-tabbar-item replace to="/dashboard/personalCenter">
				<span>我的</span>
				<img slot="icon" slot-scope="props" :src="props.active ? mine_icon.active : mine_icon.normal">
			</van-tabbar-item>
		</van-tabbar>
		</div>

<div v-else>
		<van-tabbar v-model="active" inactive-color="#202020" active-color="#3E7093">
			<van-tabbar-item replace to="/dashboard/homestu">
				<span>首页</span>
				<img slot="icon" slot-scope="props" :src="props.active ? home_iconstu.active : home_iconstu.normal">
			</van-tabbar-item>
			<van-tabbar-item replace to="/dashboard/aboutstu">
				<span>约课</span>
				<img slot="icon" slot-scope="props" :src="props.active ? shop_iconstu.active : shop_iconstu.normal">
			</van-tabbar-item>
			<van-tabbar-item replace to="/dashboard/taskstu">
				<span>作业</span>
				<img slot="icon" slot-scope="props" :src="props.active ? order_iconstu.active : order_iconstu.normal">
			</van-tabbar-item>
			<van-tabbar-item replace to="/dashboard/personalCenterstu">
				<span>我的</span>
				<img slot="icon" slot-scope="props" :src="props.active ? mine_iconstu.active : mine_iconstu.normal">
			</van-tabbar-item>
		</van-tabbar>
</div>




		<router-view />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showBottom:'',
				active: Number(sessionStorage.getItem('tabBarActiveIndex')) || 0,
				home_icon: {
					normal: require('@/assets/tabber/home.png'),
					active: require('@/assets/tabber/home.png')
				},
				shop_icon: {
					normal: require('@/assets/tabber/about.png'),
					active: require('@/assets/tabber/about.png')
				},
				mine_icon: {
					normal: require('@/assets/tabber/main.png'),
					active: require('@/assets/tabber/main.png')
				},


				active: Number(sessionStorage.getItem('tabBarActiveIndex')) || 0,
				home_iconstu: {
					normal: require('@/assets/student/tabber/home.png'),
					active: require('@/assets/student/tabber/home.png')
				},
				shop_iconstu: {
					normal: require('@/assets/student/tabber/about.png'),
					active: require('@/assets/student/tabber/about.png')
				},
				order_iconstu: {
					normal: require('@/assets/student/tabber/stak.png'),
					active: require('@/assets/student/tabber/stak.png')
				},
				mine_iconstu: {
					normal: require('@/assets/student/tabber/main.png'),
					active: require('@/assets/student/tabber/main.png')
				}
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
			console.log(localStorage.getItem("showBottom"))
			this.showBottom=localStorage.getItem("showBottom");
			console.log(this.showBottom)
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