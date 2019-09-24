<template>
  <div class="chy-title" :style="{color: type ? '#acacaa' : '#a6a6a6'}">
    <div class="chy-UserName" :style="{color: type ? '#fff' : '#2d2c3c'}">{{content.Title}}</div>
    <van-row type="flex" class="chy-time" align="center">
      <van-col :style="{color: type ? '#b0b0b0' : '#a6a6a6'}">{{content.CreatedTime | time}}</van-col>
      <van-col class="chy-eye" :style="{color: type ? '#b0b0b0' : '#a6a6a6'}">
        <van-row type="flex" align="center">
          <van-col><van-icon name="eye" class="eye" /></van-col>
          <van-col class="chy-num">{{content.ReadCount}}</van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import { Row, Col, Icon } from 'vant';
  import { longTime } from '../utils/loaction';
  export default {
    name: "ChyArticleTitle",
    components: {
      'van-row': Row,
      'van-col': Col,
      'van-icon': Icon
    },
    props: {
      type: {
        type: Number,
        default: 1 // 1 视频，， 0， 图文
      },
      content: Object
    },
    beforeUpdate: function () {
      this.GetWriteLog({
        UserAction: 'View',
        ResourceType: this.$route.meta.type,
        Content: this.$route.query.Id,
        Detail: this.content.Title
      });
    },
    filters: {
      time(val){
        return longTime(val)
      }
    }
  }
</script>

<style scoped lang="scss">
  .chy-title{
    padding: 15px;
    .chy-UserName{
      color: #fff;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .chy-logo{
    .UserName{
      padding-left: 10px;
      font-size: 16px;
      color: #fff;
    }
  }
  .chy-time{
    font-size: 14px;
    padding-top: 15px;
    .chy-eye{
      padding-left: 20px;
      .eye{
        display: flex
      }
      .chy-num{
        padding-left: 5px;
      }
    }
  }
</style>
