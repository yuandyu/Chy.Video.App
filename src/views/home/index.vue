<template>
  <div align="center" style="margin-top: 150px; width: 100%;">
    <van-loading type="spinner" color="#333" />
    <div style="margin-top: 10px;">加载中</div>
  </div>
</template>

<script>
  /* eslint-disable no-console */
  import { Loading } from 'vant';
  import { CRMLoginByOpenId } from '../../api/login';
  import { GetByOpenid } from '../../api/video';
  import { setStore, getStore } from '../../utils/loaction'
  import { Base64 } from 'js-base64';
  export default {
    name: "index",
    components: {
      'van-loading': Loading
    },
    created() {
      this.CRMLoginByOpenIdAs();
    },
    methods: {
      async CRMLoginByOpenIdAs() {
        let wxOpenid = getStore('wxOpenid');
        await CRMLoginByOpenId(wxOpenid).then(res => {
          setStore('access_token', res.Data);
          this.ifVisitor();
          this.toRouter();
        });
      },
      async GetByOpenidAs() {
        await GetByOpenid(getStore('wxOpenid')).then(open => {
          let data = Base64.decode(open.Data);
          data = JSON.parse(data);
          let Store = {
            'InfoMemID': data.InfoMemID,
            'HeadImage': data.HeadImage,
            'Nickname': data.Nickname,
            'Phone': data.Phone,
            'Id': data.Id
          };
          for(let i in Store){
            setStore(i, Store[i]);
          }
          this.toRouter();
        });
      },
      toRouter() {
        if(this.$store.getters.getToRouter.length === 0){
          this.$router.push({ name: 'Home' })
        } else {
          this.$router.push({ name: this.$store.getters.getToRouter })
        }
      },
      ifVisitor() {
        if(getStore('wxOpenid') !== 'visitor'){
          this.GetByOpenidAs();
        }
      }
    }
  }
</script>

<style scoped>

</style>
