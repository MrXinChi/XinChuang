import Vue from 'vue'
import VueRouter from 'vue-router'

//引入其他页面路由
import dashboard from '@/router/dashboard'
import home from '@/router/home'
import login from '@/router/login'
import about from '@/router/about'
import task from '@/router/task'
import personalCenter from '@/router/personalCenter'

//引入tabs
import Dashboard from '@/views/teacher/Dashboard/index'
//student
import audition from '@/router/audition'

Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
		//路由重定向
		{
			path: '/',
			redirect: '/loginstuter'
		},
		//路由底部tabbar
		{
			path: '/dashboard',
			name: "dashboard",
			component: Dashboard,
			children: [...dashboard]
		},
		...home,
		...login,
		...about,
		...task,
		...personalCenter,
		...audition
	]
})



export default router