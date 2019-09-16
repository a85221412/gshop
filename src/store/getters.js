/*
包含多个基于state的getter计算属性的对象
 */
export default {
  totalCount (state) {
    return state.shopcart.reduce((start, item) => start + item.count, 0)
  },

  totalPrice (state) {
    return state.shopcart.reduce((start, item) => start + item.count * item.price, 0)
  },
}
