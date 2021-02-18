import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 不使用箭头函数
// new Vue({
//   el: '#app',
//   render: function (h) {
//     return h(App)
//   }
// })