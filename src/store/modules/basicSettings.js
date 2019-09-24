const basicSettings = {
  state: {
    icon: 0, // 底部tabbar 状态
    width: '' // 屏幕宽度
  },
  mutations: {
    ICON(state, icon) {
      state.icon = icon;
    },
    WIDTH(state, width) {
      state.width = width;
    }
  },
  actions: {
    Icon({ commit }, { icon }) {
      commit('ICON', icon);
    },
    Width({ commit }, { width }) {
      commit('WIDTH', width);
    },
  }
};

export default basicSettings;
