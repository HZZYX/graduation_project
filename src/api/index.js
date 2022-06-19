/* 当前这个模块：将所有 api 进行统一管理 */
import requests from "./request";
import mockRequests from "./mockRequests";

/* 
    发送请求: axios发送请求返回的结果是一个Promise对象
   */

/*    
    export const reqCategoryList = () => {
        return requests({
            url: "/product/getBaseCategoryList",
            method: "GET",
        });
    };
*/
export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "GET" });

//获取首页video数据
export const reqindex_video = () =>
  mockRequests({ url: "/index_video", method: "GET" });

//获取首页index_floor数据
export const reqindex_floor = () =>
  mockRequests({ url: "/index_floor", method: "GET" });

//获取首页lady_commodity数据
export const lady_commodity = () =>
  mockRequests({ url: "/lady_commodity", method: "GET" });

export const lady_carousel = () =>
  mockRequests({ url: "/lady_carousel", method: "GET" });

export const lady_title = () =>
  mockRequests({ url: "/lady_title", method: "GET" });

export const man_commodity = () =>
  mockRequests({ url: "/man_commodity", method: "GET" });

export const man_title = () =>
  mockRequests({ url: "/man_title", method: "GET" });

export const man_carousel = () =>
  mockRequests({ url: "/man_carousel", method: "GET" });

export const colloation_commodity = () =>
  mockRequests({ url: "/colloation_commodity", method: "GET" });

export const colloation = () =>
  mockRequests({ url: "/colloation", method: "GET" });

export const art_img = () => mockRequests({ url: "/art_img", method: "GET" });

export const bewmusic = () => mockRequests({ url: "/bewmusic", method: "GET" });

export const details_commodity = () =>
  mockRequests({ url: "/details_commodity", method: "GET" });

export const details = () => mockRequests({ url: "/details", method: "GET" });

export const car = () => mockRequests({ url: "/car", method: "GET" });

export const land = () => mockRequests({ url: "/land", method: "GET" });
