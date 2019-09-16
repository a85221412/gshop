<template>
  <div class="star " :class="'star-'+size">
    <span class="star-item" v-for="(item,index) in stararry" :key="index" :class="item"></span>
  </div>
</template>

<script>
  export default {
    props: {
      score: Number,
      size: Number,
    },
    computed:{
      stararry(){
        const score = this.score
        let stararry =[]
        const scoreInt = Math.floor(score)
        for(let i = 0;i<scoreInt;i++){
          stararry.push('on')
        }
        if (score*10-scoreInt*10>=5){
          stararry.push('half')
        }
        for (let i = 0;i<(5-stararry.length);i++){
          stararry.push('off')
        }
        return stararry
      }
    }
  }
</script>

<style>
  /*2x图 3x图*/
  .star {
    float: left;
    font-size: 0
  }

  .star-item {
    display: inline-block;
    background-repeat: no-repeat
  }

  .star.star-36 > .star-item {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    background-size: 15px 15px
  }

  .star.star-36 > .star-item:last-child {
    margin-right: 0
  }

  @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){
    .star.star-36 > .star-item.on {
      background-image: url("./images/star36_on@2x.png");
    }
  }
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
    .star.star-36 > .star-item.on {
      background-image: url("./images/star36_on@3x.png");
    }
  }
  @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){
    .star.star-36 > .star-item.half {
      background-image: url("./images/star36_half@2x.png");
    }
  }
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
    .star.star-36 > .star-item.half {
      background-image: url("./images/star36_half@3x.png");
    }
  }
  @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){
    .star.star-36 > .star-item.off {
      background-image: url("./images/star36_off@2x.png");
    }
  }
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
    .star.star-36 > .star-item.off {
      background-image: url("./images/star36_off@3x.png");
    }
  }



  .star.star-24 > .star-item {
    width: 10px;
    height: 10px;
    margin-right: 3px;
    background-size: 10px 10px
  }


  .star.star-24 > .star-item:last-child {
    margin-right: 0
  }

  @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){
    .star.star-24 > .star-item.on {
      background-image: url("./images/star24_on@2x.png");
    }
  }
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
    .star.star-24 > .star-item.on {
      background-image: url("./images/star24_on@3x.png");
    }
  }
  @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){
    .star.star-24 > .star-item.half {
      background-image: url("./images/star24_half@2x.png");
    }
  }
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
    .star.star-24 > .star-item.half {
      background-image: url("./images/star24_half@3x.png");
    }
  }
  @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){
    .star.star-24 > .star-item.off {
      background-image: url("./images/star24_off@2x.png");
    }
  }
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
    .star.star-24 > .star-item.off {
      background-image: url("./images/star24_off@3x.png");
    }
  }

</style>
