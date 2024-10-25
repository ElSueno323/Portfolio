// src/i18nService.ts
import axios from 'axios';

export const loadTranslations = async (lang: string) => {
  const response = await axios.get('/api/translations', {
    headers: {
      'Accept-Language': lang,
    },
  });
  return response.data;
};
