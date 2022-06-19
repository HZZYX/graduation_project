<template>
  <!-- service -->
  <div class="container-fluid service">
    <h3 class="text-center">顾客服务</h3>
    <div class="row">

      <div class="col-lg-4" v-for="floor in FloorList" :key="floor.id">
        <a href="#"><img :src="floor.imgUrl" /></a>
        <p>
          {{floor.title}}
          <br />
          {{floor.text_1}} 
          <br /><a href="lady.html">{{floor.text_2}}</a>
        </p>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeService",
  mounted() {
    this.$store.dispatch("home/HomeFloor");
  },
  computed: {
    ...mapState("home", ["FloorList"]),
  },
};
</script>

<style lang="less" scoped>
/* service 样式 */
.service {
  padding-top: 60px;
  padding-left: 50px;
  padding-right: 50px;

  .row .col-lg-4 {
    margin-top: 30px;

    img {
      width: 100%;
    }

    p {
      margin-top: 20px;
      font-size: 16px;
      line-height: 30px;

      a {
        padding-bottom: 0;
        margin-top: 8px;
        color: #000000;
        text-decoration: none;
        border-bottom: 1px solid #000000;
      }
    }
  }
}
</style>
