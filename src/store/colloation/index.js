import { colloation_commodity,colloation } from "@/api";

const actions = {
  async Commodity({ commit }) {
    // await等待它响应的结果
    let result = await colloation_commodity();
    if (result.code == 200) {
      commit("COMMODITY", result.data);
    }
  },
  async Colloation({ commit }) {
    // await等待它响应的结果
    let result = await colloation();
    if (result.code == 200) {
      commit("COLLOATION", result.data);
    }
  },
};

const mutations = {
  COMMODITY(state, value) {
    state.CommodityList = value;
  },
  COLLOATION(state, value) {
    state.Colloation = value;
  },
};

const state = {
  CommodityList: [],
  Colloation:{},
};

const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
