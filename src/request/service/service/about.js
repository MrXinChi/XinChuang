import {
    POST,
    FILE
} from '@/request/axios/index'

export const services = {
    getBout: (params) => { // 约课信息
        return POST("About/bout", params);
    },
    getBoutadd: (params) => { // 约课提交
        return POST("About/boutadd", params);
    },
    getTask: (params) => { // 作业提交
        return POST("About/task", params);
    },
    getImgsubm: (params) => { // 图片提交
        return FILE("Index/imgsubm", params);
    },
    getVidsubm: (params) => { // 视频提交
        return POST("Index/vidsubm", params);
    },
    getCulum: (params) => { // 我的课程列表
        return POST("My/culum", params);
    },
    getCulinfo: (params) => { // //课程详情
        return POST("My/culinfo", params);
    },
    getEvaluate: (params) => { // //课程详情
        return POST("My/evaluate", params);
    },
			
};
export default services;