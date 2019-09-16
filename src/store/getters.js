export default {
  totalCount (state) {
    return state.shopcart.reduce((start, item) => start + item.count, 0)
  },

  totalPrice (state) {
    return state.shopcart.reduce((start, item) => start + item.count * item.price, 0)
  },
}
