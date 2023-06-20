<template>
  <div style="display: flex;flex-direction: row; justify-content: center; align-items: center">
    <p style="width: 50px; margin: 0; height: fit-content">{{this.name}}:</p>
    <n-input v-on:onstart="(n) => onStart(n)"/>
    <p style="width: 100px; margin: 0">{{this.executionTime === null ? null : this.executionTime + 'μs; n = ' + this.n}}</p>
  </div>
</template>

<script>
export default {
  name: "CalculationWidget",
  data() {
    return {
      n: '',
      executionTime: null
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    algorithmImplementation: {
      type: Function,
      required: true
    }
  },
  methods: {
    onStart(n) {
      this.n = n;
      this.executionTime = this.algorithmImplementation(n);
    }
  }
}
</script>

<style scoped>

</style>