import Vue from "vue";


//teacher
import LubmitHomework from '@/views/teacher/task/child/submitHomework.vue'
//student
import LubmitHomeworkStu from '@/views/student/task/child/submitHomework.vue'
import LubmitHomeworkStus from '@/views/student/task/child/submitHomework2.vue'
import ChoiceStu from '@/views/student/task/child/choice.vue'

export const routes = [
	//teacher
		{
			path: '/teacher/submitHomework',
			name: "submitHomework",
			component: LubmitHomework
		},

//srudent
		{
			path: '/student/submitHomework',
			name: "submitHomework",
			component: LubmitHomeworkStu
		},
		{
			path: '/student/submitHomeworks/:index/:music/:id',
			name: "submitHomeworks",
			component: LubmitHomeworkStus
		},
		{
			path: '/student/choice',
			name: "choice",
			component: ChoiceStu
		}
];

export default routes;