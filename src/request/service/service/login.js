import {
    POST
} from '@/request/axios/index'

export const services = {
    getYzm: (params) => { // 验证码
        return POST("Index/yzm", params);
    },
    getRegister: (params) => { // 注册
        return POST("Index/register", params);
    },

    getDeng: (params) => { // 登陆
        return POST("Index/Deng", params);
    },

    getForget: (params) => { // 忘记密码
        return POST("My/forget", params);
    },
    getModify: (params) => { // 忘记密码
        return POST("My/modify", params);
    }
};
export default services;