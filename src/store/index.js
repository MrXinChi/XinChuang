import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  counter: 1000,
	  userInfo:[],
	  LOADING: false
  },
  mutations: {
	  jia(state){
		state.counter++
	  },
	  jian(state){
	  	state.counter--
	  },
	  save_userInfo(state,data){
	  	state.userInfo = data
	  },
	  showLoading(state) {
		state.LOADING = true
	  },
	  hideLoading(state) {
		state.LOADING = false
	  },
  },
  actions: {
    showloader: ({ 
			commit 
		})  =>  {          
			commit( types.SHOWLOADING )      
		},
		      hideloader: ({ 
			commit 
		})  =>  {          
			commit( types.HIDELOADING )      
		},
  },
  modules: {
  }
})
