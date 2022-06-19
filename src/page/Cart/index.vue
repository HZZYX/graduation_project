<template>
  <div class="container content">
    <div class="row">
      <div class="col-lg-8">
        <div class="row content_nav">
          <div
            class="col-lg-4 text-center"
            v-for="(item, index) in CarList.nav"
            :key="index"
          >
            <h4>
              <b>
                <a href="#">{{ item }}</a>
              </b>
            </h4>
          </div>
        </div>

        <div class="row content_nav_2">
          <a href="index.html" class="bew_a">BEW Clothing时装</a>
        </div>

        <div class="row">
          <p>
            <b>享顺丰免费配送和七天无理由退货服务</b>
          </p>

          <p class="content_p">
            <input type="checkbox" name="checkbox" id="checkbox" /> 全选
          </p>
        </div>

        <div
          class="alert alert-warning alert-dismissible"
          role="alert"
          id="alert"
          v-for="item in CarList.car"
          :key="item.id"
        >
          <div class="row">
            <div class="col-lg-1 col-xs-4">
              <input type="checkbox" name="checkbox" id="checkbox" />
            </div>
            <div class="col-lg-3 col-xs-4">
              <img :src="item.img" class="alert_img" />
            </div>
            <div class="col-lg-3 col-xs-4 alert_div">
              <b>{{ item.name }}</b>
              <span> {{ item.text }} </span>
            </div>
            <div class="col-lg-3 col-xs-4 alert_div_2">
              <img :src="item.reduce" />
              <span>{{ item.number }}</span>
              <img :src="item.add" />
            </div>
            <div class="col-lg-1 col-xs-4">{{ item.price }}</div>
            <div class="col-lg-1 col-xs-4">
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>

        <div class="row content_total">
          <div class="col-lg-12">总金额：¥ 0</div>
        </div>
        <div class="row content_btn">
          <button type="button" class="btn1">确认订单</button>
          <button type="button" class="btn2">继续购物</button>
        </div>

        <div class="row content_text">
          <div class="col-lg-4">
            <h4>信息安全保障</h4>
            <span>您的数据包括订单信息都将通过加密的方式传输。</span>
          </div>
          <div class="col-lg-4">
            <h4>支付方式</h4>
            <span>我们支持支付宝，网银支付，微信支付以及银联支付</span>
            <img
              v-for="(item, index) in CarList.pay"
              :key="index"
              :src="item"
            />
          </div>
          <div class="col-lg-4">
            <h4>退货</h4>
            <span>您可以享受7天内无理由退货。如需帮助，请拨打客服热线。</span>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-lg-offset-1 content_col-lg-3">
        <h4>您可以通过以下方式联系我们</h4>
        <div class="row" v-for="item in CarList.news" :key="item.id">
          <div class="col-lg-2">
            <img :src="item.imgUrl" />
          </div>
          <div class="col-lg-10">
            <h5>
              <span>{{ item.title }}</span>
            </h5>
            <p>
              <span>{{item.text}}</span>
            </p>
            <p>
              <strong>{{item.email.title}}</strong>
              <br /><span>{{item.email[0].text}}</span>
            </p>
          </div>
        </div>

        <!-- content_col-lg-3_row -->
        <div class="row content_col-lg-3_row">
          <div class="col-lg-12">
            <h5>BEW Clothing官网购物的特殊礼遇</h5>
            <p>免配送费</p>
            <p>美妆订单配以试用装礼赠</p>
            <p>BEW Clothing艺术包装</p>
          </div>
        </div>
      </div>
      <!-- col-lg-4 结束 -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
/* 按需引入 throttle是默认暴露 */
import throttle from "lodash/throttle";
export default {
  name: "Cart",
  mounted() {
    this.$store.dispatch("car/CarList");
  },
  computed: {
    ...mapState("car", ["CarList"]),
  },
};
</script>

