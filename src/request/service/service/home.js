import {
    POST
} from '@/request/axios/index'

export const services = {
    //teacher
    getBanner: (params) => { // 获取首页banner
        return POST("Index/activity", params);
    },
    getBanner: (params) => { // 获取首页banner
        return POST("Index/activity", params);
    },
    getHappy: (params) => { // 获取首页banner
        return POST("Index/happy", params);
    },
    getHomeculum: (params) => { // 获取首页课程
        return POST("My/Homeculum", params);
    },
    //教师端课程
     getHomeculumth: (params) => { // 获取首页课程
        return POST("Hall/Homeculum", params);
    },
//student
getRmation: (params) => { // 获取资讯
    return POST("Index/rmation", params);
},

};
export default services;