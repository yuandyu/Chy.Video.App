import Vue from 'vue';
import Vuex from 'vuex';
import toRouter from './modules/toRouter';
import search from './modules/search';
import basicSettings from './modules/basicSettings';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    toRouter,
    search,
    basicSettings
  },
  getters
});
export default store;
