import Vue from 'vue'

export default {
  get_shopslist(state, {shopslist}) {
    state.shopslist = shopslist
  },
  increase(state, data) {
    if (!data.count) {
      Vue.set(data, 'count', 1)
      state.shopcart.push(data)
    } else {
      data.count++
    }
  },
  decrease(state, data) {
    data.count--
    if (data.count === 0) {
      state.shopcart.splice(state.shopcart.indexOf(data), 1)
    }
  },
  clearCart(state) {

    state.shopcart.forEach((item) => {
      item.count = 0
    })
    state.shopcart = []
  }
}
