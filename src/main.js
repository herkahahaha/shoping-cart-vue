import { createApp } from 'vue';
import { VuelidatePlugin } from '@vuelidate/core';
import App from './App.vue';
import 'normalize.css';

const app = createApp(App);
app.use(VuelidatePlugin);
app.mount('#app');
