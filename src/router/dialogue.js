import Vue from "vue";
import Dialogue from '@/views/student/dialogue/dialogue'
import Picture from '@/views/student/dialogue/picture'
import ManagementPhrases from '@/views/student/dialogue/managementPhrases'
import AddCommonWords from '@/views/student/dialogue/addCommonWords'
import EditCommonWords from '@/views/student/dialogue/editCommonWords'
export const routes = [
    {
        path: '/dialogue',
        name: "dialogue",
        component: Dialogue
    },
	{
        path: '/picture',
        name: "picture",
        component: Picture
    },	
    {
        path: '/managementPhrases',
        name: "managementPhrases",
        component: ManagementPhrases
    },
    {
        path: '/addCommonWords',
        name: "addCommonWords",
        component: AddCommonWords
    },
    {
        path: '/editCommonWords',
        name: "editCommonWords",
        component: EditCommonWords
    },
];

export default routes;