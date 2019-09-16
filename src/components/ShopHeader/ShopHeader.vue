<template>
  <div class="shop-header">
    <nav class="shop-nav">
      <a class="back" @click="$router.back()">
        <i class="iconfont icon-zuo"></i>
      </a>
    </nav>
    <div class="shop-content">
      <img class="content-image" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1014591379,1725671755&fm=26&gp=0.jpg">
      <div class="header-content">
        <h2 class="content-title">
          <span class="content-tag">
            <span class="mini-tag">品牌</span>
          </span>
          <span class="content-name">麦当劳</span>
        </h2>
        <div class="shop-message">
          <span class="shop-message-detail">4.2</span>
          <span class="shop-message-detail">月售999单</span>
          <span class="shop-message-detail">
            美团专送
            <span>约30分钟</span>
          </span>
          <span class="shop-message-detail">距离1000米</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {}
</script>

<style>
  .shop-header {
    height: 100%;
    position: relative;
    background: #fff;
    color: #fff;
    overflow: hidden;
  }

  .shop-nav {
    background-size: cover;
    background-repeat: no-repeat;
    height: 40px;
    padding: 5px 10px;
    position: relative;
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567763550243&di=fbbe10479787616e5777b15dba91f868&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F0f8fc717586cd30c8bf27e72a1659d6c5ab91ab548ac3-JO1ia5_fw658");
  }

  .back {
    position: absolute;
    top: 10px;
    left: 10px;

  }

  .icon-zuo {
    display: block;
    padding: 5px;
    font-size: 20px;
    color:#fff
  }

  .shop-content {
    padding: 30px 20px 5px 20px;
    position: relative;
    display: flex;
    background: #fff;
    text-align: center;
  }

  .content-image {
    box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 50%;
    width: 66px;
    height: 66px;
    border-radius: 2px;
    margin-left: -33px;
    margin-top: -40px;
  }

  .header-content {
    flex: 1;
    width: 72%;
  }

  .content-title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    white-space: nowrap;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
  }

  .content-tag {
    border-radius: 2px;
    background-image: linear-gradient(90deg, #fff100, #ffe339);
    width: 36px;
    height: 18px;
    margin-right: 10px;
    color: #6a3709;
    font-style: normal;
    font-weight: 700;
    position: relative;
  }

  .mini-tag {
    position: absolute;
    left: 0;
    top: 0;
    right: -100%;
    bottom: -100%;
    font-size: 24px;
    font-weight: 600;
    transform: scale(0.5);
    transform-origin: 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .content-name {
    font-size: 15px;
    font-weight: 900;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .shop-message {
    white-space: nowrap;
    height: 12px;
    margin-top: 8px;
    font-size: 11px;
    color: #333;
  }

  .shop-message-detail:not(:last-child)::after {
    content: ' \B7 ';
    opacity: 0.2;
  }


</style>
