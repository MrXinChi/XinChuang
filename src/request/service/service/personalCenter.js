import {
    POST,
    GET
} from '@/request/axios/index'

export const services = {
    help: () => GET("Index/help" ), // 获取帮助中心
    courseware_remarks: (params) => POST("Index/courseware_remarks",params), // 保存课件备注 
    remarks: (params) => POST("Hall/remarks",params), // 查看课程备注
    
    getUserInfo: (params) => POST("My/userinfo", params), // 获取个人信息
    getUserEdit: (params) => POST("My/user_edit", params), // 修改个人信息
    
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
    exchange: (params) => POST("Goods/exchange", params), // 兑换
    user_exchange: (params) => POST("Goods/user_exchange", params), // 我的兑换
    
    /* 星星商城end */
    
    
    //个人简历
    getResume: (params) => POST("Hall/resume", params), // 获取个人信息
    setResume: (params) => POST("Hall/resume_eidt", params), //修改个人简历
    //抢单大厅
    getCourseList: (params) => POST("Hall/hall", params),
    //我的课程
    getMyCourseList: (params) => POST("Hall/culum", params),
    //抢单
    setMyCourse: (params) => POST("Hall/rob", params),
    //教师上课时间录入
    tactime_add: (params) => POST("Hall/tactime_add", params),
    //教师上课时间列表
    tactime: (params) => POST("Hall/tactime", params),
    //教师学生列表
    tac_student: (params) => POST("Hall/tac_student", params),
    //教师课程详情
    tac_culinfo: (params) => POST("Hall/tac_culinfo", params),
    //批改作业
    tac_correction: (params) => POST("Hall/tac_correction", params),
    //删除教师上课时间
    tactime_del: (params) => POST("Hall/tactime_del", params),
    //财务报表
    Finance: (params) => POST("Hall/Finance", params),
    //已上课时
    Already: (params) => POST("Hall/Already", params),
    //申请绑定的列表
    apply: (params) => POST("Hall/apply", params),
    //申请审核
    examine: (params) => POST("Hall/examine", params),
    //老师端-我的作业
    user_taskTearch: (params) => POST("Hall/user_task", params),
    //上传乐谱
    Music: (params) => POST("Hall/Music", params),
    //我的评分
    score: (params) => POST("Hall/score", params),
    
	
	//图片提交
	setMyImgsubm: (params) => POST("Common/images", params),
	//用户反馈
	setFeedback: (params) => POST("My/feedback", params),
	
	//分享邀请
	setQrcode: (params) => POST("My/Qrcode", params),
	//最近课程
	setLately: (params) => POST("My/Lately", params),
	//修改手机号
    setUpmobile: (params) => POST("My/upmobile", params),
    //课时轨迹
    hourtrajectory: (params) => POST("My/hourtrajectory", params),
    //获取全部教师
    whole_tac: (params) => POST("My/whole_tac", params),
    //用户端-我的作业
    user_task: (params) => POST("My/user_task", params),
    //邀请轨迹
    setInvitation: (params) => POST("My/invitation", params),
    //用户反馈列表
    feedback_list: (params) => POST("My/feedback_list", params),
    //用户反馈详情
    feedback_info: (params) => POST("My/feedback_info", params),
    //用户反馈详情
    user_culum: (params) => POST("My/user_culum", params),
    //常用语
    common: (params) => POST("Hall/common", params),
    //查看照片课件
    courseware: (params) => POST("Hall/courseware", params),
    //课程总结
    summary: (params) => POST("Hall/summary", params),
     //上传图谱
     atlas_add: (params) => POST("Hall/atlas_add", params),
    
    
	
};
export default services;