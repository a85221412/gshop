<template>
  <div class="cartControl">
    <transition name="move">
      <div class="iconfont icon-jian" v-if="food.count" @click="updatacount(false)"></div>
    </transition>
    <div class="cartControl-count" v-show="food.count">{{food.count}}</div>
    <div class="iconfont icon-jia" @click="updatacount(true)"></div>
  </div>
</template>

<script>
  export default {
    props: {
      food: Object,
    },
    methods: {
      updatacount(isadd) {
        if (isadd) {
          this.$store.dispatch('increase',this.food)
        } else {
          this.$store.dispatch('decrease',this.food)
        }
      }
    }
  }
</script>

<style>
  .cartControl {
    display: flex;
  }

  .cartControl-count {
    display: flex;
    align-items: center;
  }


  .move-enter-active, .move-leave-active {
    transition: all .3s
  }

  .move-enter, .move-leave-to {
    opacity: 0;
    transform: translateX(15px) rotate(180deg)
  }
</style>
