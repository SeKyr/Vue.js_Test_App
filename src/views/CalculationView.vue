<script>
import CalculationWidget from "@/components/CalculationWidget.vue";
export default {
  components: {CalculationWidget},
  data() {
    return {
      root: null
    }
  },
  methods: {
    fibonacciAlgorithm(n) {
      const startTime = performance.now();
      this.fib(n);
      const endTime = performance.now();
      return this.elapsedMilliseconds(startTime, endTime);
    },
    fib(n) {
      if (n <= 2) {
        return 1;
      }
      return this.fib(n - 1) + this.fib(n - 2);
    },
    matrixMultiplicationAlgorithm(n) {
      const firstMatrix = Array.from(Array(n), (v1,row) => Array.from(new Array(n), (v2, column) => (row + 1) * (column + 1)));
      const secondMatrix = Array.from(Array(n), (v1,row) => Array.from(new Array(n), (v2, column) => (row + 1) + (column + 1)));
      const resultMatrix = Array.from(Array(n), () => new Array(n));
      const startTime = performance.now();
      for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
          let cell = 0;
          for (let h = 0; h < n; h++) {
            cell += firstMatrix[row][h] * secondMatrix[h][col];
          }
          resultMatrix[row][col] = cell;
        }
      }
      const endTime = performance.now();
      return this.elapsedMilliseconds(startTime, endTime);
    },
    binarySearchTreeAlgorithm (n) {
      const data = Array.from(Array(n), (v,i) => Math.floor((Math.sin(i)-Math.sin(i+1)) * 1000));
      this.root = null;
      const startTime = performance.now();
      for (let element of data) {
        this.insert(element);
      }
      const endTime = performance.now();
      return this.elapsedMilliseconds(startTime, endTime);
    },
    insert(data) {
      let newNode = {
        data : data ,
        left : null ,
        right : null
      };
      if(this.root == null) {
        this.root = newNode;
      } else {
        let current = this.root;
        while (current != null) {
          if(data < current.data) {
            if(current.left != null) {
              current = current.left;
            } else {
              current.left = newNode;
              return;
            }
          } else {
            if(current.right != null) {
              current = current.right;
            } else {
              current.right = newNode;
              return;
            }
          }
        }
      }
    },
    reverseArrayAlgorithm(n) {
      const data = Array.from(Array(n), (v,i) => i);
      const startTime = performance.now();
      this.reverse(data);
      const endTime = performance.now();
      return this.elapsedMilliseconds(startTime, endTime);
    },
    reverse(toReverse) {
      if(toReverse.length === 0) {
        return [];
      }
      const [head , ...tail ] = toReverse ;
      return this.reverse(tail).concat([head]);
    },
    elapsedMilliseconds(startTime, endTime) {
      const executionTime = endTime - startTime;
      return Math.floor(executionTime);
    }
  },
}
</script>

<template>
  <div style="display: flex;flex-direction: column; align-items: center; justify-content: center">
    <calculation-widget name="Fib" :algorithm-implementation="fibonacciAlgorithm"></calculation-widget>
    <calculation-widget name="Matrix" :algorithm-implementation="matrixMultiplicationAlgorithm"></calculation-widget>
    <calculation-widget name="Binary" :algorithm-implementation="binarySearchTreeAlgorithm"></calculation-widget>
    <calculation-widget name="Array" :algorithm-implementation="reverseArrayAlgorithm"></calculation-widget>
  </div>
</template>

<style>
</style>
