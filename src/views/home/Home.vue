<template>
  <div class="chy-home-box">
    <van-search placeholder="请输入搜索关键词" v-model="value" shape="round" @click="$router.push('/search')" style="position: sticky;top: 0; width: 100%; z-index: 111"></van-search>
    <chy-swipe />
    <van-tabs color="#fff" @click="onClick" :ellipsis="true" :swipeable="true" :class="Scroll ? 'chy-scroll': 'chy-table'">
      <van-tab v-for="item in sort" :title="item.Name" :key="item.Id">
        <van-list
          v-model="loading"
          :offset="offset"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <chy-list :contentList="contentList" style=" padding: 0 15px;margin-top: 10px;"></chy-list>
        </van-list>
      </van-tab>
    </van-tabs>
    <van-tabbar v-model="active">
      <van-tabbar-item url="http://cloud.chehaiyang.com/Mobile/Near/NearByList/">
        <span>附近</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.nearby_a : icon.nearby"
        >
      </van-tabbar-item>
      <van-tabbar-item url="http://cloud.chehaiyang.com/minimall.html">
        <span>商城</span>
        <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.mall_a : icon.mall"
        >
      </van-tabbar-item>
      <van-tabbar-item icon="thumb-circle" style="color: #eb544b;">发现精彩</van-tabbar-item>
      <van-tabbar-item url="http://cloud.chehaiyang.com/Mobile/Services/Services/">
        <span>服务</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.service_a : icon.service"
        >
      </van-tabbar-item>
      <van-tabbar-item url="http://cloud.chehaiyang.com/Mobile/Me/UserCenter/">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.user_a : icon.user"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  /* eslint-disable no-console */
  import { ValidCategoryList, PublishedContentList } from '../../api/video';
  import { Tabs, Tab, List, Search, Tabbar, TabbarItem } from 'vant';
  const _ = require('lodash');
  import { ChySwipe, ChyList, openidMixin } from '../../components/index';
  export default {
    name: "Home",
    mixin: [openidMixin],
    components: {
      'van-tabs': Tabs,
      'van-tab': Tab,
      'van-list': List,
      'van-search': Search,
      'van-tabbar': Tabbar,
      'van-tabbar-item': TabbarItem,
      'chy-list': ChyList,
      'chy-swipe': ChySwipe,
    },
    data() {
      return {
        icon: {
          nearby: '',
          nearby_a: '',
          mall: '',
          mall_a: '',
          service: '',
          service_a: '',
          user: '',
          user_a: '',
        },
        active: 2,
        value: '',
        sort: [],              // tab列表内容
        contentList: [],        // 主体内容
        contentListAll: [],     // 缓存内容
        loading: false,
        finished: false,
        offset: 300,  //  加载触发距离
        pageIndex: 1,   // 分页数
        total: 1,       // 分页总数
        categoryId: '', // 当前选择tab id
        ajaxStatus: true,   // 请求状态
        isRecommend: 0,   // 请求状态
        Scroll: false
      }
    },
    created() {
      for(let i in this.icon){
        this.icon[i] = require(`../../assets/img/${i}.png`)
      }
      const getHomeTab = this.$store.getters.getHomeTab;
      // 是否存在缓存
      if(getHomeTab.length === 0) {
        this.ValidCategoryListAwait()
      } else {
        this.sort = getHomeTab;
        this.categoryId = getHomeTab[0].Id;
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll(){
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop > 270){
          this.Scroll = true;
        } else {
          this.Scroll = false;
        }
      },
      async ValidCategoryListAwait() { // 前端获取有效分类
        await ValidCategoryList().then(res => {
          if(res.Code !== 0) {
            this.$toast(res.Msg);
            return
          }
          this.sort = res.Data;
          this.sort.map(item => {
            item.isRecommend = 0;
          });
          this.sort.unshift({
            Name: "推荐",
            Id: 0,
            isRecommend: 1
          });
          this.$store.dispatch('HomeTab', { HomeTab: this.sort});
          this.contentListAll = this.sort;
          this.categoryId = this.sort[0].Id;
          this.isRecommend = this.sort[0].isRecommend;
        })
      },
      async PublishedContentListAwait() { // 列表页
        if(!this.ajaxStatus) {
          return;
        }
        const res = await PublishedContentList(this.categoryId, this.pageIndex, this.isRecommend);
        if(res.Code !== 0) {
          this.$toast(res.Msg);
          return []
        }
        // 判断是否还有分页数据
        if (this.pageIndex >= res.Data.total / 5) {
          this.finished = true;
        } else {
          this.finished = false;
        }
        this.ajaxStatus = true;
        this.pageIndex = this.pageIndex + 1;
        this.total = Math.ceil(res.Data.total / 5);
        // 处理只有一页bug
        if(this.total === 0) {
          this.total++;
        }
        return res.Data.data;
      },
      onClick(index, title) {
        this.title = title;
        this.loading = false;
        this.finished = false;
        this.contentListAll.forEach(item => {
          if(item.Name === title) {
            this.categoryId = item.Id;
            this.isRecommend = item.isRecommend;
            // 判断是否存在缓存
            if(item.hasOwnProperty("list")) {
              this.contentList = item.list
              this.pageIndex = item.pageIndex;
              this.total = item.total;
            } else {
              this.contentList = [];
              this.pageIndex = 1;
              this.onLoad();
              this.GetWriteLog({
                UserAction: 'Enter',
                ResourceType: 'List',
                Content: this.categoryId,
                Detail: title
              });
            }

          }
        });
      },
      onLoad() { // 下拉加载
        this.loading = false;
        if(this.pageIndex > this.total) {
          this.finished = true;
          return;
        }
        // 请求回调处理
        this.PublishedContentListAwait().then(res => {
          if(res === undefined) return;
          res.forEach(item => {
            this.contentList.push(item)
          });
          this.contentListAll.forEach(item => {
            if(item.Id === this.categoryId) {
              item.list = this.contentList;
              item.pageIndex = this.pageIndex;
              item.total = this.total;
            }
          })
          this.$store.dispatch('HomeData', { HomeData: this.contentListAll});
        });
        this.ajaxStatus = false;
      }
    }
  }
