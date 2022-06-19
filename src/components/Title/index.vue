<template>
  <div class="container-fluid title">
    <b>{{Title}}</b>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["Title"],
};
</script>

<style scoped lang="less">
/* title */
.title {
  margin-top: 0;
  margin-bottom: 25px;
  padding: 5px 52px 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #eae8e4;

  b {
    font-size: 21px;
    color: #000000;
    font-family: lv_2;
  }
}
</style>
