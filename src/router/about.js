import Vue from "vue";
import DetailsPage from '@/views/student/about/child/detailsPage'
import CourseDetails from '@/views/student/about/child/courseDetails'
import CourseDetails2 from '@/views/student/about/child/courseDetails2'
import CurriculumEvaluation from '@/views/student/about/child/curriculumEvaluation'
import DirectSeedingRoom from '@/views/student/about/child/directSeedingRoom'

export const routes = [
		{
			path: '/detailsPage',
			name: "detailsPage",
			component: DetailsPage
		},
		{
			path: '/courseDetails/:id',
			name: "courseDetails",
			component: CourseDetails
		},
		{
			path: '/courseDetails2/:id',
			name: "courseDetails2",
			component: CourseDetails2
		},
		{
			path: '/curriculumEvaluation/:id',
			name: "curriculumEvaluation",
			component: CurriculumEvaluation
		},
		{
			path: '/directSeedingRoom',
			name: "directSeedingRoom",
			component: DirectSeedingRoom
		}
];

export default routes;