// 使用commonJS的模块化规范
const { add, mul } = require('./js/mathUtils.js')
console.log(add(1, 2))
console.log(mul(2, 4))

// es6的模块化
import { age, height } from "./js/info";

console.log(age, height)