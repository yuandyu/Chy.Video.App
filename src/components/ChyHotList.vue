<template>
  <div>
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="getHost"
    >
      <div class="chy-hot-list">
        <van-row type="flex" class="chy-hot-box" justify="space-between" v-for="(hot, index) in list" :key="index" @click.native="goRouter(hot)">
          <van-col span="15" class="chy-hot-left">
            <div class="chy-hot-title">{{hot.Title}}</div>
            <van-row type="flex" justify="space-between" class="chy-hot-time">
              <van-col>
                <van-tag plain v-for="(tag, index) in hot.Taglist" :key="index" style="margin-right: 5px;">{{tag.Name}}</van-tag>
              </van-col>
              <van-col>{{hot.CreatedTime | time}}</van-col>
            </van-row>
          </van-col>
          <van-col span="8" offset="1">
            <van-image
              width="100%"
              height="100%"
              radius="6"
              fit="contain"
              :src="hot.CoverImgUrl"
            ><template v-slot:error>加载失败</template></van-image>
          </van-col>
        </van-row>
      </div>

    </van-list>
  </div>
</template>

<script>
  import { PublishedContentList } from '../api/video';
  import { List, Row, Col, Image, Tag } from 'vant';
  export default {
    name: "ChyHotList",
    components: {
      'van-list': List,
      'van-row': Row,
      'van-col': Col,
      'van-image': Image,
      'van-tag': Tag
    },
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        pageIndex: 1
      };
    },
    props: {
      search: String
    },
    created(){
      let search = this.search;
      this.$store.dispatch('SearchHistory', { SearchHistory: search });
    },
    beforeUpdate: function () {
      this.GetWriteLog({
        UserAction: 'Search',
        ResourceType: 'List',
        Content: this.search,
        Detail: ''
      });
    },
    methods: {
      async getHost(){
        await PublishedContentList(0, this.pageIndex, 0, this.search).then(res => {
          this.list.push(...res.Data.data);
          this.loading = false;
          if(this.pageIndex >= res.Data.total / 8){
            this.finished = true;
          }
          this.pageIndex ++;
        })
      },
      goRouter(list){
        if(list.Type === 2){
          this.$router.push({path: '/article', query: { Id: list.Id }});
        } else {
          this.$router.push({path: '/video', query: { Id: list.Id }});
        }
      },
    },
    filters: {
      time(value){
        const time = value.split('T')[0].split('-');
        return `${time[1]}-${time[2]}`;
      }
    }
  }
</script>

<style scoped lang="scss">
  .chy-hot-list{
    padding: 10px 15px;
    .chy-hot-box{
      padding-bottom: 20px;
      min-height: 80px;
    }
    .chy-hot-left{
      align-content: space-between;
      display: flex;
      flex-wrap: wrap;
    }
    .chy-hot-title{
      color: #2b2a2f;
      font-size: 16px;
      width: 100%;
    }
    .chy-hot-time{
      color: #b8b8b8;
      width: 100%;
    }
  }
</style>
