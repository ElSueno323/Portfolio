import express, { Request, Response } from 'express';
import path from 'path';
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import middleware from 'i18next-http-middleware';
import cors from 'cors';


const app = express();

app.use(cors());

i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
      fallbackLng: 'en', // langue par défaut
      preload: ['en', 'fr'], // langues à précharger
      backend: {
          loadPath: path.join(__dirname, 'languages/{{lng}}.json'), // chemin vers les fichiers de traduction
      },
  });

// Ajout du middleware pour intégrer i18next à Express
app.use(middleware.handle(i18next));



const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'..', 'client','dist')));


app.get('/api/translations/:lng', (req, res) => {
    const {lng} =req.params;
    const ressources = i18next.getDataByLanguage(lng)||{};
    res.json(ressources);
});

// Route d'accueil (pour servir `index.html`)
app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..','client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
