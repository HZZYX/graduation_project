/* home模块的小仓库 */
import { reqindex_video, reqindex_floor } from "@/api";

const actions = {
  async HomeVideo({ commit }) {
    // await等待它响应的结果
    let result = await reqindex_video();
    if (result.code == 200) {
      commit("HOMEVIDEO", result.data);
    }
  },
  async HomeFloor({ commit }) {
    // await等待它响应的结果
    let result = await reqindex_floor();
    if (result.code == 200) {
      commit("HOMEFLOOR", result.data);
    }
  },
};

const mutations = {
  HOMEVIDEO(state, value) {
    state.VideoList = value;
  },
  HOMEFLOOR(state, value) {
    state.FloorList = value;
  },
};

const state = {
  VideoList: [],
  FloorList:[],
};

const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
