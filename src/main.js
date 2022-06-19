import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import Commodity from "./components/Commodity";
import Carousel from "./components/Carousel";
import Title from "./components/Title";
Vue.component(Commodity.name, Commodity);
Vue.component(Carousel.name, Carousel);
Vue.component(Title.name, Title);
/* 测试 */
import { reqCategoryList } from "./api";
reqCategoryList();
//引入MockServe.js
import "@/mock/mockServe";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  /* 注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性 */
  router,
  /* 注册仓库：组件实例的身上会多一个属性$store属性 */
  store,
}).$mount("#app");
