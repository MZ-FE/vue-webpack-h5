import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import store from '@/store';
import router from '@/router/index';
import './registerServiceWorker';

import 'windi.css';
import '@/styles/index.scss';
import cn from '../locales/zh-CN.json';
import en from '../locales/en.json';

const app = createApp(App);

const i18n = createI18n({
  locale: 'zh-CN',
  messages: {
    en,
    cn,
  },
});
app.use(i18n);
app.use(router).use(store);
app.mount('#app');
