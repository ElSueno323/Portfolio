import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import middleware from 'i18next-http-middleware';
import path from 'path';

i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: 'en',
    preload:['en','fr'],
    backend: {
      loadPath: path.join(__dirname, '/languages/{{lng}}.json'),
    },
  });

export default middleware.handle(i18next);
