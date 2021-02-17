const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = WebpackMerge(baseConfig,{
  devServer: {
    // 用于服务的文件夹
    contentBase: './dist',
    // 是否实时监听
    inline: true
  }
})