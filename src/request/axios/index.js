import axios from 'axios';
import Qs from 'qs'
import store from '@/store/index';//在js文件引入store模块
// import Vue from 'vue'
import router from '../../router'
import toast from "@/utils/toast";

var BASE_URL = 'https://fz.h9e.net/api/';

// 创建基请求
const $http = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

// 请求拦截器
$http.interceptors.request.use(config => {
    return config
}, err => {
    console.log(err)
})

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function GET(url, params) {
    return $http.get(url, {
        params: params
    })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function POST(url, params) {
    return $http.post(url, Qs.stringify(params), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

/**
 * post方法，对应post请求  上传文件
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function FILE(url, params) {
    return $http.post(url, params, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

// 添加响应拦截器
$http.interceptors.response.use(function (res) {
    // console.log(res)
    var code = res.data.state;
    if(code == 10004){
        toast({
            text: '账号已在别处登陆',
            time: 1000
        });
        router.push('/loginstuter')
        window.localStorage.clear();
    }
    // else if(code == 10003){
    //     toast({
    //         text: '请先登录',
    //         time: 1000
    //     });
    //     router.push('/loginstuter')
    // }
     return res.data;
 }, function (error) {
     var str = error.message;
     if (str.indexOf('Network Error') > -1) {
         // Toast('网络错误')
     } else if (str.indexOf('timeout') > -1) {
         // Toast('请求超时')
     } else {
         // Toast('服务器错误')
     }
     // 对响应错误做点什么
     return Promise.reject(error);
 })