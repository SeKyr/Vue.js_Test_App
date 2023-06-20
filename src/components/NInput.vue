<template>
  <div style="display: flex; flex-direction: row; justify-content: center; align-items: center">
    <input v-model="n" @input="setN" type="number" placeholder="n" style="width: 50px; margin: 12px; padding: 10px; border-width: 1px; box-sizing: border-box"/>
    <button v-on:click="this.$emit('onstart', n)" id="button">Start</button>
  </div>
</template>

<script>
export default {
  name: "NInput",
  data() {
    return {
      n: ''
    }
  },
  methods: {
    setN(v) {
      this.n = v.target.value.replace(/[^0-9]/g, "");
    }
  },
  emits: ["onstart"]
}
</script>

<style scoped>
#button {
  text-transform: uppercase;
  background-color: #2196F3FF;
  color: white;
  border: unset;
  font-weight: 500;
  font-size: 14px;
  font-family: "Segoe UI", sans-serif;
  padding: 8px;
}
</style>