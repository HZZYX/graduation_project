<template>
  <div class="container content">
    <div class="col-lg-8 col-lg-offset-2">
      <div class="row">
        <div class="col-lg-6 first-content" id="register">
          <h3>欢迎注册BEW Clothing</h3>
          <p class="content_p">
            <span>One Click Registration Login</span>
          </p>
          <p class="content_p_2">
            <input
              type="text"
              name="fullname"
              id="fullname"
              v-model="fullname"
              placeholder="Enter fullname"
            />
          </p>
          <p class="content_p_2">
            <input
              type="text"
              name="usename"
              id="usename"
              placeholder="Enter Username"
            />
          </p>
          <p class="content_p_2 code_p">
            <input
              type="text"
              class="code"
              name="code"
              id="code"
              placeholder="Enter Verification Code"
            />
            <button class="obtain">获取验证码</button>
          </p>
          <p class="content_p_2">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <span>
              我已阅读并同意 《网站使用条款》 及
              《个人信息处理规则（标准版）》，同意共享本人的个人信息。
            </span>
          </p>
          <p class="content_p_2">
            <button class="land" @click="sub()">注册</button>
          </p>
          <div class="content_p_3">
            <div class="content_p_3_img">
              <a href="#">
                <img :src="LandList.password" />
              </a>
              <a href="#">Account Password</a>
            </div>
            <div class="content_p_3_img">
              <a href="#" class="register">
                <img :src="LandList.test" />
              </a>
              <a href="#">SMS verification</a>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <img :src="LandList.login" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "register",
  mounted() {
    //派发action,通过Vuex发起ajax请求，将数据存储在仓库中
    this.$store.dispatch("land/Land");
  },
  computed: {
    ...mapState("land", ["LandList"]),
  },
};
</script>

<style scoped lang="less">
/* .content */
.content {
  padding-top: 30px;

  .col-lg-8 {
    border: 1px solid #eae8e4;

    .first-content {
      padding: 45px 50px;

      h3 {
        padding-bottom: 30px;
      }

      .content_p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        padding-bottom: 40px;

        span {
          font-weight: bold;
        }

        a {
          color: #122b40;
          font-size: xx-small;
        }
      }

      .content_p_2 {
        padding-top: 25px;

        input {
          width: 100%;
          border: none;
          outline: none;
          text-indent: 20px;
          border-bottom: 1px solid #d9001b;
        }

        input[type="checkbox"] {
          width: 12px;
          height: 12px;
        }

        button {
          width: 100%;
          height: 50px;
          border-radius: 20px;
          background-color: #000000;
          color: #f2f1f1;
          border: none;
          outline: none;
          font-size: xx-small;
          transition: all linear 1s;
        }

        button:hover {
          background-color: #ebe9e5;
          color: #000000;
        }

        .obtain {
          width: 80px;
          height: 35px;
          background-color: #4a4a4a;
          color: #f2f1f1;
          border: none;
          outline: none;
          font-size: xx-small;
        }
      }

      .code_p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;

        .code {
          width: 65%;
        }
      }

      .content_p_3 {
        margin-top: 90px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;

        .content_p_3_img {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          a {
            color: #000000;
            font-size: xx-small;
            line-height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          > a:first-child {
            width: 50px;
            height: 50px;
            border-radius: 100%;
          }

          .land {
            background-color: #ebe9e5;
          }

          .register {
            background-color: #ebe9e5;
          }
        }
      }
    }
  }
}

.content div div > .col-lg-6:last-child {
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.content div div > .col-lg-6:last-child img {
  width: 102%;
}
</style>
