import { bewmusic } from "@/api";

const actions = {
  async Music({ commit }) {
    // await等待它响应的结果
    let result = await bewmusic();
    if (result.code == 200) {
      commit("MUSIC", result.data);
    }
  },
};

const mutations = {
  MUSIC(state, value) {
    state.Music = value;
  },
};

const state = {
  Music: {},
};

const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
