<script>
import RotatingSquares from "@/components/RotatingSquares.vue";

export default {
  components: {RotatingSquares},
  data() {
    return {
      n: null,
      width: null,
      height: null
    }
  },
  mounted() {
    this.updateLayout();
    window.addEventListener('resize', this.updateLayout);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateLayout);
  },
  methods: {
    updateLayout() {
      const element = this.$refs.squares;
      const { width, height } = element.getBoundingClientRect();
      this.width = width;
      this.height = height;
      console.log(this.width, this.height);
    },
  },
}
</script>

<template>
  <div ref="squares" style="display: flex; align-items: center; justify-content: center; height: 100%; width: 100%">
    <n-input v-if="n === null" v-on:onstart="(v) => this.n = parseInt(v)"/>
    <rotating-squares v-else :n="n" :width="width" :height="height"></rotating-squares>
  </div>
</template>
