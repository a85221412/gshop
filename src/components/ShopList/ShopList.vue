<template>
  <div class="shop_container">
    <ul class="shop_list">
<!--      <li class="shop_li" v-for="(item,index) in shopslist" :key="index" @click="$router.push('/shop')">-->
<!--        <div class="shop_li_a">-->
<!--          <div class="shop_left">-->
<!--            <img class="shop_img" src="">-->
<!--          </div>-->
<!--          <div class="shop_right">-->
<!--            <div class="shop_detail_header">-->
<!--              <h4 class="shop_title ellipsis">{{item.shopName}}</h4>-->
<!--              <ul class="shop_detail_ul">-->
<!--                <li class="supports">-->
<!--                  保-->
<!--                </li>-->
<!--                <li class="supports">-->
<!--                  准-->
<!--                </li>-->
<!--                <li class="supports">-->
<!--                  票-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--            <div class="shop_rating_order">-->
<!--              <div class="shop_rating_order_left">-->
<!--                <Star :score="item.shopStar" :size="24"></Star>-->
<!--                <div class="rating_section">-->
<!--                  {{item.shopStar}}-->
<!--                </div>-->
<!--                <div class="order_section">-->
<!--                  月售{{item.shopMonthlysales}}单-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="shop_rating_order_right">-->
<!--                <span class="delivery_style delivery_right">美团专送</span>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="shop_distance">-->
<!--              <p class="shop_delivery_msg">-->
<!--                <span>¥{{item.shopSendingfee}}起送</span>-->
<!--                <span class="segmentation">/</span>-->
<!--                <span>配送费约¥{{item.shopDistributingfee}}</span>-->
<!--              </p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </li >-->
      <li class="shop_li" @click="$router.push('/shop')">
        <div class="shop_li_a">
          <div class="shop_left">
            <img class="shop_img" src="./image/MDN.jpg">
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              <h4 class="shop_title ellipsis">麦当劳</h4>
              <ul class="shop_detail_ul">
                <li class="supports">
                  保
                </li>
                <li class="supports">
                  准
                </li>
                <li class="supports">
                  票
                </li>
              </ul>
            </div>
            <div class="shop_rating_order">
              <div class="shop_rating_order_left">
                <Star :score="4.2" :size="24"></Star>
                <div class="rating_section">
                  4.2
                </div>
                <div class="order_section">
                  月售999单
                </div>
              </div>
              <div class="shop_rating_order_right">
                <span class="delivery_style delivery_right">美团专送</span>
              </div>
            </div>
            <div class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥9</span>
              </p>
            </div>
          </div>
        </div>
      </li >
      <li class="shop_li" @click="$router.push('/shop')">
        <div class="shop_li_a">
          <div class="shop_left">
            <img class="shop_img" src="./image/KFC.jpg">
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              <h4 class="shop_title ellipsis">肯德基</h4>
              <ul class="shop_detail_ul">
                <li class="supports">
                  保
                </li>
                <li class="supports">
                  准
                </li>
                <li class="supports">
                  票
                </li>
              </ul>
            </div>
            <div class="shop_rating_order">
              <div class="shop_rating_order_left">
                <Star :score="4.2" :size="24"></Star>
                <div class="rating_section">
                  4.2
                </div>
                <div class="order_section">
                  月售999单
                </div>
              </div>
              <div class="shop_rating_order_right">
                <span class="delivery_style delivery_right">美团专送</span>
              </div>
            </div>
            <div class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥9</span>
              </p>
            </div>
          </div>
        </div>
      </li >
      <li class="shop_li" @click="$router.push('/shop')">
        <div class="shop_li_a">
          <div class="shop_left">
            <img class="shop_img" src="./image/BSK.jpg">
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              <h4 class="shop_title ellipsis">必胜客</h4>
              <ul class="shop_detail_ul">
                <li class="supports">
                  保
                </li>
                <li class="supports">
                  准
                </li>
                <li class="supports">
                  票
                </li>
              </ul>
            </div>
            <div class="shop_rating_order">
              <div class="shop_rating_order_left">
                <Star :score="4.2" :size="24"></Star>
                <div class="rating_section">
                  4.2
                </div>
                <div class="order_section">
                  月售999单
                </div>
              </div>
              <div class="shop_rating_order_right">
                <span class="delivery_style delivery_right">美团专送</span>
              </div>
            </div>
            <div class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥9</span>
              </p>
            </div>
          </div>
        </div>
      </li >
      <li class="shop_li" @click="$router.push('/shop')">
        <div class="shop_li_a">
          <div class="shop_left">
            <img class="shop_img" src="./image/HBW.jpg">
          </div>
          <div class="shop_right">
            <div class="shop_detail_header">
              <h4 class="shop_title ellipsis">汉堡王</h4>
              <ul class="shop_detail_ul">
                <li class="supports">
                  保
                </li>
                <li class="supports">
                  准
                </li>
                <li class="supports">
                  票
                </li>
              </ul>
            </div>
            <div class="shop_rating_order">
              <div class="shop_rating_order_left">
                <Star :score="4.2" :size="24"></Star>
                <div class="rating_section">
                  4.2
                </div>
                <div class="order_section">
                  月售999单
                </div>
              </div>
              <div class="shop_rating_order_right">
                <span class="delivery_style delivery_right">美团专送</span>
              </div>
            </div>
            <div class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥9</span>
              </p>
            </div>
          </div>
        </div>
      </li >
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Star from '../star/star'

  export default {
    computed: {
      ...mapState(['shopslist'])
    },
    components: {
      Star
    }
  }
