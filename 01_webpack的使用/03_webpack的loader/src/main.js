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
