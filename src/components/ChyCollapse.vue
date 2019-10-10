<template>
  <div>
    <van-collapse v-model="collapse.activeName" accordion v-for="(data, index) in sort" :key="index">
      <van-collapse-item :title="data.Name" :name="data.Id" v-if="data.Items.length !== 0">
        <chy-collapse :sort="data.Items" style="padding-left: 15px;" @collapseFn="collapseFn" />
      </van-collapse-item>
      <van-cell style="" :title="data.Name" @click="collapseData(data)" v-else />
    </van-collapse>
  </div>
</template>

<script>
  import ChyCollapse from './ChyCollapse';
  import { Collapse, CollapseItem, Cell } from 'vant';
  export default {
    name: "ChyCollapse",
    data() {
      return {
        collapse: {
          activeNames: '1'
        },
        structure: ''
      }
    },
    props: {
      sort: Array
    },
    components: {
      'van-collapse': Collapse,
      'van-collapse-item': CollapseItem,
      'van-cell': Cell,
      ChyCollapse
    },
    methods: {
      collapseFn: function (item) {
        this.$emit('collapseFn', item);
      },
      collapseData: function (item) {
        this.collapseFn(item);
      }
    }
  }
</script>

<style scoped>
  >>>.van-cell{
    padding-right: 0;
  }
  >>>.van-collapse-item__content{
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
</style>
