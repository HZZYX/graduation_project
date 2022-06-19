<template>
  <!-- commodity 商品 -->
  <div class="container-fluid commodity">
    <div class="row">
      <div
        class="col-lg-4"
        v-for="Commodity in CommodityList"
        :key="Commodity.id"
      >
        <div class="img-box">
          <router-link to="/details">
            <img :src="Commodity.imgUrl" v-show="!Commodity.videoUrl" />
            <video
              loop
              autoplay
              muted
              v-if="Commodity.videoUrl"
              :src="Commodity.videoUrl"
              class="carousel_video"
            ></video>
          </router-link>
        </div>
        <b>{{ Commodity.title }}</b>
        <span>{{ Commodity.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Commodity",
  props: ["CommodityList"],
};
</script>

<style lang="less" scoped>
/* commodity 商品*/
.commodity {
  border-top: 1px solid #eae8e4;
  padding: 20px 35px;
  margin-bottom: 50px;
  font-size: xx-small;
  color: #18100a;
  font-family: lv;

  .row .col-lg-4 {
    margin-top: 30px;

    .img-box {
      background-color: #f6f5f3;
      margin-bottom: 15px;

      img {
        width: 100%;
      }

      video {
        width: 100%;
      }
    }

    span {
      display: block;
      color: #696969;
    }
  }
}
</style>
