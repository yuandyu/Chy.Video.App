<template>
  <div>
    <div class="chy-share" @click="show = true">
      <van-icon name="share" class="chy-share-icon" />
    </div>
    <van-popup v-model="show" @click="show = false">
      <van-image
          width="10rem"
          height="10rem"
          fit="contain"
          :src="shareguide"
      />
    </van-popup>
  </div>
</template>

<script>
  import { Popup, Icon, Image } from 'vant';
  const shareguide = require('../assets/img/shareguide.png');
  export default {
    name: "ChyShare",
    data() {
      return {
        show: false,
        shareguide: shareguide
      }
    },
    props: {
      wxInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    components: {
      'van-popup': Popup,
      'van-icon': Icon,
      'van-image': Image
    }
  }
</script>
<style scoped>
  >>>.van-popup{
    height: 100%;
    background-color: rgba(0,0,0,0.6);
  }
</style>
<style scoped lang="scss">
  .chy-share-box{
    .chy-share-center{
      padding: 20px 0;
      text-align: center;
      width: 100%;
    }
    .chy-share-center:nth-child(1){
      border-right: 1px solid #dadada;
    }
    .chy-share-text{
      color: #8c8c8c;
      padding-top: 10px;
    }
  }
  .chy-popup{
    display: flex;
    div{
      padding: 10px;
      text-align: center;
    }
  }
  .icon {
    width: 2.5em;
    height: 2.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .chy-share{
    color: #fafaf8;
    text-align: center;
    background-color: #e55749;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 100px;
    right: 20px;
    z-index: 999;
    .chy-share-icon{
      font-size: 26px;
    }
  }

</style>
