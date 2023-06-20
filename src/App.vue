<script>
import {RingBottomNavigation} from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";

export default {
  components: {RingBottomNavigation},
  data: () => ({
    selected: 1,
    options: [
      {id: 1, icon: 'fa-solid fa-eye', title: 'UI-View', path: {name: "ui"}},
      {id: 2, icon: 'fa-solid fa-calculator', title: 'Calculation-View', path: {name: "calculation"}},
    ]
  }),
};
</script>

<template>
  <div id="appBanner"><h1 style="font-weight: 500; font-size: 18px; margin: 16px">Vue.js Test App</h1></div>
  <RouterView style="width: 100%; height: 100%; background-color: rgb(242, 242, 242); z-index: 0"/>
  <RingBottomNavigation border-color='#2196F3FF' title-color='#2196F3FF' badge-color='#2196F3FF'
                        icon-color='#2196F3FF' :options="options" v-model="selected" style="position: unset; z-index: 1; background-color: white">
    <template #icon="{ props }">
      <font-awesome-icon :icon="props.icon"></font-awesome-icon>
    </template>
  </RingBottomNavigation>
</template>

<style scoped>
#appBanner {
  background-color: #2196F3FF;
  width: 100%;
  height: 64px;
  color: white;
  display: flex;
  align-items: center;
  font-size: x-large;
  z-index: 1;
}
</style>
