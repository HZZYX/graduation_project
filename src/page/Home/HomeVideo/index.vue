<template>
  <div class="jumbotron">
    <video
      loop
      autoplay
      muted
      :src="video.videoUrl"
      class="jumbotron_video"
    ></video>
    <div class="jumbotron_text container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6">
          <h2>{{ video.title }}</h2>
          <a href="#" class="jumbotron_a1">{{ video.text_1 }}</a>
          <a href="#">{{ video.text_1 }}</a>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-lg-6_svg">
          <span>
            <img :src="video.imgUrl_1" />
          </span>
          <img :src="video.imgUrl_2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeVideo",
  props: ["video"],
};
</script>

<style scoped lang="less">
.jumbotron {
  height: auto;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: -1px;
  margin-bottom: 0;
  background-color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;

  .jumbotron_video {
    width: 100%;
  }

  .jumbotron_text {
    width: 96%;
    height: 24vh;
    position: absolute;
    bottom: 17vh;
    color: #ffffff;
    font-family: lv;
    overflow: hidden;

    .row .col-lg-6 {
      a {
        color: #ffffff;
        width: 34%;
        height: 45px;
        line-height: 45px;
        margin-top: 18px;
        margin-right: 15px;
        display: inline-block;
        border: 1px solid #ffffff;
        font-size: small;
        text-align: center;
      }

      a.jumbotron_a1 {
        color: #000000;
        background-color: #ffffff;
      }
    }
  }

  .row > .col-lg-6:last-child {
    padding-top: 83px;
    text-align: right;

    span img {
      margin-right: 10px;
    }
  }
}

/* 当浏览器宽度小于768px时 */
@media screen and (max-width: 768px) {
  .jumbotron .jumbotron_text {
    position: absolute;
    bottom: -8vh;

    .row .col-lg-6 a {
      width: 20%;
      height: 25px;
      line-height: 20px;
    }

    h2 {
      font-size: small;
    }
  }
}
</style>
