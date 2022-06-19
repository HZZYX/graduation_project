/* lady模块的小仓库 */
import { lady_commodity, lady_carousel, lady_title } from "@/api";

const actions = {
  async LadyCommodity({ commit }) {
    // await等待它响应的结果
    let result = await lady_commodity();
    if (result.code == 200) {
      commit("LADYCOMMODITY", result.data);
    }
  },
  async LadyCarousel({ commit }) {
    // await等待它响应的结果
    let result = await lady_carousel();
    if (result.code == 200) {
      commit("LADYCAROUSEL", result.data);
    }
  },
  async LadyTitle({ commit }) {
    // await等待它响应的结果
    let result = await lady_title();
    if (result.code == 200) {
      commit("LADYTITLE", result.data.title);
    }
  },
};

const mutations = {
  LADYCOMMODITY(state, value) {
    state.CommodityList = value;
  },
  LADYCAROUSEL(state, value) {
    state.CarouselList = value;
  },
  LADYTITLE(state, value) {
    state.Title = value;
  },
};

const state = {
  CommodityList: [],
  CarouselList: [],
  Title: "",
};

const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
