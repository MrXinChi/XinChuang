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
        return FILE("Common/images", params);
    },
    audio: (params) => { // 音频提交
        return FILE("Common/audio", params);
    },
    video: (params) => { // 视频提交
        return FILE("Common/video", params);
    },
    getCulum: (params) => { // 我的课程列表
        return POST("My/culum", params);
    },
    getCulinfo: (params) => { // //课程详情
        return POST("My/culum_info", params);
    },
    getEvaluate: (params) => { // //课程详情
        return POST("My/evaluate", params);
    },
	evaluate: (params) => { // //老师评价
        return POST("Index/evaluate", params);
    },		
    appoint_tac: (params) => { // //指定教师
        return POST("My/appoint_tac", params);
    },
    user_canbinding: (params) => { // //获取可绑定教师
        return POST("My/user_canbinding", params);
    },	
    apply: (params) => { // //申请绑定
        return POST("My/apply", params);
    },
    userTac: (params) => { // //已绑定教师
        return POST("My/userTac", params);
    },
    tac_bout: (params) => { // //教师约课信息
        return POST("Hall/tac_bout", params);
    },
    tac_culum: (params) => { // //获取教师课程
        return POST("My/tac_culum", params);
    },
    tacculum_add: (params) => { // //获取教师课程
        return POST("My/tacculum_add", params);
    },
};
export default services;