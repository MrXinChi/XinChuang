import Vue from "vue";



import Audition from '@/views/student/audition/audition'
import Choice from '@/views/student/audition/choice'
import Level from '@/views/student/audition/level'

export const routes = [
		{
			path: '/audition',
			name: "audition",
			component: Audition
		},
		{
			path: '/choice',
			name: "choice",
			component: Choice
		},
		{
			path: '/level',
			name: "level",
			component: Level
		}
];

export default routes;