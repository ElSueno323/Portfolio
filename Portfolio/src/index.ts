import express, { Request, Response } from 'express';
import path from 'path';
import i18nextMiddleware from './i18n';
import i18next from 'i18next';

const app = express();


app.use(i18nextMiddleware.handle(i18next))

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'..', 'client','dist')));

// Route d'accueil (pour servir `index.html`)
app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..','client', 'dist', 'index.html'));
});
app.get('/api/translations', (req, res) => {
    res.json(req.i18n.getResourceBundle(req.language, 'translation'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