</script>

<style>
  .shop_container {
    margin-bottom: 50px
  }

  .shop_list {
    border-bottom: 1px solid #f1f1f1;
    width: 100%
  }

  .shop_li {

    border-bottom: 1px solid #f1f1f1;
    width: 100%;
  }

  .shop_li_a {
    display: block;
    box-sizing: border-box;
    padding: 15px 8px;
    width: 100%;
  }

  .shop_li_a::after {
    content: '';
    display: block;
    clear: both;
  }


  .shop_left {
    float: left;
    box-sizing: border-box;
    width: 23%;
    height: 75px;
    padding-right: 10px;
  }

  .shop_img {
    display: block;
    width: 100%;
    height: 100%
  }

  .shop_right {
    float: right;
    width: 77%
  }

  .shop_detail_header {
    width: 100%

  }

  .shop_detail_header::after {
    content: '';
    display: block;
    clear: both;
  }


  .shop_title {
    float: left;
    color: #333;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700
  }

  .shop_title::before {
    content: '品牌';
    display: inline-block;
    font-size: 11px;
    line-height: 11px;
    color: #333;
    background-color: #ffd930;
    padding: 2px 2px;
    border-radius: 2px;
    margin-right: 5px
  }

  .shop_detail_ul {
    float: right;
    margin-top: 3px
  }

  .supports {
    float: left;
    font-size: 10px;
    color: #999;
    border: 1px solid #f1f1f1;
    padding: 0px 2px;
    border-radius: 2px
  }

  .shop_rating_order {
    width: 100%;
    margin-top: 18px;
    margin-bottom: 8px;
  }

  .shop_rating_order::after {
    content: '';
    display: block;
    clear: both;
  }


  .shop_rating_order_left {
    float: left;
    color: #ff9a0d;
    padding-top: 5px;
  }

  .rating_section {
    float: left;
    font-size: 10px;
    color: #ff6000;
    margin-left: 4px
  }

  .order_section {
    float: left;
    font-size: 10px;
    color: #666;
    transform: scale(.8)
  }

  .shop_rating_order_right {
    float: right;
    font-size: 0
  }

  .delivery_style {
    transform-origin: 35px 0;
    transform: scale(.7);
    display: inline-block;
    font-size: 12px;
    padding: 1px;
    border-radius: 2px;
  }

  .delivery_left {
    color: #fff;
    margin-right: -10px;
    background-color: #02a774;
    border: 1px solid #02a774
  }

  .delivery_right {
    color: #02a774;
    border: 1px solid #02a774
  }

  .shop_distance {
    width: 100%;
    font-size: 12px;
  }

  .shop_distance::after {
    content: '';
    display: block;
    clear: both;
  }


  .shop_delivery_msg {
    float: left;
    transform-origin: 0;
    transform: scale(.9);
    color: #666
  }

  .segmentation {
    color: #ccc
  }


</style>
