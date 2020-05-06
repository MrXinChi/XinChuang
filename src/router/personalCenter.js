//teacher--start
import UserInfo from '@/views/teacher/personalCenter/personalCenterInfo/personalCenterInfo' // 个人中心信息
import MyClassHour from '@/views/teacher/personalCenter/myClassHour/myClassHour' // 已上课时
import MyScores from '@/views/teacher/personalCenter/myScores/myScores' // 我的评分
import ShareIndex from '@/views/teacher/personalCenter/share/shareIndex' // 分享首页
import ShareDetail from '@/views/teacher/personalCenter/share/shareDetail' // 分享详情页
import HelpCenter from '@/views/teacher/personalCenter/helpCenter/helpCenter' // 帮助中心
import HelpCenterDetail from '@/views/teacher/personalCenter/helpCenter/helpCenterDetail' // 帮助中心详情
import MyStudent from '@/views/teacher/personalCenter/myStudent/myStudent' // 我的学生
import MyStudentDetail from '@/views/teacher/personalCenter/myStudent/myStudentDetail' // 我的学生详情
import SchoolTime from '@/views/teacher/personalCenter/schoolTime/index' // 上课时间
import Feedback from '@/views/teacher/personalCenter/feedback/feedback' // 意见反馈
import SecuritySetting from '@/views/teacher/personalCenter/securitySetting/securitySetting' // 安全设置
import ChangePassword from '@/views/teacher/personalCenter/securitySetting/changePassword' // 修改密码
import Finance from '@/views/teacher/personalCenter/finance/finance' // 财务报表
import MyCourse from '@/views/teacher/personalCenter/myCourse/myCourse' // 课程列表
import Evaluate from '@/views/teacher/personalCenter/myCourse/evaluate' // 课程评价
import Details from '@/views/teacher/personalCenter/myCourse/details' // 评价详情
//teacher---end
//student--start
import PersonalCenterInfoStu from '@/views/student/personalCenter/personalCenterInfo/personalCenterInfo' // 个人中心信息
import MyClassHourStu from '@/views/student/personalCenter/myClassHour/myClassHour' // 我的课时
import ClassHourRuleStu from '@/views/student/personalCenter/myClassHour/classHourRule' // 课时规则
import MyStarStu from '@/views/student/personalCenter/myStar/myStar' // 我的星星
import StarRuleStu from '@/views/student/personalCenter/myStar/starRule' // 星星规则
import MyOrderStu from '@/views/student/personalCenter/myOrder/myOrder' // 我的订单
import ShopIndexStu from '@/views/student/personalCenter/starShop/shopIndex' // 商城主页
import OrderOfExchangeStu from '@/views/student/personalCenter/starShop/orderOfExchange' // 兑换订单
import OrderOfExchangeDetailStu from '@/views/student/personalCenter/starShop/orderOfExchangeDetail' // 兑换订单详情
import ExchangeGoodsStu from '@/views/student/personalCenter/starShop/exchangeGoods' // 兑换商品
import ShareIndexStu from '@/views/student/personalCenter/share/shareIndex' // 分享首页
import ShareDetailStu from '@/views/student/personalCenter/share/shareDetail' // 分享详情页
import HelpCenterStu from '@/views/student/personalCenter/helpCenter/helpCenter' // 帮助中心
import HelpCenterDetailStu from '@/views/student/personalCenter/helpCenter/helpCenterDetail' // 帮助中心详情
import FeedbackStu from '@/views/student/personalCenter/feedback/feedback' // 意见反馈
import SecuritySettingStu from '@/views/student/personalCenter/securitySetting/securitySetting' // 安全设置
import ChangePasswordStu from '@/views/student/personalCenter/securitySetting/changePassword' // 修改密码
import DeliveryAddressStu from '@/views/student/personalCenter/securitySetting/deliveryAddress' // 收货地址
import ChangeAddressStu from '@/views/student/personalCenter/securitySetting/changeAddress' // 收货地址(添加,修改)
//latelyCurriculum 最近课程
//myCurriculum 我的课程
import LatelyCurriculum from '@/views/student/personalCenter/curriculum/latelyCurriculum' // 最近课程
import MyCurriculum from '@/views/student/personalCenter/curriculum/myCurriculum' // 我的课程
//student-end


