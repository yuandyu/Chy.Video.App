<template>
  <div class="chy-no-data">
    <img :src="img" alt="">
  </div>
</template>

<script>
    const img = 'https://chy-20180301-1253882812.cos.ap-guangzhou.myqcloud.com/Violation/assets/no_data.png'
    export default {
      name: "ChyNoData",
      data() {
        return {
          img: img
        }
      }
    }
</script>

<style scoped>
  .chy-no-data{
    text-align: center;
    margin-top: 50px;
  }
  img{
    width: 150px;
  }
</style>
