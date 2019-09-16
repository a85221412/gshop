<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <!-- 菜单对应的是食物分类列表-->
        <ul>
          <!--current-->
          <li class="menu-item" v-for="(item, index) in goods" :class="{current: index===currentIndex}"
              @click="clickMenu(index)" :key="index">
            <span class="text">
              {{item.type}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <!-- 右侧的食物列表是根据左侧的分类列表展现的-->
        <!-- 所以右侧是在一个分类标题列表里面嵌套着各类食物列表-->
        <ul ref="foodsUl">
          <li class="food-list-hook" v-for="(item, index) in goods" :key="index">
            <h1 class="title">{{item.type}}</h1>
            <ul>
              <li class="food-item " v-for="(food, index) in item.good"
                  :key="index">
                <div class="icon">
                  <img width="57" height="57" :src="food.image">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <div class="extra">
                    <span class="count">月售{{food.monthlysales}}份</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food" :type="item.type"/>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ShopCart/>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import CartControl from '../../../components/CartControl/CartControl'
  import ShopCart from '../../../components/ShopCart/ShopCart'

  export default {
    data() {
      return {
        goods: [],
        scrollY: 0,  //右侧 Y 轴滑动的坐标(越往下数值越小)
        tops: [],   //包含右侧所有分类小列表的 top 值
      }
    },
    mounted() {
      this.goods = this.$store.state.goods

      this.$nextTick(() => {
        // 列表数据更新显示后执行

        //初始化scroll
        this.cScroll = new BScroll('.foods-wrapper', {
          probeType: 2, // 因为惯性滑动不会触发
          click: true
        })
        //监听scroll的x,y坐标
        this.cScroll.on('scroll', ({x, y}) => {
          this.scrollY = Math.abs(y)
        })

        this.cScroll.on('scrollEnd', ({x, y}) => {
          this.scrollY = Math.abs(y)
        })

        //收集每一个类别的top的y轴坐标
        var tops = [0]
        let top = 0
        const lis = this.$refs.foodsUl.children
        Array.prototype.slice.call(lis).forEach((item) => {
          top += item.clientHeight
          tops.push(top)
        })
        this.tops = tops

      })

    },
    computed: {
      currentIndex() {
        const {scrollY, tops} = this

        const index = tops.findIndex(function (item, index) {
          return scrollY >= item && tops[index + 1] > scrollY
        })

        return index
      },
    },
    methods: {
      clickMenu(index) {
        var y = -this.tops[index]
        this.cScroll.scrollTo(0, y, 1000)
      },
    },
    components: {
      CartControl,
      ShopCart
    }
  }
</script>

<style>
  .goods {
    display: flex;
    position: absolute;
    top: 175px;
    bottom: 46px;
    width: 100%;
    background: #fff;
    overflow: hidden
  }

  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7
  }

  .menu-item {
    display: table;
    height: 54px;
    width: 56px;
    padding: 0 12px;
    line-height: 14px
  }

  .menu-item.current {
    position: relative;
    z-index: 10;
    margin-top: -1px;
    background: #fff;
    color: #02a774;
    font-weight: 700;
  }


  .icon {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 2px;
    background-size: 12px 12px;
    background-repeat: no-repeat
  }

  .menu-item>.text {
    display: table-cell;
    width: 56px;
    vertical-align: middle;
    font-size: 12px;
    position: relative;
    border: none

  }

  .menu-item>.text::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(7, 17, 27, 0.1);
    transform: scaleY(0.5)
  }


  .foods-wrapper {
    flex: 1
  }

  .food-list-hook>.title {
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147, 153, 159);
    background: #f3f5f7
  }

  .food-item {
    display: flex;
    margin: 18px;
    padding-bottom: 18px;
    position: relative;
    border: none
  }

  .food-item:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(7, 17, 27, 0.1);
    transform: scaleY(0.5)
  }


  .food-item:last-child {
    margin-bottom: 0
  }

  .food-item > .icon {
    flex: 0 0 57px;
    margin-right: 10px;
  }

  . content {
    flex: 1
  }

  .name {
    margin: 2px 0 8px 0;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    color: rgb(7, 17, 27)
  }
  .extra{
    text-align: left;
  }
  .extra > .count {
    margin-right: 12px;
    text-align: left;
  }


  .price {
    font-weight: 700;
    line-height: 24px;
    text-align: left;
  }

  .price > .now {
    margin-right: 8px;
    font-size: 14px;
    color: rgb(240, 20, 20)
  }


  .cartcontrol-wrapper {
    position: absolute;
    right: 0;
    bottom: 12px
  }

</style>
