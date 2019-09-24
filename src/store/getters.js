const getters = {
  getToRouter: state => state.toRouter.ToRouter,
  getHomeTab: state => state.toRouter.HomeTab,
  getHomeData: state => state.toRouter.HomeData,
  // getSearchHistory: state => state.search.SearchHistory,
  getSearchHistory: (state => {
    return state.search.SearchHistory
  }),
  getIcon: state => state.basicSettings.icon,
  getWidth: state => state.basicSettings.width,
};
export default getters;
