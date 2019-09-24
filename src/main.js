/* eslint-disable no-console,no-extra-semi */
import Vue from 'vue';
import App from './App.vue';
import { Toast, Lazyload } from 'vant';
import router from './router/index';
import '@babel/polyfill';
import './utils/flexible';
import { setStore, getStore } from './utils/loaction';
import ChyNoData from './components/ChyNoData';
import store from './store/index'
import MtaH5 from 'mta-h5-analysis';
require('../src/api/login');
require('./assets/font/iconfont.css');
import { writeLog } from './utils/mixin';

// import VConsole from 'vconsole';
// new VConsole();

Vue.config.productionTip = false;

Vue.use(Toast);
Vue.use(Lazyload);
Vue.component('chy-no-data', ChyNoData);

// 屏幕超高750时，限制屏幕宽度
let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlhight = document.documentElement.clientHeight || document.body.clientHeight;
let htmlBody = document.getElementsByTagName('body')[0];
if(htmlwidth > 750) {
  htmlwidth = 750;
}

store.state.basicSettings.width = htmlwidth;
htmlBody.style.width = htmlwidth + 'px';
htmlBody.style.height = htmlhight + 'px';
htmlBody.style.margin = '0 auto';
// 处理微信ios  input不能原虚拟键盘位点击事件无效
;(/iphone|ipod|ipad/i.test(navigator.appVersion)) && document.addEventListener('blur', (e) => {
  // 这里加了个类型判断，因为a等元素也会触发blur事件
  ['input', 'textarea'].includes(e.target.localName) && document.body.scrollIntoView(false)
}, true);

// 腾讯访问统计
MtaH5.init({
  "sid":'500672734', //必填，统计用的appid
  "cid":'500687759',
  "name":'MTAH5'
});

if(getStore('SearchHistory') !== null){
  let SearchHistory = getStore('SearchHistory');
  store.dispatch('SetSearchHistory', { SearchHistory: SearchHistory });
}

router.beforeEach((route, redirect, next) => {
  MtaH5.pgv();
  if(route.query.hasOwnProperty('openId')) {
    setStore('wxOpenid', route.query.openId);
    store.dispatch('ToRouter', { ToRouter: route.name});
    next({ path: '/index' });
  } else if(getStore('wxOpenid') === null) {
    setStore('wxOpenid', 'visitor');
    next({ path: '/index' });
  }
  next();
});

Vue.mixin(writeLog);
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
