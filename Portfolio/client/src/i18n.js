
import { createI18n } from 'vue-i18n';
import axios from 'axios';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {},
});

async function loadLocaleMessages(locale) {
  if (!i18n.global.availableLocales.includes(locale)) {
    const response = await axios.get(`http://localhost:3000/api/translations/${locale}`);
    i18n.global.setLocaleMessage("msg", response.data);
  }
  i18n.global.locale = locale;
}

export { i18n, loadLocaleMessages };
