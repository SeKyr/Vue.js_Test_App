import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import bottomNavigationVue from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalculator, faEye } from '@fortawesome/free-solid-svg-icons';
import NInput from "@/components/NInput.vue";

library.add(faCalculator, faEye);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('n-input', NInput);

app.use(router , bottomNavigationVue);

app.mount('#app');
