<template>
  <div>
    <h2>我是cpn组件标题</h2>
    <p>我是cpn组件内容</p>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
name: "Cpn",
  data() {
  return {
    name: 'cpn'
  }
  }
}
</script>

<style scoped>

</style>