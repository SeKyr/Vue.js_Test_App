<template>
  <div :style="{display:'flex', justifyContent: 'center', alignItems: 'center', width: width + 'px', height: height + 'px'}">
    <div style="display: flex; flex: 1; justify-content: center; align-items: center; flex-direction: row">
      <div style="display: flex; flex-direction: column" v-for="(column, columnindex) in matrix" v-bind:key="columnindex">
        <template v-for="(row, rowindex) in column" >
          <rotating-square v-if="row" :length="squareSideLength" v-bind:key="rowindex"></rotating-square>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import RotatingSquare from "./RotatingSquare.vue";

export default {
  name: "RotatingSquares",
  components: {RotatingSquare},
  data() {
    return {
      matrix: [[]],
      squareSideLength: null,
      localN: this.n
    }
  },
  methods: {
    getOptimalSideLength() {
      let sizePerSquare = this.width * this.height / this.n;
      let squareSideLength = Math.sqrt(sizePerSquare);
      let smallerSideLength = Math.min(this.height, this.width);
      let biggerSideLength = Math.max(this.height, this.width);
      if (squareSideLength <= smallerSideLength && squareSideLength <= biggerSideLength / this.n) {
        return squareSideLength;
      }
      let rows = 1;
      let smallerSideCellLength = 0;
      let biggerSideCellLength = 0;
      let nextSmallerSideCellLength = 0;
      while (biggerSideCellLength <= nextSmallerSideCellLength) {
        smallerSideCellLength = smallerSideLength / rows;
        biggerSideCellLength = biggerSideLength / Math.ceil(this.n / rows);
        nextSmallerSideCellLength = smallerSideLength / (rows + 1);
        rows++;
      }
      return Math.min(smallerSideCellLength, biggerSideCellLength);
    },
    isNLargerThanZero() {
      if (this.localN > 0) {
        this.localN--;
        return true;
      } else {
        return false;
      }
    }
  },
  props: {
    n: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },
  created() {
    this.squareSideLength = this.getOptimalSideLength();
    this.matrix = Array.from({length: Math.floor(this.width / this.squareSideLength)}, () => Array.from({length: Math.floor(this.height / this.squareSideLength)}, () => {
      return this.isNLargerThanZero();
    }));
  }
}
</script>

<style scoped>

</style>