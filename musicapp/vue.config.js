// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
// })

module.exports = {
  publicPath:'./',
  pages:{
    index:{
      entry:"src/main.js",
      title:"晨天音乐"
    }
  },
  parallel: false,
}