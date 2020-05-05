import {
    POST
} from '@/request/axios/index'

export const services = {
    getUserInfo: (params) => POST("My/userinfo", params), // 获取个人信息
    getUserEdit: (params) => POST("My/user_edit", params), // 获取个人信息
    
    getUserStars: (params) => POST("My/ustars", params), // 获取星星数量
    getSignInInfo: (params) => POST("My/signstatus", params), // 获取签到信息
    signIn: (params) => POST("My/sign", params), // 签到
    getStarList: (params) => POST("My/trajectory", params), // 获取星星的列表
    /* 收货地址 start*/
    getAddressList: (params) => POST("My/uaddress1", params), // 获取用户收货地址列表
    getDefaultAddress: (params) => POST("My/uaddress", params), // 获取用户默认收货地址
    addAddress: (params) => POST("My/address", params), // 添加用户收货地址
    setDefaultAddress: (params) => POST("My/setress", params), // 设置默认收货地址
    editAddress: (params) => POST("My/address_eidt", params), // 编辑收货地址
    deleteAddress: (params) => POST("My/address_del", params), // 删除收货地址
    /* 收货地址 end*/
    /* 星星商城start */
    getGoodsList: (params) => POST("Goods/goods", params), // 商城商品列表
    getGoodsDetail: (params) => POST("Goods/goodsinfo", params), // 商品详情
    /* 星星商城end */

    
    //个人简历
    getResume: (params) => POST("Hall/resume", params), // 获取个人信息
    setResume: (params) => POST("Hall/resume_eidt", params),

    //抢单大厅
    getCourseList: (params) => POST("Hall/hall", params),

    //我的课程
    getMyCourseList: (params) => POST("Hall/culum", params),

    //抢单
    setMyCourse: (params) => POST("Hall/rob", params),
	
	//图片提交
	setMyImgsubm: (params) => POST("Index/imgsubm", params),
	//用户反馈
	setFeedback: (params) => POST("My/feedback", params),
	
	//分享邀请
	setQrcode: (params) => POST("My/Qrcode", params),
	//最近课程
	setLately: (params) => POST("My/Lately", params),
	//修改手机号
	setUpmobile: (params) => POST("My/upmobile", params),
	
};
export default services;