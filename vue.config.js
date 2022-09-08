const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  // chainWebpack: (config) => {
  // },
  // configureWebpack: (config) => {
  //   config.resolve = { // 配置解析别名
  //     extensions: ['.js', '.json', '.vue'],//自动添加后缀
  //     alias: {
  //       '@': path.resolve(__dirname, './src'),
  //       'public': path.resolve(__dirname, './public'),
  //       'components': path.resolve(__dirname, './src/components'),
  //       'common': path.resolve(__dirname, './src/common'),
  //       'api': path.resolve(__dirname, './src/api'),
  //       'views': path.resolve(__dirname, './src/views'),
  //       'data': path.resolve(__dirname, './src/data')
  //     }
  //   };
  // },
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      },
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        // additionalData: `@import "~@/variables.sass"`
        // prependData: `@import "./src/styles/main.scss";`,
        additionalData: `@import"./src/styles/main.scss";`,
      },
    },
  },
});
