import { setStore } from '../../utils/loaction';

let search;
search = {
  state: {
    SearchHistory: []
  },
  mutations: {
    SEARCH_HISTORY: (state, SearchHistory) => {
      let etc = 0;
      state.SearchHistory.forEach(item => {
        if(item === SearchHistory) etc = 1;
      });
      if(etc) return;
      state.SearchHistory.push(SearchHistory);
      setStore('SearchHistory', JSON.stringify(state.SearchHistory));
    },
    DEL_SEARCH_HISTORY:(state) => {
      state.SearchHistory = [];
    }
  },
  actions: {
    SearchHistory: function ({commit}, {SearchHistory}) {
      commit('SEARCH_HISTORY', SearchHistory);
    },
    SetSearchHistory({commit}, {SearchHistory}) {
      let list = JSON.parse(SearchHistory);
      list.forEach(item => {
        commit('SEARCH_HISTORY', item);
      })
    },
    DelSearchHistory({commit}) {
      commit('DEL_SEARCH_HISTORY');
    }
  }
};
export default search;
