/*
vuex最核心的管理对象store
*/
import vue from 'vue'
import vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

vue.use(vuex)

export default new vuex.Store({
  state,
  mutations,
  getters,
  actions
})
