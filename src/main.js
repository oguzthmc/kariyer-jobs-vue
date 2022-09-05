import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style/app.scss';
import '@/plugins/element';

createApp(App).config.productionTip(false).use(router).mount('#app');
