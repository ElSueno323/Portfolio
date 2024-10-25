import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import BootstrapVue3 from 'bootstrap-vue-3';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App);
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {},
});
app.use(BootstrapVue3);
app.use(i18n)
app.mount('#app');