<template>
  <div class="msite">
    <HeaderTop title="首页">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo "></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userinfo.username?'/userinfo':'/login'">
        <span class="header_login_text" v-if="!userinfo.username">登录/注册</span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-wode"></i>
        </span>
      </router-link>
    </HeaderTop>
    <div class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <span>
              <img class="img" src="./images/1.jpg" alt="">
            </span>
          </div>
          <div class="swiper-slide"><span>
              <img class="img" src="./images/2.jpg" alt="">
            </span></div>
          <div class="swiper-slide"><span>
              <img class="img" src="./images/3.jpg" alt="">
            </span></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="msite_shop_list">
      <div class="shop_header">
        <!--        <i class="iconfont icon-xuanxiang"></i>-->
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'


  export default {
    data() {
      return {
        userinfo: {}
      }
    },
    mounted() {
      // 创建一个swiper实例对象，来实现轮播
      new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },

        // // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        //
        // // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })
      if (localStorage.userinfo) {
        this.userinfo = JSON.parse(localStorage.userinfo)
      }
    },
    components: {
      HeaderTop,
      ShopList
    }
  }
</script>

<style>
  .msite {
    width: 100%;
  }

  .msite_header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;
  }

  .msite_nav {
    position: relative;
    border: none;
    margin-top: 45px;
    height: 200px;
    background: #fff;
  }

  msite_nav:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
    transform: scaleY(0.5)
  }


  .msite_shop_list {
    position: relative;
    margin-top: 10px;
    background: #fff
  }

  .msite_shop_list::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4
  }


  .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;
  }

  .header_search i {
    font-size: 25px;
    color: #fff;
  }

  .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }

  .header_login_text {
    color: #fff
  }

  .shop_header {
    padding: 10px 0px;
  }

  .shop_icon {
    margin-left: 5px;
    color: #999
  }

  .shop_header_title {
    color: #999;
    font-size: 14px;
    line-height: 20px
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .img {
    width: 100%;
    height: 200px;
  }


</style>
