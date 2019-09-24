<template>
  <div class="chy-swipe">
    <van-swipe :autoplay="3000" class="chy-swipe-swipe" style="" indicator-color="#eb544b">
      <van-swipe-item v-for="(image, index) in images" :key="index" @click="goUrl(image.LinkUrl)">
        <div class="chy-swipe-title">{{image.Title}}</div>
        <img v-lazy="image.ImageUrl" class="chy-swipe-img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'vant';
  import { GetAllAdList } from '../api/video';
  export default {
    name: "ChySwipe",
    components: {
      'van-swipe': Swipe,
      'van-swipe-item': SwipeItem,
    },
    data(){
      return {
        images: []
      }
    },
    created(){
      this.getGetAllAdList();
    },
    methods: {
      async getGetAllAdList(){
        await GetAllAdList().then(result => {
          this.images = result.Data;
        })
      },
      goUrl(url){
        window.location.href = url;
      }
    }
  }
</script>

<style scoped lang="scss">
  .chy-swipe{
    padding: 10px 15px;

    .chy-swipe-title{
      font-weight: bold;
      color: #212121;
      font-size: 16px;
      text-align: center;
      padding: 20px 0;
      background: #fff;
    }
    .chy-swipe-swipe{
      height: 260px;
      background: #fff;
      .chy-swipe-img{
        border-radius: 6px;
        width: 100%;
        height: 200px;
        object-fit: fill;
      }
    }

  }

</style>
