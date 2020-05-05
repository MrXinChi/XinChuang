import Vue from "vue";


//teacher
import Login from '@/views/teacher/login/login'
import Register from '@/views/teacher/login/register'
import Setup from '@/views/teacher/login/setup'

//student
import LoginStu from '@/views/student/login/login'
import RegisterStu from '@/views/student/login/register'
import SetupStu from '@/views/student/login/setup'

import LoginStuTer from '@/views/loginstuter'
export const routes = [
	//teacher================
		{
			path: '/teacher/login',
			name: "login",
			component: Login
		},
		{
			path: '/teacher/register',
			name: "register",
			component: Register
		},
		{
			path: '/teacher/setup',
			name: "setup",
			component: Setup
		},
		//student===========
		{
			path: '/student/login',
			name: "login",
			component: LoginStu
		},
		{
			path: '/student/register',
			name: "register",
			component: RegisterStu
		},
		{
			path: '/student/setup',
			name: "setup",
			component: SetupStu
		},
		{
			path: '/loginstuter',
			name: "loginstuter",
			component: LoginStuTer
		}
];

export default routes;