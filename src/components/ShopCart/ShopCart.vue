<template>
  <div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper" @click="showShopCart">
            <div class="logo" :class="{highlight: totalCount}">
              <i class="iconfont icon-shopping" :class="{highlight: totalCount}"></i>
            </div>
            <div class="num" v-if="totalCount">{{totalCount}}</div>
          </div>

          <div class="price" :class="{highlight: totalCount}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥4元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">
            {{payText}}
          </div>
        </div>
      </div>
      <transition name="move">
        <div class="shopcart-list" v-show="isShow">
          <div class="list-header">
            <h1 class="shopcart-title">购物车</h1>
            <span class="shopcart-empty" @click="clearCart()">清空</span>
          </div>
          <div class="list-content">
            <ul>
              <li class="food" v-for="(item, index) in shopcart" :key="index">
                <span class="name">{{item.name}}</span>
                <div class="price"><span>￥{{item.price}}</span></div>
                <div class="cartcontrol-wrapper">
                  <CartControl :food="item"/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <div class="list-mask" v-show="isShow" @click="showShopCart"></div>
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'
  import CartControl from '../CartControl/CartControl'
  import {MessageBox} from 'mint-ui';

  export default {
    data() {
      return {
        isShow: false,
      }
    },
    computed: {
      ...mapState(['shopcart']),

      ...mapGetters(['totalCount', 'totalPrice']),

      payClass() {
        var totalPrice = this.totalPrice
        return totalPrice < 20 ? 'not-enough' : 'enough'
      },
      payText() {
        var totalPrice = this.totalPrice
        if (totalPrice == 0) {
          return '￥20元起送'
        } else if (totalPrice < 20) {
          return `还差${20 - totalPrice}起送`
        } else {
          return `去结算`
        }
      }
    },
    methods: {
      showShopCart() {
        if (this.totalCount > 0) {
          this.isShow = !this.isShow
        }
      },
      clearCart() {
        //第一种方法，结果成功
        MessageBox.confirm('确定清空购物车?').then(action=>{
          this.$store.dispatch('clearCart')
        });
      }
    },
    watch: {
      totalCount: function () {
        // 如果总数量为0, 直接不显示
        if (this.totalCount === 0) {
          this.isShow = false
          // return false
        }
      },
    },
    components: {
      CartControl
    }
  }
</script>

<style>
  .shopcart {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px
  }

  .shopcart > .content {
    display: flex;
    background: #141d27;
    font-size: 0;
    color: rgba(255, 255, 255, 0.4)
  }

  .content-left {
    flex: 1;
  }

  .logo-wrapper {
    display: inline-block;
    vertical-align: top;
    position: relative;
    top: -10px;
    margin: 0 12px;
    padding: 6px;
    width: 56px;
    height: 56px;
    box-sizing: border-box;
    border-radius: 50%;
    background: #141d27;
    margin-left: -100px;
  }


  .logo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    text-align: center;
    background: #2b343c
  }

  .logo.highlight {
    background: #02a774
  }


  .icon-shopping {
    line-height: 44px;
    font-size: 24px;
    color: #80858a
  }


  .icon-shopping.highlight {
    color: #fff
  }

  .num {
    position: absolute;
    top: 0;
    right: 0;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 16px;
    font-size: 9px;
    font-weight: 700;
    color: #ffffff;
    background: rgb(240, 20, 20);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
  }

  .content-left > .price {
    display: inline-block;
    vertical-align: top;
    margin-top: 5px;
    line-height: 24px;
    padding-right: 12px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    width: 50px;
  }

  .price.highlight {
    color: #fff
  }

  .desc {
    display: inline-block;
    vertical-align: bottom;
    margin-bottom: 15px;
    margin-left: -45px;
    font-size: 10px
  }

  .content-right {
    flex: 0 0 105px;
    width: 105px
  }

  .pay {
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    color: #fff
  }


  .pay.not-enough {
    background: #2b333b
  }

  .pay.enough {
    background: #00b43c;
    color: #fff
  }

  .ball {
    position: fixed;
    left: 32px;
    bottom: 22px;
    z-index: 200;
    transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
  }

  .inner {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #02a774;
    transition: all 0.4s linear
  }

  .shopcart-list {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    transform: translateY(-100%)
  }


  .move-enter-active, .move-leave-active {
    transition: transform .3s
  }

  .move-enter, .move-leave-to {
    transform: translateY(0)
  }

  .list-header {
    height: 40px;
    line-height: 40px;
    padding: 0 18px;
    background: #f3f5f7;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
  }

  .shopcart-title {
    float: left;
    font-size: 14px;
    color: rgb(7, 17, 27)
  }

  .shopcart-empty {
    float: right;
    font-size: 12px;
    color: rgb(0, 160, 220)
  }

  .list-content {
    padding: 0 18px;
    max-height: 217px;
    background: #fff
  }

  .food {
    position: relative;
    padding: 12px 0;
    box-sizing: border-box;
    /*bottom-border-1px(rgba(7, 17, 27, 0.1))*/
  }

  .food > .name {
    line-height: 24px;
    font-size: 14px;
    color: rgb(7, 17, 27)
  }


  .food > .price {
    position: absolute;
    right: 90px;
    bottom: 12px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 700;
    color: rgb(240, 20, 20)
  }

  .cartcontrol-wrapper {
    position: absolute;
    right: 0;

  }


  .list-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 40;
    backdrop-filter: blur(10px);
    opacity: 1;
    background: rgba(7, 17, 27, 0.6);
  }


</style>
