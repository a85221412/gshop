<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showfooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import {select_shopslist} from './api/api'

  export default {
    mounted() {
      // this.$store.dispatch('select_shopslist')
    },
    components: {
      FooterGuide
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
