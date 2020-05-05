const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  assetsDir: 'static',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/style/mixin.scss";`
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('/', resolve('public'))
  }
}