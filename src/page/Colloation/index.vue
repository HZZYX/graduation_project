<template>
  <div class="content">
    <div class="container-fluid background">
      <img :src="Colloation.background" />
      <div class="background_text">
        <h2>
          <b>{{ Colloation.title }}</b>
        </h2>
        <button type="button">{{ Colloation.btn }}</button>
      </div>
    </div>

    <!-- selected 精选 -->
    <div class="container-fluid selected">
      <h2 class="text-center"><b>精选</b></h2>
      <div class="row">
        <div class="col-lg-3" v-for="item in Colloation.tide" :key="item.id">
          <img :src="item.imgUrl" />
          <a href="#">{{ item.text }}</a>
        </div>
      </div>
    </div>

    <!-- valentino 华伦天奴 -->
    <div class="container-fluid valentino">
      <img :src="Colloation.valentino.imgUrl" />
      <div class="loco">
        <h3>
          <b>{{ Colloation.valentino.title }}</b>
        </h3>
        <button type="button">{{ Colloation.valentino.text_1 }}</button>
        <button type="button">{{ Colloation.valentino.text_2 }}</button>
      </div>
    </div>

    <!-- collocation 搭配 -->
    <div class="container-fluid collocation">
      <div class="row result">
        <div class="col-lg-12 col-xs-12">
          <img :src="cat_1" alt="帽子" id="img-1" />
          <img :src="cat_2" alt="衣服" id="img-2" />
          <img :src="cat_3" alt="裤子" id="img-3" />
        </div>
      </div>

      <div class="row result_2">
        <div class="col-lg-12 col-xs-12">
          <div class="row">
            <!-- col-lg-4 -->
            <div class="col-lg-4 col-xs-12">
              <div class="img-box">
                <img
                  alt="帽子_1"
                  title="cat_1"
                  v-for="(item, index) in Colloation.cat.cat_1"
                  :key="index"
                  :src="item"
                  @click="demo"
                />
              </div>
              <div class="row">
                <div class="col-lg-12 col-xs-12">
                  <button type="button">Hat</button>
                </div>
              </div>
            </div>
            <!-- col-lg-4 -->
            <div class="col-lg-4 col-xs-12">
              <div class="img-box">
                <img
                  alt="衣服_1"
                  title="cat_2"
                  v-for="(item, index) in Colloation.cat.cat_2"
                  :key="index"
                  :src="item"
                  @click="demo"
                />
              </div>
              <div class="row">
                <div class="col-lg-12 col-xs-12">
                  <button type="button">Clothes</button>
                </div>
              </div>
            </div>
            <!-- col-lg-4 -->
            <div class="col-lg-4 col-xs-12">
              <div class="img-box">
                <img
                  alt="裤子_1"
                  title="cat_3"
                  v-for="(item, index) in Colloation.cat.cat_3"
                  :key="index"
                  :src="item"
                  @click="demo"
                />
              </div>
              <div class="row">
                <div class="col-lg-12 col-xs-12">
                  <button type="button">Trousers</button>
                </div>
              </div>
            </div>
          </div>
          <!-- row 结束 -->
        </div>
      </div>
      <!-- row 结束 -->
    </div>

    <!-- introduce 介绍 -->
    <div class="container-fluid introduce">
      <img :src="Colloation.introduce.imgUrl" />
      <div class="loco">
        <h3>
          <b>{{ Colloation.introduce.title }}</b>
        </h3>
        <button type="button">{{ Colloation.introduce.text_1 }}</button>
        <button type="button">{{ Colloation.introduce.text_2 }}</button>
      </div>
    </div>

    <div class="container-fluid text-center title">
      <h3><b>您可能会喜欢</b></h3>
      <a href="#">曾经浏览过的产品</a>
    </div>

    <Commodity :CommodityList="CommodityList" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Colloation",
  data() {
    return {
      cat_1: "/images/colloation/cat/1_01.jpg",
      cat_2: "/images/colloation/cat/1_02.jpg",
      cat_3: "/images/colloation/cat/1_03.jpg",
    };
  },
  mounted() {
    //派发action,通过Vuex发起ajax请求，将数据存储在仓库中
    this.$store.dispatch("colloation/Commodity");
    this.$store.dispatch("colloation/Colloation");
  },
  computed: {
    ...mapState("colloation", ["CommodityList", "Colloation"]),
  },
  methods: {
    demo(e) {
      if (e.target.title == "cat_1") {
        this.cat_1 = e.target.src;
      } else if (e.target.title == "cat_2") {
        this.cat_2 = e.target.src;
      } else {
        this.cat_3 = e.target.src;
      }
    },
  },
};
</script>

