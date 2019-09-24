/* eslint-disable no-console */
const toRouter = {
  state: {
    ToRouter: [],
    HomeData: [],
    HomeTab: []
  },
  mutations: {
    TO_ROUTER: (state, ToRouter) => {
      state.ToRouter = ToRouter;
    },
    HOME_DATA: (state, HomeData) => {
      state.HomeData = HomeData;
    },
    HOME_TAB: (state, HomeTab) => {
      state.HomeTab = HomeTab;
    }
  },
  actions: {
    ToRouter({ commit }, { ToRouter }) {
      commit('TO_ROUTER', ToRouter);
    },
    HomeData({ commit }, { HomeData }) {
      commit('HOME_DATA', HomeData);
    },
    HomeTab({ commit }, { HomeTab }) {
      commit('HOME_TAB', HomeTab);
    }
  }
};
export default toRouter;
