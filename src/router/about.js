import Vue from "vue";
import DetailsPage from '@/views/student/about/child/detailsPage'
import CourseDetails from '@/views/student/about/child/courseDetails'
import CourseDetails2 from '@/views/student/about/child/courseDetails2'
import CurriculumEvaluation from '@/views/student/about/child/curriculumEvaluation'
import DirectSeedingRoom from '@/views/student/about/child/directSeedingRoom'
import DetailsPageTeacher from '@/views/teacher/about/detailsPageTeacher'
import TeacherList from '@/views/student/about/child/teacherList'
import Evaluate from '@/views/student/about/child/evaluate'
import StatusDetails from '@/views/student/about/child/statusDetails'


export const routes = [
		{
			path: '/detailsPage',
			name: "detailsPage",
			component: DetailsPage
		},
		{
			path: '/courseDetails/:id/:status/:aboutClass',
			name: "courseDetails",
			component: CourseDetails
		},
		{
			path: '/courseDetails2/:id/:status',
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
		},
		{
			path: '/detailsPageTeacher',
			name: "detailsPageTeacher",
			component: DetailsPageTeacher
		},
		{
			path: '/teacherList',
			name: "teacherList",
			component: TeacherList
		},
		{
			path: '/evaluate',
			name: "evaluate",
			component: Evaluate
		},
		{
			path: '/statusDetails',
			name: "statusDetails",
			component: StatusDetails
		},
		
];

export default routes;