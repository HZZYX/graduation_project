import { details_commodity, details } from "@/api";

const actions = {
  async Commodity({ commit }) {
    // await等待它响应的结果
    let result = await details_commodity();
    if (result.code == 200) {
      commit("COMMODITY", result.data);
    }
  },
  async Details({ commit }) {
    // await等待它响应的结果
    let result = await details();
    if (result.code == 200) {
      commit("DETAILS", result.data);
    }
  },
};

const mutations = {
  COMMODITY(state, value) {
    state.CommodityList = value;
  },
  DETAILS(state, value) {
    state.Details = value;
  },
};

const state = {
  CommodityList: [],
  Details: {},
};

const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
