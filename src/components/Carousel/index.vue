<template>
  <!-- carousel 轮播图 -->
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div
        class="item"
        :class="Carousel.active"
        v-for="Carousel in CarouselList"
        :key="Carousel.id"
      >
        <video
          loop
          autoplay
          muted
          v-show="!Carousel.imgUrl"
          :src="Carousel.videoUrl"
          class="carousel_video"
        ></video>
        <img
          class="first-slide"
          v-show="Carousel.imgUrl"
          :src="Carousel.imgUrl"
          alt="First slide"
        />
        <div class="container">
          <div class="carousel-caption">
            <h1>{{ Carousel.title }}</h1>
            <p>{{ Carousel.text }}</p>
            <p>
              <a class="btn btn-default" href="#" role="button">{{
                Carousel.btn
              }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <a
      class="left carousel-control"
      href="#myCarousel"
      role="button"
      data-slide="prev"
    >
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="right carousel-control"
      href="#myCarousel"
      role="button"
      data-slide="next"
    >
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: ["CarouselList"],
};
</script>

<style scoped lang="less">
/* Carousel 轮播图 */
.carousel {
  height: 282px;
  margin-bottom: 25px;
  font-family: lv_2;

  .carousel-inner .item {
    height: 282px;
    background-color: #ffffff;

    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    .container .carousel-caption {
      z-index: 10;

      p a {
        border-radius: 0 100px 0 100px;
        width: 10%;
        border: none;
        color: #000000;
        font-size: xx-small;
        background-color: #ffffff;
      }
    }
  }
}

/* 当浏览器宽度小于768px时 panel b、.navbar-brand、.blank 样式 */
@media screen and (max-width: 768px) {
  .carousel .carousel-inner .item .container .carousel-caption p a {
    width: 28%;
  }
}
</style>
