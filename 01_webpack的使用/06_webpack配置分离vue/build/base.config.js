// 将会去node的path依赖包中
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('./node_modules/vue-loader/lib/plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    // 为了在url前加该路径
    // publicPath: 'dist/'
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归属'),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new UglifyjsWebpackPlugin()
  ],
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
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        }
      }
    ]
  },
  resolve: {
    //  省略后缀
    extensions: ['.js', '.css', '.vue'],
    //  alias: 别名
    alias: {
      // 解决runtime-only的问题
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    // 用于服务的文件夹
    contentBase: './dist',
    // 是否实时监听
    inline: true
  }
}