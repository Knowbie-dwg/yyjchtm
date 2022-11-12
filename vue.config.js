const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  // open: true,
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  devServer: {
    proxy: {
      '/api': {  //之后就使用/api代指根路径
          target: 'http://124.221.227.68', // 这是根路径
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
      }
    }
  }


}