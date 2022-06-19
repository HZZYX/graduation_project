import Vue from "vue";
import Vuex from "vuex";
/* 引入小仓库 */
import home from "./home";
import car from "./car";
import lady from "./lady";
/* lady模块的小仓库 */
import man from "./man";
import colloation from "./colloation";
import art from "./art";
import bewmusic from "./bewmusic";
import details from "./details";
import land from "./land";
Vue.use(Vuex);

/* 对外暴露 Store类的一个实例 */
export default new Vuex.Store({
  /* 实现Vuex仓库模块式开发存储数据 */
  modules: {
    home,
    car,
    lady,
    man,
    colloation,
    art,
    bewmusic,
    details,
    land,
  },
});
