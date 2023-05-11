import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueApexCharts from 'vue3-apexcharts';

import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)
app.use(VueApexCharts);
app.use(createPinia())
app.use(router)

app.mount('#app')