<style scoped lang="less">
.content {
  margin-top: 30px;
  padding: 40px;
  border: 1px solid #eae8e4;
  background-color: #ffffff;

  .content_nav {
    margin-bottom: 20px;
    border-bottom: 1px solid #eae8e4;

    .col-lg-4 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: all 1s;

      a {
        color: #19110b;
      }
    }

    .col-lg-4:first-child {
      border-bottom: 3px solid #000000;
    }
  }

  .content_nav_2 {
    padding-top: 25px;
    margin-bottom: 40px;
    border-bottom: 1px solid #eae8e4;

    .bew_a {
      display: block;
      color: #ffffff;
      height: 50px;
      line-height: 50px;
      border-radius: 5px;
      font-size: large;
      letter-spacing: 1px;
      text-decoration: none;
      text-indent: 20px;
      background: #000000;
    }
  }

  .row .col-lg-8 .row {
    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      border: 2px solid #d7d7d7;
      background-color: #d7d7d7;
      color: #d7d7d7;
      border-radius: 5px;
    }

    .content_p {
      margin-top: 20px;
      border-bottom: 1px solid #d7d7d7;
      padding-bottom: 10px;

      input[type="checkbox"] {
        position: relative;
        top: 4px;
        margin-right: 10px;
      }
    }
  }

  /* alert 样式 */
  #alert {
    background-color: #ffffff;
    color: #524f47;
    margin-bottom: 0;
    border: none;
    border-bottom: 1px solid #f7f5f4;

    .row {
      div {
        height: 150px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .alert_img {
          width: 80%;
        }
      }

      .alert_div {
        padding-left: 20px;
        /* justify-content: flex-start; */
        align-items: flex-start;
        font-size: xx-small;

        b {
          display: block;
          color: #333333;
          margin-bottom: 5px;
        }

        span {
          color: #7f7f7f;
        }
      }

      .alert_div_2 {
        flex-direction: row;

        img {
          margin: 0 8px;
        }
      }
    }
  }

  .content_total {
    border-bottom: 1px solid #d7d7d7;
    margin-top: 20px;
    margin-bottom: 40px;
    text-align: right;
    padding: 10px 70px 10px 0;
  }

  .content_btn {
    padding-top: 80px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eae8e4;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: row;

    button {
      width: 100px;
      margin-right: 40px;
      height: 45px;
      color: #ffffff;
      font-size: small;
      background-color: #262626;
      border-radius: 30px;
      border: none;
      outline: none;
      transition: all linear 1s;
    }

    .btn2 {
      background-color: #f2f2f2;
      color: #262626;
    }

    .btn2:hover {
      background-color: #262626;
    }

    .btn1:hover {
      background-color: #f2f2f2;
      color: #262626;
    }
  }

  .content_text {
    margin-top: 80px;
    padding-bottom: 40px;
    border-bottom: 1px solid #eae8e4;

    h4 {
      padding-bottom: 12px;
    }

    span {
      display: block;
      padding-bottom: 8px;
      font-size: small;
    }

    img {
      width: 25px;
      margin-right: 10px;
    }
  }

  .content_col-lg-3 {
    border: 1px solid #eae8e4;
    padding: 20px 20px;
    background-color: #ffffff;

    .row {
      margin-top: 25px;

      h4 {
        color: #333333;
      }

      h5 span {
        font-size: 14px;
      }

      p {
        margin-top: 25px;
      }

      span {
        color: #7f7f7f;
        font-size: xx-small;
      }

      strong {
        color: #333333;
        font-weight: normal;
        font-size: xx-small;
      }
    }

    .content_col-lg-3_row {
      margin-top: 60px;
      padding-top: 30px;
      border-top: 1px solid #eae8e4;

      h5 {
        padding-bottom: 18px;
        border-bottom: 1px solid #d7d7d7;
      }

      p {
        font-weight: bold;
      }
    }
  }
}
</style>
