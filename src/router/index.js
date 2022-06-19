import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../page/Home";
import Lady from "../page/Lady";
import Man from "../page/Man";
import Art from "../page/Art";
import Colloation from "../page/Colloation";
import BewMusic from "../page/BewMusic";
import Cart from "../page/Cart";
import Land from "../page/Land";
import Details from "../page/Details";
Vue.use(VueRouter);

/* 先把VueRouter原型对象的push、replace，先保存一份 */
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

/* 重写push、replace */
/* 
  第一个参数：告诉原来push、replace方法，你往哪里跳转(传递哪些参数)
  第二个参数：成功的回调
  第三个参数：失败的回调
*/
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    /* this: 当前所在组件的实例 */
    /* 
      call、apply区别：
                  相同点：都可以调用函数一次，都可以篡改函数的上下文一次
                  不同点：call和apply传递参数，call传递参数用逗号隔开， apply执行，传递数组
    */
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    /* 
      call、apply区别：
                  相同点：都可以调用函数一次，都可以篡改函数的上下文一次
                  不同点：call和apply传递参数，call传递参数用逗号隔开， apply执行，传递数组
    */
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        alert: false,
        panel_nav: {
          position: "absolute",
          backgroundColor: "transparent",
        },
        panel_a: "white",
        nav_a: "transparent",
      },
    },
    {
      path: "/lady",
      component: Lady,
      meta: {
        alert: true,
        panel_nav: {
          position: "relative",
          backgroundColor: "#FFFFFF",
        },
        panel_a: "black",
        nav_a: "white",
      },
    },
    {
      path: "/man",
      component: Man,
      meta: {
        alert: true,
        panel_nav: {
          position: "relative",
          backgroundColor: "#FFFFFF",
        },
        panel_a: "black",
        nav_a: "white",
      },
    },
    {
      path: "/art",
      component: Art,
      meta: {
        alert: true,
        panel_nav: {
          position: "relative",
          backgroundColor: "#FFFFFF",
        },
        panel_a: "black",
        nav_a: "white",
      },
    },
    {
      path: "/colloation",
      component: Colloation,
      meta: {
        alert: false,
        panel_nav: {
          position: "absolute",
          backgroundColor: "transparent",
        },
        panel_a: "white",
        nav_a: "transparent",
      },
    },
    {
      path: "/bewMusic",
      component: BewMusic,
      meta: {
        alert: false,
        isShow: true,
        panel_nav: {
          position: "relative",
          backgroundColor: "#FFFFFF",
        },
        panel_a: "black",
        nav_a: "white",
      },
    },
    {
      path: "/cart",
      component: Cart,
      meta: {
        alert: true,
        panel_nav: {
          position: "relative",
          backgroundColor: "#FFFFFF",
        },
        panel_a: "black",
        nav_a: "white",
      },
    },
    {
      path: "/land",
      component: Land,
      meta: {
        alert: true,
        panel_nav: {
          position: "relative",
          backgroundColor: "#FFFFFF",
        },
        panel_a: "black",
        nav_a: "white",
      },
    },
    {
      path: "/details",
      component: Details,
      meta: {
        alert: true,
        panel_nav: {
          position: "relative",
          backgroundColor: "#FFFFFF",
        },
        panel_a: "black",
        nav_a: "white",
      },
    },
  ],
});

export default router;