export const routes = [
    //teacher=========start
    {
        path: '/userInfo',
        name: "userInfo",
        component: UserInfo
    }, {
        path: '/myClassHour',
        name: "myClassHour",
        component: MyClassHour
    }, {
        path: '/myScores',
        name: "myScores",
        component: MyScores
    },
    {
        path: '/shareIndex',
        name: "shareIndex",
        component: ShareIndex
    },
    {
        path: '/shareDetail',
        name: "shareDetail",
        component: ShareDetail
    },
    {
        path: '/helpCenter',
        name: "helpCenter",
        component: HelpCenter
    },
    {
        path: '/helpCenterDetail',
        name: "helpCenterDetail",
        component: HelpCenterDetail
    },
    //我的学生-start
    {
        path: '/myStudent',
        name: "myStudent",
        component: MyStudent
    },
    {
        path: '/myStudentDetail/:id',
        name: "myStudentDetail",
        component: MyStudentDetail
    },
    //我的学生-end

    //上课时间-start
    {
        path: '/schoolTime',
        name: "schoolTime",
        component: SchoolTime
    },
    //上课时间-end
    {
        path: '/feedback',
        name: "feedback",
        component: Feedback
    },
    {
        path: '/securitySetting',
        name: "securitySetting",
        component: SecuritySetting
    },
    {
        path: '/changePassword',
        name: "changePassword",
        component: ChangePassword
    },
    {
        path: '/myCourse',
        name: "myCourse",
        component: MyCourse
    },
    {
        path: '/finance',
        name: "finance",
        component: Finance
    },
    {
        path: '/evaluate',
        name: "evaluate",
        component: Evaluate
    },
    {
        path: '/details',
        name: "details",
        component: Details
    },
    //teacher======end
    //student=====start
    {
        path: '/personalCenterInfo',
        name: "personalCenterInfo",
        component: PersonalCenterInfoStu
    }, {
        path: '/myClassHourstu',
        name: "myClassHour",
        component: MyClassHourStu
    }, {
        path: '/classHourRulestu',
        name: "classHourRule",
        component: ClassHourRuleStu
    }, {
        path: '/myStar',
        name: "myStar",
        component: MyStarStu
    }, {
        path: '/starRulestu',
        name: "starRule",
        component: StarRuleStu
    }, {
        path: '/myOrder',
        name: "myOrder",
        component: MyOrderStu
    },
    {
        path: '/shopIndex',
        name: "shopIndex",
        component: ShopIndexStu
    },
    {
        path: '/orderOfExchange',
        name: "orderOfExchange",
        component: OrderOfExchangeStu
    },
    {
        path: '/orderOfExchangeDetail',
        name: "orderOfExchangeDetail",
        component: OrderOfExchangeDetailStu
    },
    {
        path: '/exchangeGoods/:id',
        name: "exchangeGoods",
        component: ExchangeGoodsStu
    },
    {
        path: '/shareIndexxs',
        name: "shareIndex",
        component: ShareIndexStu
    },
    {
        path: '/shareDetailxs',
        name: "shareDetail",
        component: ShareDetailStu
    },
    {
        path: '/helpCenter',
        name: "helpCenter",
        component: HelpCenterStu
    },
    {
        path: '/helpCenterDetail',
        name: "helpCenterDetail",
        component: HelpCenterDetailStu
    },
    {
        path: '/feedbackxs',
        name: "feedback",
        component: FeedbackStu
    },
    {
        path: '/securitySettingstu',
        name: "securitySettingstu",
        component: SecuritySettingStu
    },
    {
        path: '/changePassword',
        name: "changePassword",
        component: ChangePasswordStu
    },
    {
        path: '/deliveryAddress',
        name: "deliveryAddress",
        component: DeliveryAddressStu
    },
    {
        path: '/changeAddress/:id',
        name: "changeAddress",
        component: ChangeAddressStu
    },
    {
        path: '/myCurriculum',
        name: "myCurriculum",
        component: MyCurriculum
    },
    {
        path: '/latelyCurriculum',
        name: "latelyCurriculum",
        component: LatelyCurriculum
    }
    //student=====end
];







export default routes;