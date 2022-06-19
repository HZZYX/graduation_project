//先引入mockjs模块
import Mock from "mockjs";
/*
    把json数据格式引进来
    webpack默认对外暴露的：图片、JSON数据格式
*/
import index_video from "./index/index_video.json";
import index_floor from "./index/index_floor.json";

import lady_commodity from "./lady/lady_commodity.json";
import lady_carousel from "./lady/lady_carousel.json";
import lady_title from "./lady/lady_title.json";

import man_commodity from "./man/man_commodity.json";
import man_carousel from "./man/man_carousel.json";
import man_title from "./man/man_title.json";

import colloation_commodity from "./colloation/colloation_commodity.json";
import colloation from "./colloation/colloation.json";

import art_img from "./art/art_img.json";

import bewmusic from "./bewmusic/bewmusic.json";

import details_commodity from "./details/details_commodity.json";

import details from "./details/details.json";

import car from "./car/car.json";

import land from "./land/land.json";

// mock数据：第一个参数：请求地址
Mock.mock("/mock/index_video", { code: 200, data: index_video }); //模拟首页video数据
Mock.mock("/mock/index_floor", { code: 200, data: index_floor });

Mock.mock("/mock/lady_commodity", { code: 200, data: lady_commodity });
Mock.mock("/mock/lady_carousel", { code: 200, data: lady_carousel });
Mock.mock("/mock/lady_title", { code: 200, data: lady_title });

Mock.mock("/mock/man_commodity", { code: 200, data: man_commodity });
Mock.mock("/mock/man_carousel", { code: 200, data: man_carousel });
Mock.mock("/mock/man_title", { code: 200, data: man_title });

Mock.mock("/mock/colloation_commodity", {
  code: 200,
  data: colloation_commodity,
});
Mock.mock("/mock/colloation", { code: 200, data: colloation });

Mock.mock("/mock/art_img", { code: 200, data: art_img });

Mock.mock("/mock/bewmusic", { code: 200, data: bewmusic });

Mock.mock("/mock/details_commodity", {
  code: 200,
  data: details_commodity,
});

Mock.mock("/mock/details", { code: 200, data: details });

Mock.mock("/mock/car", { code: 200, data: car });

Mock.mock("/mock/land", { code: 200, data: land });
