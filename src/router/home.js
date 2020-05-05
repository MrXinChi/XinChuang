import Vue from "vue";

import Ranking from '@/views/teacher/ranking/ranking'
import RmationDetails from '@/views/student/home/child/rmationDetails'
import AllConsultation from '@/views/student/home/child/allConsultation'


export const routes = [
		{
			path: '/teacher/ranking',
			name: "ranking",
			component: Ranking
		},
		{
			path: '/rmationDetails/:id',
			name: "rmationDetails",
			component: RmationDetails,
		},
		{
			path: '/allConsultation',
			name: "allConsultation",
			component: AllConsultation,
		}
];

export default routes;