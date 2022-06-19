/* car模块的小仓库 */
import { car } from "@/api";
/* actions：处理actions,可以书写自己的业务逻辑，也可以处理异步*/
const actions = {
  async CarList({ commit }) {
    /* 拿到Promise成功的结果 */
    let result = await car();
    if (result.code == 200) {
      commit("CARLIST", result.data);
    }
  },
};

/* mutations：修改state的唯一手段 */
const mutations = {
  CARLIST(state, value) {
    state.CarList = value;
  },
};

/* state：仓库存储数据的地方 */
const state = {
  CarList: {},
};

/* getters：理解为计算机属性，用于简化仓库数据，让组件获取仓库的数据更加方便 */
const getters = {};

/* 对外暴露 Store类的一个实例 */
export default {
  /* 命名空间 */
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
