<template>
  <div id="app">
    <keep-alive>
		<router-view v-if="$route.meta.keepAlive"></router-view>
	</keep-alive>
	<router-view v-if="!$route.meta.keepAlive"></router-view>
	<div v-if="LOADING" class="loging flex_center">
			<van-loading color="#666" size="28px" vertical>努力加载中...</van-loading>
		</div>
  </div>
</template>
<script>
	import { mapState } from 'vuex'
	export default {
		name: 'App',
		provide() { //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。                                             
			return {
				reload: this.reload
			}
		},
		data() {
			return {
				isRouterAlive: true, //控制视图是否显示的变量
			}
		},
		mounted() {
			
		},
		destroyed() {
			window.removeEventListener('popstate', this.goBack, false);
		},
		methods: {
			reload() {
				this.isRouterAlive = false; //先关闭，
				this.$nextTick(function() {
					this.isRouterAlive = true; //再打开
				})
			},
			goBack() {
				  console.log("点击了浏览器的返回按钮");
			}
		},
		computed: {
			...mapState([
				'LOADING'
			])
		},
		created() {

		},

	}
</script>
<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	#app{
		width: 100%;
		height: 100%;
	}
</style>
