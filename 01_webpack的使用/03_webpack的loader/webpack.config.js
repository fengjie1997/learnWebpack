// 将会去node的path依赖包中
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 为了在url前加该路径
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader将css文件进行加注
        // style-loader负责将样式添加至dom
        // 使用多个loader，是从右向左
        use: [ 'style-loader', 'css-loader', ]
      },
      {
        test: /\.less$/,
        // css-loader将css文件进行加注
        // style-loader负责将样式添加至dom
        // 使用多个loader，是从右向左
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当图片资源小于limit将会编译成base64的字符串格式。反之则使用file-loader模块进行加载，且以哈希命名
              limit: 1024,
              name: 'image/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        // exclude 排除 include 包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}