// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'

const cpn = {
  template: '<div>{{message}}</div>',
  data(){
    return {
      message: '组件cpn'
    }
  }
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement) {
    // 1 普通用法 createElement('标签', {标签的属性}, [''])
    // return createElement('h2', {class: 'box'}, ['hello world', createElement('button', ['按钮'])])

  //  2 传入组件对象
    return createElement(cpn)
  }
})

// runtime - compiler(v1)
// template -> ast -> render -> v-dom -> UI

// render -> v-dom -> UI
// 性能更高 代码量更少
