/*
通过mutation间接更新state的多个方法的对象
 */
import {shopslist, increase, decrease,clearCart} from './mutations'
import {select_shopslist} from '../api/api'

export default {
  select_shopslist({commit, state}) {
    select_shopslist().then((res) => {
      console.log(res.data)
      if (res.status == 200) {
        const shopslist = res.data.info
        commit(get_shopslist, {shopslist})
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  increase({commit, state}, data) {
    commit('increase', data)
  },
  decrease({commit, state}, data) {
    if (data.count > 0) {
      commit('decrease', data)
    }
  },
  clearCart({commit}) {
    commit('clearCart')
  }
}
