<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick"></button>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
  name: "App",
  components: {
    Cpn
  },
  data() {
    return {
      message: 'hello webpack'
    }
  },
  methods: {
    btnClick() {
      console.log('az')
    }
  }
}
</script>

<style scoped>
  .title {
    color: green;
  }
</style>