import { man_commodity, man_carousel, man_title } from "@/api";

const actions = {
  async ManCommodity({ commit }) {
    // await等待它响应的结果
    let result = await man_commodity();
    if (result.code == 200) {
      commit("MANCOMMODITY", result.data);
    }
  },
  async ManCarousel({ commit }) {
    // await等待它响应的结果
    let result = await man_carousel();
    if (result.code == 200) {
      commit("MANCAROUSEL", result.data);
    }
  },
  async ManTitle({ commit }) {
    // await等待它响应的结果
    let result = await man_title();
    if (result.code == 200) {
      commit("MANTITLE", result.data.title);
    }
  },
};

const mutations = {
  MANCOMMODITY(state, value) {
    state.CommodityList = value;
  },
  MANCAROUSEL(state, value) {
    state.CarouselList = value;
  },
  MANTITLE(state, value) {
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
