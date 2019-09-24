<template>
  <div style="background-color: #fff;" :style="{height: outerHeight + 'px'}">
    <van-search
      :autofocus="true"
      placeholder="请输入搜索关键词"
      v-model="search"
      show-action
      @search="onSearch"
      @cancel="$router.push('/')"
      shape="round"
      @clear="show = true"
      @click="$router.push('/search')"></van-search>
    <chy-hot-search @hotSearch="hotSearch" v-if="show" />
    <chy-hot-list ref="hotList" :search="search" v-else />

  </div>
</template>

<script>
  const outerHeight = window.outerHeight;
  import { ChyHotSearch, ChyHotList } from '../../components/index';
  import { Search } from 'vant';
  export default {
    name: "search",
    components: {
      'chy-hot-list': ChyHotList,
      'van-search': Search,
      'chy-hot-search': ChyHotSearch
    },
    data(){
      return{
        search: '',
        outerHeight: outerHeight,
        show: true
      }
    },
    methods: {
      onSearch(){
        this.show = false;
      },
      hotSearch(search){
        this.search = search;
        this.show = false;
      }
    },
    watch: {
      search(newValue){
        if(newValue === ''){
          this.show = true;
        }
      }
    }
  }
</script>
