<template>
  <div class="content">
    <HomeVideo v-for="video in VideoList" :key="video.id" :video="video" />
    <HomeService/>
  </div>
</template>

<script>
import HomeVideo from "./HomeVideo";
import HomeService from "./HomeService";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    HomeVideo,
	HomeService,
  },
  mounted() {
    //派发action,通过Vuex发起ajax请求，将数据存储在仓库中
    this.$store.dispatch("home/HomeVideo");
  },
  computed: {
    ...mapState("home", ["VideoList"]),
  },
};
</script>

<style scoped lang="less"></style>
