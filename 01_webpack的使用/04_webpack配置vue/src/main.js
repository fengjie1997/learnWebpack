// 使用commonJS的模块化规范
const { add, mul } = require('./js/mathUtils.js')
console.log(add(1, 2))
console.log(mul(2, 4))

// es6的模块化
import { age, height } from "./js/info";

console.log(age, height)

// 3 依赖css文件
require('./css/normal.css')

// 4 依赖less文件
require('./css/special.less')

document.writeln('<h2>你好啊李银河</h2>')

// 5 使用vue进行开发
import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App.vue'
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})