// i18n.ts
import i18next from 'i18next';
import i18nextMiddleware from 'i18next-express-middleware';
import Backend from 'i18next-fs-backend';
import path from 'path';

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    debug: true,
    ns: ['languages'],
    defaultNS: 'translation',
    backend: {
      loadPath: path.join(__dirname, '{{ns}}/{{lng}}.json'),
    },
  });

export default i18nextMiddleware;
