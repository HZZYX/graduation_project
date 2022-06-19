const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://39.98.123.211",
        // pathRewrite: { "^/api": "" },
        ws: true,
        changeOrigin: true,
      },
    },
  },
});
