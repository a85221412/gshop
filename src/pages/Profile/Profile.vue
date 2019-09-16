<template>
  <div class="profile">
    <HeaderTop title="我的"></HeaderTop>
    <div class="profile-number">
      <router-link :to="userinfo.username ? '/userinfo':'/login'" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-wode-F"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">{{userinfo.username||'登录/注册'}}</p>
          <p>
              <span class="user-icon">
                <i class="iconfont icon-phone"></i>
              </span>
            <span class="">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
            <i class="iconfont icon-you"></i>
          </span>
      </router-link>
    </div>
    <div class="profile_info_data border-1px">
      <ul class="info_data_list">
        <div class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </div>
        <div class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </div>
        <div class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </div>
      </ul>
    </div>
    <div class="profile_my_order border-1px">
      <!-- 我的订单 -->
      <a class="my_order">
          <span>
            <i class="iconfont icon-dingdan"></i>
          </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
              <i class="iconfont icon-you"></i>
            </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a class="my_order">
          <span>
            <i class="iconfont icon-jifen"></i>
          </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
              <i class="iconfont icon-you"></i>
            </span>
        </div>
      </a>
      <!-- Mint外卖会员卡 -->
      <a href="javascript:" class="my_order">
          <span>
            <i class="iconfont icon-huiyuan"></i>
          </span>
        <div class="my_order_div">
          <span>Mint外卖会员卡</span>
          <span class="my_order_icon">
              <i class="iconfont icon-you"></i>
            </span>
        </div>
      </a>
    </div>
    <div class="profile_my_order border-1px">
      <!-- 服务中心 -->
      <div class="my_order">
          <span>
            <i class="iconfont icon-fuwu"></i>
          </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
              <i class="iconfont icon-you"></i>
            </span>
        </div>
      </div>
    </div>
    <section class="profile_my_order border-1px">
      <button type="danger" style="width: 100%" v-if="userinfo.username" @click="logout()">退出登录</button>
    </section>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import { MessageBox, Toast } from 'mint-ui'
  export default {
    data() {
      return {
        userinfo: {}
      }
    },
    mounted() {
      if (localStorage.userinfo) {
        this.userinfo = JSON.parse(localStorage.userinfo)
      }
    },
    methods: {
      logout() {
        var that = this
        MessageBox.confirm('确认退出吗?').then(
          action => {
            // 请求退出
            localStorage.removeItem("userinfo")
            Toast('退出成功')
            that.$router.go(0)
          },
          action => {
            console.log('取消登录')
          }
        )
      }
    },
    // computed: {
    //   userinfo: localStorage.userinfo
    // },
    components: {
      HeaderTop
    }
  }
</script>


<style>

  .profile {
    width: 100%;
    overflow: hidden;
  }

  .header_search > .iconfont {
    font-size: 22px;
    display: block;
    color: #fff
  }


  .profile-number {
    margin-top: 45.5px
  }

  .profile-link {
    position: relative;
    display: block;
    background: #02a774;
    padding: 20px 10px
  }

  .profile-link::after {
    content: '';
    display: block;
    clear: both;
  }

  .profile_image {
    float: left;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    vertical-align: top
  }

  .icon-wode-F {
    background: #e4e4e4;
    font-size: 62px !important;
  }

  .user-info {
    float: left;
    margin-top: 8px;
    margin-left: 15px
  }

  p {
    font-weight: 700;
    font-size: 18px;
    color: #fff
  }

  .user-info-top {
    padding-bottom: 8px
  }

  .user-icon {
    display: inline-block;
    margin-left: -15px;
    margin-right: 5px;
    width: 20px;
    height: 20px
  }

  .icon-phone {
    font-size: 30px;
    vertical-align: text-top
  }

  .icon-msnui-tel {
    font-size: 14px;
    color: #fff
  }

  .arrow {
    width: 12px;
    height: 12px;
    position: absolute;
    right: 15px;
    top: 40%;
  }

  .arrow > .icon-you {
    color: #fff;
    font-size: 5px
  }

  .profile_info_data {
    width: 100%;
    background: #fff;
    position: relative;
    border: none;
    overflow: hidden
  }

  .profile_info_data:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
    transform: scaleY(0.5)
  }


  .info_data_list::after {
    content: '';
    display: block;
    clear: both;
  }

  .info_data_link {
    float: left;
    width: 33%;
    text-align: center;
    border-right: 1px solid #f1f1f1;
  }


  .info_data_top {
    display: block;
    width: 100%;
    font-size: 14px;
    color: #333;
    padding: 15px 5px 10px
  }

  .info_data_top span {
    display: inline-block;
    font-size: 30px;
    color: #f90;
    font-weight: 700;
    line-height: 30px
  }

  .info_data_bottom {
    display: inline-block;
    font-size: 14px;
    color: #666;
    font-weight: 400;
    padding-bottom: 10px
  }

  .info_data_link:nth-of-type(2) {

  }

  .info_data_top span {
    color: #ff5f3e
  }

  .info_data_link:nth-of-type(3) {
    border: 0
  }

  .info_data_top span {
    color: #6ac20b
  }

  .profile_my_order {
    position: relative;
    margin-top: 10px;
    background: #fff
  }

  .profile_my_order::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
  }


  .my_order {
    display: flex;
    align-items: center;
    padding-left: 15px
  }

  .my_order > span {
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px
  }

  .my_order span > .iconfont {
    margin-left: -10px;
    font-size: 30px
  }

  .icon-dingdan {
    color: #02a774
  }

  .icon-jifen {
    color: #ff5f3e
  }

  .icon-huiyuan {
    color: #f90
  }

  .icon-fuwu {
    color: #02a774
  }

  .my_order_div {
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    padding: 18px 10px 18px 0;
    font-size: 16px;
    color: #333;
    display: flex;
    justify-content: space-between
  }

  .my_order_div span {
    display: block
  }

  .my_order_icon {
    width: 10px;
    height: 10px
  }

  .my_order_icon > .icon-you {
    color: #bbb;
    font-size: 10px
  }

</style>
