import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginState: ''
  },
  mutations: {
    // 第一个参数代表所有初始化的值，第二个参数代表药改变的值
    changrLoginState (state, data) {
      state.loginState = data
    }
  },
  actions: {

  }
})
