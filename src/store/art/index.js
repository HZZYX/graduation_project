import { art_img } from "@/api";

const actions = {
  async ArtImg({ commit }) {
    // await等待它响应的结果
    let result = await art_img();
    if (result.code == 200) {
      commit("ARTIMG", result.data);
    }
  }
};

const mutations = {
    ARTIMG(state, value) {
    state.ImgList = value;
  }
};

const state = {
  ImgList: {},
};

const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
