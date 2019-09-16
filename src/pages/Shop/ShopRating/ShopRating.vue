<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">4.2</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家99%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <Star :score="4.1" :size="36"/>
            <span class="score">4.1</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <Star :score="4.1" :size="36"/>
            <span class="score">4.2</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">28分钟</span>
          </div>
        </div>
      </div>

      <div class="split"></div>

      <div class="ratingselect">
        <div class="rating-type border-1px">
          <span class="block positive">
            全部<span class="count">{{9527}}</span>
          </span>
          <span class="block positive">
            满意<span class="count">{{2687}}</span>
          </span>
          <span class="block negative">
            不满意<span class="count">{{6840}}</span>
          </span>
        </div>
      </div>
            <div class="rating-wrapper">
              <ul>
                <li class="rating-item" >
                  <div class="avatar">
                    <img width="28" height="28" src="./image/lubenwei.jpg">
                  </div>
                  <div class="content">
                    <h1 class="name">卢本伟</h1>
                    <div class="star-wrapper">
                      <Star :score="3" :size="24"/>
                      <span class="delivery">2019-8-15 21:25:51</span>
                    </div>
                    <p class="text" >如果我说它好吃，应该没人反驳</p>
                    <div class="recommend">
                      <span class="iconfont icon-like"></span>
                    </div>
                  </div>
                </li>
                <li class="rating-item" >
                  <div class="avatar">
                    <img width="28" height="28" src="./image/qiezi.jpg">
                  </div>
                  <div class="content">
                    <h1 class="name">茄子</h1>
                    <div class="star-wrapper">
                      <Star :score="3" :size="24"/>
                      <span class="delivery">2019-8-14 20:58:05</span>
                    </div>
                    <p class="text" >WDNMD,真好吃</p>
                    <div class="recommend">
                      <span class="iconfont icon-like"></span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
    </div>
  </div>
</template>

<script>
  import Star from '../../../components/star/star'
import BScroll from 'better-scroll'
  export default {
    mounted(){
      new BScroll('.ratings')
    },
    components: {
      Star
    }
  }
</script>

<style>
  .ratings {
    position: absolute;
    top: 173px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    background: #fff
  }

  .overview {
    display: flex;
    padding: 18px 0
  }


  .overview-left {
    flex: 0 0 137px;
    padding: 6px 0;
    width: 137px;
    border-right: 1px solid rgba(7, 17, 27, 0.1);
    text-align: center;

  }

  .overview-left>.score {
    margin-bottom: 6px;
    line-height: 28px;
    font-size: 24px;
    color: rgb(255, 153, 0)
  }

  .overview-left>.title {
    margin-bottom: 8px;
    line-height: 12px;
    font-size: 12px;
    color: rgb(7, 17, 27)
  }

  .rank {
    line-height: 10px;
    font-size: 10px;
    color: rgb(147, 153, 159)
  }

  .overview-right {
    flex: 1;
    padding: 6px 0 6px 24px
  }


  .score-wrapper {
    margin-bottom: 8px;
    font-size: 0
  }

  .score-wrapper>.title {
    display: inline-block;
    line-height: 18px;
    vertical-align: top;
    font-size: 12px;
    color: rgb(7, 17, 27)
  }

  .score-wrapper>.star {
    display: inline-block;
    margin: 0 12px;
    vertical-align: top
  }

  .score-wrapper>.score {
    display: inline-block;
    line-height: 18px;
    vertical-align: top;
    font-size: 12px;
    color: rgb(255, 153, 0)
  }

  .delivery-wrapper {
    font-size: 0
  }

  .delivery-wrapper>.title {
    line-height: 18px;
    font-size: 12px;
    color: rgb(7, 17, 27)
  }

  .delivery-wrapper>.delivery {
    margin-left: 12px;
    font-size: 12px;
    color: rgb(147, 153, 159)
  }

  .split {
    width: 100%;
    height: 16px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    background: #f3f5f7
  }

  .rating-type {
    padding: 18px 0;
    margin: 0 18px;

  }

  .block {
    display: inline-block;
    padding: 8px 12px;
    margin-right: 8px;
    line-height: 16px;
    border-radius: 1px;
    font-size: 12px;
    color: rgb(77, 85, 93);
    background: rgba(77, 85, 93, 0.2)
  }

  .block.active {
    background: #02a774;
    color: #fff
  }

  .block>.count {
    margin-left: 2px;
    font-size: 8px
  }

  .switch {
    padding: 12px 18px;
    line-height: 24px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    color: rgb(147, 153, 159);
    font-size: 0
  }

  .switch.on > .icon-checkcircle {
    color: #02a774
  }


  .icon-checkcircle {

    display: inline-block;
    vertical-align: top;
    margin-right: 4px;
    font-size: 24px
  }


  .rating-wrapper {
    padding: 0 18px
  }

  .rating-item {
    display: flex;
    padding: 18px 0;
    position: relative;
    border: none
  }

  .rating-item:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(7, 17, 27, 0.1);
    transform: scaleY(0.5)
  }

  .avatar {
    flex: 0 0 28px;
    width: 28px;
    margin-right: 12px
  }

  .avatar > img {
    border-radius: 50%
  }

  .content {
    position: relative;
    flex: 1
  }

  .name {
    margin-bottom: 4px;
    line-height: 12px;
    font-size: 10px;
    color: rgb(7, 17, 27);
    text-align: left;
  }

  .star-wrapper {
    display: flex;
    margin-bottom: 6px;
    font-size: 0;
    justify-content:space-between;
  }

  .star-wrapper>.star {
    display: inline-block;
    margin-right: 6px;
    vertical-align: top
  }

  .star-wrapper>.delivery {
    display: inline-block;
    vertical-align: top;
    height: 12px;
    line-height: 12px;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }

  .content>.text {
    margin-bottom: 8px;
    line-height: 18px;
    color: rgb(7, 17, 27);
    font-size: 12px;
    flex: 1;
    text-align: left;
  }

  .recommend {
    line-height: 16px;
    font-size: 0;
    flex: 1;
    text-align: left;
  }



  .icon-like {
    font-size: 16px !important;
    color: #F5A100
  }

  .item {
    padding: 0 6px;
    border: 1px solid rgba(7, 17, 27, 0.1);
    border-radius: 1px;
    color: rgb(147, 153, 159);
    background: #fff
  }

  .time {
    position: absolute;
    top: 0;
    right: 0;
    line-height: 12px;
    font-size: 10px;
    color: rgb(147, 153, 159)
  }

</style>
