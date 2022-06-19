<template>
  <!-- rotation 轮播-->
  <div class="page">
    <div class="cnt">
      <div class="photo-container">
        <div class="photo-cont-item animation-1">
          <div
            class="photo-item"
            v-for="item in ImgList.img_1"
            :key="item.id"
            :style="{ backgroundImage: item.url }"
          >
            <a href="#">{{ item.text }}</a>
          </div>
        </div>

        <div class="photo-cont-item animation-2">
          <div
            class="photo-item"
            v-for="item in ImgList.img_2"
            :key="item.id"
            :style="{ backgroundImage: item.url }"
          >
            <a href="#">{{ item.text }}</a>
          </div>
        </div>

        <div class="photo-cont-item animation-3">
          <div
            class="photo-item"
            v-for="item in ImgList.img_3"
            :key="item.id"
            :style="{ backgroundImage: item.url }"
          >
            <a href="#">{{ item.text }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Art",
  data() {
    return {
      b: {
        backgroundImage: "url(./images/art/1.jpg)",
      },
    };
  },
  mounted() {
    //派发action,通过Vuex发起ajax请求，将数据存储在仓库中
    this.$store.dispatch("art/ArtImg");
  },
  computed: {
    ...mapState("art", ["ImgList"]),
  },
};
</script>

<style scoped lang="less">
/* Just for this sample */
.page {
  margin: 0 auto;
  padding: 5vh 0;
  /* padding: 20px 35px 20px; */
  display: flex;
  max-width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #eae8e4;

  /* Start here */
  .cnt {
    width: 100%;
    height: 100vh;
    background: #19110b;
    overflow: hidden;

    .photo-container {
      position: relative;
      top: -90px;
      left: -120px;
      /* 倾斜 10 deg */
      transform: rotate(10deg);

      .photo-cont-item {
        display: flex;
        width: calc(380px * 6);

        /* 设置照片大小 */
        .photo-item {
          width: 320px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-transform: uppercase;
          margin-right: 60px;
          margin-bottom: 60px;
          border-radius: 16px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.15);

          a {
            color: #ffffff;
            font-size: large;
            font-weight: bold;
            text-decoration: none;
          }
        }
      }

      /* Every row */
      .animation-1 {
        animation: scroller 40s linear infinite;
        display: flex;
        width: calc(380px * 12);
      }

      .animation-2 {
        margin-left: 150px;
        animation: scroller 30s linear infinite;
        display: flex;
        width: calc(380px * 12);
      }

      .animation-3 {
        animation: scroller 50s linear infinite;
        display: flex;
        width: calc(380px * 12);
      }

      /* Animations */
      @keyframes scroller {
        0% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(calc(-380px * 6));
        }
      }
    }
  }
}
</style>
