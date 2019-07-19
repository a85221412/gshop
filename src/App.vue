<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showfooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import {reqallclient} from "./api/index";
  import {selectall} from './api/api'

  export default {
    async mounted() {

      await selectall().then((result) => {
        console.log(result)
      }).catch((error) => {
        console.log(error)
      })

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
