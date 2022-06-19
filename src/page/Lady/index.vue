<template>
  <div class="content">
    <Title :Title="Title" />
    <Carousel :CarouselList="CarouselList" />
    <Commodity :CommodityList="CommodityList" />
    <div class="container-fluid number_more">
      <!-- number -->
      <p class="number text-center">01 / {{ CommodityList.length }}</p>
      <!-- more -->
      <a href="man.html" class="more text-center">探索更多</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Lady",
  mounted() {
    //派发action,通过Vuex发起ajax请求，将数据存储在仓库中
    this.$store.dispatch("lady/LadyCommodity");
    this.$store.dispatch("lady/LadyCarousel");
    this.$store.dispatch("lady/LadyTitle");
  },
  computed: {
    ...mapState("lady", ["CommodityList", "CarouselList", "Title"]),
  },
};
</script>

<style scoped lang="less">
/* number_more */
.number_more {
  .number {
    font-family: lv;
    font-size: xx-small;
    color: #696969;
    margin-bottom: 7vh;
  }

  /* more */
  .more {
    display: block;
    width: 260px;
    height: 46px;
    margin: 0 auto;
    line-height: 46px;
    box-shadow: inset 0 0 0 1px #19110b;
    background-color: #fff;
    color: #19110b;
    transition: all 1s;
    text-decoration: none;
  }

  .more:hover {
    background-color: #eae8e4;
    box-shadow: inset 0 0 0 1px #eae8e4;
  }
}
</style>
