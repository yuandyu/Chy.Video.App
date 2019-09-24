<template>
  <div></div>
</template>

<script>
  import { Base64 } from 'js-base64';
  import { setStore } from '../utils/loaction';
  import { CRMLoginByOpenId } from '../api/login';
  import { GetByOpenid } from '../api/video';
  export default {
    name: "openidMixin",
    created(){
      if(this.$route.query.hasOwnProperty('openid')) {
        CRMLoginByOpenId(this.$route.query.openid).then(function (res) {
          setStore('access_token', res.access_token);
          setStore('wxOpenid', this.$route.query.wxOpenid);
        });
        GetByOpenid(this.$route.query.openid).then(function (open) {
          let data = Base64.decode(open.Data);
          data = JSON.parse(data);
          setStore('InfoMemID', data.InfoMemID);
          setStore('Nickname', data.Nickname);
          setStore('Phone', data.Phone);
          setStore('Id', data.Id);
        });
      }
    }
  }
</script>

<style scoped>

</style>
