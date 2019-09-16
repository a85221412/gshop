<template>
  <div>
    <ShopHeader></ShopHeader>
    <div class="tab">
      <!-- 使用replace的方式进行路由切换 （路由懒加载） -->
      <div class="tab-item" >
        <router-link  to="/shop/goods" :class="{active: $route.path==='/shop/goods'}" replace>点餐</router-link>
      </div>
      <div class="tab-item" >
        <router-link to="/shop/rating" :class="{active: $route.path==='/shop/rating'}" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" :class="{active: $route.path==='/shop/info'}" replace>商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import ShopHeader from '../../components/ShopHeader/ShopHeader'

  export default {
    components: {
      ShopHeader
    }
  }
</script>

<style>
  .tab {
    height: 40px;
    line-height: 40px;
    background: #fff;
    position: relative;
    border: none
  }

  .tab:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(7, 17, 27, 0.1);
    transform: scaleY(0.5)
  }

  .tab-item {
    float: left;
    width: 33.33333%;
    text-align: center;
    font-size: 14px;
    color: rgb(77, 85, 93)
  }

  .tab-item > router-link {
    display: block;
    position: relative
  }

  .active {
    color: #02a774
  }

  .tab-item > router-link .router-link-active::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 1px;
    width: 35px;
    height: 2px;
    transform: translateX(-50%);
    background: #02a774
  }


</style>