<style scoped lang="less">
/* background 背景图片 */
.background {
  padding: 0;
  position: relative;

  img {
    width: 100%;
  }

  .background_text {
    position: absolute;
    bottom: 50px;
    right: 50px;
    color: #ffffff;

    button {
      width: 92px;
      height: 34px;
      border: none;
      outline: none;
      color: #000000;
      background-color: #ffffff;
      font-size: xx-small;
      float: right;
      margin-top: 20px;
    }
  }
}

/* selected 精选 */
.selected {
  padding: 20px 35px;

  .row .col-lg-3 {
    margin-top: 25px;
    text-align: center;

    img {
      width: 100%;
      display: block;
    }

    a {
      display: inline-block;
      color: #19110b;
      text-decoration: none;
      padding-top: 20px;
      transition: all 1s;
      border-bottom: 1px solid #19110b;
    }

    a:hover {
      border-bottom: 1px solid transparent;
    }
  }
}

/* valentino 华伦天奴 */
.valentino {
  margin: 25px 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 90vh;
  overflow: hidden;

  img {
    width: 100%;
  }

  .loco {
    position: absolute;
    text-align: center;
    color: #ffffff;

    h3 {
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    button {
      width: 28%;
      height: 35px;
      font-size: small;
      position: relative;
      z-index: 2;
      outline: none;
      border: none;
      transition: all linear 0.5s;
      margin: 35px 10px;
      background-color: transparent;
    }

    button::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      transition: all linear 0.5s;
      background-color: #ffffff;
      z-index: -1;
    }

    button:hover::before {
      height: 100%;
    }

    button:hover {
      color: #000000;
    }
  }
}

/* collocation 搭配 */
.collocation {
  padding: 20px 35px 20px;
  font-family: lv;
  background-image: linear-gradient(
    90deg,
    rgba(237, 240, 244, 0) 11%,
    #eef1f5 35%,
    #eef1f5 64%,
    rgba(238, 241, 243, 0) 86%
  );
  border-bottom: 1px solid #eae8e4;

  .result {
    padding: 0;

    .col-lg-12 {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      img {
        width: 20%;
        display: block;
        background-color: #eae8e4;
      }
    }
  }

  .result_2 {
    padding-top: 15px;
    text-align: center;

    img {
      width: 26%;
      margin-top: 10px;
      border: 1px solid #f5f5f5;
      transition: all linear 0.5s;
    }

    img:hover {
      border: 1px solid #000000;
    }

    .col-lg-4 .row .col-lg-12 {
      font-weight: bold;
      padding: 20px 0;
      font-size: large;
      color: #000000;

      button {
        width: 72%;
        height: 45px;
        outline: none;
        border: none;
        transition: all 1s;
        margin-top: 18px;
        margin-bottom: 14px;
        font-size: 14px;
        color: #ffffff;
        background-color: #000000;
      }

      button:hover {
        box-shadow: inset 0 0 0 1px #ebe9e5;
        background-color: #ebe9e5;
        color: #000;
      }
    }
  }
}

/* introduce 介绍 */
.introduce {
  width: 100%;
  margin: 25px 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  max-height: 60vh;
  overflow: hidden;

  img {
    width: 100%;
  }

  .loco {
    position: absolute;
    left: 10vh;
    text-align: center;
    color: #ffffff;

    h3 {
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    button {
      width: 28%;
      height: 35px;
      font-size: small;
      position: relative;
      z-index: 2;
      outline: none;
      border: none;
      transition: all linear 0.5s;
      margin: 35px 10px;
      background-color: transparent;
    }

    button::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      transition: all linear 0.5s;
      background-color: #ffffff;
      z-index: -1;
    }

    button:hover::before {
      height: 100%;
    }

    button:hover {
      color: #000000;
    }
  }
}

/* title */
.title {
  padding: 50px 0 0;
  color: #19110b;

  a {
    display: inline-block;
    margin-top: 50px;
    color: #19110b;
    text-decoration: none;
    padding-bottom: 10px;
    border-bottom: 1px solid #19110b;
  }
}
</style>
