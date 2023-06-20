<template>
  <div class="rotate-element" :style="{width: length + 'px', height: length + 'px', }"></div>
</template>

<script>
export default {
  name: "RotatingSquare",
  props: {
    length: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.rotate-element {
  animation: rotate 2s linear infinite;
  background-color: #2196F3FF;
  border: 1px solid black;
  box-sizing: border-box;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>