</script>

<style>
  .iframe  iframe{
    width: 100%;
    display: inherit;
    height: 200px;
  }
</style>
<style scoped>
  >>>.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
    border-width: 0;
  }
  .chy-scroll >>> .van-tabs__nav{
    background-color: #fff;
  }
  .chy-table >>>.van-tabs__nav{
    background-color: #f3f3f3;
  }
  .chy-scroll >>>.van-tabs__wrap{
    box-shadow: 0px 1px 4px #dadada!important;
  }
  >>>.van-icon-search{
    color: #a9a8ad;
  }
  >>>.van-tabs__wrap{
    top: 54px!important;
    box-shadow: 0px 0px 0px #f3f3f3!important;
  }
  ::-webkit-input-placeholder {
    color: #a9a8ad;
  }
  :-moz-placeholder {/* Firefox 18- */
    color: #a9a8ad;
  }
  ::-moz-placeholder{/* Firefox 19+ */
    color: #a9a8ad;
  }
  :-ms-input-placeholder {
    color: #a9a8ad;
  }
  >>>.van-tab--active .van-ellipsis{
    color: #fff;
    display: inline;
    border-radius: 3px;
    padding: 2px 10px;
    background-color: #eb544b;

  }
  >>>.van-tab{
    flex: 0 0 22%!important;
    color: #353535;
  }
  >>>.van-tab--active{
    flex-basis: 22%!important;
  }
  >>>.van-popup{
    z-index: 99999!important;
  }
  >>>.van-tabs--line{
    padding-top: 0;
  }
  >>>.van-tabs__wrap{
    box-shadow: 0px 1px 4px #dadada;
    position: sticky;
    top: 0;
    z-index: 111;
  }
  >>>.van-actionsheet{
    z-index: 3001!important;
  }
  >>>.van-actionsheet__name{
    font-size: 14px!important;
  }
  >>>.van-tabs__line{
    display: none;
  }
</style>
<style scoped lang="scss">

  .chy-anchor-add{
    background-color: rgba(0,153,255,0.8);
    position: fixed;
    bottom: 180px;
    right: 10px;
    color: #fff;
    padding: 4px 10px;
    display: flex;
    align-items: center;
    height: auto;
    font-size: 16px;
    z-index: 99966;
    img{
      position: absolute;
      right: -15px;
      bottom: -100px;
      width: 33%;
    }
  }
  .chy-anchor{
    width: 80%;
    text-align: center;
    padding-top: 10px;
    /*flex-direction: row-reverse;*/
    display: flex;
    flex-wrap: wrap;
    > div{
      width: 100%;
    }
    img{
      width: 90%;
    }
  }
  .chy-anchor-text{
    display: inline-block;
    height: 50px;
    line-height: 50px;
    color: red;
    font-size: 16px;
    text-align: center;
    width: 100%;
    background-color: #fff;
    margin-bottom: 5px;
  }
  .chy-bofang{
    position: relative;
    img{
      width: 100%;
      display: block;
    }
    .icon-bofang, .bofang{
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -30px;
      margin-left: -34px;
      color: #49515d;
      font-size: 40px;
      width: 68px;
      height: 68px;
    }
  }

  .chy-fixed{
    position: fixed;
    bottom: 40px;
    right: 10px;
    z-index: 3000;
    .iconfont{
      font-size: 40px;
      color: #09f;
    }
  }
  .chy-zbo{
    display: inline-block;
    height: 50px;
    line-height: 50px;
    color: red;
    font-size: 16px;
    text-align: center;
    width: 100%;
    img{
      width: 100%;
    }
  }

  .chy-home-box{
    background-color: #f3f3f3;
    .chy-home-banner{
      width: 100%;
      display: block;
    }
  }
</style>

