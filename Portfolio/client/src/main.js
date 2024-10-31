import { createApp } from 'vue';
import { i18n, loadLocaleMessages } from './i18n';
import App from './App.vue';
import BootstrapVue3 from 'bootstrap-vue-3';
import router from '@/router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App);

app.use(BootstrapVue3);
app.use(i18n);
app.use(router);

await loadLocaleMessages('en');
app.mount('#app');