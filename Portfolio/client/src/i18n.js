
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {},
});

async function loadLocaleMessages(locale) {
  if (!i18n.global.availableLocales.includes(locale)) {
    const res = await import(`@/assets/languages/${locale}.json`);
    const messages = {translation :
         {content :  res.content  }
    };
    i18n.global.setLocaleMessage("msg", messages);
  }
  i18n.global.locale = locale;
}

export { i18n, loadLocaleMessages };
