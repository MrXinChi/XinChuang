import {
    POST
} from '@/request/axios/index'

export const services = {
    getEndculum: (params) => { // 作业课程列表
        return POST("My/Endculum", params);
    },
    getSubculum: (params) => { // 选择课程
        return POST("My/subculum", params);
    },
    getVidsubm: (params) => { // 视频提交
        return POST("Index/vidsubm", params);
    },
    getTask: (params) => { // 视频提交
        return POST("About/task", params);
    },
};
export default services;