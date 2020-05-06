import Vue from "vue";
//teacher
import Home from '@/views/teacher/home/index';
import About from '@/views/teacher/about/index';
import Classroom from '@/views/teacher/classroom/index';
import PersonalCenter from '@/views/teacher/personalCenter/index';
import Task from '@/views/teacher/task/index' ;

//student
import HomeStu from '@/views/student/home/index'
import AboutStu from '@/views/student/about/index'
import PersonalCenterStu from '@/views/student/personalCenter/index'
import TaskStu from '@/views/student/task/index'

export const routes = [
	//teacher=========
	{
		path: '/teacher/dashboard',
		redirect: '/teacher/login'
	},
	{
		path: '/teacher/dashboard',
		redirect: '/teacher/dashboard/home'
	},
	{
		path: 'home',
		name: "home",
		component: Home
	},
	{
		path: 'about',
		name: "about",
		component: About,
	},
	{
		path: 'classroom',
		name: "classroom",
		component: Classroom,
	},
	{
		path: 'personalCenter',
		name: "personalCenter",
		component: PersonalCenter,
	},
	{
		path: 'task',
		name: "task",
		component: Task,
	},
	//student========
	{
		path: 'homestu',
		name: "homestu",
		component: HomeStu
	},
	{
		path: 'aboutstu',
		name: "aboutstu",
		component: AboutStu,
	},
	{
		path: 'personalCenterstu',
		name: "personalCenterstu",
		component: PersonalCenterStu,
	},
	{
		path: 'taskstu',
		name: "taskstu",
		component: TaskStu,
	}

];

export default routes;