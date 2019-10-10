import Vue from 'vue';
import Router from 'vue-router';

const HomeIndex = resolve => require(['../views/home/HomeIndex'], resolve);
const Home = resolve => require(['../views/home/Home'], resolve);
const Index = resolve => require(['../views/home/index'], resolve);
const Video = resolve => require(['../views/home/video'], resolve);
const Article = resolve => require(['../views/home/article'], resolve);
const Search = resolve => require(['../views/home/search'], resolve);
Vue.use(Router);

export default new Router({
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '',
      component: HomeIndex,
      name: 'HomePageIndex',
      meta: {
        title: '主页'
      },
      children: [{
        path: '/',
        component: Home,
        name: 'Home',
        meta: {
          title: '主页',
          keepAlive: true,
          type: 'List'
        }
      },{
        path: '/index',
        component: Index,
        name: 'Index',
        meta: {
          title: '主页',
          type: 'List'
        }
      }, {
        path: '/video',
        component: Video,
        name: 'Video',
        meta: {
          title: '视频',
          type: 'Video'
        }
      }, {
        path: '/article',
        component: Article,
        name: 'Article',
        meta: {
          title: '文章',
          type: 'Article'
        }
      }, {
        path: '/search',
        component: Search,
        name: 'search',
        meta: {
          title: '搜索页面',
          type: 'List'
        }
      }]
    }],
});
