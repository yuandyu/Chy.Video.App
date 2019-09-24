<template>
  <div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive && wxOpenid !== ''">
        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
      </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
      <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
    </router-view>
  </div>
</template>

<script>
  import { getStore } from '../../utils/loaction'
  export default {
    name: 'index',
    data() {
      return{
        wxOpenid: ''
      }
    },
    created() {
      this.wxOpenid = getStore('wxOpenid')
    }
  };
</script>

<style scoped>

</style>
