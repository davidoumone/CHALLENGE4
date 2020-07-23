const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const router = require('./routes/index.routes');

const corsOptions = {
  origin: process.env.CLIENT_URL,
  // ajouter exposedHeaders: 'Authorization' ou tableau
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// Donne au front accès au fichiers du dossier public
app.use('/images', express.static('public/images'));
app.use('/videos', express.static('public/videos'));

app.use('/api', router);

// Tests vérification fonctionnement du back : ne pas supprimer
app.get('/api/foo', (req, res) => {
  res.json({ foo: 'bar' });
});
app.get('/api/about', (req, res) => {
  res.json({ foo: 'about' });
});

module.exports = app;