import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import RouteTransition from 'vue-route-transition'
Vue.use(RouteTransition)



//全局组件
import '@/components/student/globalComponent'

import 'lib-flexible'

//vant组件
import './plugins/vant'
//获取服务端数据
import '@/request/service/index'
//公用css
import '@/style/public.css'
import '@/style/reset.css'

import '@/utils/common'
import '@/utils/bridgeWebview'
//自定义聚焦事件
import '@/utils/focus'

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  RouteTransition,
  render: h => h(App)
}).$mount('#app')


router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})