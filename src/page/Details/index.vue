<template>
  <div class="con">
    <!-- details 商品详情 -->
    <div class="container-fluid details">
      <div class="row">
        <div class="col-lg-8 text-center">
          <div class="row">
            <!-- col-lg-12 -->
            <div class="col-lg-12">
              <img :src="Details.details[0]" />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <img :src="Details.details[1]" />
            </div>
            <div class="col-lg-6 other_row_col-lg-6">
              <img :src="Details.details[2]" />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 other_row_col-lg-6_2">
              <img :src="Details.details[3]" />
            </div>
            <div class="col-lg-6 other_row_col-lg-6">
              <img :src="Details.details[4]" />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 other_row_col-lg-6_3">
              <img :src="Details.details[5]" />
            </div>
            <div class="col-lg-6 other_row_col-lg-6">
              <img :src="Details.details[6]" />
            </div>
          </div>

          <div class="row end_row">
            <!-- col-lg-12 -->
            <div class="col-lg-12">
              <img :src="Details.details[7]" />
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <p class="col-lg-4_p">
            <small>M59392</small>
            <span>
              <img :src="Details.heart" />
            </span>
          </p>
          <p>
            <b>COUSSIN 小号手袋</b>
          </p>
          <p class="col-lg-4_p col-lg-4_p_2">
            <strong>¥27,100</strong>
            <span>
              <span></span>
              可选购
            </span>
          </p>
          <p>
            <button type="button" class="btn1">放入购物袋</button>
          </p>
          <p class="col-lg-4_p">
            此产品为预订产品，目前仅支持送货到府服务。更多信息<br />请查看产品页或咨询400
            6588 555。
            <span>
              <img :src="Details.question" />
            </span>
          </p>
          <p>
            <button type="button" class="btn2">寻找一家专卖店</button>
          </p>
          <p class="col-lg-4_p_2 col-lg-4_p_3">
            本款 Coussin 小号手袋撷取 2021
            春夏系列的瞩目格调，以丹宁效果印花羊皮革展现新意。宽幅织物肩带和粗犷长链条均可随心拆卸，方便肩背或斜挎。
          </p>
          <p class="col-lg-4_p_2 col-lg-4_p_3">
            <span>详细特征</span>
            <br /><br />26 x 20 x 12 厘米 <br />(长度 x 高 x 宽)
          </p>
          <ul>
            <li>丹宁效果印花羊皮革</li>
            <li>羊皮革饰边</li>
            <li>微纤维内衬</li>
            <li>金属件</li>
            <li>内隔层</li>
            <li>拉链封口</li>
            <li>肩带：可拆卸，可调节</li>
            <li>包带半长：30.0 厘米衬</li>
            <li>包带半长可调至：50.0 厘米</li>
            <li>链条：可拆卸</li>
            <li>链条半长：27.0 厘米</li>
          </ul>
          <p class="col-lg-4_p_3">
            本品产地为法国、西班牙、意大利和美国之一。网站中
            <br />的信息可能存在技术失准、色差、尺码误差或因产品改
            <br />良，生产批次等因素造成的细节误差，网站展示的产品
            <br />图片可能与实际外观不一致。如有相关问题，请致电顾
            <br />客服务中心。
          </p>
          <div class="col-lg-4_div">
            <img :src="Details.details[8]" width="140" />
            <p>
              <a href="#">
                <b>路易威登包装</b>
              </a>
              <br /><span>责任包装灵感源自品牌传承</span>
            </p>
            <img :src="Details.copy[0]" />
          </div>

          <div
            class="col-lg-4_div_2"
            v-for="item in Details.way"
            :key="item.id"
          >
            <p>
              <img :src="item.imgUrl" />
              {{ item.text }}
            </p>
            <img :src="Details.copy[1]" />
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid text-center title">
      <h3><b>您可能会喜欢</b></h3>
      <a href="man.html">曾经浏览过的产品</a>
    </div>

    <Commodity :CommodityList="CommodityList" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Details",
  mounted() {
    //派发action,通过Vuex发起ajax请求，将数据存储在仓库中
    this.$store.dispatch("details/Commodity");
    this.$store.dispatch("details/Details");
  },
  computed: {
    ...mapState("details", ["CommodityList", "Details"]),
  },
};
</script>

<style scoped lang="less">
/* details */
.details {
  padding-bottom: 7px;
  border-bottom: 1px solid #eae8e4;
  .row {
    .col-lg-8 {
      .row {
        .col-lg-12 {
          background-color: #f5f5f3;
          img {
            width: 50%;
          }
        }
        .col-lg-6 {
          margin-top: 7px;
          padding: 0;
          background-color: #f2f3f3;
          border-left: 7px solid #f2f3f3;
          img {
            width: 100%;
          }
        }
        .other_row_col-lg-6 {
          background-color: #f5f5f3;
          border-left: 7px solid #ffffff;
        }
        .other_row_col-lg-6_2 {
          background-color: #f5f5f3;
          border-left: 7px solid #f5f5f3;
        }
        .other_row_col-lg-6_3 {
          border-left: 8px solid transparent;
        }
      }
      .end_row {
        margin-top: 7px;
      }
    }
    .col-lg-4 {
      font-family: lv;
      padding: 50px 40px 0;
      color: #19110b;
      font-size: xx-small;
      .col-lg-4_div {
        margin: 40px 0;
        padding-right: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #f7f5f3;
        p {
          width: 50%;
          padding: 0;
          margin: 0;
        }
      }
      .col-lg-4_div_2 {
        padding: 40px 10px 40px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        border-bottom: 1px solid #eae8e4;
        img {
          margin-right: 3.5vh;
        }
      }
      .col-lg-4_div_2:last-of-type {
        border: none;
      }
      ul {
        padding: 0;
        margin: 0;
        li {
          font-size: 15px;
          line-height: 30px;
          color: #696969;
        }
      }
      p {
        b {
          font-weight: bold;
          font-size: 23px;
          color: #000000;
        }
        strong {
          font-weight: bold;
          color: #000000;
          font-size: 15px;
        }
        span span {
          display: inline-block;
          width: 7px;
          height: 7px;
          background-color: #537f00;
          border-radius: 100%;
          margin-right: 4px;
        }
        button {
          width: 100%;
          height: 45px;
          outline: none;
          border: none;
          transition: all 1s;
          margin-top: 18px;
          margin-bottom: 14px;
          font-size: 14px;
        }
        .btn1 {
          background-color: #000000;
          color: #ffffff;
        }
        .btn2 {
          box-shadow: inset 0 0 0 1px #19110b;
          background-color: #ffffff;
          margin-bottom: 0;
        }
        button:hover {
          box-shadow: inset 0 0 0 1px #ebe9e5;
          background-color: #ebe9e5;
        }
      }
      .col-lg-4_p {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .col-lg-4_p_2 {
        margin-top: 40px;
        margin-bottom: 7px;
      }
      .col-lg-4_p_3 {
        color: #696969;
        font-size: 15px;
        span {
          color: #19110b;
        }
      }
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
