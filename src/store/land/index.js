import { land } from "@/api";

const actions = {
  async Land({ commit }) {
    // await等待它响应的结果
    let result = await land();
    if (result.code == 200) {
      commit("LAND", result.data);
    }
  },
};

const mutations = {
  LAND(state, value) {
    state.LandList = value;
  },
};

const state = {
  LandList: {},
};

const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
