import axios from 'axios';
import Qs from 'qs'

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


// 添加响应拦截器
$http.interceptors.response.use(function (res) {
    return res.data;
}, function (error) {
    return Promise.reject(error);
});


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