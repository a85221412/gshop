<template>
  <div class="shop-info">
    <div class="info-content">
      <div class="section">
        <h3 class="section-title">配送信息</h3>
        <div class="delivery">
          <div>
            <span class="delivery-icon">美团配送</span>
            <span>由商家配送提供配送，约28分钟送达，距离1000米</span>
          </div>
          <div class="delivery-money">配送费￥4</div>
        </div>
      </div>

      <div class="split"></div>

      <div class="section">
        <h3 class="section-title">活动与服务</h3>
        <div class="activity">
          <div class="activity-item">
            <span class="content-tag">
              <span class="mini-tag">首单</span>
            </span>
            <span class="activity-content">【买一送一】麦辣鸡腿堡</span>
          </div>
          <div class="activity-item">
            <span class="content-tag">
              <span class="mini-tag">特价</span>
            </span>
            <span class="activity-content">【立减5元】板烧鸡腿堡</span>
          </div>
          <div class="activity-item">
            <span class="content-tag">
              <span class="mini-tag">特价</span>
            </span>
            <span class="activity-content">【立减5元】巨无霸汉堡</span>
          </div>
        </div>
      </div>

      <div class="split"></div>

      <div class="section">
        <h3 class="section-title">商家实景</h3>
        <div class="pic-wrapper">
          <ul class="pic-list" ref="picsUl">
            <li class="pic-item">
              <img width="120" height="90" src="./image/1.jpg"/>
            </li>
            <li class="pic-item">
              <img width="120" height="90" src="./image/2.jpg"/>
            </li>
            <li class="pic-item">
              <img width="120" height="90" src="./image/3.jpg"/>
            </li>
            <li class="pic-item">
              <img width="120" height="90" src="./image/4.jpg"/>
            </li>
          </ul>
        </div>
      </div>

      <div class="split"></div>

      <div class="section">
        <h3 class="section-title">商家信息</h3>
        <ul class="detail">
          <li><span class="bold">品类</span> <span>炸鸡汉堡</span></li>
          <li><span class="bold">商家电话</span> <span>4008517517</span></li>
          <li><span class="bold">地址</span> <span>广州江南西路46号江南新地商业街B1层A区11b-13b号</span></li>
          <li><span class="bold">营业时间</span> <span>0:00-24:00</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import Bscroll from 'better-scroll'

  export default {
    mounted() {
      new Bscroll('.shop-info')
      new Bscroll('.pic-wrapper', {
        scrollX: true
      })
    }
  }
</script>

<style>
  .shop-info {
    position: absolute;
    top: 173px;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    overflow: hidden
  }

  .section {
    padding: 16px 14px 14px;
    font-size: 16px;
    background-color: #fff;
    color: #666;
    border-bottom: 1px solid #eee;
    position: relative
  }


  .section-title {
    color: #000;
    font-weight: 700;
    line-height: 16px
  }

  .section-title > .iconfont {
    float: right;
    color: #ccc
  }

  .delivery {
    margin-top: 16px;
    font-size: 13px;
    line-height: 18px
  }

  .delivery-icon {
    width: 55px;
    font-size: 11px;
    margin-right: 10px;
    display: inline-block;
    text-align: center;
    color: #fff;
    background-color: #0097ff;
    padding: 1px 0;
    border-radius: 4px
  }

  .delivery-money {
    margin-top: 5px
  }

  .activity {
    margin-top: 16px
  }

  .activity-item {
    margin-bottom: 12px;
    display: flex;
    font-size: 13px;
    align-items: center
  }

  .content-tag {
    display: inline-block;
    border-radius: 2px;
    width: 36px;
    height: 18px;
    margin-right: 10px;
    color: #fff;
    font-style: normal;
    position: relative
  }

  .mini-tag {
    position: absolute;
    left: 0;
    top: 0;
    right: -100%;
    bottom: -100%;
    font-size: 24px;
    transform: scale(.5);
    transform-origin: 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pic-wrapper {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 16px
  }

  .pic-list {
    font-size: 0;
    width: 498px;
  }

  .pic-item {
    display: inline-block;
    margin-right: 6px;
    width: 120px;
    height: 90px
  }

  .pic-item:last-child {
    margin: 0
  }

  .detail {
    margin-bottom: -16px
  }

  .detail > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: -10px;
    padding: 16px 12px 16px 0;
    line-height: 16px;
    /*bottom-border-1px(#ddd)*/
    font-size: 13px
  }

  .detail > li > .bold {
    font-weight: 700;
    color: #333
  }

  .split {
    width: 100%;
    height: 16px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    background: #f3f5f7
  }

</style>
