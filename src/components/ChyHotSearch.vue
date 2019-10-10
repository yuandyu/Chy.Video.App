<template>
  <div>
    <div class="chy-hot-box" v-show="newText.length !== 0">
      <van-row type="flex" align="center" justify="space-between">
        <van-col class="chy-hot-title">搜索历史</van-col>
        <van-col style="display: flex;" @click.native="deleteFn"><van-icon class="delete" name="delete" /></van-col>
      </van-row>
      <van-row type="flex" align="center">
        <van-col>
          <van-button round color="#f1f1f1" size="small" class="chy-hot-btn" v-for="(text, index) in newText" :key="index" @click="hotSearch(text)">{{text}}</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="chy-hot-box">
      <van-row type="flex" align="center">
        <van-col class="chy-hot-title">热门搜索</van-col>
        <van-col style="display: flex;"><van-icon class="fire" name="fire" /></van-col>
      </van-row>
      <van-row type="flex" align="center">
        <van-col>
          <van-button round color="#f1f1f1" size="small" class="chy-hot-btn" v-for="(text, index) in hotText" :key="index" @click="hotSearch(text)">{{text}}</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  import { Icon, Row, Col, Button } from 'vant';
  import { setStore } from '../utils/loaction';
  export default {
    name: "ChyHotSearch",
    components: {
      'van-icon': Icon,
      'van-row': Row,
      'van-col': Col,
      'van-button': Button
    },
    data(){
      return {
        hotText: ['车海洋', '洗车', '科技', '汽车', '美容', '保养', '政策', '用车百科'],
        newText: []
      }
    },
    created(){
      this.newText = this.$store.getters.getSearchHistory;
    },
    methods: {
      hotSearch(value){
        this.$emit('hotSearch', value);
      },
      deleteFn(){
        this.newText = [];
        setStore('SearchHistory', []);
        this.$store.dispatch("DelSearchHistory");
      }
    }
  }
</script>
<style scoped lang="scss">

  :not(.chy-hot-btn){
    color: #323232;
  }
  .chy-hot-btn{
    margin-right: 5px;
    margin-top: 10px;
  }
  .chy-hot-box{
    padding: 10px 20px;
    .chy-hot-title{
      color: #6b6b76;
      font-size: 14px;
    }
    .fire{
      color: #ff5656;
      font-size: 16px;
      margin-left: 10px;
    }
    .delete{
      color: #979797;
      font-size: 16px;
      margin-left: 10px;
    }
  }

</style>
